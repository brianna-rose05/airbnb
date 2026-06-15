import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";
import listings from '../data/listings';
import {Heading} from '../components/Heading';
import {SearchBar} from '../components/SearchBar';
import hero from '../assets/northshore.jpg'
import { Parasol, Star, TentTree, Building2, Tractor, MountainSnow, PawPrint, Heart, Dot } from 'lucide-react';






export function SearchResults() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const filtered = category ? listings.filter((listing) => listing.type.includes(category)) : listings;


    return (
        <div>
            <Heading />
            <div className="relative w-full h-[35svh] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
                <img src={hero} className="w-full h-full object-cover"></img>
            <div className="flex flex-col absolute top-1/2 left-10 gap-3 text-white">
             <SearchBar />
            </div>
            </div>
            <div className="bg-surface">
                <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-row gap-10 py-10 justify-items-center border-b border-border text-body">
                    <button onClick={() => navigate("/search?category=Lakeside")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <Parasol className="w-8 h-auto"></Parasol>
                            <p className="text-sm">Lakeside</p>
                        </button>
                        <button onClick={() => navigate("/search?category=Cabin")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <TentTree className="w-8 h-auto"></TentTree>
                            <p className="text-sm">Cabin</p>
                        </button>
                        <button onClick={() => navigate("/search?category=City")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <Building2 className="w-8 h-auto"></Building2>
                            <p className="text-sm">City</p>
                        </button>
                        <button onClick={() => navigate("/search?category=Countryside")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <Tractor className="w-8 h-auto"></Tractor>
                            <p className="text-sm">Countryside</p>
                        </button>
                        <button onClick={() => navigate("/search?category=Views")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <MountainSnow className="w-8 h-auto"></MountainSnow>
                            <p className="text-sm">Views</p>
                        </button>
                        <button onClick={() => navigate("/search?category=Pet-friendly")} className="flex flex-col gap-2 items-center cursor-pointer">
                            <PawPrint className="w-8 h-auto"></PawPrint>
                            <p className="text-sm">Pet-friendly</p>
                        </button>
                </div>
                <div className="flex flex-col gap-10 py-10">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-3xl text-heading">{category} stays</h3>
                        <p>86 places based on your location</p>
                    </div>
                    <div className="grid grid-cols-3 h-75 overflow-hidden rounded-3xl bg-white border border-border">
                        <div className="col-span-1 relative">
                            <img src={hero} className="w-full object-cover h-full min-h-0"></img>
                            <button>
                                <Heart className="absolute right-4 top-4 text-white"></Heart>
                            </button>
                            <div className="absolute left-4 top-4 flex items-center p-4 h-4 rounded-full bg-accent text-black text-sm">
                                <p>Top match</p>
                            </div>
                        </div>
                        <div className="flex flex-col col-span-2 w-full py-10 px-15">
                            <h2 className="text-3xl text-heading">Cliffside cabin off the shore</h2>
                            <p className="text-lg">Duluth, Minnesota</p>
                            <div className="flex flex-row gap-2 py-4">
                                <div className="left-4 top-4 flex items-center p-4 h-4 rounded-full bg-primary/15 text-primary text-sm">
                                    <p>Lakeside</p>
                                </div>
                                <div className="left-4 top-4 flex items-center p-4 h-4 rounded-full bg-primary/15 text-primary text-sm">
                                    <p>Cabin</p>
                                </div>
                            </div>
                            <div className="mt-auto t-5 flex w-full flex-row items-center justify-between pt-2">
                                <div className="flex items-center">
                                    <p>Up to 6 guests</p>
                                    <Dot></Dot>
                                    <div className="flex flex-row text-black items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-400"></Star>
                                    <p>{4.9}</p>
                                    </div>
                                </div>
                                <p><span className="text-2xl text-heading font-bold">$248</span> /night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                 <button onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    );
}



