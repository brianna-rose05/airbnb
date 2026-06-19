import { useSearchParams } from "react-router";
import listings from '../data/listings';
import {Heading} from '../components/Heading';
import {Footer} from '../components/Footer';
import {SearchBar} from '../components/SearchBar';
import hero from '../assets/northshore.jpg'
import '../components/section-container/section-container.css'
import {ListingCard} from '../components/Cards';
import {HorizontalCard} from '../components/Cards';
import {FilteredList} from '../components/filter/FilteredList';







export function SearchResults() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const filter = searchParams.get("filter");

    const result = filter ? listings.filter((listing) => listing.location.includes(filter)) : listings;
    const filtered = category ? listings.filter((listing) => listing.type.includes(category)) : listings;
    const results = filtered.length;
    
    const filteredListings = listings.filter((listing) => {
    const matchesCategory = category ? listing.type.includes(category) : true;
    


    return (
        <div>
            <Heading />
            <div className="relative w-full h-[35svh]">
                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
                <img src={hero} className="w-full h-full object-cover"></img>
            <div className="flex flex-col absolute top-1/2 left-10 gap-3 text-white">
             <SearchBar />
            </div>
            </div>
            <div className="bg-surface">
                <div className="max-w-7xl mx-auto px-6">
                <FilteredList />
                <div className="section-container">
                    <div className="section-container-top">
                        <h3 className="text-3xl text-heading">{category} Stays</h3>
                        <p>{results} places based on your location</p>
                    </div>
                    <HorizontalCard  card={result[0]} />
                </div>
                <div className="section-container">
                    <div className="section-container-top">
                        <h3 className="text-2xl text-heading">All {category} stays</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {result.map((item) => (
                            <ListingCard card={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        </div>
    );
}



