import { DayPicker, type DateRange } from "@daypicker/react";
import { type Dispatch, type SetStateAction } from "react";
import "@daypicker/react/style.css";
import "./Calendar.css"


type CalendarProps = {
    selected?: DateRange,
    onSelect: Dispatch<SetStateAction<DateRange | undefined>>;
}


export default function Calendar({ selected, onSelect }: CalendarProps) {
    return (
        <>
        <DayPicker
        animate
        mode="range"
        selected={selected}
        onSelect={onSelect}
        showOutsideDays
        resetOnSelect
        excludeDisabled
        disabled={{ before: new Date()}}
        />
        </>
    );
}