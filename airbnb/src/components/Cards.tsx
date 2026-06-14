import {  Dot, Heart, Star } from 'lucide-react';


interface Listing {
    id: string;
    name: string;
    thumbnail: string;
    location: string;
    type: string[];
    price_per_night: number;
    stars: number;
    guests: number;
    favorite: boolean;
}


export function MapCard({card}: {card: Listing}) {
    const price = Math.round(card.price_per_night);
    const firstType = card.type[0] 
    return (
        <div className="flex flex-1 flex-row min-h-0 gap-3 justify-between">
            <div className='relative h-full w-45 shrink-0'>
                <img src={card.thumbnail} alt={card.name} className="h-full w-full object-cover rounded-3xl"/>
                <button>
                    <Heart className="absolute right-4 top-4 text-white"></Heart>
                </button>
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-xl text-heading leading-tight">{card.name}</h3>
                <div className="flex flex-row items-center text-nowrap h-auto">
                    <p className="capitalize">{card.location}</p>
                    <Dot/>
                    <p className="capitalize">{firstType}</p>
                </div>
                <p className="text-sm"><span className='text-black text-lg' >${price}</span> /night</p>
            </div>
            <div className="flex flex-row text-black shrink-0">
                <Star className="h-4 text-yellow-400"></Star>
                <p>{card.stars}</p>
            </div>
        </div>
    );
}


export function ListingCard({card}: {card: Listing}) {
    const price = Math.round(card.price_per_night);
    return (
        <div className="flex flex-col rounded-3xl h-auto overflow-hidden bg-white border border-border">
            <div className='relative h-50'>
            <img src={card.thumbnail} className="h-50 w-full object-cover" />
            <button>
                <Heart className="absolute right-4 top-4 text-white"></Heart>
            </button>
            <GuestFavorite favorite={card.favorite} />
        </div>
        <div className="flex flex-col justify-between h-40 py-3 px-5">
            <div className="flex flex-col gap-2">
                <h3 className='text-heading text-xl leading-tight'>{card.name}</h3>
                <p>Up to {card.guests} guests</p>
            </div>
            <div className="flex flex-row w-full justify-between">
            <div>
                <p className="text-sm"><span className="font-bold text-lg text-black">${price}</span> /night</p>
            </div>
            <div className="flex flex-row text-black items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400"></Star>
                <p>{card.stars}</p>
            </div>
        </div>
        </div>
    </div>
    );
}

export function GuestFavorite({ favorite }: {favorite: boolean}) {
    return favorite && (
            <div className="absolute left-4 top-4 flex items-center p-4 h-4 rounded-full bg-accent text-black text-sm">
                <p>Guest favorite</p>
            </div>
    );  
}


