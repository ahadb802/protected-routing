import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  if (JSON.parse(localStorage.getItem("USER"))===null) {
    const adminData = [
      {
        email: "abdulahadb802@gmail.com",
        password: "123",
        role: "admin",
        name: "ahad",
      },
    ];
    localStorage.setItem("USER", JSON.stringify(adminData));
  }

  localStorage.setItem("loggedin", "false");
  localStorage.removeItem("logedUser");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("USER"));
    const filterData = userData.filter((element) => {
      const storeEmail = element.email;
      const storePass = element.password;
      return storeEmail === email && storePass === password;
    });

    if (filterData.length === 0) {
      alert("Invalid User Does not Exists");
    } else {
      localStorage.setItem("logedUser", JSON.stringify(filterData));
      localStorage.setItem("loggedin", "ture");
      navigate("/dashboard");
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link className="link-primary" to="/signup">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
