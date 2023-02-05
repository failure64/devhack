import React from 'react'
import Navbar from "@/components/Navbar";
import styles from "@/styles/AuthPage.module.css";
import WorkerForm from '@/components/WorkerForm';

const signup_worker = () => {
  return (
    <>
      <Navbar />
      <div className={styles.auth_main_page}>
        <WorkerForm />
      </div>
    </>
  );
}

export default signup_worker