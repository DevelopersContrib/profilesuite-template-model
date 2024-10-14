export default function Navigation({ domain }) {
  return (
    <section className="navigation-bg py-4">
      <div className="container text-white">
        <a href="/" className="text-white mx-2">Home</a>
        <a href="/blog" className="text-white mx-2">Blog</a>
        <a href="/events" className="text-white mx-2">Events</a>
      </div>
    </section>
  );
}
