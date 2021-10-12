import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {validationRules} from "../helpers/validationRules/validationRules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
  const { isLoading, error } = useTypedSelector(state => state.auth)
  const [loginData, setLoginData] = useState({username: "", password: ""})
  const { login } = useActions()

  const onHandleSubmit = () => {
    login(loginData.username, loginData.password)
  }

  return (
    <Form
      style={{ backgroundColor: "white", padding: "20px" }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onHandleSubmit}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[validationRules.required("Please input your nickname.")]}
      >
        <Input
          value={loginData.username}
          onChange={(e) => setLoginData({...loginData, username: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[validationRules.required("Please input your password.")]}
      >
        <Input
          value={loginData.password}
          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
          type="password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
      <div style={{ color: "red", height: 15 }}>
        {error ? error : null}
      </div>
    </Form>
  );
};

export default LoginForm;