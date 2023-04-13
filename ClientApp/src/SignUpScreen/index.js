import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpImage from "./SignUpImage";
function SignUp() {
  return (
    <section
      className="vh-100 h-100 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center text-center h-100">
          <div className="col col-xl-12">
            <div className="card card-registration mt-4 h-100">
              <div className="row">
                <SignUpImage />
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
