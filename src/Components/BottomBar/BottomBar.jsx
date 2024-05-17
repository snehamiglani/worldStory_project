import React from "react";
import styles from "./BottomBar.module.css";

export default function BottomBar() {
  return (
    <div className={styles.container}>
      <div style={{ fontWeight: "500" }}>
        @ COPYRIGHT BY EXAMPLE.COM 2017.ALL RIGHTS RESERVED
      </div>
      <div className={styles.list}>
        <div className={styles.list_item}>NEWS</div>
        <div className={styles.list_item}>FASHION</div>
        <div className={styles.list_item}>LIFESTYLE</div>
        <div className={styles.list_item}>TRAVEL</div>
      </div>
    </div>
  );
}
