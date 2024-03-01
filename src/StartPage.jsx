export default function Start(props){
    return(
        <div className="StartPageContainer">
            <h1 className="title">Quizzical</h1>
            <p>Get as many correct answers as possible</p>
            <button className="startButton" onClick={props.onClick}>Start Quiz</button>
        </div>
    )
}