import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {

    const handleClick = () => {
        return <Redirect to="/auth"/>
    }
    return(
        <div className="home-container">
            <div className="jumbo-text-container">
            <p className="jumbo-text">Hi <span role="img" aria-label="emoji">👋</span>,</p>
                <p className="jumbo-text">I am Aniruddh.</p>
                <p className="jumbo-text">Welcome to</p>
                <p className="jumbo-text">my diary.</p>
            </div>
            <div className="button">
            <p id="button-text">Start Reading</p>
                <div className="button-wrapper"></div>
            </div>
            <div className="info">
                <p className="info-text">More About Me</p>
                <div className-="info-des-wrapper">
                    <p className="info-des">I am Aniruddh. Aniruddh Mukherjee. Web dev, graphic designer and an avid gamer.</p>
                    <p className="info-des">
                        I am from the city of Kolkata, India. Apart 
                        from quirky jokes, I have interest in 3D design, and the human psychology.</p>
                    <p className="info-des">Big fan of cosmology books and RPGs.</p>
                </div>
            </div>
            <div className="button">
            <p id="button-text-d">Drop me an email<span role="img" aria-label="emoji">✉️</span></p>
                <div className="button-wrapper"></div>
            </div>
            <div className="blu-area">
                <div className="blu-tit">Why This Site</div>
                    <div className="blu-text-wrapper">
                        <p className="blu-text">
                            In the 2010 movie ‘The Social Network’, Zuckerberg builds a blog called ZuckNet. And while watching the movie, I thought it would be really cool to have something like that for myself. And, that is something that really got me into learning to code.
                        </p>
                        <p className="blu-text">
                        So, this site is to keep that promise that I made to myself a long time ago <span role="img" aria-label="emoji">👏</span> 
                        </p>
                    </div>
                    <div  onClick={handleClick()} className="blu-button">
                        <p  id="button-text-blu">LOGIN AS ADMIN <span role="img" aria-label="emoji"> 🔐</span></p>
                            <div  className="blu-button-wrapper"></div>
                    </div>
                
            </div>
        </div>
    )
}

export default Home;