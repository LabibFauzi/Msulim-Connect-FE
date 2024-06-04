import Footer from "../content/footer";
import Header from "../content/header";
import SideNav from "../content/sidenav";

const Template = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-7 bg-background ">
            <aside className="self-start sticky top-0 col-span-1">
                <SideNav/>
            </aside>
            <main className="col-span-6 flex flex-col ml-10">
                <Header/>
                <div className='flex-1 w-11/12 '>
                    {children}
                </div>
                <div className="mb-96"></div>
            </main>
            <footer className="col-span-7 z-20">
                <Footer/>
            </footer>
        </div>
    )
}

export default Template;
