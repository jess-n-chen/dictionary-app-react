import React from "react";

export default function Photos(props) {
  if (props.data && props.data.length) {
    return (
      <div className="Photos row">
        {props.data.map(function (photo, index) {
          return (
            <div className="col-4" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid img-thumbnail mb-3"
                  alt={photo.photographer}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
