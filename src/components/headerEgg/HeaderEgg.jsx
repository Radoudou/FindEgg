import React, { Component } from 'react';
import './AleatoirEgg.css';
import Axios from 'axios';

const ApiUrl = 'http://easteregg.wildcodeschool.fr/api/eggs';

export default class AleatoirEgg extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataApi : {eggs: 'Joyeuses Pâques'},
        };  
    }
    makeApiCall(){
        Axios.get(`${ApiUrl}`)
        .then((res) => {
            const eggs = res.data.filter(egg => egg.caliber === 'M')
            const random = eggs[Math.floor(Math.random() * eggs.length)]
            this.setState({dataApi: random})
        })
        .catch((error) => console.log(error));
        console.log(this.state.data);
    };
    componentDidMount() {
    this.makeApiCall();
    }
    render(){
        console.log(this.state)
        return (
            <React.Fragment>
                <h1>Contenu à Ajouter</h1>
                <div className="aleaEgg">
                    <img src={this.state.dataApi.image} alt='des oeufs ta mère' />
                </div>
            </React.Fragment>
        );
    }
}
