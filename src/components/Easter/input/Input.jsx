import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './input.scss';

class InputContact extends Component {
    render() {
        return (
            <section className="bg-green" media="screen">
                <div className="container-fluid">
                    <Row>
                        <Col lg="6">
                        <div className="lolo-container">
                            <h2 className="lolo"><img alt="ballon1" height="60" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Easter-Pictures-PNG/Purple_Easter_Egg_with_Flowers_PNG_Picture.png?m=1507172106&fbclid=IwAR1OvBWDBvgn78uct_LxtFKI09Ytv1b5AybQIaxtkSmoY3AWII_hYDSvRL0 " /> Contact us <img alt="ballon" height="60" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Easter-Pictures-PNG/Purple_Easter_Egg_with_Flowers_PNG_Picture.png?m=1507172106&fbclid=IwAR1OvBWDBvgn78uct_LxtFKI09Ytv1b5AybQIaxtkSmoY3AWII_hYDSvRL0   " /></h2>
                        </div>
                        <Container className="inputform">
                            <div className="App">
                                <div className="padding-input">
                                    <form action="/action_page.php">
                                        <label>First Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                        <label>Last Name</label>
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                        <label>Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email" />
                                        <label>Subject</label>
                                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </Container>
                        </Col>
                        <Col lg="5">
                            <div className="title-image-content">
                                <h2 className="title-hint">Hint</h2>
                                <img className="wcs-img" src="https://wildcodeschool.fr/wp-content/uploads/2018/03/LE-PATIO-openspace.png?fbclid=IwAR2U6W6Hntu8x6UbwvOgpNoTd7IZzYjilslVIBqOzQ8-w1xLCo4wf928x-4" alt="WSC" />
                            </div>
                            <Col></Col>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default InputContact;