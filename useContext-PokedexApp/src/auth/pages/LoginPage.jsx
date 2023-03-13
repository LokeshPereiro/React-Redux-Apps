import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { useForm } from "../../hooks";
import { google } from "../../assets/images";
import { Loader } from "../../ui";

export const LoginPage = () => {
  const { loginProvider, registerWithGoogle, loading, errorMsg } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  // Standard Login
  const handleLogIn = (evt) => {
    evt.preventDefault();
    loginProvider({ email, password });
    navigate("/");
  };

  // Google singup
  const handleGoogleLogIn = () => {
    registerWithGoogle();
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-4 box loginBox">
          <h2 className="text-center">Firebase Login</h2>

          {errorMsg && (
            <h6 className="alert alert-danger text-center p-1">
              Wrong email or password
            </h6>
          )}

          <form onSubmit={handleLogIn}>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="abc123@gmail.com"
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
                <img style={{ width: "20px" }} src={google} alt="google logo" />{" "}
                SignIn
              </button>
            </div>
          </form>
          <div className="mt-2">
            <Link className="singInUp" to="/auth/register">
              <i className="fas fa-sign-in m-1"></i>Create Account?
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
