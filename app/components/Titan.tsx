import Image from "next/image"

export default async function Titan(characterInfo: any) {
    const { name, img, height, abilities, currentInheritor, allegiance } = characterInfo
    const curr = await getCurrentInheritor(currentInheritor)

    return (
        <div className="p-8 drop-shadow-2xl border border-zinc-800 bg-zinc-950 rounded-lg flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 items-center">
            <div className="w-full flex justify-center lg:w-auto lg:block">
                <Image 
                    src={img}
                    width={150}
                    height={150}
                    alt={name}
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col space-y-1 lg:w-3/5">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <p className="text-zinc-400"><span className="font-semibold">Height:</span> {height}</p>
                <p className="text-zinc-400"><span className="font-semibold">Current Inheritor:</span> {curr}</p>
                <p className="text-zinc-400"><span className="font-semibold">Allegiance:</span> {allegiance}</p>
                <p className="text-zinc-400"><span className="font-semibold">Abilities:</span> {
                    abilities.map((ability: string, i: number) => {
                        if (i == abilities.length - 1) {
                            return <span key={Math.floor(Math.random() * 10000)}>and {ability}.</span> 
                        } else {
                            return <span key={Math.floor(Math.random() * 10000)}>{ability}, </span>
                        } 
                    })
                }</p>

            </div>
        </div>
    )
}

async function getCurrentInheritor(link: string) {
    const res = await fetch(link)
    const data = await res.json()
    return data.name
}