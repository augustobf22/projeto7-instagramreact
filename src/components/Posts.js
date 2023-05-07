//lista de posts renderizar todos com atributos etc
import Post from "./Post.js"

const postsList = [{ postUserImg: "assets/img/meowed.svg", postUserAlt: "meowed", postUserUser: "meowed", postContentImg: "assets/img/gato-telefone.svg", postContentAlt: "gato-telefone", postLikesImg: "assets/img/respondeai.svg", postLikesAlt: "respondeai", postLikesWho: "respondeai", postLikesNumber: "101.523"},
{ postUserImg: "assets/img/barked.svg", postUserAlt: "barked", postUserUser: "barked", postContentImg: "assets/img/dog.svg", postContentAlt: "dog", postLikesImg: "assets/img/adorable_animals.svg", postLikesAlt: "adorable_animals", postLikesWho: "adorable_animals", postLikesNumber: "99.159"},
{ postUserImg: "assets/img/meowed.svg", postUserAlt: "meowed", postUserUser: "meowed", postContentImg: "assets/img/gato-telefone.svg", postContentAlt: "gato-telefone", postLikesImg: "assets/img/respondeai.svg", postLikesAlt: "respondeai", postLikesWho: "respondeai", postLikesNumber: "101.523"}]

const postsToRender = postsList.map(postObject => <Post postUserImg={postObject.postUserImg} postUserAlt={postObject.postUserAlt} postUserUser={postObject.postUserUser} postContentImg={postObject.postContentImg} postContentAlt={postObject.postContentAlt} postLikesImg={postObject.postLikesImg} postLikesAlt={postObject.postLikesAlt} postLikesWho={postObject.postLikesWho} postLikesNumber={postObject.postLikesNumber} />);

export default function Posts() {
    return (
        <div className="posts">
            {postsToRender}
        </div>
    )
}