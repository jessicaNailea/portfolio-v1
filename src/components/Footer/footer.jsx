import React from "react";
import "./footer.scss";

const Footer = (props) => {
  const { data } = props;
  console.log(data.contact);
  return (
    <div className="footer-container">
      <div>
        <h1 className="footer-title">Contact me</h1>
        <ul>
          <li>
            <p>{`E-mail: ${data.contact ? data.contact.email : ""}`}</p>
          </li>
          <li>
            <p>
              Linkedin:{" "}
              <a
                href={data.contact ? data.contact.linkedin : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact ? data.contact.linkedin : ""}
              </a>
            </p>
          </li>
          <li>
            <p>
              Github:{" "}
              <a
                href={data.contact ? data.contact.github : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact ? data.contact.github : ""}
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="footer-title">Projects</h1>
        <h5>Check my apps just for fun!</h5>
        <ul>
          <li>
            <p>React:</p>
            {data.projects.data
              ? data.projects.data.map((project, idx) => {
                  return (
                    <p>
                      <a
                        key={idx}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.projectName}
                      </a>
                    </p>
                  );
                })
              : ""}
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
