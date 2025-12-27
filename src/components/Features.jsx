export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h3>Why jsonwave?</h3>

        <div className="feature-grid">
          {[
            ["🚀 Fast & Free", "No signup required. Start testing instantly."],
            ["🧩 Realistic Data", "Posts, users, comments, likes, and tags."],
            ["📦 REST Standards", "Clean endpoints following REST best practices."],
            ["📱 Frontend Friendly", "Perfect for React, Flutter, Android & iOS apps."]
          ].map(([title, desc]) => (
            <div className="feature-card" key={title}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
