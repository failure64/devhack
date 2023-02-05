import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/Explore.module.css";
import Avatar from "public/profile2.png";
import Image from "next/image";

const Constructers = () => {
  return (
    <>
      <Navbar />
      <div className={styles.explore_page}>
        <div className={styles.explore_head}>
          <h1>Construction workers</h1>
          <div className={styles.explore_head_buttons}>
            <button className={styles.green_btn}>Filter</button>
            <button className={styles.white_btn}>Sort</button>
          </div>
        </div>

        <div className={styles.explore_card}>
          <div className={styles.card_content}>
            <div className={styles.image_rating}>
              <Image src={Avatar} alt="image" width="100" height="100" />
              <p>4 Stars | 500+ Reviews</p>
            </div>
            <div className={styles.name_desc}>
              <h3>Kshitij Patel</h3>
              <h5>5+ years of Experience</h5>
              <p>
                Lorem ipsydn dandnans ookdlam xld ad a dadnoawd ad adoawd
                oawdoahwdn awudhawduaiudw.{" "}
              </p>
            </div>
          </div>
          <div className={styles.btn_cont}>
            <button className={styles.green_btn}>Book now</button>
          </div>
        </div>
        
        <div className={styles.explore_card}>
          <div className={styles.card_content}>
            <div className={styles.image_rating}>
              <Image src={Avatar} alt="image" width="100" height="100" />
              <p>4 Stars | 500+ Reviews</p>
            </div>
            <div className={styles.name_desc}>
              <h3>Kshitij Patel</h3>
              <h5>5+ years of Experience</h5>
              <p>
                Lorem ipsydn dandnans ookdlam xld ad a dadnoawd ad adoawd
                oawdoahwdn awudhawduaiudw.{" "}
              </p>
            </div>
          </div>
          <div className={styles.btn_cont}>
            <button className={styles.green_btn}>Book now</button>
          </div>
        </div>
        
        <div className={styles.explore_card}>
          <div className={styles.card_content}>
            <div className={styles.image_rating}>
              <Image src={Avatar} alt="image" width="100" height="100" />
              <p>4 Stars | 500+ Reviews</p>
            </div>
            <div className={styles.name_desc}>
              <h3>Kshitij Patel</h3>
              <h5>5+ years of Experience</h5>
              <p>
                Lorem ipsydn dandnans ookdlam xld ad a dadnoawd ad adoawd
                oawdoahwdn awudhawduaiudw.{" "}
              </p>
            </div>
          </div>
          <div className={styles.btn_cont}>
            <button className={styles.green_btn}>Book now</button>
          </div>
        </div>
        <div className={styles.explore_card}>
          <div className={styles.card_content}>
            <div className={styles.image_rating}>
              <Image src={Avatar} alt="image" width="100" height="100" />
              <p>4 Stars | 500+ Reviews</p>
            </div>
            <div className={styles.name_desc}>
              <h3>Kshitij Patel</h3>
              <h5>5+ years of Experience</h5>
              <p>
                Lorem ipsydn dandnans ookdlam xld ad a dadnoawd ad adoawd
                oawdoahwdn awudhawduaiudw.{" "}
              </p>
            </div>
          </div>
          <div className={styles.btn_cont}>
            <button className={styles.green_btn}>Book now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constructers;
