import React, { Component } from 'react'
import './AboutTheEgg.scss'

export default class AboutTheEgg extends Component {
    render() {
        return (
            <div className='theEgg' media="screen" >
                <div className="row">
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="whitetext" id="Ring">About the Egg</h2>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="row">
                    <div className="col-12">
                        <section>
                            <div className="card-body">
                                <div className="card">
                                    <div className="card-header text-black">Egg capabilities</div>
                                    <div className="card-body">
                                        <h5 className="card-title">What can our master Roger Rabbit do with the Egg?</h5>
                                        <div className="card-text">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">Feature</th>
                                                        <th scope="col">Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Super Hack</td>
                                                        <td>One Egg to hack all</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Super Dev</td>
                                                        <td>Full stack</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Power</td>
                                                        <td>Destroy the Web</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12">
                        <section>
                            <div className="container-fluid card-margin1">
                                <div className="card sizecardinput">
                                    <div className="card-header text-black">
                                        Why the Egg is awesome?
                                </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-9">
                                            <br />
                                            <br />
                                            <br />
                                                <h5 className="card-title text-center para-egg">The time is money !!!!! Run to catch the only Gold Egg: You have to put money aside to have money in front of you.</h5>
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <p className="card-text text-right"><small className="text-muted"><b>- GOLLRABIT</b></small></p>
                                            </div>
                                            <div className="col-3 ">
                                                <a href="https://placeholder.com"></a>
                                                <img className="widthimg"
                                                    src="http://www.clker.com/cliparts/p/H/G/T/e/x/white-rabbit-hi.png" alt="placeholder.com" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
}
