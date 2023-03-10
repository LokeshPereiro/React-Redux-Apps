import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthContext } from "../context";
import google from "../../assets/google.png";
export const LoginPage = () => {
  const { loginProvider, registerWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, password, formState, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const handleLogIn = (evt) => {
    evt.preventDefault();
    loginProvider({ email, password });
    navigate("/");
  };

  const handleGoogleLogIn = () => {
    registerWithGoogle();
    navigate("/");
  };

  return (
    <div className="p-4 box">
      <h2 className="text-center">Firebase Login</h2>
      <form onSubmit={handleLogIn}>
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
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-sm btn-secondary">
            LogIn
          </button>
          <button
            onClick={handleGoogleLogIn}
            type="submit"
            className="btn btn-sm btn-warning"
          >
            SignIn{" "}
            <img style={{ width: "20px" }} src={google} alt="google logo" />
          </button>
        </div>
      </form>
      <div className="mt-2">
        <Link to="/auth/register">Create Account?</Link>
      </div>
    </div>
  );
};
