import MainQuestionsComponent from '../../components/MainQuestions'
import TabsComponent from '../../components/Tabs'
import { mixArray } from '../../helper/mixArray'
import data from './data'

const {
  ThietBi,
  CacThuatToanToMau,
  OpenGL,
  CacThuatToanVeDuongThangDuongTron,
  CacThuatToanCatXen,
  CacPhepBienDoi,
  XacDinhBeMatHien,
  AnhSang,
  DuongCongVaBeMat,
} = data

// const mixData = (data) => {
//   const mixQuestion = mixArray(data)
//   mixQuestion.forEach((_, index) => {
//     mixQuestion[index].choice = mixArray(_.choice)
//   })
//   return mixQuestion
// }

const tabs = [
  { tab: 'Thiết bị', component: <MainQuestionsComponent listQuestions={mixArray(ThietBi)} /> },
  { tab: 'Các thuật toán tô màu', component: <MainQuestionsComponent listQuestions={mixArray(CacThuatToanToMau)} /> },
  {
    tab: 'Các thuật toán vẽ đường thẳng, đường tròn',
    component: <MainQuestionsComponent listQuestions={mixArray(CacThuatToanVeDuongThangDuongTron)} />,
  },
  { tab: 'Các thuật toán cắt xén', component: <MainQuestionsComponent listQuestions={mixArray(CacThuatToanCatXen)} /> },
  { tab: 'Các phép biến đổi', component: <MainQuestionsComponent listQuestions={mixArray(CacPhepBienDoi)} /> },
  { tab: 'Đường cong và bề mặt', component: <MainQuestionsComponent listQuestions={mixArray(DuongCongVaBeMat)} /> },
  { tab: 'Xác định bề mặt hiện', component: <MainQuestionsComponent listQuestions={mixArray(XacDinhBeMatHien)} /> },
  { tab: 'Ánh sáng', component: <MainQuestionsComponent listQuestions={mixArray(AnhSang)} /> },
  { tab: 'OpenGL ', component: <MainQuestionsComponent listQuestions={mixArray(OpenGL)} /> },
]

const ComputerGraphicPage = () => {
  return (
    <div>
      <TabsComponent tabs={tabs} />
    </div>
  )
}

export default ComputerGraphicPage
