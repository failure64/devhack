import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/AuthPage.module.css";
import LoginForm from "@/components/LoginForm";

const login = () => {
  return (
    <>
      <Navbar />
      <div className={styles.auth_main_page}>
        <LoginForm />
      </div>
    </>
  );
};

export default login;
