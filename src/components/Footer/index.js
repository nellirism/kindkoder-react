import React from "react";

function Footer() {
  return (
    <footer className="navbar text-success align-items-center border-top ">
      <div className="container-fluid justify-content-center mt-5 ">
        <h6 className=" ">&#128155; Designed by: &copy; Kind Koder </h6>
      </div>

      <div className="container justify-content-center text-dark ">
        <div className="mx-2 ">
          <p>
            <a href="story.html ">About Me</a>
          </p>
        </div>
        <div className="mx-2 ">
          <p>
            <a href="contact.html ">Contact Me</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
