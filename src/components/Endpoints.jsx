export default function Endpoints() {
  return (
    <section className="endpoints" id="endpoints">
      <div className="container">
        <h3>Available Resources</h3>
        <div className="endpoint-list">
          {["/posts", "/users", "/comments", "/likes", "/tags"].map(e => (
            <span key={e}>{e}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
