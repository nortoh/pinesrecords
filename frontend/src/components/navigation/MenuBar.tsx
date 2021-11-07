import React from 'react'
import { Row, Col, Nav, Tab } from 'react-bootstrap'

type Props = {
    component: React.FC
}

export const MenuBar = ({component: Component }: Props) => {
    return (
        <>
            {/* Menu Bar */}
            <Row>
                <Col xs={1}>
                    <div
                        style={{
                            position: "fixed"
                        }}
                    >
                        <Tab.Container defaultActiveKey="first">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </div>
                </Col>
                
                <Col>
                    <Component />
                </Col>
            </Row>
        </>
    )
}

// eslint-disable-next-line
export default (component: React.FC) => () => (
    <MenuBar component={component} />
);