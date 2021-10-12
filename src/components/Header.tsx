import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {useHistory} from 'react-router-dom'
import {RoutesNames} from "../enums/routes";
import styles from './styles.module.css';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Header: FC = () => {
  const router = useHistory()
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()

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
        {isAuth &&
        <Menu.Item
          className={styles.user_nickname}
          key={2}
        >
          { user.username }
        </Menu.Item>}
        <Menu.Item
          onClick={
            isAuth ? () => logout() : () => router.push(RoutesNames.LOGIN)
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