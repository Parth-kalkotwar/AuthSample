import Link from "next/link";

export default function Person({ prop }) {
  const event = new Date(prop[0].created_at);
  let created_at = event.toTimeString();
  created_at = created_at.split(" ");

  const logout = () => {
    const cookies = document.cookie.split(";");
    console.log(cookies);
  };
  return (
    <h1>
      Welcome {prop[0].name}
      <br />
      Started At : {created_at[0]}
      <button onClick={logout}>Logout</button>
    </h1>
  );
}

Person.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const result = await fetch("http://localhost:3000/api/" + ctx.query.id);
  const data = await result.json();
  return { prop: data };
};
