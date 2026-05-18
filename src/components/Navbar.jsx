// src/components/Navbar.jsx

const Navbar = ({ cambiarSeccion }) => {

  const cerrarSesion = () => {
    alert("Sesión cerrada correctamente")
  }

  const login = () => {
    alert("Bienvenido al Sistema de Matrícula")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

      <div className="container">

        {/* Logo + Título */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />

          Sistema de Matrícula - SENATI
        </a>

        {/* Responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <button
                className="btn nav-link text-white fw-semibold"
                onClick={() => cambiarSeccion("inicio")}
              >
                Inicio
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn nav-link text-white fw-semibold"
                onClick={() => cambiarSeccion("cursos")}
              >
                Cursos
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn nav-link text-white fw-semibold"
                onClick={() => cambiarSeccion("especializaciones")}
              >
                Especializaciones
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn nav-link text-white fw-semibold"
                onClick={() => cambiarSeccion("contactos")}
              >
                Contactos
              </button>
            </li>

          </ul>

          {/* Botones derecha */}
          <div className="d-flex">

            <button
              className="btn btn-outline-light fw-semibold me-2"
              onClick={login}
            >
              Login
            </button>

            <button
              className="btn btn-danger fw-semibold"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar