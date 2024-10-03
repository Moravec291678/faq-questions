import questions from "./data";
import Question from "./components/Question"
import { FaAd } from "react-icons/fa";

const App = () => {
  return (
    <div className="all-questions">
      {questions.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion}></Question>
      })}
      <FaAd className="icon"></FaAd>
    </div>
    
  )
}
export default App
