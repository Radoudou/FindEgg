import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardSubtitle } from 'reactstrap';
import "./CardDavid.scss"

const CardDavid = (props) => {
    return (
        <container className="contain-card2">
            <div className="globaldivfame">
                {/* <Card>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle>Duracell Rabbit</CardSubtitle>
                    </CardBody>
                    <img id='cardfame' width="100px" src="https://www.duracell.fr/app/themes/duracell/img/home/bunny-history.png" />
                    <CardBody>
                        <CardText>Born in 1973</CardText>
                    </CardBody>
                    <CardBody>
                        <CardText>Egg collected 93657</CardText>
                    </CardBody>
                </Card> */}
                <Card className='CardGlobal'>
                    <CardBody className='CardTop'>
                        <CardTitle></CardTitle>
                        <CardHeader tag="h3">Former Bunny</CardHeader>
                    </CardBody>
                    <img id='cardfame' width="150px" src="https://i.ibb.co/8K0f5YD/David.png" />
                    <CardBody className='CardBot'>
                        {/* <CardText>Born in 1940</CardText> */}
                    </CardBody>
                    <CardBody className='CardBot'>
                        <CardText className='CardEgg'>Egg Formed 93657</CardText>
                    </CardBody>
                </Card>
            </div>
            {/* <Card className='CardLeg'>
        <CardHeader tag="h3">Bugs Bunny</CardHeader>
        <CardBody className='CardBodyLeg'>
            <img className='ImageLeg' width="150px" src="https://i.ibb.co/P5HHC1x/Bugsbunny.png" />
          <CardText>9768 eggs collected</CardText>
        </CardBody>

        <CardFooter className="text-muted">Fcuk you</CardFooter>
        
      </Card> */}
        </container>

  );
};

export default CardDavid;