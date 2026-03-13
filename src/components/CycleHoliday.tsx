import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "⛄️" | "👻" | "🪔" | "🕛" | "💐";
// Christmas, Divali, Halloween, Mother's Day, New Year's
const ALPHABETICAL_HOLIDAY_TRANSITIONS: Record<Holiday, Holiday> = {
    "⛄️": "🪔",
    "🪔": "👻",
    "👻": "💐",
    "💐": "🕛",
    "🕛": "⛄️",
};

// Mother's Day, Halloween, Divali, Christmas, New Year's
const YEAR_HOLIDAY_TRANSITIONS: Record<Holiday, Holiday> = {
    "💐": "👻",
    "👻": "🪔",
    "🪔": "⛄️",
    "⛄️": "🕛",
    "🕛": "💐",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("💐");

    function changeHolidayByAlphabet(): void {
        const newHoliday = ALPHABETICAL_HOLIDAY_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayByYear(): void {
        const newHoliday = YEAR_HOLIDAY_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeHolidayByAlphabet}>
                Advance by Alphabet
            </Button>
            <Button onClick={changeHolidayByYear}>Advance by Year</Button>
            Holiday: {holiday}
        </div>
    );
}
