import React from "react";
import ChapterCard from "./ChapterCard.tsx";
import "./../../styles/Home.css";
import Navbar from "../../Components/Navbar.jsx"
import Header from "../../Components/Header.jsx"
import AIAssistantDialogueBox from "../../Components/AIAssistantDialogueBox.jsx";

const Home = () => {
  // Define an array of chapter objects with titles and image URLs
  const chapters = [
    {
      title: "Equality",
      imgURL: "https://cdn-icons-png.flaticon.com/512/9904/9904262.png",
      enabled: true,
    },
    {
      title: "Freedom",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4147/4147869.png", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Exploitation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Religin",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Education",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Constitution",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },

    // Add more chapter objects as needed
  ];

  // Create an array of chapter components with calculated margins and image URLs
  const chapterComponents = chapters.map((chapter, index) => {
    return (
      <ChapterCard
        key={index}
        title={chapter.title}
        imgURL={chapter.imgURL}
        enabled={chapter.enabled}
        offset={index}
        size={chapters.length}
      />
    );
  });

  return (
    <>
      <Header bg="#DFEDFD" txtcolor="#67A9F6" headertitle="Hey User name" />
      <div className="gradient"></div>
      <div className="container">{chapterComponents}</div>
      <AIAssistantDialogueBox bottom={true} left={true} />
      <Navbar />
    </>
  );
};

export default Home;
