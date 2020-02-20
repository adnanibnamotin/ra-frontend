import { Menu, Icon, Typography} from 'antd';
import { withRouter } from 'next/router';
import Link from "next/link";

const { Title } = Typography;

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  render() {
    return (
    <Menu selectedKeys={[this.props.router.pathname]} mode="horizontal" overflowedIndicator={<Icon style={{ marginRight: 0}} type="menu"/>}>
        <Menu.Item>
          <Title level={4}>{ process.env.APP_NAME }</Title>
        </Menu.Item>
        <Menu.Item key="/">
          <Link href="/">
            <a><Icon type="home" />Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/project">
          <Link href="/project"><a><Icon type="project" />Project</a></Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link href="/about"><a><Icon type="info-circle" />About</a></Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Navbar);