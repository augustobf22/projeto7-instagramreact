// lista com stories, usar maps, props...
import Story from "./Story.js"

const storyList = [{ storyImg: "assets/img/9gag.svg", storyAlt:"9gag", storyUser:"9gag" },
{ storyImg: "assets/img/meowed.svg", storyAlt:"meowed", storyUser:"meowed" },
{ storyImg: "assets/img/barked.svg", storyAlt:"barked", storyUser: "barked" },
{ storyImg: "assets/img/nathanwpylestrangeplanet.svg", storyAlt:"nathanwpylestrangeplanet", storyUser: "nathanwpylestrangeplanet" },
{ storyImg: "assets/img/wawawicomics.svg", storyAlt:"wawawicomics", storyUser: "wawawicomics" },
{ storyImg: "assets/img/respondeai.svg", storyAlt:"respondeai", storyUser: "respondeai" },
{ storyImg: "assets/img/filomoderna.svg", storyAlt:"filomoderna", storyUser: "filomoderna" },
{ storyImg: "assets/img/memeriagourmet.svg", storyAlt:"memeriagourmet", storyUser: "memeriagourmet" }]

const storyToRender = storyList.map(storyObject => <Story storyImg={storyObject.storyImg} storyAlt={storyObject.storyAlt} storyUser={storyObject.storyUser} /> );

export default function Stories() {
    return (
        <div className="stories">
            {storyToRender}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
