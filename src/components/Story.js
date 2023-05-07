export default function Story(props) {
    return (
        <div className="story">
            <div class="imagem">
                <img src={props.storyImg} alt={props.storyAlt} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}