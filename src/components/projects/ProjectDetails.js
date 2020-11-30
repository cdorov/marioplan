import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            maxime sunt quas veniam, natus architecto facilis dolorum magnam
            veritatis sequi odio nisi commodi fugiat perspiciatis cumque, ea
            ipsam numquam ad.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Roman</div>
          <div>30th November, 6pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
