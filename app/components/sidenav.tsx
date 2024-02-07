"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const SideNav = () => {
  const [linkActive, setLinkActive] = useState(0)
  const pathName = usePathname()

  useEffect(() => {
    switch (pathName) {
      case "/":
        setLinkActive(0)
        break
      case "/tanyajawab":
        setLinkActive(1)
        break
      case "/postingan":
        setLinkActive(2)
        break
      case "/artikel":
        setLinkActive(3)
        break
      default:
        break
    }
  }, [pathName])

  const DATA: {
    link: string,
    class: string,
    title: string,
  }[] = [
    {
      link: "/",
      class: "bg-secondarymain text-white",
      title: "Beranda"
    },
    {
      link: "/tanyajawab",
      class: "bg-secondarymain text-white",
      title: "Tanya Jawab"
    },
    {
      link: "/postingan",
      class: "bg-secondarymain text-white",
      title: "Postingan Islami"
    },
    {
      link: "/artikel",
      class: "bg-secondarymain text-white",
      title: "Artikel"
    },
  ]

  return (
    <>
      <div className='bg-white h-screen w-80 pt-14 p-10  items-center flex flex-col'>
        <div className='justify-center items-center flex mb-14'>
          <img src="/asets/logo.png" className='w-8 h-8 mr-3 flex'/>
          <p className='text-secondarymain text-xl font-bold items-center'>Muslim Connect</p>
        </div>
          <div className='flex-col flex gap-3 text-base font-bold justify-center'>
            {DATA.map((val, id) => (
              <div className={`${linkActive === id ? " bg-secondarymain text-white " : ""}w-52 rounded-2xl h-12 items-center flex pl-5`}>
                <Link href={val.link}>{val.title}</Link>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default SideNav