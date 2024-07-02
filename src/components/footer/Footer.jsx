import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  const style1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px"
  }

  const style2 = {
    background: "rgba(255, 255, 255, 0.5)",
    padding: "5px",
    borderRadius: "10px",
    textAlign: "center"
  }

  return (
    <div style={style1}>
      <p style={style2}>
        &copy; {year} Simply Weather | Developed by Sai Harshith Kalithkar
      </p>
    </div>
  );
}

export default Footer;
