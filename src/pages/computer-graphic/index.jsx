import MainQuestionsComponent from '../../components/MainQuestions'
import TabsComponent from '../../components/Tabs'
import { mixArray } from '../../helper/mixArray'
import data from './data'

const { ThietBi } = data

// const mixData = (data) => {
//   const mixQuestion = mixArray(data)
//   mixQuestion.forEach((_, index) => {
//     mixQuestion[index].choice = mixArray(_.choice)
//   })
//   return mixQuestion
// }

const tabs = [
  { tab: 'Thiết bị', component: <MainQuestionsComponent listQuestions={mixArray(ThietBi)} /> },
  { tab: 'Các thuật toán tô màu', component: <div>Component 2</div> },
  { tab: 'Các thuật toán vẽ đường thẳng, đường tròn', component: <div>Component 3</div> },
  { tab: 'Các thuật toán cắt xén', component: <div>Component 4</div> },
  { tab: 'Các phép biến đổi', component: <div>Component 5</div> },
  { tab: 'Đường cong và bề mặt', component: <div>Component 6</div> },
  { tab: 'Xác định bề mặt hiện', component: <div>Component 7</div> },
  { tab: 'Ánh sáng', component: <div>Component 8</div> },
  { tab: 'OpenGL ', component: <div>Component 9</div> },
]

const ComputerGraphicPage = () => {
  return (
    <div>
      <TabsComponent tabs={tabs} />
    </div>
  )
}

export default ComputerGraphicPage
