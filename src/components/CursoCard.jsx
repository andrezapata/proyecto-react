const CursoCard = ({ nombre, descripcion, creditos, onEliminar, onEditar }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100" style={{ transition: "0.3s", cursor: "pointer" }}>
        <div className="text-center pt-4">
          <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Curso" width="100" height="100"
            className="rounded-circle border border-3 border-warning shadow" />
        </div>
        <div className="card-body text-center">
          <h4 className="fw-bold text-warning mb-1">{nombre}</h4>
          <p className="text-muted mb-1">{descripcion}</p>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">{creditos} créditos</span>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <button className="btn btn-outline-warning btn-sm rounded-pill px-3" onClick={onEditar}>
              <i className="fas fa-edit me-1"></i>Editar
            </button>
            <button className="btn btn-outline-danger btn-sm rounded-pill px-3" onClick={onEliminar}>
              <i className="fas fa-trash me-1"></i>Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoCard;