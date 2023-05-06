export default function InlineCode(props: any) {
    return (
        <span className="bg-[#272822] py-1.5 px-2.5 font-mono rounded-md text-sm">{props.children}</span>
    )
}