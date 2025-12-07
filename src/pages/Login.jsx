import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setSuccess("");
      setError("Email and password are required ❌");
      return;
    }

    if(password.length < 6) {
      setSuccess("");
      setError("Password must be at least 6 characters ❌");
      return;
    }

    setError("");
    setEmail("");
    setPassword("");
    setSuccess("Authentication successful ✔️");
    return;
  };

  return (
    <div className="container mt-5" style={{height: '600px'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="mb-4">Login</h3>

          {error && <div className="alert alert-danger py-2">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

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
