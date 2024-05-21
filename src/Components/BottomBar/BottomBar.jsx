import React, { useState } from "react";
import styles from "./BottomBar.module.css";

export default function BottomBar() {
  // Adding state to track the selected section
  const [selectedSection, setSelectedSection] = useState("");

  // Handler to update the selected section
  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className={styles.container}>
      <div style={{ fontWeight: "500" }}>
        @ COPYRIGHT BY EXAMPLE.COM 2017. ALL RIGHTS RESERVED
      </div>
      <div className={styles.list}>
        <div className={styles.list_item} onClick={() => handleClick('NEWS')}>
          NEWS
        </div>
        <div className={styles.list_item} onClick={() => handleClick('FASHION')}>
          FASHION
        </div>
        <div className={styles.list_item} onClick={() => handleClick('LIFESTYLE')}>
          LIFESTYLE
        </div>
        <div className={styles.list_item} onClick={() => handleClick('TRAVEL')}>
          TRAVEL
        </div>
      </div>
      {selectedSection && (
        <div className={styles.message}>
          You selected: {selectedSection}
        </div>
      )}
    </div>
  );
}
