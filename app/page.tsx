import Titan from "./components/Titan"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import Footer from "./components/Footer"

async function getTitans() {
  const res = await fetch("https://api.attackontitanapi.com/titans")
  const data = await res.json()
  return data
}

export default async function Home() {
  const titanData = await getTitans()

  return (
    <main>
      <div className="min-h-screen p-10 mt-20 space-y-10 flex flex-col md:mx-16 lg:mx-48 2xl:mx-96 items-center">
        <div className="flex flex-col space-y-3 items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">The Attack on Titan API</h1>
          <p className="text-lg md:text-xl max-w-4xl text-center text-zinc-400">Welcome to the Attack on Titan API. This is free API allows users to get up to date information on the popular manga/anime Attack on Titan.</p>
          <Link href="/docs" className="flex font-medium w-fit hover:opacity-80 space-x-2 items-center px-5 py-2.5 rounded-lg bg-white text-zinc-950 duration-300">
            <p>Docs</p>
            <FaArrowRight/>
          </Link>
        </div>
        <div className="flex flex-col space-y-5 p-10">
          {
            titanData.results.map((titan: any) => {
              return (
                /* @ts-expect-error Async Server Component */
                <Titan
                  name={titan.name}
                  img={titan.img}
                  height={titan.height}
                  abilities={titan.abilities}
                  currentInheritor={titan.current_inheritor}
                  allegiance={titan.allegiance}
                  key={titan.id}
                />
              )
            })
          }
        </div>
      </div>    
      <div className="mx-5 md:mx-10 lg:mx-20 2xl:mx-96"><Footer/></div>
    </main>
  )
}
