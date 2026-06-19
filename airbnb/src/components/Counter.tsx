import { Plus, Minus } from 'lucide-react';


type GuestCounterProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
};

export default function GuestCounter({label, value, onChange}: GuestCounterProps) {
    return (
        <div className="flex flex-row gap-3 items-center">
            <button
            onClick={() => onChange(Math.max(0, value - 1))}
            className='hover:bg-gray-200 cursor-pointer p-2 rounded-full bg-gray-100'><Minus className="h-5 w-full text-body" /></button>
            <p>{value}</p>
            <button
            onClick={() => onChange(value + 1)}
            className='hover:bg-gray-200 cursor-pointer p-2 rounded-full bg-gray-100'><Plus className="h-5 w-full text-body"/></button>
        </div>
    )
}