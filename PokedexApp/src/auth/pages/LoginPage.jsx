export const LoginPage = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="correo@correo.com" />
        <input type="text" placeholder="password" />
        <button type="submit" className="btn btn-sm btn-success">
          LogIn
        </button>
        <button type="submit" className="btn btn-sm btn-warning">
          Google
        </button>
      </form>
    </div>
  );
};
