import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [badgeText, setBadgeText] = useState("FASHION");
  const [date, setDate] = useState("03. JUNE 2019");

  useEffect(() => {
    // Simulating asynchronous data fetching
    const fetchData = () => {
      setTimeout(() => {
        setBadgeText("LIFESTYLE");
        setDate("10. JUNE 2019");
      }, 2000); // Delay of 2 seconds
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if necessary
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <div className={styles.main_image_container}>
          <div className={styles.main_image_content}>
            <div style={{ fontWeight: "700", fontSize: "1.8rem" }}>
              LATEST FROM THE WEB FOR YOU
            </div>
            <div className={styles.badge_container}>
              <div className={styles.badge}>{badgeText}</div>
              <div className={styles.badge}>LIFESTYLE</div>
              <div
                style={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "white",
                  margin: "0 2rem 0 2rem",
                }}
              >
                &nbsp;
              </div>
              <div>{date}</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </div>
          </div>
        </div>

        <div className={styles.secondary_container}>
          <SecondaryImage imageUrl={"/rectangle_3.png"} />
          <SecondaryImage imageUrl={"/rectangle_4.png"} />
          <SecondaryImage imageUrl={"/rectangle_5.png"} />
        </div>
      </div>
    </div>
  );
}

function SecondaryImage({ imageUrl }) {
  return (
    <div className={styles.secondary_image_container}>
      <img src={imageUrl} alt="" className={styles.secondary_image} />
      <div className={styles.secondary_image_content}>
        <div className={styles.badge}>FASHION</div>
        <div>
          <div style={{ fontWeight: "700", fontSize: "1.3rem" }}>
            LATEST FROM THE WEB FOR YOU
          </div>
          <div className={styles.widget}>
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <div className={styles.widget_text}>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
