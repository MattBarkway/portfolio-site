import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";
import {useEffect, useState} from "react";


function Recipes() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/api/time/').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);
    return (
        <div>
            <Container className="p-4">
                <Row className="pb-4">
                    <Link to="/">
                        <Button variant="dark">{"<-"}</Button>{' '}
                    </Link>
                </Row>
                <p>Turns out I haven't finished it yet {currentTime}</p>
            </Container>
        </div>
    );
}

export default Recipes;
