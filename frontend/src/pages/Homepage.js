import Container from 'react-bootstrap/Container';
import {Col, Fade, Row} from 'react-bootstrap';
import Canvas from "../components/Canvas";
import '../styles/styles.css';
import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import Button from "react-bootstrap/Button";

function Homepage() {
    const [activeCard, setActiveCard] = useState('');
    const [activeProject, setActiveProject] = useState({});
    const [projects, setProjects] = useState({});
    const [detailViewAnimationComplete, setDetailViewAnimationComplete] = useState(false);


    useEffect(() => {
        setProjects({
            'recipe-recommender': {
                title: 'Recipe Recommender 5000',
                text: 'this is some recipe-recommender text',
                name: 'recipe-recommender',
            },
            'another-thing': {
                title: 'Another thing wot I made',
                text: 'this is some another-thing text',
                name: 'another-thing',
            },
            'world-hunger': {
                title: 'Solving World Hunger',
                text: 'this is some world-hunger text',
                name: 'world-hunger',
            },
        });
    }, []);

    useEffect(() => {
        console.log('active card changed', activeCard);
        if (activeCard !== '') {
            setActiveProject(projects[activeCard])
        } else {
            setActiveProject({})
            setDetailViewAnimationComplete(false);
        }
    }, [activeCard, projects]);

    return (
        <div>
            <Canvas className="behind" style={{'z-index': -99}}/>
            <Container className="p-4">
                <Fade in={activeCard === ''} unmountOnExit={true} appear={true}>
                    <Row className="pb-4 text-white">
                        <h1 className="header main">Hi, I'm Matt</h1>
                        <p className="main"> I'm a software developer based in Gloucestershire</p>
                    </Row>
                </Fade>
                <Fade in={activeCard === ''} unmountOnExit={true}>
                    <Row className="pb-4 text-white main">
                        <h3 className="main">Here are some of the projects I've worked on:</h3>
                    </Row>
                </Fade>
                <Fade
                    in={activeCard !== '' && activeProject && detailViewAnimationComplete}
                      unmountOnExit={true}
                >
                    <Row className="pb-4 text-white main">
                        <Button variant="dark" onClick={() => {
                            setActiveCard('')
                        }}>
                            {"<-"}
                        </Button>
                        <h3 className="main">{activeProject ? activeProject.title : null}</h3>
                    </Row>
                </Fade>
                <Row>
                    <Col>
                        <ProjectCard
                            title={'Recipe recommender 5000'}
                            text={'An AI program to recommend recipes you\'ll like'}
                            onClick={() => {
                                setActiveCard('recipe-recommender')
                            }}
                            closeAction={() => {
                                setActiveCard('')
                            }}
                            buttonText={'Try it out!'}
                            hide={activeCard !== ''}
                            onExited={() => {
                                setDetailViewAnimationComplete(true)
                            }}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            title={'Another thing wot I made'}
                            text={'I\'m sure it does something really cool'}
                            onClick={() => {
                                setActiveCard('another-thing')
                            }}
                            closeAction={() => {
                                setActiveCard('')
                            }}
                            deActivate
                            buttonText={'Try it out!'}
                            hide={activeCard !== ''}
                            onExited={() => {
                                setDetailViewAnimationComplete(true)
                            }}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            title={'Solved world hunger'}
                            text={'I cooked up lots of food and solved world hunger'}
                            onClick={() => {
                                setActiveCard('world-hunger')
                            }}
                            closeAction={() => {
                                setActiveCard('')
                            }}
                            buttonText={'Take a look!'}
                            // active={activeCard === 'world-hunger'}
                            hide={activeCard !== ''}
                            onExited={() => {
                                setDetailViewAnimationComplete(true)
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        activeProject && Object.keys(activeProject).length > 0 && detailViewAnimationComplete ?
                            <ProjectDetails
                                text={activeProject.text}
                                active={activeCard === activeProject.name}
                                hide={activeCard !== ''}
                            />
                            : null
                    }

                </Row>
            </Container>


        </div>
    );
}

export default Homepage;
