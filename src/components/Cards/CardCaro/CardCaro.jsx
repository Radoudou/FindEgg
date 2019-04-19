import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';
import "./CardCaro.scss"
import { Container } from 'reactstrap';

const CardCaro = (props) => {
    return (
        <Container className="contain-card1">
            <div className="globaldivfame">
                <Card className='CardGlobal'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Manager Bunny</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" alt="card" src="https://i.ibb.co/DgKhGv3/Caro.png" />
                    <CardBody className='CardBot'>
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg Managed 93657</CardText>
                    </CardBody>
                </Card>
            </div>
        </Container>
    );
};

export default CardCaro;