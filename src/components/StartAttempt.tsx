import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setNumberOfAttempts(numberOfAttempts - 1);
        setQuizInProgress(true);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function doMulligan(): void {
        setNumberOfAttempts(numberOfAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numberOfAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={doMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            <div>Number of Attempts: {numberOfAttempts}</div>
        </div>
    );
}
