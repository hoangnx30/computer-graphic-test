import { useState } from 'react'
import Button from 'antd/lib/button'
import Avatar from 'antd/lib/avatar'

import QuestionComponent from '../Question'

import './styles.scss'

const MainQuestionsComponent = (props) => {
  const { listQuestions } = props
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleChooseQuestion = (event) => {
    setCurrentQuestion(Number(event.target.innerText - 1))
  }

  return (
    <div className="main-question">
      {listQuestions.map((question, index) => {
        if (index === currentQuestion) {
          return (
            <span>
              <Avatar size="default" key={index} className="active cursor">
                {index + 1}
              </Avatar>
            </span>
          )
        }
        return (
          <span onClick={handleChooseQuestion}>
            <Avatar className="cursor" size="default" key={index}>
              {index + 1}
            </Avatar>
          </span>
        )
      })}
      <div>
        <Button>Làm lại</Button>
      </div>
      <div className="question">
        {listQuestions.forEach((question, index) => {
          if (index === currentQuestion) {
            return <QuestionComponent question={question} />
          }
        })}
      </div>
    </div>
  )
}

export default MainQuestionsComponent
