import Container from 'react-bootstrap/Container';
import {Col, Fade, Row} from 'react-bootstrap';
import Canvas from "../components/Canvas";
import '../styles/styles.css';
import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import Button from "react-bootstrap/Button";
import Projects from '../json/projects.json';

function Homepage() {
    const getInitialProjectName = function () {
        const path = window.location.pathname.split('/');
        return path.length === 2 ? path[1] : '';
    };
    const [activeProjectName, setActiveProjectName] = useState(getInitialProjectName());
    const [activeProject, setActiveProject] = useState({});
    const [projects, setProjects] = useState([]);
    const [chunkedProjects, setChunkedProjects] = useState([]);
    const [detailViewOpened, setDetailViewOpened] = useState(false);
    const [detailViewExited, setDetailViewExited] = useState(true);
    const [path, setPath] = useState('/');
    const [isLoadIn, setisLoadIn] = useState(true);
    const colCount = 3;

    const chunkArray = function (array, chunkSize) {
        const chunks = []
        while (array.length > 0)
            chunks.push(array.splice(0, chunkSize));
        return chunks;
    };

    const filterObj = function (obj, search) {
        const filtered = obj.filter((item) => {
            return item.name === search
        });
        if (filtered.length === 0) {
            throw new Error('Item doesn\'t exist');
        } else if (filtered.length === 1) {
            return filtered[0];
        } else {
            throw new Error('Two items exist with the same name');
        }
    };

    useEffect(() => {
        if (activeProjectName !== '' && isLoadIn) {
            setDetailViewOpened(true);
        }
        setisLoadIn(false);
    }, [activeProjectName, isLoadIn])

    // Read + set URL, in order to persist the view on a refresh
    useEffect(() => {
        if (Object.keys(activeProject).length > 0) {
            window.history.pushState('', activeProject.title, `/${activeProject.name}`);
            setPath(window.location.pathname);
        } else {
            window.history.pushState('', 'Home', `/`);
            setPath(window.location.pathname);
        }
    }, [path, activeProject]);

    // Load in projects.json
    useEffect(() => {
        setProjects(Projects)
        setChunkedProjects(chunkArray([...projects], colCount));
    }, [projects]);

    // On clicking a project, load in the relevant data for that project
    useEffect(() => {
        if (Object.keys(projects).length === 0) {
            return;
        }
        if (activeProjectName !== '') {
            setDetailViewExited(false);
            const match = filterObj(projects, activeProjectName)
            setActiveProject(match);
        } else {
            setActiveProject({});
            setDetailViewOpened(false);
        }
    }, [activeProjectName, projects]);

    return (<div>
        <Canvas className="behind" style={{'z-index': -99}}/>
        <Container className="p-4">
            <Fade in={detailViewExited && activeProjectName === ''} unmountOnExit={true} appear={true}>
                <Row className="text-white">
                    <h1 className="header main">Hi, I'm Matt</h1>
                    <p className="main">👋 I'm a software developer based near Bristol</p>
                </Row>
            </Fade>
            <Fade in={detailViewExited && activeProjectName === ''} unmountOnExit={true} appear={true}>
                <div className="pt-4 pb-4 h-25" style={{}}>
                    <img src="/static/matt.jpeg"
                         alt="Me"
                         className="portrait"
                    />
                </div>
            </Fade>
            <Fade in={detailViewExited && activeProjectName === ''} unmountOnExit={true} appear={true}>
                <div className="pb-1">
                    <a href="https://github.com/MattBarkway" target="_blank" rel="noreferrer" className="p-2 pb-4">
                        <img src="/static/github.png"
                             alt="GitHub logo"
                             className="social"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-barkway-8824ab168/" target="_blank" rel="noreferrer">
                        <img src="/static/linkedin.png"
                             alt="GitHub logo"
                             className="social"
                        />
                    </a>
                </div>
            </Fade>
            {/*<Fade in={detailViewExited && activeProjectName === ''} unmountOnExit={true} appear={true}>*/}
            {/*    <Row className="pb-4 pt-4 text-white main">*/}
            {/*        <h3 className="main">Here are some of the projects I've worked on:</h3>*/}
            {/*    </Row>*/}
            {/*</Fade>*/}
            {/*<Fade*/}
            {/*    in={activeProjectName !== '' && activeProject && detailViewOpened}*/}
            {/*    unmountOnExit={true}*/}
            {/*    onExited={() => setDetailViewExited(true)}*/}
            {/*    appear={true}*/}
            {/*>*/}
            {/*    <Row className={"pb-4 text-white main"}>*/}
            {/*        <Col xs={1}>*/}
            {/*            <Button className={"left"} variant="light" onClick={() => setActiveProjectName('')}>*/}
            {/*                {"<-"}*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Fade>*/}
            {/*<Fade*/}
            {/*    in={activeProjectName !== '' && activeProject && detailViewOpened}*/}
            {/*    unmountOnExit={true}*/}
            {/*    onExited={() => {*/}
            {/*        setDetailViewExited(true)*/}
            {/*    }}*/}
            {/*    appear={true}*/}
            {/*>*/}
            {/*    <Row className={"pb-4 text-white main"}>*/}
            {/*        <h3 className="main">{activeProject ? activeProject.title : null}</h3>*/}
            {/*    </Row>*/}
            {/*</Fade>*/}
            {/*{*/}
            {/*    chunkedProjects.map((chunk, index) => {*/}
            {/*        const chunkContent = chunk.map((project) => {*/}
            {/*            return (*/}
            {/*                <Col key={project.name}>*/}
            {/*                    <ProjectCard*/}
            {/*                        key={project.name}*/}
            {/*                        title={project.title}*/}
            {/*                        text={project.text}*/}
            {/*                        onClick={() => setActiveProjectName(project.name)}*/}
            {/*                        closeAction={() => setActiveProjectName('')}*/}
            {/*                        buttonText={project.buttonText}*/}
            {/*                        show={detailViewExited && activeProjectName === ''}*/}
            {/*                        onExited={() => setDetailViewOpened(true)}*/}
            {/*                    />*/}
            {/*                </Col>*/}
            {/*            )*/}
            {/*        })*/}
            {/*        return (<Row key={index}> {chunkContent} </Row>)*/}
            {/*    })*/}
            {/*}*/}
            {/*<Row>*/}
            {/*    proj: {activeProject.toString()}; active keys: {Object.keys(activeProject).length.toString()};*/}
            {/*    viewopen: {detailViewOpened.toString()};*/}
            {/*    {activeProject && Object.keys(activeProject).length > 0 && detailViewOpened ? <ProjectDetails*/}
            {/*        text={activeProject.text}*/}
            {/*        active={activeProjectName === activeProject.name}*/}
            {/*        hide={activeProjectName !== ''}*/}
            {/*    /> : null}*/}
            {/*</Row>*/}
        </Container>
    </div>);
}

export default Homepage;
