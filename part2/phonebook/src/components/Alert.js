import React, { useEffect } from "react";

const Alert = ({ timeoutFunc, id, type, message }) => {
  const alertTypes = {
    error: "alert__error",
    success: "alert__success",
    info: "alert__info",
  };

  if (!alertTypes[type]) throw new Error("Invalid Alert Type");

  const removeAlert = () => timeoutFunc(id);

  useEffect(() => {
    setTimeout(removeAlert, 3000);
  });

  return (
    <div className={`alert ${alertTypes[type]}`}>
      <span className="alert__txt">{message}</span>
    </div>
  );
};

export default Alert;