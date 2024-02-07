import Footer from "../components/footer"
import Header from "../components/header"
import SideNav from "../components/sidenav"

const Template = ({children}: { children: React.ReactNode }) => {
    return (
        <div className='bg-background flex flex-col h-screen w-screen'>
          <div className='flex flex-row'>
            <SideNav />
            <div className={"flex flex-col"}>
              <Header/>
              {children}
            </div>
            </div>
        <Footer/>
    </div>
    )
}

export default Template