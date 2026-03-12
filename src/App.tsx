import React from "react";
import "./App.css";
<<<<<<< HEAD
import logo from "./images/ManchesterCityLogo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

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
<<<<<<< HEAD
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
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
