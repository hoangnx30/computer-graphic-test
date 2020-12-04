import { useState } from 'react'
import Card from 'antd/lib/card'
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined'
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined'
import ReloadOutlined from '@ant-design/icons/ReloadOutlined'
import CheckOutlined from '@ant-design/icons/CheckOutlined'
import Radio from 'antd/lib/radio'
import './styles.scss'
import { openFailNotification, openSuccessNotification } from '../../helper/notification'

const QuestionComponent = (props) => {
  const { ques, onNextQuestion, onBackQuestion } = props
  const { choice, question } = ques
  const [answer, setAnswer] = useState(null)

  const handleChooseChoice = (e) => {
    setAnswer(e.target.value)
  }

  const renderChoice = () => {
    return (
      <Radio.Group onChange={handleChooseChoice} value={answer}>
        {choice.map((c, idx) => {
          return <Radio value={idx}>{c}</Radio>
        })}
      </Radio.Group>
    )
  }

  const onReloadAnswer = () => {
    setAnswer(null)
  }

  const handleCheckAnswer = () => {
    const { answer: ans } = ques
    if (ans === answer) {
      openSuccessNotification()
      setTimeout(() => {
        onNextQuestion()
      }, 1000)
    } else {
      openFailNotification()
    }
  }

  return (
    <Card
      className="question-component"
      actions={[
        <ArrowLeftOutlined onClick={onBackQuestion} />,
        <ReloadOutlined onClick={onReloadAnswer} />,
        <CheckOutlined onClick={handleCheckAnswer} />,
        <ArrowRightOutlined onClick={onNextQuestion} />,
      ]}
    >
      <div className="question">{question}</div>
      <div>{renderChoice()}</div>
    </Card>
  )
}

export default QuestionComponent
