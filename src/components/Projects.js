import React from "react";

function Project(props) {
    return (
        <div className="col-sm-4" style={{ marginBottom: "20px" }}>
            <div className="card h-100">
                <img src={props.image} className="card-img-top portfolio-img"
                    alt={props.title} />
                <div className="card-body">
                    <h4 className="card-title project-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                    <hr />
                    <h6 className="card-title">Technologies Used:</h6>
                    <p className="card-text">{props.technology}</p>
                    <hr />
                    <a href={props.gitHubUrl}>GitHub repository</a><br />
                    <a href={props.deployedUrl}>Deployed link</a>
                </div>
            </div>
        </div>
    );
}

export default Project;
