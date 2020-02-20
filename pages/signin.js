import MainLayout from "../components/MainLayout";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";

class SignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MainLayout>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
          style={{ paddingTop: "50px", maxWidth: "300px" }}
        >
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="email"
                placeholder="E-mail"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" style={{ float: "right" }} href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
        </Col>
        </Row>
      </MainLayout>
    );
  }
}

const SignIn = Form.create({ name: "Sign-in-form" })(SignInForm);

export default SignIn;
