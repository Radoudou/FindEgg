import React, { Component } from 'react'
import './Reward.scss'
import CardDavid from '../../Cards/CardDavid/CardDavid'
import CardCaro from '../../Cards/CardCaro/CardCaro'
import CardLeg from '../../Cards/CardLeg/CardLeg'
import CardAscended from '../../Cards/CardAscended/CardAscended';
import CardExotic from '../../Cards/CardExotic/CardExotic';


export default class Reward extends Component {
    render() {
        return (
            <div className="theReward">
                <section className="bg-green">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="whitetext" id="reward">Most Wanted Eggs !</h2>
                        </div>
                        <div className="row no-gutters">
                        <div className="col-xl-3 offset-1  col-sm-12 ">
                            <CardExotic/>
                            </div>
                            <div className="col-xl-3 offset-1 col-sm-12">
                            <CardAscended/>
                            </div>
                            <div className="col-xl-3 offset-1 col-sm-12">
                            <CardLeg/>
                            </div>
                        </div>
                        
                        <div className="row no-gutters">
                            <div className="col-1 col-xl-4"></div>
                            <div className="col-1 offset-4"></div>
                        </div>
                    </div>
                </section>
                <section className="bg-sombre">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="whitetext" id="reward">How do I get my Egg ?</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-9">
                                <p className="whitetext">Dans votre reflet, vous le trouverez et le mangerez !</p>
                            </div>
                            <div className="offset-1"></div>
                            <div className="col-xl-2">
                                <a href="hhttps://placeholder.com"><img width="200" src="https://thumbs.gfycat.com/ViciousEarlyBactrian-max-1mb.gif" alt="placeholder.com" /></a>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-1 col-xl-4"></div>
                            <div className="col-1 offset-4"></div>
                        </div>
                    </div>
                </section>
                <section className="bg-clair">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="whitetext" id="reward">Legendary egg hunter</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-sm-6 col-12">
                            <CardDavid/>
                            </div>
                            <div className="col-sm-6 col-12">
                            <CardCaro/>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-1 col-xl-4"></div>
                            <div className="col-1 offset-4"></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
