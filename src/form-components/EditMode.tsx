import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsEditMode(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={updateEditMode}
            ></Form.Check>
            {isEditMode ?
                <div>
                    <Form.Group controlId="userNameInput">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={updateUserName}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheckBox"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    ></Form.Check>
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
