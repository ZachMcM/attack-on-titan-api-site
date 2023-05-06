import InlineCode from "./InlineCode";
import CodeSnippet from "./CodeSnippet";

import Schema from "./Schema";
import { SchemaData } from "@/data/schemas";

import { Param } from "@/data/availableParams";

type DocProps = {
    first: boolean
    resourceName: string,
    resourceTotal: string,
    resourcePageCount: number,
    resourceSchema: SchemaData,
    resourceAll: string,
    resourceSingle: string,
    resourceMultiple: string,
    resourceFilter: string,
    resourceParams: Param[],
    sampleIds: number[],
    sampleFilter: string
}

export default function ResourceDocs(props: any) {
    const {
        first,
        resourceName,
        resourceTotal,
        resourcePageCount,
        resourceSchema,
        resourceAll,
        resourceSingle,
        resourceMultiple,
        resourceFilter,
        resourceParams,
        sampleIds,
        sampleFilter
    }: DocProps = props

    return (
        <>
            <div className="flex flex-col space-y-3.5 py-10" id={resourceName.toLowerCase()}>
                <h3 className="font-bold text-3xl">{resourceName}</h3>
                <p className="text-lg">There are <InlineCode>{resourceTotal}</InlineCode> {resourceName.toLowerCase()} with <InlineCode>{resourcePageCount}</InlineCode> pages.</p>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id={`${resourceName.toLowerCase()}-schema`}>
                <h4 className="font-bold text-2xl">{resourceName.substring(0, resourceName.lastIndexOf("s"))} schema</h4>
                <Schema schema={resourceSchema}/>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id={`${resourceName.toLowerCase()}-all`}>
                <h4 className="font-bold text-2xl">Get all {resourceName.toLowerCase()}</h4>
                <p className="text-lg">You can access all the {resourceName.toLowerCase()} by using the <InlineCode>/{resourceName.toLowerCase()}</InlineCode> endpoint.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code={`GET https://api.attackontitanapi.com/${resourceName.toLowerCase()}`}/>
                    <CodeSnippet language="json" code={resourceAll}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id={`${resourceName.toLowerCase()}-single`}>
                <h4 className="font-bold text-2xl">Get a single {resourceName.toLowerCase().substring(0, resourceName.lastIndexOf("s"))}</h4>
                <p className="text-lg">You can get a single {resourceName.toLowerCase().substring(0, resourceName.lastIndexOf("s"))} by adding an id as the request parameter <InlineCode>/{resourceName.toLowerCase()}/{sampleIds[0]}</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code={`GET https://api.attackontitanapi.com/${resourceName.toLowerCase()}/${sampleIds[0]}`}/>
                    <CodeSnippet language="json" code={resourceSingle}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id={`${resourceName.toLowerCase()}-multiple`}>
                <h4 className="font-bold text-2xl">Get multiple {resourceName.toLowerCase()}</h4>
                <p className="text-lg">You can get multiple {resourceName.toLowerCase()} by adding an list of ids as the request parameter <InlineCode>/{resourceName.toLowerCase()}/{sampleIds[0]},{sampleIds[1]}</InlineCode>.</p>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code={`GET https://api.attackontitanapi.com/${resourceName.toLowerCase()}/${sampleIds[0]},${sampleIds[1]}`}/>
                    <CodeSnippet language="json" code={resourceMultiple}/>
                </div>
            </div>
            <div className="flex flex-col space-y-3.5 py-10" id={`${resourceName.toLowerCase()}-filter`}>
                <h4 className="font-bold text-2xl">Filter {resourceName.toLowerCase()}</h4>
                {
                    first && <p className="text-lg">To filter {resourceName.toLowerCase()} to include a query in the request. Add a <InlineCode>?</InlineCode> followed by the query <InlineCode>{"<query>=value>"}</InlineCode>. To chain multiple queries seperate them by <InlineCode>&</InlineCode>.</p>
                }
                <p className="text-lg">Available parameters:</p>
                <ul className="text-lg list-disc list-inside ml-10 flex flex-col space-y-3">
                    {
                        resourceParams.map((param: Param) => {
                            return (
                                <li><InlineCode>{param.name}</InlineCode>: {param.desc}</li>
                            )
                        })
                    }
                </ul>
                <div className="py-6">
                    <CodeSnippet language="shell-session" code={`GET https://api.attackontitanapi.com${sampleFilter}`}/>
                    <CodeSnippet language="json" code={resourceFilter}/>
                </div>
            </div>
        </>
    )
}