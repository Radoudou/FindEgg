import React, {Component} from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import "./CardExotic.scss"
import Axios from'axios';

const ApiUrl = 'http://easteregg.wildcodeschool.fr/api/eggs';

export default class CardExotic extends Component {
    constructor(props){
        super(props);
        this.state = {
          dataApi : {eggs: 'Joyeuses Pâques'},
        };
    }
    makeApiCall(){
        Axios.get(`${ApiUrl}`)
        .then((res) => {
            const eggs = res.data.filter(egg => egg.rarity === 'exotic')
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
        <div>
            <div className="globaldivfame">
                
                <Card className='Exotic'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3"> Exotic Egg</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src={this.state.dataApi.image} alt='fuck'/>
                    <CardBody className='CardBot'>
                        {/* <CardText>Born in 1940</CardText> */}
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg collected 93657</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>

  );
};
}