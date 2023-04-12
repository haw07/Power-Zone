import "./style.css";
function Profile() {
  return (
    <section className="bg-dark h-100">
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src="https://github.com/mdo.png"
                  alt="avatar"
                  class="rounded-circle img-fluid m-auto"
                  style={{ width: "150px" }}
                />
                <h5 class="my-3 text-black fw-bold">John Smith</h5>
                <p class="text-black mb-4 fw-bold">
                  Bay Area, San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0" style={{ color: "#f36100" }}>
                      Johnatan Smith
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0" style={{ color: "#f36100" }}>
                      example@example.com
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0" style={{ color: "#f36100" }}>
                      (097) 234-5678
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0 text-black fw-bold">Gender</p>
                  </div>
                  <div class="col-sm-9 ">
                    <p class="mb-0" style={{ color: "#f36100" }}>
                      Male
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3 ">
                    <p class="mb-0 text-black fw-bold">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="mb-0" style={{ color: "#f36100" }}>
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-black font-italic me-1 fw-bold">
                        Assesment
                      </span>{" "}
                    </p>
                    <p
                      class="mb-1 fw-bold"
                      style={{ fontSize: ".77rem", color: "#f36100" }}
                    >
                      Progress
                    </p>
                    <div
                      class=" rounded"
                      style={{ height: "5px", color: "#f36100" }}
                    >
                      <progress
                        min="0"
                        max="100"
                        value="80"
                        style={{ backgroundColor: "#f36100" }}
                        className="w-100 mb-5"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
