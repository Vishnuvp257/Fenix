const Register = () => {
  const handleRegisterClick = () => {
    // Replace 'your-form-link' with the actual link to your form
    const url = "https://forms.gle/9osJRDuKCKD4QJi47";
    window.open(url, '_blank');
  };
  return (
    <div className="Register_container">
      <button className="Register" onClick={handleRegisterClick} >
        Register Now!
      </button>
    </div>
  );
};

export default Register;
