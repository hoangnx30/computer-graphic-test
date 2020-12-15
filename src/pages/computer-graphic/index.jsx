import MainQuestionsComponent from '../../components/MainQuestions'
import TabsComponent from '../../components/Tabs'
import { mixData } from '../../helper/mixArray'
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

const tabs = [
  { tab: 'Thiết bị', component: <MainQuestionsComponent listQuestions={mixData(ThietBi)} /> },
  { tab: 'Các thuật toán tô màu', component: <MainQuestionsComponent listQuestions={mixData(CacThuatToanToMau)} /> },
  {
    tab: 'Các thuật toán vẽ đường thẳng, đường tròn',
    component: <MainQuestionsComponent listQuestions={mixData(CacThuatToanVeDuongThangDuongTron)} />,
  },
  { tab: 'Các thuật toán cắt xén', component: <MainQuestionsComponent listQuestions={mixData(CacThuatToanCatXen)} /> },
  { tab: 'Các phép biến đổi', component: <MainQuestionsComponent listQuestions={mixData(CacPhepBienDoi)} /> },
  { tab: 'Đường cong và bề mặt', component: <MainQuestionsComponent listQuestions={mixData(DuongCongVaBeMat)} /> },
  { tab: 'Xác định bề mặt hiện', component: <MainQuestionsComponent listQuestions={mixData(XacDinhBeMatHien)} /> },
  { tab: 'Ánh sáng', component: <MainQuestionsComponent listQuestions={mixData(AnhSang)} /> },
  { tab: 'OpenGL ', component: <MainQuestionsComponent listQuestions={mixData(OpenGL)} /> },
]

const ComputerGraphicPage = () => {
  return (
    <div>
      <TabsComponent tabs={tabs} />
    </div>
  )
}

export default ComputerGraphicPage
