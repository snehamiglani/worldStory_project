import React, { useState, useEffect } from "react";
import styles from "./TopBar.module.css";

export default function TopBar({ initialDate, initialLocation }) {
  const [date, setDate] = useState(initialDate);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    // Simulate fetching updated data
    const fetchData = () => {
      setTimeout(() => {
        setDate("04, JUNE 2019");
        setLocation("LOS ANGELES 75.F");
      }, 2000); // Delay of 2 seconds
    };

    fetchData();

    // Cleanup function (if necessary)
    return () => {
      // Perform any necessary cleanup
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <div className={styles.widget_text}>{date}</div>
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
          <div className={styles.widget_text}>{location}</div>
        </div>
      </div>
      <div>
        <ul className={styles.list_container}>
          <li className={styles.list_item}>NEWS</li>
          <li className={styles.list_item}>FASHION</li>
          <li className={styles.list_item}>LIFESTYLE</li>
          <li className={styles.list_item}>TRAVEL</li>
        </ul>
      </div>
    </div>
  );
}
