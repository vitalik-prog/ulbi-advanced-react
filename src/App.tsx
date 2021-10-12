import React from 'react';
import {Layout} from "antd";
import AppRouter from "./components/AppRouter";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        Footer
      </Layout.Footer>
    </Layout>
  );
}

export default App;
