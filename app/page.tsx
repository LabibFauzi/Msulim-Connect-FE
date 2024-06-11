'use client'
import { useEffect, useRef, useState } from 'react';
import Beranda from "./components/content/beranda";
import Footer from "./components/content/footer";
import Header from "./components/content/header";
import SideNav from "./components/content/sidenav";

const Page = () => {
    const [showSideNav, setShowSideNav] = useState(false);
    const sideNavRef = useRef<HTMLDivElement>(null);

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };

    const closeSideNav = () => {
        setShowSideNav(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
        if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
            closeSideNav();
        }
        };

        if (showSideNav) {
        document.addEventListener('click', handleOutsideClick);
        } else {
        document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, [showSideNav]);
    return (
        <div className=' grid grid-cols-7 bg-background'>
            <div className={`absolute left-0 top-8 z-40 xl:hidden ${showSideNav ? 'hidden' : 'block'}`}>
                <button onClick={toggleSideNav} className="block p-4">
                    <img src="/asets/menu.png" className='min-h-10 min-w-10' alt="" />
                </button>
            </div>
            <aside ref={sideNavRef} id="sidenav" className={` h-full sticky ${showSideNav ? 'col-span-3 xl:col-span-1 z-40' : 'hidden xl:block'}`}>
                <SideNav />
            </aside>
            <main className="col-span-7 xl:col-span-6 flex flex-col ml-10">
                <Header />
                <div className='flex w-11/12 md:w-full'>
                    <Beranda />
                </div>
                <div className="mb-96"></div>
            </main>
            <footer className="col-span-7 z-20 ">
                <Footer />
            </footer>
        </div>
    )
}

export default Page;
