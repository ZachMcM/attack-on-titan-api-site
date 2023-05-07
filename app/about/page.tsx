import Link from "next/link";

export default function About() {
    return (
        <div className="p-8 md:py-16 md:px-20 lg:px-32 flex flex-col">
            <h1 className="text-4xl font-bold py-10">About</h1>
            <div className="space-y-3.5 flex flex-col py-10">
                <h4 className="font-bold text-2xl">What is this?</h4>
                <p className="text-lg">The Attack on Titan API is a RESTful API that allows you to retrieve up to date information about characters, episodes, locations, organizations, and titans from the popular anime and manga series Attack on Titan The API is free and doesn't require a key.</p>
                <p>Check out the <Link href="/docs" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">documentation</Link> to use it in your next project!</p>
            </div>
            <div className="space-y-3.5 flex flex-col py-10">
                <h4 className="font-bold text-2xl">Who am you?</h4>
                <p className="text-lg">I am <Link href="/docs" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Zach McMullen</Link> a developer and computer science student at Purdue University.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10">
                <h4 className="font-bold text-2xl">Why did you build this?</h4>
                <p className="text-lg">I wanted to get into the open source community and get more projects under my belt as a student. There are also no Attack on Titan APIs that currently work and provide up to date information on the anime.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10">
                <h4 className="font-bold text-2xl">How did you build this?</h4>
                <p className="text-lg">The API was built using <a href="https://nodejs.org" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Node.js</a> and the <a href="https://expressjs.com" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Express.js</a> framework. The API is currently hosted on <a href="https://render.com" className="text-lg  border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">render</a>. The data was collected by scraping the <a href="https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki" className="text-lg  border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Attack on Titan Wiki</a> using the <a href="https://cheerio.js.org/" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">cheerio.js</a> library.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10">
                <h4 className="font-bold text-2xl">How can I contribute?</h4>
                <p className="text-lg">Feel free to contribute to this project on <a href="https://github.com/ZachMcM/attack-on-titan-api" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Github</a>.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10">
                <h4 className="font-bold text-2xl">Copyright</h4>
                <p className="text-lg">Attack on Titan was created by Hajime Isayama. The data and images are used without claim of ownership and belong to their respective owners.</p>
                <p className="text-lg">This API is open source and uses an MIT license.</p>
            </div>
        </div>
    )
}