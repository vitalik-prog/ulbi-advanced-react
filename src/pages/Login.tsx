import React, {FC} from 'react';
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 128px)",
    }}>
      <LoginForm />
    </div>
  );
};

export default Login;