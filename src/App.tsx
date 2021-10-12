import React, {useEffect} from 'react';
import {Layout} from "antd";
import AppRouter from "./components/AppRouter";
import './App.css';
import Header from "./components/Header";
import {useActions} from "./hooks/useActions";
import {UserType} from "./common/types/user";

function App() {
  const { setUser, setIsAuth } = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username'), id: Date.now().toString() } as UserType)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center", height: "64px" }}>
        Footer
      </Layout.Footer>
    </Layout>
  );
}

export default App;
