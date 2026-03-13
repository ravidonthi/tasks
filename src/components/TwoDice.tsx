import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDice, setLeftDice] = useState<number>(1);
    const [rightDice, setRightDice] = useState<number>(2);

    let outcome: string = "";
    if (leftDice === 1 && rightDice === 1) {
        outcome = "Lose";
    } else if (leftDice === rightDice) {
        outcome = "Win";
    }

    function rollDice(die: boolean): void {
        const dieNumber: number = d6();

        if (die) {
            setLeftDice(dieNumber);
        } else {
            setRightDice(dieNumber);
        }
    }

    return (
        <div>
            Left Dice: <span data-testid="left-die">{leftDice}</span>
            Right Dice: <span data-testid="right-die">{rightDice}</span>
            <Button
                onClick={() => {
                    rollDice(true);
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    rollDice(false);
                }}
            >
                Roll Right
            </Button>
            <div>{outcome}</div>
        </div>
    );
}
