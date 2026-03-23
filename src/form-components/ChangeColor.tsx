import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "yellow",
        "orange",
        "green",
        "blue",
        "purple",
        "black",
        "pink",
    ];

    const [chosenColor, setChosenColor] = useState<string>("red");

    function updateChosenColor(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colorChoices"
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    onChange={updateChosenColor}
                ></Form.Check>
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
