import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [numberOfAttemptsLeft, setNumberOfAttemptsLeft] = useState<number>(3);
    const [numberOfAttemptsRequested, setNumberOfAttemptsRequested] =
        useState<string>("");

    function updateNumberOfAttemptedRequested(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setNumberOfAttemptsRequested(event.target.value);
    }

    function useAttempt(): void {
        setNumberOfAttemptsLeft(numberOfAttemptsLeft - 1);
    }

    function increaseAttempts(): void {
        if (numberOfAttemptsRequested !== "") {
            setNumberOfAttemptsLeft(
                numberOfAttemptsLeft + Number(numberOfAttemptsRequested),
            );
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {numberOfAttemptsLeft}</div>

            <Form.Group controlId="attemptsInput">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numberOfAttemptsRequested}
                    onChange={updateNumberOfAttemptedRequested}
                ></Form.Control>
            </Form.Group>
            <Button onClick={useAttempt} disabled={numberOfAttemptsLeft === 0}>
                Use Attempt
            </Button>
            <Button onClick={increaseAttempts}>Gain Attempts</Button>
        </div>
    );
}
