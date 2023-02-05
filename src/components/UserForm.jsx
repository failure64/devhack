import React from 'react';
import styles from "@/styles/AuthForm.module.css";
import Avatar from "public/profile.png"
import Image from 'next/image';

const UserForm = () => {
  return (
    <form className={styles.form}>
      <Image src={Avatar} alt="image" />

      <div className={styles.flex_cont}>
        <div className={styles.lable_input}>
          <label>Name*</label>
          <input placeholder="Name" />
        </div>
        <div className={styles.lable_input}>
          <label>Mobile Number*</label>
          <input placeholder="Mobile Number" />
        </div>
      </div>

      <div className={styles.flex_cont}>
        <div className={styles.lable_input}>
          <label>UPI Id*</label>
          <input placeholder="UPI Id" />
        </div>
        <div className={styles.lable_input}>
          <label>Password*</label>
          <input type="password" placeholder="Password" />
        </div>
      </div>


      <button>Create Account</button>
    </form>
  );
}

export default UserForm