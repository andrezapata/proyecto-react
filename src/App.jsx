import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AlumnoCard from './components/AlumnoCard';
import AlumnoForm from './components/AlumnoForm';
function App() {
// 1. Iniciamos el estado como un arreglo vacío (esperando los datos del servidor)
const [alumnos, setAlumnos] = useState([]);
// 2. Función para obtener los alumnos desde la API de Laravel
const obtenerAlumnos = async () => {
try {
const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos');
const datos = await respuesta.json();
// Asumimos que Laravel devuelve un objeto con la llave 'data' o directamente el arreglo
setAlumnos(datos.data || datos);
} catch (error) {
console.error('Error al obtener los alumnos:', error);
}
};
// 3. El hook useEffect ejecuta obtenerAlumnos() automáticamente la primera vez que la página carga
useEffect(() => {
obtenerAlumnos();

}, []); // El arreglo vacío [] significa "ejecutar solo una vez al montar el componente"
return (
<>
<Navbar />
<div className="container">
<h2 className="mb-4">Directorio de Alumnos</h2>
{/* Pasamos la función obtenerAlumnos al formulario para que
pueda recargar la tabla al guardar */}
<AlumnoForm recargarAlumnos={obtenerAlumnos} />
<div className="row mt-4">
{alumnos.map((alumno) => (
<AlumnoCard
key={alumno.id_alumno} // Usamos la llave primaria de la

base de datos

nombre={`${alumno.nombre} ${alumno.apellidos}`}
carrera={alumno.email} // Temporal: Mostramos el email ya

que aún no cruzamos tablas

estadoInicial={alumno.estado_matricula}
/>
))}
</div>
</div>
</>
);
}
export default App;