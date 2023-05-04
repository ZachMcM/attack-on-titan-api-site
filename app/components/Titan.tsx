import Image from "next/image"

export default async function Titan(characterInfo: any) {
    const { name, img, height, abilities, currentInheritor, allegiance } = characterInfo
    const curr = await getCurrentInheritor(currentInheritor)

    return (
        <div className="p-8 shadow-xl rounded-lg flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10">
            <div>
                <Image 
                    src={img}
                    width={150}
                    height={150}
                    alt={name}
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col space-y-1">
                <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                <div className="flex space-x-1">
                    <p className="font-semibold">Height:</p>
                    <p>{height}</p>
                </div>
                <div className="flex space-x-1">
                    <p className="font-semibold">Current Inheritor:</p>
                    <p>{curr}</p>
                </div>
                <div className="flex space-x-1">
                    <p className="font-semibold">Allegiance:</p>
                    <p>{allegiance}</p>
                </div>
                <div className="flex space-x-1">
                    <p className="font-semibold">Abilities:</p>
                    <p>{abilities[0]}...</p>
                </div>
            </div>
        </div>
    )
}

async function getCurrentInheritor(link: string) {
    const res = await fetch(link)
    const data = await res.json()
    return data.name
}