import { charactersAll } from "@/data/snippets"
import { characterSingle } from "@/data/snippets"
import { charactersMultiple } from "@/data/snippets"
import { charactersFilter } from "@/data/snippets"

import InlineCode from "../components/InlineCode"
import CodeSnippet from "../components/CodeSnippet"

import Schema from "../components/Schema"
import { characterSchema } from "@/data/schemas"

export default function CharactersDocs() {
    return (
        <>
            <div className="flex flex-col space-y-3.5 py-10" id="characters">
                <h3 className="font-bold text-3xl">Characters</h3> 
                <p className="text-lg">There are <InlineCode>201</InlineCode> characters with <InlineCode>11</InlineCode> pages.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="character-schema">
                <h4 className="font-bold text-2xl">Character Schema</h4>
                <Schema schema={characterSchema}/>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="characters-all">
                <h4 className="font-bold text-2xl" id="characters">Get all characters</h4> 
                <p className="text-lg">You can access all the characters by using the <InlineCode>/characters</InlineCode> endpoint.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/characters"/>
                    <CodeSnippet language="json" code={charactersAll}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="characters-single">
                <h4 className="font-bold text-2xl" id="characters">Get a single character</h4> 
                <p className="text-lg">You can get a single character by adding an <InlineCode>id</InlineCode> as the request parameter <InlineCode>/characters/188</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/characters/188"/>
                    <CodeSnippet language="json" code={characterSingle}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="characters-multiple">
                <h4 className="font-bold text-2xl" id="characters">Get multiple characters</h4> 
                <p className="text-lg">You can get multiple characters by adding an list of <InlineCode>ids</InlineCode> as the request parameter <InlineCode>/characters/188,59</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/characters/188,59"/>
                    <CodeSnippet language="json" code={charactersMultiple}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="characters-filter">
                <h4 className="font-bold text-2xl" id="characters">Filter characters</h4> 
                <p className="text-lg">To filter characters to include a query in the request. Add a <InlineCode>?</InlineCode> followed by the query <InlineCode>{"<query>=value>"}</InlineCode>. To chain multiple queries seperate them by <InlineCode>&</InlineCode>.</p>
                <p className="text-lg">As an example if you only wanted get a list of characters who have an occupation of soldier and a status of alive you would add <InlineCode>?status=alive&occupation=soldier</InlineCode> to the url.</p>
                <p className="text-lg">Available parameters:</p>
                <ul className="text-lg list-disc list-inside ml-10 flex flex-col space-y-3">
                    <li><InlineCode>name</InlineCode>: filter by name</li>
                    <li><InlineCode>gender</InlineCode>: filter by gender (male, female or unknown)</li>
                    <li><InlineCode>status</InlineCode>: filter by status (alive, deceased or unknown)</li>
                    <li><InlineCode>occupation</InlineCode>: filter by occupation (soldier, thug, etc.)</li>
                </ul>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/characters?status=alive&occupation=soldier"/>
                    <CodeSnippet language="json" code={charactersFilter}/>
                </div>
            </div>
        </>
    )
}