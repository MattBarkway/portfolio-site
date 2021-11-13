import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";


function Recipes() {
  return (
      <div>
          <Container className="p-4">
              <Row className="pb-4">
                  <Link to="/">
                      <Button variant="dark">{"<-"}</Button>{' '}
                  </Link>
              </Row>
              <p>Turns out I haven't finished it yet</p>
          </Container>
      </div>
  );
}

export default Recipes;
