import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthContext } from "../context";

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    onResetForm,
  } = useForm({
    displayName: "",
    email: "",
    password: "",
  });
  const { registerProvider } = useContext(AuthContext);

  const handleRegister = async (evt) => {
    evt.preventDefault();
    // const { displayName, email, password } = formState;
    registerProvider({ displayName, email, password });
  };
  return (
    <div className="box p-4">
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
        <Link to="/auth/login">Have an account?</Link>
      </div>
    </div>
  );
};
