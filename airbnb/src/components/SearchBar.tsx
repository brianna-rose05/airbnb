import listings from '../data/listings';
import Calendar from './calendar/Calendar';
import { type DateRange } from "@daypicker/react";
import { format } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import GuestCounter  from './Counter';
import SearchBarButton from './filter/SearchBarButton';







const location = [...new Set(listings.map(({location})=> location))];

export function SearchBar() {
    const [isWhereOpen, setIsWhereOpen] = useState(false);
    const [isDatesOpen, setIsDatesOpen] = useState(false);
    const [isGuestOpen, setIsGuestOpen] = useState(false);
    const [destination, setDestination] = useState("");
    const [selected, setSelected] = useState<DateRange>();

    const startDate = (selected?.from && format(selected.from, 'MMM d')) ?? "";
    const endDate = (selected?.to && format(selected.to, 'MMM d')) ?? "";
    
    const searchBarRef = useRef<HTMLDivElement>(null);


    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const totalGuests = adults + children + infants + pets;



   
    useEffect(() => {
        if (!isDatesOpen && !isWhereOpen && !isGuestOpen) return;
    
        function handleClickOutside(event: MouseEvent) {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
                setIsDatesOpen(false);
                setIsWhereOpen(false);
                setIsGuestOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside); 
    }, [isDatesOpen, isWhereOpen, isGuestOpen]);


    return (
            <div ref={searchBarRef} className="w-full border-border border bg-white mt-3 flex flex-row items-center rounded-full py-2 px-2">
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
                <div className="relative w-full flex flex-col items-start border-r border-border px-8">
                    <p className="text-black text-xs font-medium">When</p>
                     <button onClick={() => setIsDatesOpen(true)}
                     className= "text-body text-sm cursor-pointer text-nowrap">{startDate && endDate ? `${startDate} - ${endDate}` : "Add dates"}</button>

                    {isDatesOpen && (
                        <div className=' absolute top-full left-0 mt-2 z-50 w-auto p-3 border border-border bg-white text-body rounded-xl'>
                            <Calendar selected={selected} onSelect={setSelected}/>
                        </div>
                    )}
                </div>
                {/* GUESTS */}
                <div className="relative w-full flex flex-col items-start border-border px-8">
                    <p className="text-black text-xs font-medium">Who</p>
                    <button onClick={() => setIsGuestOpen(true)}
                    className= "text-body text-sm cursor-pointer text-nowrap">{ `${totalGuests} guests` || "Add guest"}</button>
                
                {isGuestOpen && (
                    <div className='text-nowrap absolute top-full left-0 mt-3 z-50 w-100 py-4 px-8 border border-border bg-white text-body rounded-xl'>
                        <div className="flex flex-row justify-between border-b border-border py-4">
                            <div className="flex flex-col">
                                <p className="text-heading text-base font-medium">Adults</p>
                                <p className="text-sm">Ages 13 or above</p>
                            </div>
                            <GuestCounter label="adults" value={adults} onChange={setAdults} />
                        </div>
                        <div className="flex flex-row justify-between border-b border-border py-4">
                            <div className="flex flex-col">
                                <p className="text-heading text-base font-medium">Children</p>
                                <p className="text-sm">Ages 2 - 12</p>
                            </div>
                            <GuestCounter label="children" value={children} onChange={setChildren} />
                        </div>
                        <div className="flex flex-row justify-between border-b border-border py-4">
                            <div className="flex flex-col">
                                <p className="text-heading text-base font-medium">Infants</p>
                                <p className="text-sm">Under 2</p>
                            </div>
                            <GuestCounter label="infants" value={infants} onChange={setInfants} />
                        </div>
                        <div className="flex flex-row justify-between py-4">
                            <div className="flex flex-col">
                                <p className="text-heading text-base font-medium">Pets</p>
                                <p className="text-sm">Includes service animals</p>
                            </div>
                            <GuestCounter label="pets" value={pets} onChange={setPets}/>
                        </div>
                    </div>
                )}
                </div>
                <SearchBarButton totalGuests={totalGuests} pets={pets} destination={destination} />
            </div>
    )
}