import { useState } from 'react';

const ProfesorForm = ({ recargarProfesores }) => {
const [formulario, setFormulario] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    fecha_nacimiento: '',
    email: '',
    especialidad: '',
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
      const respuesta = await fetch('http://127.0.0.1:8000/api/profesores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formulario)
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        setFormulario({ nombre: '', apellidos: '', dni: '', email: '', especialidad: '' });
        recargarProfesores();
      } else {
        alert('Error al guardar.');
        console.log(datos.errors);
      }
    } catch {
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
          <i className="fas fa-chalkboard-teacher text-white fs-5"></i>
          <h5 className="mb-0 text-white fw-bold">Registrar Nuevo Profesor</h5>
        </div>
      </div>
      <div className="card-body p-4">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold text-secondary small">Nombres</label>
              <input type="text" className="form-control rounded-3" name="nombre"
                placeholder="Ej: Carlos" value={formulario.nombre} onChange={manejarCambio} required />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold text-secondary small">Apellidos</label>
              <input type="text" className="form-control rounded-3" name="apellidos"
                placeholder="Ej: Ramírez" value={formulario.apellidos} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">DNI</label>
              <input type="text" className="form-control rounded-3" name="dni"
                placeholder="12345678" maxLength={8} value={formulario.dni} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
  <label className="form-label fw-semibold text-secondary small">Fecha de Nacimiento</label>
  <input type="date" className="form-control rounded-3" name="fecha_nacimiento"
    value={formulario.fecha_nacimiento} onChange={manejarCambio} required />
</div>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">Email</label>
              <input type="email" className="form-control rounded-3" name="email"
                placeholder="correo@ejemplo.com" value={formulario.email} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">Especialidad</label>
              <input type="text" className="form-control rounded-3" name="especialidad"
                placeholder="Ej: Matemáticas" value={formulario.especialidad} onChange={manejarCambio} required />
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

export default ProfesorForm;