import React, { useState } from "react";
import Data from "./Api";

function Comments({ curElemcoms }) {
  const [comments] = useState(Data);

  return (
    <div className="CommentsCards m-2 m-md-5 bgprimay bg-opacity-6 rounded-3 p-3">
      <h2 className="fw-bold text-center text-primary">
        A Software Engineer’s <br /> Best kept Secret
      </h2>
      <p className="text-center fs-6 text-secondary-emphasis">
        Our courses have helped thousands of <br /> engineers, get their dream
        job at their dream companies.
      </p>

      <div
        className="row row-cols-md-2 row-cols-xl-3 d-md-flex m-1 justify-content-center m-md-3 overflow-y-scroll overflow-hidden"
        style={{ height: "600px" }}
      >
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function Comment({ comment }) {
  const { id, name, bio, image, description } = comment;

  return (
    <div key={id} className="card mt-3 p-0 col-md-5 mx-4">
      <div className="card-body">
        <div className="d-flex row row-cols-2">
          <img
            src={image}
            className="img-fluid rounded-start-circle rounded-end-circle col-3"
            alt="img"
          />
          <div className="card-title fs-4 fw-bold col-9">
            {name}
            <p className="card-subtitle cmtcardbio mb-2 text-body-secondary">
              {bio}
            </p>
          </div>
        </div>

        <div className="card-text mt-2">
          <p>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <i className="bi bi-star-fill text-warning"></i>
          </p>
          {description}
        </div>
      </div>
    </div>
  );
}

export default Comments;
