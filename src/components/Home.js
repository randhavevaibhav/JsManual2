import React from "react";
import "../styles/Home.css";

import { useState } from "react";

import printCodeIMG from "../assets/PrintCode.png";
import TopicIMG from "../assets/Topics.png";
import AddNewTopicIMG from "../assets/AddNewTopic.png";
import SideBarIMG from "../assets/SideBar.png";

import printCodeIMGM from "../assets/PrintCodeM.png";
import TopicIMGM from "../assets/TopicsM.png";
import SideBarIMGM from "../assets/SideBarM.png";

import CardSlider from "../components/CardSlider"

function Home() {
  const [screenWidth, setScreenWidth] = useState(650);
  const getScreenWidth = () => {
    setScreenWidth(window.screen.width);
  };
  let firstIMG = screenWidth > 620 ? SideBarIMG : SideBarIMGM;
  let secondIMG = screenWidth > 620 ? printCodeIMG : printCodeIMGM;
  let thirdIMG = screenWidth > 620 ? TopicIMG : TopicIMGM;
  //let fourthIMG = screenWidth>620?AddNewTopicIMG:AddNewTopicIMGM;
  let fourthIMG = AddNewTopicIMG;

  const cards = [
    {
      title: "Side Bar",
      description: `Browse to difrrent topics with side bar`,
      image: firstIMG,
    },
    {
      title: "Print Code",
      description: `Add your code to text area.
        Click on the Print Code button. Then download your formatted code in PDF format.`,
      image: secondIMG,
    },
    {
      title: "JS Topics",
      description: `Learn various Js topics from code snippets. Copy code snippits if needed.`,
      image: thirdIMG,
    },
    {
      title: "Add new Topics",
      description: `Add new JS topic which will appear  in the JS topic list`,
      image: fourthIMG,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const isAtFirstSlide = currentIndex === 0;
  const isAtLastSlide = currentIndex === cards.length - 1;

  return (
    <>
      {window.addEventListener("resize", getScreenWidth)}
      <div className='Home-container-wrapper'>
      <div className='home-container'>
      <CardSlider cards={cards} />
      </div>

      
    </div>

      {/* <div className="c-conatinaer-wrapper">
        <div className="c-conatinaer">
         
          <div className="prev-button">
            <button onClick={goToPrevSlide} disabled={isAtFirstSlide}>
              Prev
            </button>
          </div>

          <div className="c-main-container">
            <h2>{cards[currentIndex].title}</h2>
            <img src={cards[currentIndex].image} alt="feature-img" />
            <p>{cards[currentIndex].description}</p>
          </div>

          <div className="next-button">
            <button onClick={goToNextSlide} disabled={isAtLastSlide}>
              Next
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
