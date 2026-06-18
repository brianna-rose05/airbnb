import { Parasol, TentTree, Building2, Tractor, MountainSnow, PawPrint } from 'lucide-react';
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";
import "../../index.css"


const categories = [
    {label: "Lakeside", icon: Parasol},
    {label: "Cabin", icon: TentTree},
    {label: "City", icon: Building2},
    {label: "Countryside", icon: Tractor},
    {label: "Views", icon: MountainSnow},
    {label: "Pet-friendly", icon: PawPrint},

];

export function FilteredList() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const active = searchParams.get("category");

    
    return (
    <div className="flex flex-row gap-10 py-8 justify-items-center border-b border-border text-body">
        {categories.map((cat) => {
            const Icon = cat.icon;
            return (
                <button key ={cat.label} onClick={() => navigate(`/search?category=${cat.label}`)} 
                className={`flex flex-col gap-1 items-center cursor-pointer transition-colors hover:text-primary-hover ${active === cat.label ? "text-primary border-b-3" : ""}`}>
                    <Icon className="w-auto h-8" />
                    <p className="text-base">{cat.label}</p>
                </button>
            )
        })}

    </div>
    );
}