import InlineCode from "../components/InlineCode"
import CodeSnippet from "../components/CodeSnippet"

import {
    baseRoute,
    infoObject
} from '@/docs-data/snippets'

export default function Docs() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-3.5 py-10" id="intro">
                <h3 className="font-bold text-3xl">Introduction</h3>
                <p className="text-lg">This documentation will help you understand the Attack on Titan API and all of its endpoints so you can use it in your next project.</p>
            </div>  
            <div className="flex flex-col space-y-3.5 py-10" id="rest">
                <h4 className="font-bold text-2xl">REST</h4>
                <p className="font-semibold text-lg">Base url: <a href="https://api.attackontitanapi.com" className="font-normal text-sky-400 hover:opacity-80 duration-300">https://api.attackontitanapi.com</a></p>
                <p className="text-lg">The base url contains information about all available API's endpoints. All requests are <InlineCode>GET</InlineCode> requests and go over <InlineCode>https</InlineCode>. All responses will return data in <InlineCode>json</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language={"shell-session"} code="GET https://api.attackontitanapi.com"/>
                    <CodeSnippet language={"json"} code={baseRoute}/>
                </div>
                <p className="text-lg">There are currently 5 endpoints</p>
                <ul className="list-disc list-inside text-lg ml-10">
                    <li><a href="https://api.attackontitanapi.com/characters" className=" duration-300 text-sky-400 hover:opacity-80">Characters</a>: data on all the characters</li>
                    <li><a href="https://api.attackontitanapi.com/episodes" className=" duration-300 text-sky-400 hover:opacity-80 ">Episodes</a>: data on all the episodes</li>
                    <li><a href="https://api.attackontitanapi.com/locations" className=" duration-300 text-sky-400 hover:opacity-80">Locations</a>: data on all the locations</li>
                    <li><a href="https://api.attackontitanapi.com/organizations" className=" duration-300 text-sky-400 hover:opacity-80">Organizations</a>: data on all the organizations</li>
                    <li><a href="https://api.attackontitanapi.com/titans" className=" duration-300 text-sky-400 hover:opacity-80">Titans</a>: data on all the titans</li>
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
        </div>
    )
}