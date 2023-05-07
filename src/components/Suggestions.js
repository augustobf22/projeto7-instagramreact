//inserir quantos suggestion quanto for necessario
import Suggestion from "./Suggestion.js"

//array with info
const suggestionsList = [{imgSrc: "assets/img/bad.vibes.memes.svg", imgAlt: "bad.vibes.memes.svg", name: "bad.vibes.memes", reason: "Segue você"},
    {imgSrc: "assets/img/chibirdart.svg" , imgAlt: "chibirdart", name: "chibirdart", reason: "Segue você"},
    {imgSrc: "assets/img/razoesparaacreditar.svg" , imgAlt: "razoesparaacreditar", name: "razoesparaacreditar", reason: "Novo no Instagram"},
    {imgSrc: "assets/img/adorable_animals.svg" , imgAlt: "adorable_animals", name: "adorable_animals", reason: "Segue você"},
    {imgSrc: "assets/img/smallcutecats.svg", imgAlt: "smallcutecats", name: "smallcutecats", reason: "Segue você"}]

const suggestionsToRender = suggestionsList.map(suggestionObject => <Suggestion imgSrc={suggestionObject.imgSrc} imgAlt={suggestionObject.imgAlt} name={suggestionObject.name} reason={suggestionObject.reason} />);

export default function Suggestions() {
    return (
        <div className="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsToRender}
        </div>
    )
}