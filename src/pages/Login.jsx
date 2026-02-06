import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, setError, login} = useContext(SessionContext);

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Email and password are required ❌");
      return;
    }

    if(password.length < 6) {
      setError("Password must be at least 6 characters ❌");
      return;
    }

    login(email, password);
  };

  return (
    <div className="container mt-5" style={{height: '600px'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="mb-4">Login</h3>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="button" onClick={handleSubmit} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
