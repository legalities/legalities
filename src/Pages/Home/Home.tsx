import React from "react";
import Chapter from "./Chapter.tsx";
import "./../../styles/Home.css";

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
      title: "Exploitation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Exploitation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },
    {
      title: "Exploitation",
      imgURL: "https://cdn-icons-png.flaticon.com/512/4110/4110539.png ", // Replace with the actual image URL
      enabled: false,
    },

    // Add more chapter objects as needed
  ];

  // Create an array of chapter components with calculated margins and image URLs
  const chapterComponents = chapters.map((chapter, index) => {
    return (
      <Chapter
        key={index}
        title={chapter.title}
        imgURL={chapter.imgURL}
        enabled={chapter.enabled}
        offset={index}
      />
    );
  });

  return (
    <>
      <div className="gradient"></div>
      <div className="container">{chapterComponents}</div>
    </>
  );
};

export default Home;
