import {
  useState,
  forwardRef,
  useImperativeHandle,
  useMemo,
  memo,
} from "react";
import Card from "antd/lib/card";
import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import ArrowRightOutlined from "@ant-design/icons/ArrowRightOutlined";
import ReloadOutlined from "@ant-design/icons/ReloadOutlined";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import Radio from "antd/lib/radio";
import {
  openFailNotification,
  openSuccessNotification,
} from "../../helper/notification";

const Question = forwardRef((props, ref) => {
  const { ques, onNextQuestion, onBackQuestion } = props;
  const { choice, question } = ques;
  const [answer, setAnswer] = useState(null);

  useImperativeHandle(ref, () => ({
    reloadQuestion() {
      setAnswer(null);
    },
  }));

  const handleChooseChoice = (e) => {
    setAnswer(e.target.value);
  };

  const onReloadAnswer = () => {
    setAnswer(null);
  };

  const renderChoice = useMemo(() => {
    return (
      <>
        {choice.map((c, idx) => {
          return (
            <Radio value={c.id} key={idx} className="mt-2 choice">
              {c.choice}
            </Radio>
          );
        })}
      </>
    );
  }, [choice]);

  const handleCheckAnswer = () => {
    const { answer: ans } = ques;
    if (ans === answer) {
      openSuccessNotification();
      setTimeout(() => {
        setAnswer(null);
        onNextQuestion();
      }, 1000);
    } else {
      openFailNotification();
    }
  };

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
      <div>
        <Radio.Group onChange={handleChooseChoice} value={answer}>
          {renderChoice}
        </Radio.Group>
      </div>
    </Card>
  );
});

export default memo(Question);
