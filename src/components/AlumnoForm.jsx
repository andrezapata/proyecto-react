import { useState } from 'react';

const AlumnoForm = ({ recargarAlumnos }) => {

  const [formulario, setFormulario] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    fecha_nacimiento: '',
    email: '',
    estado_matricula: 'matriculado'
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formulario)
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        setFormulario({
          nombre: '',
          apellidos: '',
          dni: '',
          fecha_nacimiento: '',
          email: '',
          estado_matricula: 'matriculado'
        });
        recargarAlumnos();
      } else {
        console.log("Errores de validación:", datos.errors);
        alert('Error al guardar. Revisa la consola para más detalles.');
      }

    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor de Laravel.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 mb-5">

      {/* Header */}
      <div
        className="card-header border-0 rounded-top-4 py-3 px-4"
        style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)' }}
      >
        <div className="d-flex align-items-center gap-2">
          <i className="fas fa-user-plus text-white fs-5"></i>
          <h5 className="mb-0 text-white fw-bold">Registrar Nuevo Alumno</h5>
        </div>
      </div>

      <div className="card-body p-4">
        <form onSubmit={manejarEnvio}>
          <div className="row g-3">

            {/* Nombres */}
            <div className="col-md-6">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-user me-1"></i> Nombres
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                name="nombre"
                placeholder="Ej: Juan Carlos"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* Apellidos */}
            <div className="col-md-6">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-user me-1"></i> Apellidos
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                name="apellidos"
                placeholder="Ej: Pérez García"
                value={formulario.apellidos}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* DNI */}
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-id-card me-1"></i> DNI
              </label>
              <input
                type="text"
                className="form-control rounded-3"
                name="dni"
                placeholder="12345678"
                maxLength={8}
                value={formulario.dni}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-calendar me-1"></i> Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control rounded-3"
                name="fecha_nacimiento"
                value={formulario.fecha_nacimiento}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-envelope me-1"></i> Email
              </label>
              <input
                type="email"
                className="form-control rounded-3"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formulario.email}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* Estado */}
            <div className="col-md-4">
              <label className="form-label fw-semibold text-secondary small">
                <i className="fas fa-toggle-on me-1"></i> Estado
              </label>
              <select
                className="form-select rounded-3"
                name="estado_matricula"
                value={formulario.estado_matricula}
                onChange={manejarCambio}
              >
                <option value="matriculado">✅ Matriculado</option>
                <option value="inactivo">⛔ Inactivo</option>
              </select>
            </div>

            {/* Divider */}
            <div className="col-12">
              <hr className="text-muted" />
            </div>

            {/* Botón */}
            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
                style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)', border: 'none' }}
                disabled={cargando}
              >
                {cargando ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Guardando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-save me-2"></i>Guardar en MySQL
                  </>
                )}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumnoForm;