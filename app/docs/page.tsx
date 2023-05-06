import InlineCode from "../components/InlineCode"
import CodeSnippet from "../components/CodeSnippet"

import { baseRoute } from "@/data/snippets"
import { infoObject } from "@/data/snippets"

import CharactersDocs from "../components/CharactersDoc"
import EpisodesDocs from "../components/EpisodesDoc"

import { FaPencilAlt } from "react-icons/fa"

export default function Docs() {
    return (
        <div className="p-8 md:py-16 md:px-20 lg:px-32 flex flex-col">
            <h1 className="text-4xl font-bold py-10">Doumentation</h1>
            <div className="flex flex-col space-y-3.5 py-10" id="intro">
                <h3 className="font-bold text-3xl">Introduction</h3>
                <p className="text-lg">This documentation will help you understand the Attack on Titan API and all of its endpoints so you can use it in your next project.</p>
            </div>  
            <div className="flex flex-col space-y-3.5 py-10" id="rest">
                <h4 className="font-bold text-2xl">REST</h4>
                <p className="font-semibold text-lg">Base url: <a href="https://api.attackontitanapi.com" className="font-normal border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">https://api.attackontitanapi.com</a></p>
                <p className="text-lg">The base url contains information about all available API's endpoints. All requests are <InlineCode>GET</InlineCode> requests and go over <InlineCode>https</InlineCode>. All responses will return data in <InlineCode>json</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language={"shell-session"} code="GET https://api.attackontitanapi.com"/>
                    <CodeSnippet language={"json"} code={baseRoute}/>
                </div>
                <p className="text-lg">There are currently 5 endpoints</p>
                <ul className="list-disc list-inside text-lg ml-10">
                    <li><a href="https://api.attackontitanapi.com/characters" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Characters</a>: data on all the characters</li>
                    <li><a href="https://api.attackontitanapi.com/episodes" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Episodes</a>: data on all the episodes</li>
                    <li><a href="https://api.attackontitanapi.com/locations" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Locations</a>: data on all the locations</li>
                    <li><a href="https://api.attackontitanapi.com/organizations" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Organizations</a>: data on all the organizations</li>
                    <li><a href="https://api.attackontitanapi.com/titans" className="border-b-2 hover:border-0 hover:text-fuchsia-500 border-fuchsia-500">Titans</a>: data on all the titans</li>
                </ul>
            </div>  
            <div className="flex flex-col space-y-3.5 py-10" id="info">
                <h4 className="font-bold text-2xl">Info and Pagination</h4>
                <p className="text-lg">The Attack on Titan automatically paginates requests with a maximum of 20 results per page.</p>
                <p className="text-lg">Each response contains an <InlineCode>info</InlineCode> object with information about the response.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/characters"/>
                    <CodeSnippet language="json" code={infoObject}/>
                </div>
            </div> 
            <CharactersDocs/>
            <EpisodesDocs/>
            <footer className="flex justify-between pt-10 mt-20 border-t border-neutral-700">
                <p>Released under MIT License.</p>
                <a  href="https://github.com/ZachMcM/attack-on-titan-api-site" className="hover:text-fuchsia-500 flex space-x-3 items-center">
                    <FaPencilAlt/>
                    <p>Edit this page</p>
                </a>
            </footer>
        </div>
    )
}