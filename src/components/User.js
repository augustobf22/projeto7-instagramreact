import React from 'react'

export default function User() {
    const [username, setUsername] = React.useState("catanacomics");

    function editUsername(){
        let newUsername = prompt("Qual o novo nome de usuário?");
        (newUsername !== null && newUsername !== "") ? setUsername(newUsername) : alert("Insira um nome válido!");
    }

    const [userPicture, setUserPicture] = React.useState("assets/img/catanacomics.svg");

    function editUserPicture(){
        let newUserPicture = prompt("Qual a nova imagem?");
        (newUserPicture !== null && newUserPicture !== "") ? setUserPicture(newUserPicture) : alert("Insira uma imagem válida!");
    }

    return (
        <div className="usuario">
            <img src={userPicture} alt="imagem de perfil" onClick={editUserPicture} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{username}</strong>
                    <ion-icon name="pencil" onClick={editUsername} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}