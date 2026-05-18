// src/App.jsx

import { useState } from "react"
import Navbar from "./components/Navbar"
import AlumnoCard from "./components/AlumnoCard"

function App() {

  const [seccion, setSeccion] = useState("inicio")

  const [alumnos, setAlumnos] = useState([
    {
      id: 1,
      nombre: "Andre Zapata",
      carrera: "Informatica y Desarrollo de Aplicaciones Web",
      estado: "Matriculado"
    },

    {
      id: 2,
      nombre: "Tiffa Rosales",
      carrera: "Medicina",
      estado: "Inactivo"
    },

    {
      id: 3,
      nombre: "Carlos Ramirez",
      carrera: "Ingeniería de Software",
      estado: "Matriculado"
    },

    {
      id: 4,
      nombre: "Lucia Fernandez",
      carrera: "Administración Industrial",
      estado: "Matriculado"
    },

    {
      id: 5,
      nombre: "Kevin Torres",
      carrera: "Diseño Gráfico",
      estado: "Inactivo"
    },

    {
      id: 6,
      nombre: "Maria Lopez",
      carrera: "Contabilidad",
      estado: "Matriculado"
    },

    {
      id: 7,
      nombre: "Jorge Castillo",
      carrera: "Ciberseguridad",
      estado: "Matriculado"
    },

    {
      id: 8,
      nombre: "Valeria Rojas",
      carrera: "Arquitectura de Plataformas",
      estado: "Inactivo"
    }
  ])

  const eliminarAlumno = (id) => {
    const nuevosAlumnos = alumnos.filter(
      (alumno) => alumno.id !== id
    )

    setAlumnos(nuevosAlumnos)
  }

  const editarAlumno = (id) => {

    const nuevoNombre = prompt("Ingrese el nuevo nombre")

    if (!nuevoNombre) return

    const actualizar = alumnos.map((alumno) => {

      if (alumno.id === id) {
        return {
          ...alumno,
          nombre: nuevoNombre
        }
      }

      return alumno
    })

    setAlumnos(actualizar)
  }

  return (
    <>
      <Navbar cambiarSeccion={setSeccion} />

      <div className="container py-5">

        {/* INICIO */}
        {seccion === "inicio" && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>
                <h1 className="fw-bold">
                  Sistema de Matrícula
                </h1>

                <p className="text-muted">
                  Gestión académica de estudiantes
                </p>
              </div>

              <button className="btn btn-primary fw-semibold">
                + Nuevo Alumno
              </button>

            </div>

            <div className="row">

              {alumnos.map((alumno) => (

                <AlumnoCard
                  key={alumno.id}
                  nombre={alumno.nombre}
                  carrera={alumno.carrera}
                  estado={alumno.estado}
                  onEliminar={() => eliminarAlumno(alumno.id)}
                  onEditar={() => editarAlumno(alumno.id)}
                />

              ))}

            </div>
          </>
        )}

        {/* CURSOS */}
        {seccion === "cursos" && (
          <div className="card shadow border-0 rounded-4 p-4">

            <h2 className="fw-bold text-primary mb-4">
              Cursos Disponibles
            </h2>

            <ul className="list-group">

              <li className="list-group-item">
                Desarrollo Web
              </li>

              <li className="list-group-item">
                Base de Datos
              </li>

              <li className="list-group-item">
                React JS
              </li>

              <li className="list-group-item">
                Laravel
              </li>

            </ul>
          </div>
        )}

        {/* ESPECIALIZACIONES */}
        {seccion === "especializaciones" && (
          <div className="card shadow border-0 rounded-4 p-4">

            <h2 className="fw-bold text-success mb-4">
              Especializaciones
            </h2>

            <div className="row">

              <div className="col-md-4">
                <div className="card border-success mb-3">
                  <div className="card-body">
                    <h5>Ciberseguridad</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-success mb-3">
                  <div className="card-body">
                    <h5>Inteligencia Artificial</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-success mb-3">
                  <div className="card-body">
                    <h5>Cloud Computing</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* CONTACTOS */}
        {seccion === "contactos" && (
          <div className="card shadow border-0 rounded-4 p-4">

            <h2 className="fw-bold text-danger mb-4">
              Contactos
            </h2>

            <p>
              📞 Teléfono: 987654321
            </p>

            <p>
              📧 Email: matricula@senati.pe
            </p>

            <p>
              📍 Dirección: SENATI - Lima
            </p>

          </div>
        )}

      </div>
    </>
  )
}

export default App