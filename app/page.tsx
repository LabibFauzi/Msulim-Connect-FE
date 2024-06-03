import Beranda from "./components/content/beranda";
import Footer from "./components/content/footer";
import Header from "./components/content/header";
import SideNav from "./components/content/sidenav";


const Page = () => {
    return (
        <div className="grid grid-cols-7 bg-background ">
            <aside className="self-start sticky top-0 col-span-1">
                <SideNav/>
            </aside>
            <main className="col-span-6 flex flex-col ml-10">
                <Header/>
                <div className='flex-1 w-11/12 '>
                    <Beranda/>
                </div>
                <div className="mb-40"></div>
            </main>
            <footer className="col-span-7 z-20">
                <Footer/>
            </footer>
        </div>
    )
}

export default Page;
