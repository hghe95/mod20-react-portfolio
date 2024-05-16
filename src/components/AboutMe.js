import React from `react`;
import profilePicture from `../../assets/profile_pic`;

const AboutMe = () => {
    return (
        <section>
            <div>
                <h1>
                    About Henry
                </h1>
            </div>
            <div>
                <div>
                    <img src={profilePicture} alt="profile-picture" />
                </div>
                <p>
                    Henry He is an emerging web developer who is currently completing a Fullstack web developer bootcamp through the University of Washington and Trilogies. He graduated from Western Washington University in 2019 with a BA in Geography and a minor in GIS. Currently he is living in his hometown of Seattle, WA. In his free time, Henry enjoys playing ultimate frisbee, volleyball, going on long walks and hikes, and is an avid gamer.
                </p>
            </div>
        </section> 
    )
}

export default AboutMe;