export default function Project({ imageUrl, title, link, repoLink, description }) {
  return (
    <div className="card card-width">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body custom-card-body">
        <div className="card-body-top-row">
          <h4 className="card-title">{title}</h4>
          <a href={repoLink}>
            <img src="/github_wt_icon.png" className="project-icon" alt="GitHub" />
          </a>
        </div>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary custom-btn">Give it a try</a>
      </div>
    </div>
  );
}