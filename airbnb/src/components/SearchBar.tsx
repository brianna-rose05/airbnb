import {  Search } from 'lucide-react';

export function SearchBar() {
    return (
            <div className="w-full border-border border bg-white mt-3 flex flex-row items-center rounded-full py-2 px-2">
                <div className="w-full h-auto flex flex-col border-r border-border px-8">
                    <p className="text-black text-xs font-medium">Where</p>
                    <div>
                        <input className= "text-body placeholder:text-body placeholder:text-sm" type="search" placeholder="Search destinations"></input>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col border-r border-border px-6">
                    <p className="text-black text-xs font-medium">When</p>
                    <div>
                        <input className= "text-body placeholder:text-body placeholder:text-sm" type="search" placeholder="Add dates"></input> 
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col px-6">
                    <p className="text-black text-xs font-medium">Who</p>
                    <div>
                        <input className= "text-body placeholder:text-body placeholder:text-sm" type="search" placeholder="Add guests"></input> 
                    </div>
                </div>
                <div className="bg-primary p-3.5 rounded-full">
                    <Search className='text-white text-base'></Search>
                </div>
            </div>
    )
}