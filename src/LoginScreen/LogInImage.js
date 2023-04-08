function LogInImage() {
  return (
    <div className="col-md-6 col-lg-7 d-none d-md-block">
      <img
        src={require("../images/logInImage.png")}
        alt="login form"
        className="img-fluid h-100"
        style={{ borderRadius: "1rem 0 0 1rem" }}
      />
    </div>
  );
}
export default LogInImage;
