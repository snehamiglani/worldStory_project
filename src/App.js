import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import PostsSection from "./Components/PostsSection/PostsSection";
import AdviceSection from "./Components/AdviceSection/AdviceSection";
import Footer from "./Components/Footer/Footer";
import BottomBar from "./Components/BottomBar/BottomBar";

export default function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <HeroSection />
      {/*-----------------Breaking news section----------------- */}
      <section style={{ padding: "0 11vw 0 11vw" }}>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontWeight: "700", color: "#d00494", fontSize: "1.5rem" }}
          >
            Breaking News :
          </div>
          <div>
            &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </section>

      <PostsSection />
      <AdviceSection />
      <Footer />
      <BottomBar />
    </div>
  );
}
