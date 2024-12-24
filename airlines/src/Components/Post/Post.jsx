function Post({ jobTitle, jobDescription, jobUpdated, jobImages }) {
  return (
    <>
      {/* This is a Gound Handling */}
      <div className="card mb-3">
        <img src={jobImages} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="Gound Handling">{jobTitle}</h5>
          <p className="card-text">{jobDescription}</p>
          <p className="card-text">
            <small className="text-body-secondary">{jobUpdated}</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
