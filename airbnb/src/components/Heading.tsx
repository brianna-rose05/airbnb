import logo from '../assets/logo.png'
import { UserRound, Menu } from 'lucide-react';
import { Link } from 'react-router';





export function Heading() {
    return (
        <div className="absolute top-0 left-0 w-full flex flex-row justify-between items-center z-10 p-5 text-white">
        <Link to="/">
            <img src={logo} alt="Airbnb" className="h-8 cursor-pointer" />
        </Link>
         <ul className="flex-row flex gap-5">
             <li>Homes</li>
            <li>Experiences</li>
            <li>Services</li>
        </ul>
        <div className="flex-row flex gap-5 items-center">
            <p>Become a host</p>
            <div className="bg-white border border-border flex flex-row h-11 p-5 items-center rounded-full gap-3">
                <Menu className="h-auto w-5 text-black"/>
                <div className="bg-primary rounded-full p-1" >
                    <UserRound className="h-auto w-5 text-white"/>
                </div>
            </div>
        </div>
      </div>
    )
};