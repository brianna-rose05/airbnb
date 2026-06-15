import { useState, useEffect } from 'react';
import {  Dot } from 'lucide-react';
import listings from '../data/listings';
import {SearchBar} from './SearchBar'


export function Carousel() {
    const[index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % listings.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);
    
    const current = listings[index];
    
    return ( 
       <div>
            {listings.map((listing, i) => (
                <img key={listing.id} src={listing.thumbnail} alt=''
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === index ? 'opacity-100' : 'opacity-0'}`} />
                ))}            
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
            <div className="flex flex-col absolute top-1/2 left-10 gap-3 text-white">
                <div className="flex flex-row h-auto items-center">
                    <p className='text-xl'>Featured</p>
                    <Dot className= "text-white" />
                    <p className='text-xl'>{current.location}</p>
                </div>
            <h1 className='text-5xl'>Wake up somewhere new</h1>
             <SearchBar />
            </div>
    </div>
    );
}
