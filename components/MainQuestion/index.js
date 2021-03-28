import { useRef, useState } from "react";
import Button from "antd/lib/button";
import Avatar from "antd/lib/avatar";

import QuestionComponent from "../Question";

import { mixData } from "../../helper/mixArray";
import { useForceUpdate } from "../../hooks/useForceUpdate";

const MainQuestion = (props) => {
  let { listQuestions } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const forceUpdate = useForceUpdate();
  const questionRef = useRef();

  const handleChooseQuestion = (event, flag = false) => {
    if (!flag) {
      setCurrentQuestion(Number(event.target.innerText - 1));
      questionRef.current.reloadQuestion();
    } else {
      setCurrentQuestion(0);
    }
  };

  const handleNextQuestion = () => {
    if (listQuestions.length === currentQuestion + 1) {
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBackQuestion = () => {
    if (currentQuestion === 0) {
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const onReworkTest = () => {
    listQuestions = mixData(listQuestions);
    handleChooseQuestion("_", true);
    questionRef.current.reloadQuestion();
    forceUpdate();
  };

  const renderQuestion = () => {
    for (let index = 0; index <= listQuestions.length; index++)
      if (index === currentQuestion) {
        return (
          <QuestionComponent
            ques={listQuestions[index]}
            onNextQuestion={handleNextQuestion}
            onBackQuestion={handleBackQuestion}
            ref={questionRef}
          />
        );
      }
    return null;
  };

  // const handleKeyDown = (event) => {
  //   switch (event.keyCode) {
  //     case 39:
  //       handleNextQuestion()
  //       questionRef.current.reloadQuestion()
  //       forceUpdate()
  //       break
  //     case 37:
  //       handleBackQuestion()
  //       questionRef.current.reloadQuestion()
  //       forceUpdate()
  //       break
  //     default:
  //       break
  //   }
  // }

  return (
    <div className="main-question" onKeyDown={() => {}}>
      {listQuestions.map((_, index) => {
        if (index === currentQuestion) {
          return (
            <span>
              <Avatar size="default" key={index} className="active cursor">
                {index + 1}
              </Avatar>
            </span>
          );
        } else {
          return (
            <span onClick={handleChooseQuestion}>
              <Avatar className="cursor" size="default" key={index}>  
                {index + 1}
              </Avatar>
            </span>
          );
        }
      })}
      <div>
        <Button type="primary" onClick={onReworkTest} className="mt-2 mb-2">
          Làm lại
        </Button>
      </div>
      <div className="question">{renderQuestion()}</div>
    </div>
  );
};

export default MainQuestion;
