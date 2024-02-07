'use client'
import Menu from './components/sidenav'
import Header from './components/header';
import Footer from './components/footer';
import Timer from './components/timer';

export default function Home() {
  return (
    <>
      <div className='bg-background h-screen flex flex-col '>
          <div className='flex '>
            <Menu />
            <div className={"flex flex-col"}>
              <Header/>
              <Timer/>
              ini page
            </div>
          </div>
            <Footer/>
        </div>
    </>
  );
}
