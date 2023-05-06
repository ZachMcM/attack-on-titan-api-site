import InlineCode from "./InlineCode";
import CodeSnippet from "./CodeSnippet";

import Schema from "./Schema";
import { episodeSchema } from "@/data/schemas";

import { episodesAll } from "@/data/snippets";
import { episodesSingle } from "@/data/snippets";
import { episodesMultiple } from "@/data/snippets";
import { episodesFilter } from "@/data/snippets";

export default function EpisodesDoc() {
    return (
        <>
            <div className="flex flex-col space-y-3.5 py-10" id="episodes">
                <h3 className="font-bold text-3xl">Episodes</h3>
                <p className="text-lg">There are <InlineCode>88</InlineCode> episodes with <InlineCode>5</InlineCode> pages.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="episode-schema">
                <h4 className="font-bold text-2xl">Episode schema</h4>
                <Schema schema={episodeSchema}/>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="episodes-all">
                <h4 className="font-bold text-2xl">Get all episodes</h4>
                <p className="text-lg">You can access all the episodes by using the <InlineCode>/episodes</InlineCode> endpoint.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/episodes"/>
                    <CodeSnippet language="json" code={episodesAll}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="episodes-single">
                <h4 className="font-bold text-2xl">Get a single episode</h4>
                <p className="text-lg">You can get a single episode by adding an id as the request parameter <InlineCode>/episodes/88</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/episodes/88"/>
                    <CodeSnippet language="json" code={episodesSingle}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="episodes-multiple">
                <h4 className="font-bold text-2xl">Get multiple episodes</h4>
                <p className="text-lg">You can get multiple episodes by adding an list of ids as the request parameter <InlineCode>/episodes/88,87</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/episodes/88/87"/>
                    <CodeSnippet language="json" code={episodesMultiple}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id="episodes-filter">
                <h4 className="font-bold text-2xl">Filter episodes</h4>
                <p className="text-lg">To filter episodes to include a query in the request. Add a <InlineCode>?</InlineCode> followed by the query <InlineCode>{"<query>=value>"}</InlineCode>. To chain multiple queries seperate them by <InlineCode>&</InlineCode>.</p>
                <p className="text-lg">As an example if you only wanted get a list of episodes who have <InlineCode>"S1"</InlineCode> in their episode code you would add <InlineCode>?episode=S1</InlineCode> to the url.</p>
                <p className="text-lg">Available parameters:</p>
                <ul className="text-lg list-disc list-inside ml-10 flex flex-col space-y-3">
                    <li><InlineCode>name</InlineCode>: filter by name</li>
                    <li><InlineCode>episode</InlineCode>: filter by episode code</li>
                </ul>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code="GET https://api.attackontitanapi.com/episodes?episode=S1"/>
                    <CodeSnippet language="json" code={episodesFilter}/>
                </div>
            </div>
        </>
    )
}