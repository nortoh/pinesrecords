import styled from 'styled-components'
import { Button, Card, Row, Col } from 'react-bootstrap'
import 'holderjs'

const items = [
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    },
    {
        title: "Title",
        genre: "Genre"
    }
]

const CardWrapper = styled.div`
    padding: 10px;
`

export const SearchPage = (): JSX.Element => {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h5">Search</Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {/* Display items */}
                {items.map((element) => {
                    return (
                        <Col>
                            <CardWrapper>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/286x288" />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardWrapper>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}