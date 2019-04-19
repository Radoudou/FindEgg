/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <React.Fragment>
        <div id="attribution"> <a href="https://is.gd/hQLAFp">Walid, Jean, Isaure, Radouane</a></div>
            <div className="sky">
                <div className="clouds">
                    <div className="cloud30"></div>
                    <div className="cloud29"></div>
                    <div className="cloud28"></div>
                    <div className="cloud27"></div>
                    <div className="cloud26"></div>
                    <div className="cloud25"></div>
                    <div className="cloud24"></div>
                    <div className="cloud23"></div>
                    <div className="cloud22"></div>
                    <div className="cloud21"></div>
                    <div className="cloud20"></div>
                    <div className="cloud19"></div>
                    <div className="cloud18"></div>
                    <div className="cloud17"></div>
                    <div className="cloud16"></div>
                    <div className="cloud15"></div>
                    <div className="cloud14"></div>
                    <div className="cloud13"></div>
                    <div className="cloud12"></div>
                    <div className="cloud11"></div>
                    <div className="cloud10"></div>
                    <div className="cloud9"></div>
                    <div className="cloud8"></div>
                    <div className="cloud7"></div>
                    <div className="cloud6"></div>
                    <div className="cloud5"></div>
                    <div className="cloud4"></div>
                    <div className="cloud3"></div>
                    <div className="cloud2"></div>
                    <div className="cloud1"></div>
                    <div className="cloud0"></div>
                </div>
                <div className="title ">
                    <h1>Find the Eggious</h1>
                    <img alt="egg" className="element home-egg" src="https://trello-attachments.s3.amazonaws.com/5cb847b18973ce46369e81cd/626x626/c5bde99b68ccaf28a66a6bb53a24d52c/EggHoimepage.png" />
                </div>
                <Link to="/Easter"><img id="run-rabbit" alt="rabbit" src="https://thumbs.gfycat.com/ExcellentCompassionateBernesemountaindog-max-1mb.gif" /></Link>
            </div>
        </React.Fragment>
    );
}