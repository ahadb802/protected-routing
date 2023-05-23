import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyPassword } from "../../helper";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  sessionStorage.clear("login")
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = verifyPassword({ email, password });
    userData.then((res) => {
      sessionStorage.setItem("User",JSON.stringify(res));
      sessionStorage.setItem("login","true");
      navigate("/dashboard")
    }).catch(error=>{console.error(error)})
  

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
