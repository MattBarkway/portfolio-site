import {Card, Fade} from "react-bootstrap";
import {useEffect} from "react";


function ProjectDetails(props) {
    useEffect(() => {

    }, [props.hide, props.active]);
    return (
        <div>
            <Fade in={!props.hide || props.active} onEntered={() => {ProjectDetails.focus()}}>
                <Card className="mb-2" id="another-thing">
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Fade>
        </div>
    );
}

export default ProjectDetails;
