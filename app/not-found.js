"use client"

import { usePathname, useRouter } from "next/navigation"

export default function NotFound() {
const router = useRouter()

    function handleRedirect() {
            router.push("/")
    }

   return (
      <main className="pt-20 text-center bg-gray-50 min-h-screen">
         <h1 className="text-[5rem] font-black uppercase bg-gradient-to-r from-[#c3ebfa] to-vmls-blue bg-clip-text text-transparent bg-cover bg-center font-['Montserrat'] sm:text-[3rem]">Not found</h1>
         <p className="text-[1.5rem] font-medium text-[#ddd8d8]">Unfortunately, we could not find the requested page or resource.</p>
         <button onClick={handleRedirect} className='cursor-pointer mt-5 text-sm outline-none border-none text-vmls-green font-semibold'>Go Back</button>
      </main>
   )
}