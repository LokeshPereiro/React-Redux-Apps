import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import { useForm } from "../../hooks";
import { Loader } from "../../ui";
export const RegisterPage = () => {
  const { displayName, email, password, onInputChange, onResetForm } = useForm({
    displayName: "",
    email: "",
    password: "",
  });
  const { registerProvider, loading } = useContext(AuthContext);

  const handleRegister = async (evt) => {
    evt.preventDefault();
    registerProvider({ displayName, email, password });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="box p-4 loginBox">
          <form onSubmit={handleRegister}>
            <h2 className="text-center">Firebase Register</h2>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Nombre Completo"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />

            <input
              className="form-control mb-3"
              type="text"
              placeholder="correo@correo.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />

            <input
              className="form-control mb-3"
              type="text"
              placeholder="password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <div className="d-grid">
              <button type="submit" className="btn btn-sm btn-success">
                Register
              </button>
            </div>
          </form>
          <div className="mt-2">
            <Link className="singInUp" to="/auth/login">
              <i className="fa-solid fa-user m-1"></i>
              Have an account?
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
