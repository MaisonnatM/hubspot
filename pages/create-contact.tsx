import Layout from "../components/layout";

export default function ApiExamplePage() {
  return (
    <Layout>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>HubSpot Contacts API</h2>
      <p>/api/examples/contacts-api</p>
      <iframe src="/api/examples/contacts-api" />
    </Layout>
  );
}
