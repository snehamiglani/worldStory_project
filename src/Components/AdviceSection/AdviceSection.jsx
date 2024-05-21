import React, { useState, useEffect } from "react";
import styles from "./AdviceSection.module.css";

export default function AdviceSection() {
  // Using useState hook to manage local state for text
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute");

  // Using useEffect hook to simulate text updates after a certain period
  useEffect(() => {
    const newText = "New advice text goes here...";
    const interval = setInterval(() => {
      setText(newText);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array to run effect only once

  return (
    <div className={styles.container}>
      <div className={styles.header}>ADVICES FROM OUR DEDICATED AUTHORS</div>
      <div className={styles.bar}></div>
      <div style={{ fontWeight: "600", color: "grey" }}>
        {text}
      </div>
      <div className={styles.card_container}>
        <PostCard imageUrl={"/rectangle_17.jpg"} />
        <PostCard imageUrl={"/rectangle_18.jpg"} />
        <PostCard imageUrl={"/rectangle_19.jpg"} />
      </div>
    </div>
  );
}

function PostCard({ imageUrl }) {
  // Using useState hook to manage local state for image URL
  const [image, setImage] = useState(imageUrl);

  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div style={{ backgroundColor: "white", padding: "1rem" }}>
        <div className={styles.card_header}>
          UPCOMING WEB DESIGN
          <br /> CONFERENCES
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "600" }}>03. JUNE 2019</div>
          <div style={{ display: "flex" }}>
            <div className={styles.badge}>FASHION</div>
            <div className={styles.badge}>LIFESTYLE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
