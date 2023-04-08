function SignUpImage() {
  return (
    <div className="col-xl-7 d-none d-xl-block">
      <img
        src={require("../images/gallery/gallery-6.jpg")}
        alt="Sample photo"
        className="img-fluid d-block h-100"
        style={{
          borderTopLeftRadius: ".25rem",
          borderBottomLeftRadius: ".25rem",
        }}
      />
    </div>
  );
}
export default SignUpImage;
