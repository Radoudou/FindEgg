import React, { Component } from 'react'
import './AboutTheEgg.scss'

export default class AboutTheEgg extends Component {
    render() {
        return (
            <container className='theEgg' >
                <section className="bg-sombre" media="screen">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="whitetext" id="Ring">About the ring</h2>
                        </div>
                        <section>
                            <div className="card-body">
                                <div className="card">
                                    <div className="card-header text-black">Ring capabilities</div>
                                    <div className="card-body">
                                        <h5 className="card-title">What can our master Sauron do with the ring?</h5>
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
                                                        <td>Main</td>
                                                        <td>One ring to rule them all</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Invisibily</td>
                                                        <td>You can't see me</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"></th>
                                                        <td>Power</td>
                                                        <td>Destroy the world</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section>
                        <div className="container-fluid card-margin1">
                            <div className="card sizecardinput">
                                <div className="card-header text-black">
                                    Why the ring is awesome?
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-9">
                                            <h5 className="card-title text-center fontprecious">my preciooooooooouussssssssss!!! hrk, hrk,
                                                we want our
                                    precioooooouuussssssss!!</h5>
                                            <p className="card-text text-right"><small className="text-muted"><b>- Gollum</b></small></p>
                                        </div>
                                        <div className="col-3 "><a href="https://placeholder.com"></a><img className="widthimg"
                                            src="http://www.clker.com/cliparts/p/H/G/T/e/x/white-rabbit-hi.png" alt="placeholder.com" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </container>
        )
    }
}
