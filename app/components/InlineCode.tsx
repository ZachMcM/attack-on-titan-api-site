export default function InlineCode(props: any) {
    return (
        <span className="bg-zinc-900 border-zinc-800 border py-1.5 px-2.5 font-mono rounded-md text-sm text-white">{props.children}</span>
    )
}