import React from "react";

function Homepage() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="row py-lg-5 border-bottom">
            <div className="col-lg-6 col-md-8 mx-auto justify-content-center text-center">
              <h2 className="fw-light m-1"></h2>
              {/* <!-- HERO --> */}
              <section className="hero">
                <div className="hero-cta">
                  <h3>A Genuine Smile Is Human Nature.</h3> <br></br>
                  <p className="text-justify">
                    Hello there! I am{" "}
                    <span className="callmethis">Nell-e Medina</span>, a
                    beginner coder with a mission of reaching out to other
                    coders out there to build an application that could bring
                    the world together. I am always willing to learn new things,
                    new skills and new knowledge in order to share it with
                    others and encourage others to contribute to a more ethical
                    and secure coding experience.
                  </p>
                </div>
              </section>
              {/* <!-- HERO END --> */}
              <input
                type="text"
                className="form-control m-1"
                placeholder="Project Name"
              ></input>
              <button type="button" className="btn btn-outline-secondary m-1">
                Search
              </button>
            </div>
          </div>

          {/* <!-- hauskeepr cards -->*/}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header">Run Buddy</div>
                <img
                  src="./images/runbuddy.JPG"
                  alt="runbuddy website with a yellow and green background"
                  onClick="window.open('https://nellirism.github.io/runbuddy/', '_blank');"
                />
                <div className="card-body text-success text-center">
                  <h5 className="card-title">Health & Fitness</h5>
                  <h6 className="card-subtitle text-secondary mb-2">
                    Completion Date: March 2021
                  </h6>
                  <button type="button" className="btn btn-success btn-sm">
                    <a
                      href="https://nellirism.github.io/runbuddy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header">Horiseon Marketing</div>
                <img
                  src="./images/horiseon.JPG"
                  alt="horiseon website with 4 people in the background"
                  onClick="window.open('https://nellirism.github.io/cerebreo-code/', '_blank');"
                />
                <div className="card-body text-success text-center">
                  <h5 className="card-title">Social Media & Marketing</h5>
                  <h6 className="card-subtitle text-secondary mb-2">
                    Completion Date: March 2021
                  </h6>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick="window.open('https://nellirism.github.io/cerebreo-code/', '_blank');"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header">GJerenuk Password Generator</div>
                <img
                  src="./images/gjerenuk.jpg"
                  alt="homepage of the password generator app"
                  onClick="window.open('https://nellirism.github.io/gjerenuk/', '_blank');"
                />
                <div className="card-body text-success text-center">
                  <h5 className="card-title">Password Generator</h5>
                  <h6 className="card-subtitle text-secondary mb-2">
                    Completion Date: April 11 2021
                  </h6>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick="window.open('https://nellirism.github.io/gjerenuk/', '_blank');"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header">Project Aqua Nauticus (PAN)</div>
                <img
                  src="./images/proejctaquanauticus.JPG"
                  alt="Blue heading with a search bar and a search button to enter city"
                  onClick="window.open('https://patricklago21.github.io/ucberk-project-1/', '_blank');"
                />
                <div className="card-body text-success text-center">
                  <h5 className="card-title">Marine Health Application</h5>
                  <h6 className="card-subtitle text-secondary mb-2">
                    Completion Date: May 9 2021
                  </h6>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick="window.open('https://patricklago21.github.io/ucberk-project-1/', '_blank');"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className=" card-header ">Stenographist Note Taker</div>
                <img
                  src="./images/stenographist.jpg "
                  alt="homepage of the password generator app "
                  onClick="window.open( 'https://nelle898steno.herokuapp.com/', '_blank'); "
                />
                <div className="card-body text-success text-center ">
                  <h5 className="card-title ">Basic Note Taker</h5>
                  <h6 className="card-subtitle text-secondary mb-2 ">
                    Completion Date: June 6 2021
                  </h6>
                  <button
                    type="button "
                    className="btn btn-success btn-sm "
                    onClick="window.open( 'https://nelle898steno.herokuapp.com/', '_blank'); "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header ">hausKeepr</div>
                <img
                  src="./images/bookhauskeepr.png"
                  alt="A male and a female holding cleaning tools "
                  onClick="window.open( 'https://hauskeepr-mvp.herokuapp.com/', '_blank'); "
                />
                <div className="card-body text-success text-center ">
                  <h5 className="card-title ">Housekeeper Community </h5>
                  <h6 className="card-subtitle text-secondary mb-2 ">
                    Completion Date: July 4 2021
                  </h6>
                  <button
                    type="button "
                    className="btn btn-success btn-sm "
                    onClick="window.open( 'https://hauskeepr-mvp.herokuapp.com/', '_blank'); "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-3 mt-3 h-100">
                <div className="card-header ">Project Three</div>
                <img
                  src="./images/comingsoonred.jpg "
                  className="img-rounded "
                  alt="A male and a female holding cleaning tools "
                  onClick="window.open( 'https://hauskeepr-mvp.herokuapp.com/', '_blank'); "
                />
                <div className="card-body text-success text-center ">
                  <h5 className="card-title ">Coming Very Soon</h5>
                  <h6 className="card-subtitle text-secondary mb-2 ">
                    Completion Date: XX 2021
                  </h6>
                  <button
                    type="button "
                    className="btn btn-success btn-sm "
                    onClick="window.open( 'https://hauskeepr-mvp.herokuapp.com/', '_blank'); "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="card border-success mb-2 mt-3 h-100">
                <div className="card-header ">Project Four</div>
                <img
                  src="./images/comingsoonorange.jpg "
                  className="card-img-top img-rounded "
                  alt="A male and a female holding cleaning tools "
                  onClick="window.open( 'https://hauskeepr-mvp.herokuapp.com/', '_blank'); "
                />

                <div className="card-body text-success text-center ">
                  <h5 className="card-title ">Coming Very Soon</h5>
                  <h6 className="card-subtitle text-secondary mb-2 ">
                    Completion Date: XX 2021
                  </h6>
                  <button type="button " className="btn btn-success btn-sm ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
