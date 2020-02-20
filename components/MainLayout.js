import Navbar from "./Navbar";
import { Row, Layout } from "antd";

const { Header, Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Header style={{ padding: 0, height: "auto", textAlign: "center" }}>
      <Navbar />
    </Header>
    <Content>
      { children }
    </Content>
    <Footer></Footer>
  </Layout>
)

export default MainLayout;