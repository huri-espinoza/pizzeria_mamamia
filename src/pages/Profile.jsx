import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { email } = useContext(AppContext);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2 className="mb-4">Perfil de Usuario</h2>

              <p className="fs-5">
                <strong>Email:</strong> {email}
              </p>

              <button className="btn btn-danger mt-3">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;