const Register = () => {
  const handleRegisterClick = () => {
    // Replace 'your-form-link' with the actual link to your form
    window.location.href = "https://forms.gle/9osJRDuKCKD4QJi47";
  };
  return (
    <div className="Register_container">
      <button className="Register" onClick={handleRegisterClick}>
        Register Now!
      </button>
    </div>
  );
};

export default Register;
