import React, { FunctionComponent } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  isLogin: boolean;
  loginFeature: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const Header: FunctionComponent<HeaderProps> = ({ isLogin, setIsLogin, loginFeature }) => {
  return (
    <header data-testid="header" className={styles.header}>
      <div className={styles.title}>Learning Cards</div>
      <div className={styles.sideBar}>
        {!loginFeature ? false : isLogin ? (
          <div onClick={() => setIsLogin(false)} className={styles.sideButton}>
            Logout
          </div>
        ) : (
          <div onClick={() => setIsLogin(true)} className={styles.sideButton}>
            Login
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
