import React from "react";

const Portfolio = () => {
    return(
        <div>
            <section className="portfolio">
                <div>
                    <h3>Project Portfolio</h3>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://sheltered-harbor-22094.herokuapp.com/">
                            <img src="../../assets/JATE-img.png" alt="JATE"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/hghe95/mod19-text-editor"></a>
                        </div>
                        <div className="project-desc">
                            <h4> JATE: Just Another Text Editor</h4>
                            <p>
                                A browser-based text editor that is designed to be used with or without internet. It's main function is to serve as a place for developers to create code.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://sleepy-chamber-71078.herokuapp.com/">
                            <img src="../../assets/Readit-img.png" alt="ReadIt"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/tonytran97/ReadIt"></a>
                        </div>
                        <div className="project-desc">
                            <h4> ReadIt</h4>
                            <p>
                                A model-view-controller or MVC type of website that allows users to write about and rate their favorite books. The overall tone of this website is much more lax compared to other book review websites.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://jleebootcamp.github.io/smokesignal/">
                            <img src="../../assets/SmokeSignal-img.png" alt="Smoke-Signal"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/jleebootcamp/smokesignal"></a>
                        </div>
                        <div className="project-desc">
                            <h4> Smoke Signal</h4>
                            <p>
                                A map-based web app that shows the locations of recent crimes reported within the city of Seattle. Created with HTML, CSS, and web-based APIs.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://hghe95.github.io/HW-3/">
                            <img src="../../assets/BasicUI.png" alt="Password-generator"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/hghe95/HW-3"></a>
                        </div>
                        <div className="project-desc">
                            <h4> Password Generator</h4>
                            <p>
                                An app made with HTML, CSS, and Javascript. As the name implies, it randomly creates a password when prompted by the user.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://arcane-cove-36980.herokuapp.com/">
                            <img src="../../assets/BookSearchEngine.png" alt="book search enginge"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/hghe95/mod21-book-search-engine"></a>
                        </div>
                        <div className="project-desc">
                            <h4>Book Search Engine</h4>
                            <p>
                                A MERN project that uses a Google Books API with a RESTful API that has been refactored to be a GraphQL API built with an Apollo Server.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="project">
                    <section className="project-info">
                        <div className="project-img">
                            <a href="https://sau100.herokuapp.com/">
                            <img src="../../assets/SAU.png" alt="sapien-university"/>
                            </a>
                        </div>
                        <div className="project-repo">
                            <a href="https://github.com/ManuelaKenna/SapienAestheticUniversity"></a>
                        </div>
                        <div className="project-desc">
                            <h4> Sapien Aesthetic University </h4>
                            <p>
                                Sapien University is an online platform for skin care industry professionals and anyone that wants to learn more. It is a trusted space where these professionals can come to connect to mentor, teach, and learn. Some key features our website offers is that the instructors are able to post, learn, and sell their video content. It can be as simple as a blog style article to a demonstrational video.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;