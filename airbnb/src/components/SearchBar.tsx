import {  Search } from 'lucide-react';
import listings from '../data/listings';
import Calendar from './calendar/Calendar';
import { type DateRange } from "@daypicker/react";
import { format } from 'date-fns';
import { useState, useEffect, useRef } from 'react';






const location = [...new Set(listings.map(({location})=> location))];

export function SearchBar() {
    const [isWhereOpen, setIsWhereOpen] = useState(false);
    const [isDatesOpen, setIsDatesOpen] = useState(false);
    const [destination, setDestination] = useState("");
    const [selected, setSelected] = useState<DateRange>();

    const startDate = (selected?.from && format(selected.from, 'MMM d')) ?? "";
    const endDate = (selected?.to && format(selected.to, 'MMM d')) ?? "";
    
    const dropdownRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
        if (!isDatesOpen) return;
    
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDatesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside); 
    }, [isDatesOpen]);
   



    return (
            <div className="w-full border-border border bg-white mt-3 flex flex-row items-center rounded-full py-2 px-2">
                {/* WHERE */}
                <div className="relative w-full flex flex-col border-r border-border px-8">
                    <p className="text-black text-xs font-medium">Where</p>
                    <button onClick={() => setIsWhereOpen(true)}
                    className= "text-body text-sm cursor-pointer text-nowrap">{ destination || "Pick a destination"}</button>
                    
                    {isWhereOpen && (
                        <div className='text-nowrap absolute top-full left-0 mt-2 z-50 w-64 p-3 border border-border bg-white text-body rounded-xl'>
                            {location.map((location) => (
                                <div 
                                key={location}
                                onClick={() => {
                                    setDestination(location);
                                    setIsWhereOpen(false);
                                }}
                                className="text-nowrap py-2 cursor-pointer p-4 hover:bg-gray-100 hover:border-b border-border">{location}</div>
                            ))}
                        </div>
                        )}
                </div>
                {/* WHEN */}
            
                <div className="relative w-full flex flex-col border-r border-border px-8">
                    <p className="text-black text-xs font-medium">When</p>
                     <button onClick={() => setIsDatesOpen(true)}
                     className= "text-body text-sm cursor-pointer">{startDate && endDate ? `${startDate} - ${endDate}` : "Add dates"}</button>

                    {isDatesOpen && (
                        <div ref={dropdownRef} className=' absolute top-full left-0 mt-2 z-50 w-auto p-3 border border-border bg-white text-body rounded-xl'>
                            <Calendar selected={selected} onSelect={setSelected}/>
                        </div>
                    )}
                </div>
                {/* GUESTS */}
                <div className="w-full h-auto flex flex-col px-6">
                    <p className="text-black text-xs font-medium">Who</p>
                    <div>
                        <input className= "text-body placeholder:text-body placeholder:text-sm" type="search" placeholder="Number of guests"></input> 
                    </div>
                </div>
                <div className="bg-primary p-3.5 rounded-full">
                    <Search className='text-white text-base'></Search>
                </div>
            </div>
    )
}