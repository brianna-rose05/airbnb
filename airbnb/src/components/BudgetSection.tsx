import listings from '../data/listings';
import {ListingCard} from './Cards';
import { useState } from 'react';



export function BudgetFilter () {
    const [budget, setBudget] = useState(300);
    const [guests, setGuests] = useState(1);

    const filtered = listings.filter((item) => {
        return item.price_per_night <= budget && item.guests >= guests;
    });

    return ( 
        <div>
            <div className="flex flex-col gap-3">
                <div className='flex flex-row gap-5 items-center'>
                    <p>Up to</p>
                    <input 
                    type="range" min="0" max="900"
                    value={budget} 
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="flex-2 w-full h-2 bg-border rounded-full accent-primary cursor-pointer"
                    />
                    <p className="text-primary font-semibold">${budget} / night</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <p>Number of guests</p>
                    {[1,2,3,4].map((n) => (
                        <button key={n} onClick={() => setGuests(n)}
                        className={`flex items-center rounded-full border px-5 py-2 cursor-pointer ${guests === n ? `
                            bg-primary text-white border-border` : 'bg-white text-black border-border'}`}
                            >
                                {n}
                            </button>
                    ))}
                </div>
                <p className="pt-2"><span className="text-black">{filtered.length}</span> stays fit your budget</p>
            </div>
            
            <div className="grid grid-cols-4 gap-6 pt-10">
                {filtered.map((item) => (
                    <ListingCard card={item} key={item.id}/>
                ))}
            </div>
        </div>
    );
}
