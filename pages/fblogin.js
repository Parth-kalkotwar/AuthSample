import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { sign, verify } from "jsonwebtoken";
import { secret } from "../auth/secret";
import cookie from "cookie";
import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
  NextPageContext,
} from "next";

import Router from "next/router";

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.authenticated,
      name: "",
      picture: "",
    };
  }

  responseFacebook = async (response) => {
    console.log(response.name, response.id);
    if (response.status !== "unknown") {
      const data = {
        name: response.name,
        email: response.id,
        sm: "fb",
      };
      const resp = fetch("http://localhost:3000/api/assignToken", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const create = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const user = await create.json();
      const { pathname } = Router;
      if (pathname == "/fblogin") {
        const url = "/" + user.id;
        Router.push(url);
      }
      //console.log(resp);
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url,
      });
    }
  };

  componentClicked = () => {
    console.log("Facebook btn clicked");
  };

  render() {
    let facebookData;
    this.state.auth
      ? (facebookData = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
              color: "#000",
            }}
          >
            <h2>Welcome!</h2>
          </div>
        ))
      : (facebookData = (
          <FacebookLogin
            appId="3203560766334121"
            autoLoad={true}
            fields="name,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        ));

    return <>{facebookData}</>;
  }
}

export async function getServerSideProps(ctx) {
  let authenticated = false;
  if (
    ctx.req.headers.cookie === undefined ||
    !cookie.parse(ctx.req.headers.cookie).fb
  ) {
    authenticated = false;
  } else {
    const cookies = cookie.parse(ctx.req.headers.cookie);
    verify(cookies.auth, secret, async function (err, decoded) {
      if (!err && decoded) {
        authenticated = true;
      }
    });
  }

  return {
    props: { authenticated },
  };
}
