import Button from "react-bootstrap/Button";
import {Card, Fade} from "react-bootstrap";


function ProjectCard(props) {
    return (
        <div>
            <Fade in={props.show} unmountOnExit={true} onExited={props.onExited} appear={true}>
                <Card className="mb-2" id="another-thing">
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <Button variant="dark" onClick={props.onClick}>{props.buttonText}</Button>{' '}
                    </Card.Body>
                </Card>
            </Fade>
        </div>
    );
}

export default ProjectCard;
