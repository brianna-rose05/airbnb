import hero1 from '../assets/hero1.png'
import collection_img_1 from '../assets/cabin.png'
import { Dot, Parasol, TentTree, Building2, Tractor, MountainSnow, PawPrint, SlidersHorizontal, Map, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router";

import listings from '../data/listings';
import { MapCard } from '../components/Cards';
import {BudgetFilter} from '../components/BudgetSection';
import {Carousel} from '../components/HeroSection';
import {Heading} from '../components/Heading';







function HomePage() {
const navigate = useNavigate();
  return (
    <div className="bg-surface">
        <div className="relative w-full h-[65svh] overflow-hidden">
        <Heading />
        < Carousel />
        </div>
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
        <div className="flex flex-row gap-10 py-10 justify-between">
            <div className="flex flex-col gap-1">
                <h3 className="text-3xl text-heading">Stays near Lake Superior</h3>
                <p>86 places based on your location</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <button className="bg-white border border-border flex flex-row h-11 p-5 items-center rounded-full gap-2">
                    <SlidersHorizontal className="h-auto w-5 text-black"></SlidersHorizontal>
                    <p className='text-black'>Filters</p>
                </button>
                <button className="bg-primary border text-white flex flex-row h-11 p-5 items-center rounded-full gap-2">
                    <Map className="h-auto w-5"></Map>
                    <p>Map</p>
                </button>
            </div>
        </div>
        <div className="grid grid-cols-5 gap-8 h-110">
            <div className="bg-border rounded-3xl col-span-3"> 
            </div>
            <div className="flex flex-col gap-4 min-h-0 col-span-2">
                {listings.slice(0,3).map((listing) => (
                    <MapCard card={listing} key={listing.id} />
                ))}
                </div>
        </div>
        <div className="flex flex-col gap-10 py-20 justify-between">
            <div className="flex flex-col gap-1">
                <h3 className="text-3xl text-heading">Collections</h3>
                <p>Currated sets of homes, picked by theme - tap one to open it as a filtered list.</p>
            </div>
            <div className="flex flex-row gap-8 h-80">
                <button className="h-full w-full rounded-3xl relative overflow-hidden">
                    <img src={collection_img_1} alt="Agua Norte Cabin" className="inset-0 object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col gap-1 justify-end items-start h-full p-5">
                        <h3 className="text-white text-2xl">Cabins on the water</h3>
                        <p className="text-white">31 homes near you</p>
                    </div>
                    <div className="bg-white border-0 h-4 p-4 rounded-full absolute top-4 left-4 flex items-center mix-blend-screen">
                        <p className="text-black font-bold">Collection</p>
                    </div>
                </button>
                <button className="h-full w-full rounded-3xl relative overflow-hidden">
                    <img src={collection_img_1} alt="Agua Norte Cabin" className="inset-0 object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col gap-1 justify-end items-start h-full p-5">
                        <h3 className="text-white text-2xl">Off-grid escapes</h3>
                        <p className="text-white">18 homes near you</p>
                    </div>
                    <div className="bg-white border-0 h-4 p-4 rounded-full absolute top-4 left-4 flex items-center mix-blend-screen">
                        <p className="text-black font-bold">Collection</p>
                    </div>
                </button>
                <button className="h-full w-full rounded-3xl relative overflow-hidden">
                    <img src={collection_img_1} alt="Agua Norte Cabin" className="inset-0 object-cover object-center w-full h-full"/>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col gap-1 justify-end items-start h-full p-5">
                        <h3 className="text-white text-2xl">Romantic for two</h3>
                        <p className="text-white">24 homes near you</p>
                    </div>
                    <div className="bg-white border-0 h-4 p-4 rounded-full absolute top-4 left-4 flex items-center mix-blend-screen">
                        <p className="text-black font-bold">Collection</p>
                    </div>
                </button>
            </div>
        </div>
      </div>
        <div className="bg-warmer-surface py-10 border-y border-border">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-8">
                    <h3 className="text-3xl text-heading">Stays for your budget</h3>
                    <p>Set your price and group size — listings update instantly.</p>
                </div>
                <BudgetFilter />
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 ">
            <div className="grid col grid-cols-2 bg-primary p-14 gap-12 justify-between rounded-3xl">
                <div className='flex flex-col gap-2 justify-center'>
                    <p className="text-sm uppercase text-white font-bold">Become a host</p>
                    <h2 className='text-4xl text-white'>Open your door, earn extra income</h2>
                    <p className="text-white leading-normal">Share your space on Airbnb and start earning. We'll guide you through setup, and back you with support every step of the way.</p>
                    <button className="flex flex-row gap-2 items-center bg-white text-primary px-6 py-3 mt-5 rounded-full self-start ">
                        <p>Get Started</p>
                        <ArrowRight></ArrowRight>
                    </button>
                </div>
                <div className='flex justify-end'>
                    <img src={hero1} className="rounded-2xl aspect-square h-100 w-auto object-cover" />
                </div>
            </div>
        </div>
        <div className="bg-warmer-surface border-y border-border">
            <div className="mx-auto px-20 py-20 grid-cols-3 inline-grid gap-25">
                <div className="flex flex-col gap-5 items-start self-start">
                    <h3 className="text-heading pb-2">Support</h3>
                    <button>Help center</button>
                    <button>Cancellation options</button>
                    <button>Safety information</button>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h3 className="text-heading pb-3">Hosting</h3>
                    <button>Airbnb your home</button>
                    <button>Hosting resources</button>
                    <button>Community forum</button>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h3 className="text-heading pb-3">Airbnb</h3>
                    <button>Newsroom</button>
                    <button>New features</button>
                    <button>Careers</button>
                </div>
            </div>
            <div className="px-15">
                <div className="flex flex-row items-center text-sm border-t border-border py-10 pb-20">
                    <p>© 2026 Airbnb, Inc.</p>
                    <Dot></Dot>
                    <p>Privacy</p>
                    <Dot></Dot>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage

