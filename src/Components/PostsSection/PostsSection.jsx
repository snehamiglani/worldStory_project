import React from "react";
import styles from "./PostsSection.module.css";

const posts = [
  "/rectangle_5.jpg",
  "/rectangle_6.jpg",
  "/rectangle_7.jpg",
  "/rectangle_8.jpg",
  "/rectangle_9.jpg",
  "/rectangle_10.jpg",
];

const interestingPosts = [
  "/rectangle_11.jpg",
  "/rectangle_12.jpg",
  "/rectangle_13.jpg",
  "/rectangle_14.jpg",
  "/rectangle_15.jpg",
];

export default function PostsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.latest_post_container}>
        <div className={styles.header}>LATEST POST</div>
        <div className={styles.bar}></div>
        {posts.map((post, i) => {
          return <LatestPost imageUrl={post} key={i} />;
        })}
      </div>
      <div className={styles.secondary_section}>
        <div className={styles.secondary_primary_container}>
          <div className={styles.header}>INTERESTING</div>
          <div className={styles.bar}></div>
          <div>
            {interestingPosts.map((post, i) => {
              return <InterestingPost imageUrl={post} key={i} />;
            })}
          </div>
        </div>
        <div>
          <div className={styles.header}>INTERESTING</div>
          <div className={styles.bar}></div>
          <div className={styles.secondary_secondary_container}>
            <img src="/rectangle_16.jpg" alt="" className={styles.image} />
            <div style={{ position: "relative" }}>
              <div className={styles.interesting_card}>
                <div style={{ fontWeight: "700", fontSize: "1rem" }}>
                  UPCOMING WEB DESIGN CONFERENCES
                </div>
                <div className={styles.badge_container}>
                  <div className={styles.badge}>FASHION</div>
                  <div className={styles.badge}>LIFESTYLE</div>
                  <div style={{ fontWeight: "600" }}>03. JUNE 2019</div>
                </div>
                <div style={{ fontWeight: "600", color: "grey" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
            </div>
            <img
              src="/layer_25.png"
              alt=""
              style={{ marginTop: "8rem", cursor: "pointer" }}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestPost({ imageUrl }) {
  return (
    <>
      <div className={styles.latest_post_card}>
        <img src={imageUrl} alt="" style={{ objectFit: "cover" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2rem",
          }}
        >
          <div className={styles.secondary_header}>
            SED UT PERSICIATIS DE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM
          </div>
          <div className={styles.badge_container}>
            <div className={styles.badge}>FASHION</div>
            <div className={styles.badge}>LIFESTYLE</div>
            <div style={{ fontWeight: "600" }}>03. JUNE 2019</div>
          </div>
          <div style={{ fontWeight: "600", color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "lightgrey",
          margin: "2rem 0 2rem 0",
        }}
      />
    </>
  );
}

function InterestingPost({ imageUrl }) {
  return (
    <>
      <div style={{ display: "flex", cursor: "pointer" }}>
        <img
          src={imageUrl}
          alt=""
          style={{ objectFit: "cover", marginRight: "1rem" }}
        />
        <div>
          <div className={styles.interesting_post_header}>
            LATEST FROM THE WEB FOR YOU
          </div>
          <div className={styles.badge}>FASHION</div>
          <div>
            <div style={{ fontWeight: "600" }}>03. JUNE 2019</div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "lightgrey",
          margin: "2rem 0 2rem 0",
        }}
      />
    </>
  );
}
