import React from 'react'
import './App.css'
import Start from './StartPage'
import QuizPage from './quizPage'
function App() {
  const [data,setData]=React.useState([])
  const[ansState,setAnsState]=React.useState(false)
  const [showQuiz,setShowQuit]=React.useState(false)

  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res=>res.json())
    .then(item=>setData(item.results))
    .catch(error=>console.log("Error fetching data:",error))
  },[])

  function RenderQuiz(){
    setShowQuit(true)
  }
  function handleButtonClick(){
    setAnsState((prevState)=>!prevState)
}
console.log(ansState)
  return (
    <div className='container'>
      {showQuiz?<QuizPage data={data} ansState={ansState} onClick={handleButtonClick}/>:<Start onClick={RenderQuiz}/>}
    </div>
  )
}

export default App
