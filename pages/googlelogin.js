import { GoogleLogin } from "react-google-login";
import React, { Component } from "react";
import { sign, verify } from "jsonwebtoken";
import cookie from "cookie";
import { secret } from "../auth/secret";
import Router from "next/router";
import Link from "next/link";
import { Typography } from "@material-ui/core";

export default class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.authenticated,
      name: "",
      picture: "",
    };
  }

  responseGoogle = async (response) => {
    if (response.status !== "unknown") {
      console.log(response);
      const data = {
        email: response.profileObj.email,
        name: response.profileObj.name,
        sm: "google",
      };
      //console.log(data);
      const resp = fetch("http://localhost:3000/api/assignToken", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const create = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const user = await create.json();
      console.log(resp);
      const { pathname } = Router;
      if (pathname == "/googlelogin") {
        const url = "/" + user.id;
        Router.push(url);
      }
      this.setState({
        auth: true,
        name: response.profileObj.givenName,
      });
    }
  };

  componentClicked = () => {
    //console.log("Google btn clicked");
  };

  render() {
    let googleData;
    this.state.auth
      ? (googleData = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
              color: "#000",
            }}
          >
            <Typography variant="h1">Redirecting</Typography>
          </div>
        ))
      : (googleData = (
          <GoogleLogin
            clientId="723638828873-i1ohqhdrcu5ta01u3m6r2mjr2mfs30aa.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        ));

    return <>{googleData}</>;
  }
}

export async function getServerSideProps(ctx) {
  let authenticated = false;
  if (
    ctx.req.headers.cookie === undefined ||
    !cookie.parse(ctx.req.headers.cookie).google
  ) {
    authenticated = false;
  } else {
    const cookies = cookie.parse(ctx.req.headers.cookie);
    verify(cookies.google, secret, async function (err, decoded) {
      if (!err && decoded) {
        authenticated = true;
      }
    });
  }

  return {
    props: { authenticated },
  };
}
