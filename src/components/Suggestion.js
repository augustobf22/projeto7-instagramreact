export default function Suggestion(props) {
    return (
        <>
            <div class="usuario">
                <img src={props.imgSrc} alt={props.imgAlt} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </>
    )
}