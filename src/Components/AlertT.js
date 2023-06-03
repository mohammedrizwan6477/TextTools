import React from "react";

export const AlertT = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return (lower = word.charAt(0).toUpperCase() + lower.slice(1));
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:{" "}
        <strong>{props.alert.msg}</strong>
      </div>
    )
  );
};
