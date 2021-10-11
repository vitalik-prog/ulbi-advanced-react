import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom'
import {RoutesNames} from "../enums/routes";
import styles from './styles.module.css';

const Header: FC = () => {
  const router = useHistory()
  const isAuth = false
  return (
    <Layout.Header
      style={{ color: "white" }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        style={{justifyContent: 'flex-end'}}
      >
        <Menu.Item
          className={styles.user_nickname}
        >
          I am
        </Menu.Item>
        <Menu.Item
          onClick={
            isAuth ? () => console.log('Logout') : () => router.push(RoutesNames.LOGIN)
          }
          key={1}
        >
          {isAuth ? "Logout" : "Login"}
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;