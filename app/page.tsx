import Image from "next/image"
import Titan from "./components/Titan"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

async function getTitans() {
  const res = await fetch("https://api.attackontitanapi.com/titans", { cache: "no-store"})
  const data = await res.json()
  return data
}

export default async function Home() {
  const titanData = await getTitans()

  return (
    <main className="w-full p-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl p-5 font-bold text-center">The Attack on Titan API</h1>
      <p className="p-3 text-lg md:text-xl max-w-4xl text-center">Welcome to the Attack on Titan API. This is free API allows users to get up to date information on the popular manga/anime Attack on Titan.</p>
      <Link href="/docs" className="flex space-x-2 items-center text-xl p-3 rounded-lg m-3 hover:text-fuchsia-500">
        <p className="font-bold">Docs</p>
        <FaArrowRight className="text-xl"/>
      </Link>
      <div className="flex flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10">
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
                allegiance={titan.allegiance[0]}
                key={titan.id}
              />
            )
          })
        }
      </div>
    </main>
  )
}
