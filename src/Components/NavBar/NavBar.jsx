import { React, useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [showPhoneNav, setShowPhoneNav] = useState(false);

  return (
    <div>
      {showPhoneNav ? <PhoneNav /> : <></>}
      <div className={styles.container}>
        <div style={{ display: "flex" }}>
          <div
            className={styles.hamburger}
            onClick={() => {
              setShowPhoneNav(!showPhoneNav);
            }}
          >
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
          <div className={styles.logo_container}>
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
        <img
          src="/social_media_icons.png"
          alt=""
          className={styles.social_media_icons}
        />
      </div>
    </div>
  );
}

function PhoneNav() {
  return (
    <div className={styles.phone_nav}>
      <ul className={styles.phone_list_container}>
        <li className={styles.phone_list_item}>NEWS</li>
        <li className={styles.phone_list_item}>FASHION</li>
        <li className={styles.phone_list_item}>LIFESTYLE</li>
        <li className={styles.phone_list_item}>TRAVEL</li>
      </ul>
    </div>
  );
}
