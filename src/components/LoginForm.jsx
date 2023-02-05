import React from "react";
import styles from "@/styles/Login.module.css";
import Avatar from "public/profile.png";
import Image from "next/image";

const LoginForm = () => {
  return (
    <form className={styles.login_form}>
      <Image src={Avatar} alt="image" />

      <div className={styles.lable_input}>
        <label>Mobile Number*</label>
        <input placeholder="Mobile Number" />
      </div>

      <div className={styles.lable_input}>
        <label>Password*</label>
        <input type="password" placeholder="Password" />
      </div>

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
