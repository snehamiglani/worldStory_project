import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.secondary_container}>
        <div className={styles.header}>ABOUT US</div>
        <div className={styles.bar}></div>
        <div style={{ fontWeight: "600", color: "grey" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </div>
        <ContactIcons />
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "gray",
            margin: "4rem 0 4rem 0",
          }}
        />
        <img
          src="/social_media_icons.png"
          alt=""
          className={styles.social_icon_image}
        />
      </div>

      <div className={styles.secondary_container}>
        <div className={styles.header}>POPULAR POST</div>
        <div className={styles.bar}></div>
        <PopularPost imageUrl="/rectangle_15.jpg" />
        <PopularPost imageUrl="/rectangle_20.jpg" />
        <PopularPost imageUrl="/rectangle_21.jpg" />
      </div>

      <div style={{ width: "100%" }}>
        <div className={styles.header}>NEWSLETTER</div>
        <div className={styles.bar}></div>
        <input
          className={styles.email_input}
          type="text"
          placeholder="Enter Your Email Address"
        />
        <div className={styles.button}>SUBSCRIBE</div>
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "gray",
            margin: "2.5rem 0 2.5rem 0",
          }}
        />
        <div className={styles.header}>CATEGORIES</div>
        <div className={styles.bar}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.list}>
            <li className={styles.list_item}>BUSINESS</li>
            <li className={styles.list_item}>ENTERTAINMENT</li>
            <li className={styles.list_item}>FOOD & CUISINE</li>
            <li className={styles.list_item}>LIFESTYLE</li>
          </div>
          <div className={styles.list} style={{ marginRight: "8rem" }}>
            <li className={styles.list_item}>SPORT</li>
            <li className={styles.list_item}>TECH</li>
            <li className={styles.list_item}>TRAVEL</li>
            <li className={styles.list_item}>URBAN</li>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactIcons() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
          cursor: "pointer",
        }}
      >
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
        <div style={{ fontSize: "0.9rem", marginLeft: "1rem" }}>
          123, MAIN STREET, YOUR CITY, <br /> NEW YORK 789456
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
          cursor: "pointer",
        }}
      >
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
        </div>
        <div style={{ fontSize: "0.9rem", marginLeft: "1rem" }}>
          +01 2345 67890 <br /> +01 2345 67890
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
          cursor: "pointer",
        }}
      >
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
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div style={{ fontSize: "0.9rem", marginLeft: "1rem" }}>
          EXAMPLE@MAIL.COM <br /> WWW.EXAMPLE.COM
        </div>
      </div>
    </>
  );
}

function PopularPost({ imageUrl }) {
  return (
    <>
      <div style={{ display: "flex", cursor: "pointer" }}>
        <img
          src={imageUrl}
          alt=""
          style={{ objectFit: "cover", marginRight: "1rem" }}
        />
        <div>
          <div className={styles.post_header}>LATEST FROM THE WEB FOR YOU</div>
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
          backgroundColor: "grey",
          margin: "2rem 0 2rem 0",
        }}
      />
    </>
  );
}
