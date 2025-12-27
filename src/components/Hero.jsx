import Badges from "./Badges";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>Free Mock REST API for Developers</h2>
        <p>
          jsonwave provides realistic dummy data for testing and prototyping
          frontend and mobile applications.
        </p>

        <Badges/>

        <div className="hero-buttons">
          <a href="#endpoints" className="btn primary">View Endpoints</a>
          <a href="https://github.com/mayurpawar17/json-wave.git" className="btn secondary">GitHub</a>
        </div>

        <div className="api-box">
          <code>GET https://jsonwave-8b5m.onrender.com/api/v1/posts</code>
        </div>
      </div>
    </section>
  );
}
