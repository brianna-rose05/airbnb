import { Dot } from 'lucide-react';


export function Footer() {
    return (
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
    )
};