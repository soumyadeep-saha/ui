import React from "react";

export default function Alert(props) {
  const capitalize = (alertType) => {
    let text = alertType.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.alertType} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.alertType)}</strong>:{" "}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
