export default function Post(props) {
    return (
        <div className="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.postUserImg} alt={props.postUserAlt} />
                    {props.postUserUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postContentImg} alt={props.postContentAlt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.postLikesImg} alt={props.postLikesAlt} />
                    <div class="texto">
                        Curtido por <strong>{props.postLikesWho}</strong> e <strong>outras {props.postLikesNumber} pessoas</strong>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}