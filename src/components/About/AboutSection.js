import React from 'react'
import "./about.css";
import photo from "../../resources/img/me.jpg";


function AboutSection() {
  return (
    <section className="about">
        <div className="backdrop">
            <div class="horisontal-line">
                <h2 class="about__title title">About me</h2>
            </div>

            <div class="about__contaioner container">
                    <div class="about__photo"> <img src={photo} alt="Dartovich Anastasia" />  </div>
                    <div class="about__text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus atque nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus atque nihil! Esse consequatur, porro, debitis ipsam velit deserunt magnam et asperiores ipsum beatae veritatis rem perspiciatis corporis sapiente autem?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus atque nihil! Esse consequatur, porro, debitis ipsam velit deserunt magnam et asperiores ipsum beatae veritatis rem perspiciatis corporis sapiente autem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus atque nihil! Esse consequatur, porro, debitis ipsam velit deserunt magnam et asperiores ipsum beatae veritatis rem perspiciatis corporis sapiente autem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus atque!                        
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
