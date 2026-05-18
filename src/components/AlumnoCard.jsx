const AlumnoCard = ({
  nombre,
  carrera,
  estado,
  onEliminar,
  onEditar
}) => {

  const badgeColor =
    estado === "Matriculado"
      ? "bg-success"
      : "bg-secondary"

  return (

    <div className="col-md-3 mb-4">

      <div className="card shadow border-0 rounded-4 h-100">

        <div className="card-body">

          <h5 className="text-primary fw-bold">
            {nombre}
          </h5>

          <p className="text-muted">
            {carrera}
          </p>

          <div className="d-flex justify-content-between align-items-center">

            <span className={`badge ${badgeColor} px-3 py-2`}>
              {estado}
            </span>

            <div>

              <button
                className="btn btn-warning btn-sm me-2 fw-semibold"
                onClick={onEditar}
              >
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm fw-semibold"
                onClick={onEliminar}
              >
                Eliminar
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AlumnoCard