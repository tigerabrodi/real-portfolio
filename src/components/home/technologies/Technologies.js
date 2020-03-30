import React from 'react';
import image from "../../../assets/portfolio.jpg";
import "./Technologies.scss"


const Technologies = () => {
    return (
        <section className="technologies" data-aos="fade-up-right" data-aos-duration="1300">
        <div className="technologies__wrapper">
            <div className="technologies__box">
                <h1 className="technologies__title">About Me</h1>
                <p className="technologies__text">Hello! I'm Tiger, a software developer based in Germany, North Rhine-Westphalia who enjoys building beautiful things that makes people life easier. I love learning new technologies and digging deep into complex topics. I am currently learning Angular. After that, next step would be to to dig deeper into Javascript and learn some advanced topics. Few things I wanna learn in the future are Java, Dart & Flutter and C++. I would also love to dig deeper into Algorithms & Data Structures and take part in competitions. </p>
                <p className="technologies__introduction">Here are technologies I've worked with: </p>
                <div className="technologies__technology">
                    <li className="technologies__technology__tech">React</li>
                    <li className="technologies__technology__tech">Javascript</li>
                    <li className="technologies__technology__tech">Node</li>
                    <li className="technologies__technology__tech">Express</li>
                    <li className="technologies__technology__tech">Mongoose</li>
                    <li className="technologies__technology__tech">HTML</li>
                    <li className="technologies__technology__tech">(S)CSS</li>
                    <li className="technologies__technology__tech">Redux</li>
                    <li className="technologies__technology__tech">Bootstrap</li>
                </div>
            </div>
            <div className="technologies__img__wrapper">
                        <img src={image} alt="tigers face" className="technologies__image"/>
            </div>
            </div>
        </section>
    );
}

export default Technologies;
