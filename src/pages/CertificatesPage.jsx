import { certificates } from '../data/portfolio.js';

function CertificatesPage() {
  return (
    <section className="section page-shell collection-page">
      <div className="section-heading">
        <p className="eyebrow">LEARNING JOURNEY</p>
        <h1 className="section-title">My <span>Certificates</span></h1>
        <p className="section-description">Sertifikat dan pencapaian pembelajaran yang telah diselesaikan.</p>
      </div>
      {certificates.length ? (
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.name}>
              {certificate.image
                ? <img src={certificate.image} alt={`Sertifikat ${certificate.name}`} />
                : <div className="certificate-placeholder" aria-hidden="true">CERTIFICATE</div>}
              <div className="certificate-details">
                <h2>{certificate.name}</h2>
                <p>{certificate.issuer}</p>
                <span>{certificate.date}</span>
                {certificate.credentialUrl && <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">Lihat credential ↗</a>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-mark" aria-hidden="true">✳</span>
          <h2>Sertifikat belum ditambahkan</h2>
          <p>Sertifikat yang sudah tersedia akan ditampilkan di halaman ini.</p>
        </div>
      )}
    </section>
  );
}

export default CertificatesPage;
