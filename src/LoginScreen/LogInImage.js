function LogInImage() {
  return (
    <div className="col-xl-7 d-none d-xl-block">
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
