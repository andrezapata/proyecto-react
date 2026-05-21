import { useState } from 'react';

const CursoForm = ({ recargarCursos }) => {
  const [formulario, setFormulario] = useState({
    nombre_curso: '',
    descripcion: '',
    creditos: '',
  });
  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/cursos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formulario)
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        setFormulario({ nombre_curso: '', descripcion: '', creditos: '' });
        recargarCursos();
      } else {
        alert('Error al guardar.');
        console.log(datos.errors);
      }
    } catch  {
      alert('No se pudo conectar con el servidor de Laravel.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 mb-5">
      <div className="card-header border-0 rounded-top-4 py-3 px-4"
        style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)' }}>
        <div className="d-flex align-items-center gap-2">
          <i className="fas fa-book text-white fs-5"></i>
          <h5 className="mb-0 text-white fw-bold">Registrar Nuevo Curso</h5>
        </div>
      </div>
      <div className="card-body p-4">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold text-secondary small">Nombre del Curso</label>
              <input type="text" className="form-control rounded-3" name="nombre_curso"
                placeholder="Ej: Matemáticas I" value={formulario.nombre_curso} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">Créditos</label>
              <input type="number" className="form-control rounded-3" name="creditos"
                placeholder="Ej: 4" value={formulario.creditos} onChange={manejarCambio} required />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold text-secondary small">Descripción</label>
              <textarea className="form-control rounded-3" name="descripcion" rows={3}
                placeholder="Descripción del curso..." value={formulario.descripcion} onChange={manejarCambio} required />
            </div>
            <div className="col-12"><hr className="text-muted" /></div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
                style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)', border: 'none' }}
                disabled={cargando}>
                {cargando ? (<><span className="spinner-border spinner-border-sm me-2"></span>Guardando...</>) : (<><i className="fas fa-save me-2"></i>Guardar</>)}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursoForm;