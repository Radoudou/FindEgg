import React, { Component } from 'react';
import EggStory from './EggStory'
import './SecretStory.scss';

export default class SecretStory extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="skySecret">
                    <div className="cloudSecret">
                        <div className="cloud1Secret"></div>
                        <img src='https://nsa40.casimages.com/img/2019/04/18/190418095705899893.png' alt='The Best Egg of the World'/>
                        <div className="cloud0Secret"></div>
                        <EggStory />
                        <img src='https://nsa40.casimages.com/img/2019/04/18/190418095705899893.png' alt='The Best Egg of the World'/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
