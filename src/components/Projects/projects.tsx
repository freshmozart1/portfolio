import React, { useEffect, useRef } from "react";
import "./projects.scss";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//@ts-ignore
import tweChat from '../../assets/twe/twe_chat.png';
//@ts-ignore
import tweStart from '../../assets/twe/twe_start.png';
//@ts-ignore
import tweMockUp from '../../assets/twe/twe_mockup.png';
//@ts-ignore
import tweGiftedChat from '../../assets/twe/twe_gifted_chat.png';
//@ts-ignore
import tweCodeSnippet from '../../assets/twe/twe_code_snippet.png';
//@ts-ignore
import tweTest from '../../assets/twe/twe_test_message.png';
//@ts-ignore
import myFlixHeader from '../../assets/myflix_header.png';
//@ts-ignore
import pokedex from '../../assets/pokedex.png';

export default function Projects() {
    const header = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (header.current) {
                const top = header.current.getBoundingClientRect().top;
                if (top < 1) {
                    header.current.style.fontSize = "1.5rem";
                } else {
                    header.current.style.fontSize = "2.5rem";
                }
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="projectsContainer">
            <h1 ref={header}>Projects</h1>
            <h2>Talk with Everyone</h2>
            <Swiper
                effect={'creative'}
                grabCursor={true}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -1000],
                        opacity: 0
                    },
                    next: {
                        translate: ['100%', 0, 0],
                        opacity: 1
                    }
                }}
                pagination={{ clickable: true }}
                modules={[EffectCreative, Pagination]}
            >
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <p>
                                Talk With Everyone is a chat application, where users can give themselves names and start exchanging messages, without the need of creating a account.
                            </p>
                        </div>
                        <img src={tweChat} alt="Talk with Everyone chat screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Purpose</h3>
                            <p>
                                The purpose of the project is to showcase my JavaScript skills.
                                I created the application as part of my Full-Stack Web Development course at CareerFoundry.com.
                            </p>
                            <h3>Duration</h3>
                            <p>
                                Frontend: Two weeks<br />
                                Backend: One day
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Objective</h3>
                            <p>
                                The objective of this project was to enhance my professional portfolio by adding a mobile app that relies on serverless architecture.
                                The challenge was to create a complete chat application (front- and backend) from scratch.
                            </p>
                            <h3>My Role</h3>
                            <p>
                                I worked alone on this project and was responsible for everything.
                                I occasionally received some help from my tutor at CareerFoundry.
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Tech Stack</h3>
                            <p>
                                <b>Backend:</b><br />
                                Google Firebase Authentication<br />
                                Google Firestore<br />
                                Google Cloud Storage<br />
                                <b>Frontend:</b><br />
                                JavaScript<br />
                                Node.js<br />
                                React Native<br />
                                react-native-gifted-chat<br />
                                react-native-maps
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>Google Firebase Authentication</h3>
                            <p>
                                Before using Firestore, it is necessary to authenticate a user. When a user clicks on „Start Chatting“ Firebase Authentication generates a random user ID and authenticates the user anonymously.
                            </p>
                        </div>
                        <img src={tweStart} alt="Talk with Everyone start screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Google Firestore</h3>
                            <p>I created a Google Firestore database for storing the messages. Firestore is a real-time database that notifies all connected clients, when new data is available.</p>
                            <h3>Google Cloud Storage</h3>
                            <p>
                                Images are stored in a separate Google Cloud Storage Bucket.
                                Buckets are baasic containers in the Google Cloud that store files.
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>Database Structure</h3>
                            <p>
                                The structure of the stored data can be defined in the code of the frontend and is not predefined by the database. The following picture shows how a location message is saved in the database.
                            </p>
                        </div>
                        <img src={tweCodeSnippet} alt="Talk with Everyone code snippet screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>Building the interface</h3>
                            <p>
                                CareerFoundry sent me detailed instructions and mockups that described how the chat applications start screen should look like.
                                I started building the frontend by adding the start screen. I sped up my development process by using the prefabricated React Native components.
                            </p>
                        </div>
                        <img src={tweMockUp} alt="Description of the start screen" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>Building the interface</h3>
                            <p>
                                After I finished the start screen I moved on to develop the chat screen. CareerFoundry did not provide any mockups or design specifications for this screen. That is why I used the basic layout and design that came with react-native-gifted-chat for this screen.
                            </p>
                        </div>
                        <img src={tweChat} alt="Talk with Everyone chat screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>React Native</h3>
                            <p>
                                I used React Native to create the basic structure of the frontend. React Native is a JavaScript library for building user interfaces. It offers a core set of native components like &lt;View&gt;, &lt;Text&gt; and &lt;Image&gt; that map directly to the platforms native UI building blocks.
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>react-native-gifted-chat</h3>
                            <p>
                                react-native-gifted-chat is a extension for React Native that adds a complete chat user interface. I used this extension for the messaging functionality of the app. Whenever a user enters a message and clicks on „Send“, it is saved as a new entry in the Google Firestore database.
                            </p>
                        </div>
                        <img src={tweGiftedChat} alt="Source code that shows react-native-gifted-chat" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>react-native-maps</h3>
                            <p>
                                react-native-maps is a extension for React Native that offers map components. I used this extension to give the users the possibility of exchanging location messages.
                            </p>
                        </div>
                        <img src={tweCodeSnippet} alt="Source code that shows how a location message is saved in the database" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Custom image view</h3>
                            <p>
                                After I finished implementing the chat screen I added a screen that displays a image in full screen, if a user clicks on a image message.
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <h3>Testing & Debuging</h3>
                            <p>React Native comes with a service that allows developers to run and test the app on a emulated device. I used this service to regularly test and debug my code.</p>
                        </div>
                        <img src={tweTest} alt="A screenshot showing a console error message" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>What I learned</h3>
                            <p>
                                How to develop native applications with React Native<br /><br />
                                How to use Google Firebase, Firestore and Cloud Storage Buckets
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Next steps</h3>
                            <p>
                                Fix Bugs<br /><br />
                                Add user registration<br /><br />
                                Add user-to-user communication<br /><br />
                                Add encryption
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Conclusion</h3>
                            <p>
                                React Native is a powerful framework for developing native apps. The project was a fulfilling learning experience. It helped deepen my understanding of the development process and illustrated the complexities of app creation.
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
            <h2>myFlix</h2>
            <Swiper
                effect="creative"
                grabCursor={true}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -1000],
                        opacity: 0
                    },
                    next: {
                        translate: ['100%', 0, 0],
                        opacity: 1
                    }
                }}
                pagination={{ clickable: true }}
                modules={[EffectCreative, Pagination]}
            >
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <p>
                                myFlix is a service, where users can view and upload information about movies. Logged in users can also add movies to their favorites.
                            </p>
                        </div>
                        <img src={myFlixHeader} alt="myFlix screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Tech-Stack</h3>
                            <p>
                                <b>Frontend</b><br />
                                React<br />
                                Bootstrap<br />
                                HTML<br />
                                CSS<br />
                                <b>Backend</b><br />
                                Amazon Web Services<br />
                                MongoDB<br />
                                Node.js<br />
                                Express.js<br />
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
            <h2>Pokedéx</h2>
            <Swiper
                effect="creative"
                grabCursor={true}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -1000],
                        opacity: 0
                    },
                    next: {
                        translate: ['100%', 0, 0],
                        opacity: 1
                    }
                }}
                pagination={{ clickable: true }}
                modules={[EffectCreative, Pagination]}
            >
                <SwiperSlide>
                    <section className="slide">
                        <div className="imageSlideText">
                            <p>
                                Pokedéx is a website, where users can look up information about Pokémon.
                            </p>
                        </div>
                        <img src={pokedex} alt="Pokedéx website screenshot" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="slide">
                        <div className="content">
                            <h3>Tech-Stack</h3>
                            <p>
                                <b>Frontend</b><br />
                                HTML<br />
                                CSS<br />
                                Bootstrap<br />
                                <b>Backend</b><br />
                                <a href="https://pokeapi.co/">PokeAPI.co</a>&nbsp;Rest&nbsp;API<br />
                                Node.js<br />
                            </p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}