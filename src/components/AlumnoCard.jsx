import { useState } from "react";

const AlumnoCard = ({
  nombre,
  carrera,
  estadoInicial,
  onEliminar,
  onEditar
}) => {

  const [estado, setEstado] = useState(estadoInicial);

  const badgeColor =
    estado === "Matriculado"
      ? "bg-success"
      : "bg-secondary";

  const cambiarEstado = () => {
    if (estado === "Matriculado") {
      setEstado("Inactivo");
    } else {
      setEstado("Matriculado");
    }
  };

  return (
    <div className="col-md-4 mb-4">

      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden h-100"
        style={{
          transition: "0.3s",
          cursor: "pointer"
        }}
      >

        {/* Imagen */}
        <div className="text-center pt-4">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Alumno"
            width="100"
            height="100"
            className="rounded-circle border border-3 border-primary shadow"
          />

        </div>

        {/* Body */}
        <div className="card-body text-center">

          <h4 className="fw-bold text-primary mb-1">
            {nombre}
          </h4>

          <p className="text-muted mb-3">
            {carrera}
          </p>

          {/* Estado */}
          <span
            className={`badge ${badgeColor} px-4 py-2 rounded-pill mb-4`}
          >
            {estado}
          </span>

          {/* Botones */}
          <div className="d-flex justify-content-center gap-2 flex-wrap">

            <button
              className="btn btn-outline-success btn-sm rounded-pill px-3"
              onClick={cambiarEstado}
            >
              <i className="fas fa-sync-alt me-1"></i>
              Estado
            </button>

            <button
              className="btn btn-outline-warning btn-sm rounded-pill px-3"
              onClick={onEditar}
            >
              <i className="fas fa-edit me-1"></i>
              Editar
            </button>

            <button
              className="btn btn-outline-danger btn-sm rounded-pill px-3"
              onClick={onEliminar}
            >
              <i className="fas fa-trash me-1"></i>
              Eliminar
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;