import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="page-shell section not-found-page">
      <p className="eyebrow">// ERROR 404</p>
      <h1>Route not found<span>.</span></h1>
      <p>The requested page is not available in this portfolio.</p>
      <Link to="/" className="primary-button">Return home <span aria-hidden="true">&rarr;</span></Link>
    </section>
  );
}

export default NotFoundPage;
