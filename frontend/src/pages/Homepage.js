import Container from 'react-bootstrap/Container';
import {Fade, Row} from 'react-bootstrap';
import Canvas from "../components/Canvas";
import '../styles/styles.css';

function Homepage() {
    return (<div>
        <Canvas className="behind" style={{'z-index': -99}}/>
        <Container className="p-4 align-content-center min-vw-100">
            <Fade in={true} unmountOnExit={true} appear={true}>
                <Row className="text-white">
                    <h1 className="header main centered">Hi, I'm Matt</h1>
                    <p className="main centered">👋 I'm a software developer based in Bristol</p>
                </Row>
            </Fade>
            <div>
                <Fade in={true} unmountOnExit={true} appear={true}>
                    <div className="pt-4 pb-4 h-25 centered">
                        <img src="/static/matt.jpeg"
                             alt="Me"
                             className="portrait align-content-center"
                        />
                    </div>
                </Fade>
                <Fade in={true} unmountOnExit={true} appear={true}>
                    <div className="pb-1 centered">
                        <a href="https://github.com/MattBarkway" target="_blank" rel="noreferrer" className="p-2">
                            <img src="/static/github.png"
                                 alt="GitHub logo"
                                 className="social"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/matthew-barkway-8824ab168/" target="_blank" className="p-2"
                           rel="noreferrer">
                            <img src="/static/linkedin.png"
                                 alt="GitHub logo"
                                 className="social"
                            />
                        </a>
                    </div>
                </Fade>
            </div>
        </Container>
    </div>);
}

export default Homepage;
