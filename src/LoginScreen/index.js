import LogInImage from "./LogInImage";
import LogInForm from "./LogInForm";

function LogIn() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#111111" }}>
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-12">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <LogInImage />
                <LogInForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
