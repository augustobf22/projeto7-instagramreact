import React from 'react'

export default function Post(props) {
    let newNumber = (Number(props.postLikesNumber)*1000+1).toLocaleString('pt-br');

    //bookmark
    const [bookmarkIcon, setBookmarkIcon] = React.useState("bookmark-outline");

    function bookmark(){
        (bookmarkIcon === "bookmark-outline") ? setBookmarkIcon("bookmark") : setBookmarkIcon("bookmark-outline");
    }

    //likes
    const [likeIcon, setLikeIcon] = React.useState("heart-outline");
    const [likeNumber, setLikeNumber] = React.useState(props.postLikesNumber);


    function like(){
        if(likeIcon === "heart-outline"){
            setLikeIcon("heart");
            setLikeNumber(newNumber);
        } else {
            setLikeIcon("heart-outline");
            setLikeNumber(props.postLikesNumber);
        }
    }

    function likePic(){
        setLikeIcon("heart");
        setLikeNumber(newNumber);
    }


    return (
        <div className="post" data-test="post">
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
                <img src={props.postContentImg} alt={props.postContentAlt} onDoubleClick={likePic} data-test="post-image"/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={likeIcon} onClick={like} class={(likeIcon === "heart-outline") ? '' : "red"} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmarkIcon} onClick={bookmark} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.postLikesImg} alt={props.postLikesAlt} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.postLikesWho}</strong> e <strong>outras {likeNumber} pessoas</strong>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}