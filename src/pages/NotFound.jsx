const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Página no encontrada</p>
      <p>La ruta que estás buscando no existe 🍕</p>

      <a href="/" className="btn btn-dark mt-3">
        Volver al inicio
      </a>
    </div>
  );
};

export default NotFound;