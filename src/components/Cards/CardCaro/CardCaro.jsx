import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardSubtitle } from 'reactstrap';
import "./CardCaro.css"

const CardCaro = (props) => {
    return (
        <div>
            <div className="globaldivfame">
               
                <Card className='CardGlobal'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Manager Bunny</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src="https://i.ibb.co/DgKhGv3/Caro.png" />
                    <CardBody className='CardBot'>
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg Managed 93657</CardText>
                    </CardBody>
                </Card>
            </div>
            
        </div>

  );
};

export default CardCaro;