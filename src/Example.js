import React from "react";

export default function Example(props) {
  if (props.data) {
    return <p className="example ms-3">ex: {props.data}</p>;
  } else {
    return null;
  }
}
