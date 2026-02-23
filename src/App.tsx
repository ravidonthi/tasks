import React from "react";
import "./App.css";
import logo from "./images/ManchesterCityLogo.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ravi. Hello World.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 200,
                                    height: 200,
                                    backgroundColor: "red",
                                }}
                            >
                                <p>Favorite Players From Manchester City</p>
                                <ul>
                                    <li>Kevin De Bruyne</li>
                                    <li>Erling Haaland</li>
                                    <li>Antoine Semenyo</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: 200,
                                    height: 200,
                                    backgroundColor: "red",
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Logo of Manchester City Soccer Team."
                                    style={{ width: 120, height: 120 }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
