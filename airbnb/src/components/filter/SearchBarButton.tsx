import {  Search } from 'lucide-react';
import { useNavigate, useSearchParams } from "react-router";


type SearchProps = {
    totalGuests: number;
    pets: number;
    destination: string;
};

export default function SearchBarButton({totalGuests, pets, destination}: SearchProps) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    searchParams.get("filter");



    console.log(`total guests: ${totalGuests}, pets: ${pets}, loc: ${destination}`)
    return (
    <>
    <button onClick={() => navigate(`/search?filter=${destination}`)} className="bg-primary p-3.5 rounded-full cursor-pointer">
        <Search className='text-white text-base'></Search>
    </button>
    </>
    )
}