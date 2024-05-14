import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type Props = {
    header: string,
    titulo: string,
    texto: string
}

export default class CardComponent extends Component<Props> {
    render() {
        const { header, titulo, texto } = this.props;

        return (
                <Row xs={1} md={3} className="g-0">
                    <Col>
                        <Card style={{ backgroundColor: '#BA68C8', width: '18rem'}} className='p-3 mb-4 bg-gradient rounded-5' text="white">
                            <Card.Header>{header}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{titulo}</Card.Title>
                                    <Card.Text>
                                        {texto}
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            )}
        }
