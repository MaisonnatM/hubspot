import Layout from "../components/layout";

const jwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTkzOTc1MTksImV4cCI6MTY5MDkzMzUxOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.lzq_i1GjY3Nza6vTqHhEdnqMRohydAyy6G5Q5bGZz5E";
const redirect_url =
  "https://app.hubspot.com/settings/3967898/content-membership/www.onlinefitnesslab.com/sso";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Demo HubSpot App Using NextAuth.js</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication
        with HubSpot oAuth and to make API Calls to HubSpots API.
      </p>
      <ul>
        <li>
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
      </ul>
    </Layout>
  );
}
