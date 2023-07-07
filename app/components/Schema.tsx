import { SchemaData } from "@/docs-data/schemas"

export default function Schema(props: any) {
    const { schema } = props
    return (
        <table className="text-lg max-w-prose">
                    <thead>
                        <tr className="text-left border-b border-zinc-800">
                            <th className="font-semibold py-4">Key</th>
                            <th className="font-semibold">Type</th>
                            <th className="font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schema.map((schema: SchemaData) => {
                                return (
                                    <tr className="border-b border-zinc-800" key={Math.floor(Math.random() * 1000)}>
                                        <td className="py-4">{schema.key}</td>
                                        <td className="py-4">{schema.type}</td>
                                        <td className="py-4">{schema.desc}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
    )
}