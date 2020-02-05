import React, {Component} from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText} from 'reactstrap';
import "./CardAscended.scss"
import Axios from'axios';

const ApiUrl = 'http://easteregg.wildcodeschool.fr/api/eggs';

export default class CardAscended extends Component {
    constructor(props){
        super(props);
        this.state = {
        dataApi : {eggs: 'Joyeuses Pâques'},
        };
    }
    makeApiCall(){
        Axios.get(`${ApiUrl}`)
        .then((res) => {
            const eggs = res.data.filter(egg => egg.rarity === 'ascended')
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
    return (
            <div className="globaldivfame2">
                
                <Card className='Ascended'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Ascended Egg</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src={this.state.dataApi.image} alt='EGG'/>
                    <CardBody className='CardBot'>
                        {/* <CardText>Born in 1940</CardText> */}
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg collected 3657</CardText>
                    </CardBody>
                </Card>
            </div>

  );
};
}
