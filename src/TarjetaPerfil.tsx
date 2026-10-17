interface TarjetaPerfilProps {
    nombre: string;
    carrera: string;
    semestre: number;
}

export function TarjetaPerfil({nombre, carrera, semestre}: TarjetaPerfilProps) {
    const iniciales = nombre //KN
        .split(" ")
        .map((parte) => parte[0])
        .join("")
        .slice(0, 2);

        return (
            <article className="tarjeta">
                <div className="tarjeta_avatar">{iniciales}</div>
                <h2 className="tarjeta_nombre">{nombre}</h2>
                <p className="tarjeta_carrera">{carrera}</p>
                <p className="tarjeta_semestre">{semestre} semestre</p>
            </article>
        )
}