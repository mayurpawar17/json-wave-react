export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box">
          <h3>Start Building Faster</h3>
          <p>
            Use jsonwave to prototype your app instantly — no backend setup,
            no signup, always free.
          </p>

          <div className="cta-actions">
            <a
              href="https://jsonwave-8b5m.onrender.com/api/v1/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn cta-primary"
            >
              Try Live API
            </a>

            <a
              href="#docs"
              className="btn cta-secondary"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
