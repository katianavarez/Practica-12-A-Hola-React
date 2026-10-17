import { Saludo } from "./Saludo"
import { TarjetaPerfil } from "./TarjetaPerfil"

export default function App() {
  return (
    <main className="pagina">
      <Saludo nombre="Katia Návarez"></Saludo>
      <section className="equipo">
        <TarjetaPerfil nombre="Katia Návarez" carrera="Ingeniería en Software" semestre={5}></TarjetaPerfil>
        <TarjetaPerfil nombre="Ximena Espinoza" carrera="Ingeniería en Software" semestre={6}></TarjetaPerfil>
        <TarjetaPerfil nombre="Katia Espinoza" carrera="Ingeniería en Software" semestre={7}></TarjetaPerfil>
        <TarjetaPerfil nombre="Ximena Návarez" carrera="Ingeniería en Software" semestre={8}></TarjetaPerfil>
      </section>
    </main>
  )
}