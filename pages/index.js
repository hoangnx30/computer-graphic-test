import Layout from "antd/lib/layout/layout";
import Head from "next/head";
import HomePage from "../containers/HomePage";
import data from "../data";
import MainQuestion from "../components/MainQuestion";
import { mixData } from "../helper/mixArray";
import "antd/dist/antd.css";

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
} = data;

const tabs = [
  {
    tab: "Thiết bị",
    component: <MainQuestion listQuestions={mixData(ThietBi)} />,
  },
  {
    tab: "Các thuật toán tô màu",
    component: <MainQuestion listQuestions={mixData(CacThuatToanToMau)} />,
  },
  {
    tab: "Các thuật toán vẽ đường thẳng, đường tròn",
    component: (
      <MainQuestion
        listQuestions={mixData(CacThuatToanVeDuongThangDuongTron)}
      />
    ),
  },
  {
    tab: "Các thuật toán cắt xén",
    component: <MainQuestion listQuestions={mixData(CacThuatToanCatXen)} />,
  },
  {
    tab: "Các phép biến đổi",
    component: <MainQuestion listQuestions={mixData(CacPhepBienDoi)} />,
  },
  {
    tab: "Đường cong và bề mặt",
    component: <MainQuestion listQuestions={mixData(DuongCongVaBeMat)} />,
  },
  {
    tab: "Xác định bề mặt hiện",
    component: <MainQuestion listQuestions={mixData(XacDinhBeMatHien)} />,
  },
  {
    tab: "Ánh sáng",
    component: <MainQuestion listQuestions={mixData(AnhSang)} />,
  },
  {
    tab: "OpenGL ",
    component: <MainQuestion listQuestions={mixData(OpenGL)} />,
  },
];
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Computer Graphic</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="u4Qnt_vZBn-1ViDqH6RP-n65uXBUE1vRqmGZNhdpGlY"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-396LDPZ4D0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-PKTDK29Y39');`,
          }}
        />
      </Head>

      <HomePage tabs={tabs} />
    </Layout>
  );
}
