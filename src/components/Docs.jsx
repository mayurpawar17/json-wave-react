export default function Docs() {
  return (
    <section className="features" id="docs">
      <div className="container">
        <h3>Documentation</h3>

        <h4>Base URL</h4>
        <code className="api-box">
          https://jsonwave.onrender.com/api/v1
        </code>

        <h4>Fetch Posts</h4>
        <pre className="api-box">
{`fetch('/posts')
  .then(res => res.json())
  .then(data => console.log(data));`}
        </pre>

        <h4>CRUD Support</h4>
        <ul>
          <li>GET – Read data</li>
          <li>POST – Create new data</li>
          <li>PUT / PATCH – Update</li>
          <li>DELETE – Remove</li>
        </ul>

        <h4>Query Support</h4>
        <code className="api-box">
          /posts?_page=1&_limit=5
        </code>
      </div>
    </section>
  );
}
