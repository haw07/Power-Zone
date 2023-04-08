import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpImage from "./SignUpImage";

function SignUp() {
  return (
    <section className="h-100 bg-dark">
      <div className="container p-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 text-center">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
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
