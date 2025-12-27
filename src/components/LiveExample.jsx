import { useEffect, useState } from "react";

export default function LiveExample() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonwave-8b5m.onrender.com/api/v1/posts/1")
      .then(res => res.json())
      .then(setPost);
  }, []);

  return (
    <section className="features">
      <div className="container">
        <h3>Live API Example</h3>
        <p>Real response fetched from jsonwave</p>

        <pre className="api-box">
{JSON.stringify(post, null, 2)}
        </pre>
      </div>
    </section>
  );
}
