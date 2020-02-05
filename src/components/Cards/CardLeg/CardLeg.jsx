import React, {Component} from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText,} from 'reactstrap';
import "./CardLeg.scss"
import Axios from'axios';

const ApiUrl = 'http://easteregg.wildcodeschool.fr/api/eggs';

export default class CardLeg extends Component {
    constructor(props){
        super(props);
        this.state = {
        dataApi : {eggs: 'Joyeuses Pâques'},
        };
    }
    makeApiCall(){
        Axios.get(`${ApiUrl}`)
        .then((res) => {
            const eggs = res.data.filter(egg => egg.rarity === 'legendary')
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
                <Card className='Legendary'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Legendary Egg</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src={this.state.dataApi.image} alt='EGG'/>
                    <CardBody className='CardBot'>
                        {/* <CardText>Born in 1940</CardText> */}
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg collected 57</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>

  );
};
}
