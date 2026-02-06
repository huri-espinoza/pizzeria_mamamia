import { useContext, useState } from "react";
import { SessionContext } from "../context/SessionContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {error, setError, register} = useContext(SessionContext);

  const handleSubmit = () => {
    setError(null);

    if (!email || !password || !confirmPassword) {
      setError("All fields are required ❌");
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match ❌");
      return;
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      setError(
        "Password and Confirm Password must be at least 6 characters ❌"
      );
      return;
    }

    register(email, password);
  };

  return (
    <div className="container mt-5" style={{ height: "600px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="mb-4">Register</h3>
          {error && <div className="alert alert-danger">{error}</div>}
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

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
