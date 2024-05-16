import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div style={{ display: "flex" }}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div style={{ display: "flex", marginLeft: "1.5rem" }}>
          <div className={styles.logo} style={{ color: "#d00494" }}>
            WORLD
          </div>
          <div className={styles.logo}>STORY</div>
        </div>
      </div>
      <ul className={styles.list_container}>
        <li className={styles.list_item}>NEWS</li>
        <li className={styles.list_item}>FASHION</li>
        <li className={styles.list_item}>LIFESTYLE</li>
        <li className={styles.list_item}>TRAVEL</li>
      </ul>
      <img src="/social_media_icons.png" alt="" />
    </div>
  );
}
