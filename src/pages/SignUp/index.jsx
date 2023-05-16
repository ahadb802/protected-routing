import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  localStorage.setItem("loggedin", "false");
  localStorage.removeItem("logedUser");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("USER"));
    const filterData = userData.filter((element) => {
      const storeEmail = element.email;
      return storeEmail === email;
    });

    if (filterData.length === 0) {
      const signUpData = {
        email: email,
        password: password,
        role: "user",
        name: name,
      };

      const userData = JSON.parse(localStorage.getItem("USER"));
      const newData = [...userData, signUpData];
      localStorage.setItem("USER", JSON.stringify(newData));
      localStorage.setItem("logedUser", JSON.stringify(signUpData));
      localStorage.setItem("loggedin", "ture");
      navigate("/login");
    } else {
      alert("User Already Exists");
    }
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered yet?{" "}
            <Link className="link-primary" to="/login">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default signup;
