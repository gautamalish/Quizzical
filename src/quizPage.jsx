import React from "react"
export default function QuizPage(props){
    const [shuffledAnswers,setShuffledAnswers]=React.useState()
    function shuffleArray(array){
            const shuffledArr=[...array]
            let j;
            for(let i=shuffledArr.length-1;i>0;i--){
                j=Math.floor(Math.random()*(i+1))
                if(j){
                    [shuffledArr[i],shuffledArr[j]]=[shuffledArr[j],shuffledArr[i]]
                }
                
            }
            return shuffledArr
        }
    React.useEffect(()=>{
            if(props.data ){
                const shuffledData=props.data.map((item,index)=>{
                    const shuffledAnswer=shuffleArray([...item.incorrect_answers,item.correct_answer])
                    return shuffledAnswer
                })
                setShuffledAnswers(shuffledData)
            }
        },[props.data])
    
    function showData(){
        if(props.data && shuffledAnswers){
            return props.data.map((item,index)=>{
                return(
                    <div key={index}>
                        <h1 className="question">{item.question}</h1>
                        <div className="answersContainer">{shuffledAnswers[index].map((ans,index)=>(
                            <button key={index} className="answer" onClick={props.onClick}>{ans}</button>
                        ))}</div>
                        <hr/>
                    </div>
                )
            })
        }      
            
        }
    return(
        <div className="quizPageContainer">
            {showData()}
        </div>
    )
    }
