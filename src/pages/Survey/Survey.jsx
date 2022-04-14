import {Link, useParams} from 'react-router-dom'
function Survey(){
 const {questionNumber} = useParams()
 
 const questionNumberInt = parseInt(questionNumber);
 const prevQuestionNumber = questionNumberInt ===1 ? 1: questionNumberInt  - 1 ;
 const nextNumber = questionNumberInt +1 ;
  return(
      <div>
          <h1>Questionnaire 📅 </h1>
          <h2>Question {questionNumber}</h2>
          <Link to={`/survey/${prevQuestionNumber}`}>Précédant</Link>
          {
            questionNumberInt ===10 ? 
            <Link to='/Result' > Resultats</Link> : <Link  to={`/survey/${nextNumber}`}>Suivant</Link>              
          }
      </div>
  )


}

export default Survey