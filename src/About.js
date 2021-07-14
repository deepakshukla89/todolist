import React from 'react'
import deepak from "./deepak.png"

const About = () => {

    let photoStyle = {
        width: "150px",
        border: "5px solid rgb(46, 46, 46)",
        borderRadius: "50%"
    }

    return (
        <>
            <div className="container text-center item-center my-5" >
                <img src={deepak} style={photoStyle} alt="BigCo Inc. logo" />
                <h3 className="my-3">Deepak Shukla</h3>
                <p>
                    My Self Deepak Shukla. I am currenty Pursing B.tech From Civil Engineering from MNIT Jaipur. <br />
                    Currently i am learning React.js, so i have made this todo list as a learning project. <br />
                    I am front end web developer. <br />
                    I'm Graphic Designer.

                </p>
                <h4 className="text-warning">Social Media Handle</h4>
                <div className="container">
                    <a to="https://www.linkedin.com/in/deepak-shukla-ab097b1b5/" class="fa fa-linkedin"></a>
                    <a to="https://github.com/deepakshukla89" class="fa fa-github"></a>
                    <a to="https://www.instagram.com/deepak.shukla89/" class="fa fa-instagram"></a>
                    <a to="https://twitter.com/DeepakS72046761?s=09" class="fa fa-twitter"></a>
                    <a to="https://www.youtube.com/channel/UCSrU90BU1cVjgg6XkKh5RLg" class="fa fa-youtube-play"></a>
                    <a to="https://www.facebook.com/profile.php?id=100009403230104" class="fa fa-facebook"></a>
                </div>
            </div>
        </>
    )
}

export default About
