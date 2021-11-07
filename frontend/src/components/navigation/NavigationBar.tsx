import React from 'react'
import { Tab, Row, Col, Form, FormControl, Nav, Navbar, Container, Button } from 'react-bootstrap'

type Props = {
    component: React.FC
}

export const NavBar = ({component: Component }: Props) => {
    return (
        <>
            {/* Navigation */}
            <Navbar 
                bg="light" 
                sticky="top"
                style={{
                    margin: "0px 0px 15px 0px",
                    borderRadius: "10px"
                }}
            >
                <Container>
                    {/* Logo */}
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/images/logo_header.png"
                            height="50"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    &nbsp;
                    {/* <Button variant="info">Search</Button> */}
                </Form>

                {/* Navigation */}
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/login"><Button variant="info">Login</Button></Nav.Link>
                    </Nav.Item>
                </Nav>    
            </Navbar>

            {/* Content */}
            <Container>
               <Component />
            </Container>
        </>
    )
}

// eslint-disable-next-line
export default (component: React.FC) => () => (
    <NavBar component={component} />
);