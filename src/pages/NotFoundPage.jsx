import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section page-shell empty-state not-found">
      <p className="eyebrow">404</p>
      <h1>Halaman tidak ditemukan</h1>
      <p>Alamat yang dibuka tidak cocok dengan halaman portfolio.</p>
      <Link to="/" className="primary-button">Kembali ke Home</Link>
    </section>
  );
}

export default NotFoundPage;
