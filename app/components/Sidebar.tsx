export default function Sidebar() {
    return (
        <div className="hidden border-r border-neutral-700 w-1/5 p-10 md:flex flex-col space-y-10 overflow-y-scroll">
            <div className="flex flex-col space-y-2.5">
                <a href="docs/#intro" className="text-2xl font-semibold hover:text-fuchsia-500">Introduction</a>
                <a href="docs/#rest" className="text-lg hover:text-fuchsia-500">REST</a>
                <a href="docs/#info" className="text-lg hover:text-fuchsia-500">Info and Pagination</a>
            </div>
            <div className="flex flex-col space-y-2.5">
                <a href="docs/#characters" className="text-2xl font-semibold hover:text-fuchsia-500">Characters</a>
                <a href="docs/#character-schema" className="text-lg hover:text-fuchsia-500">Character schema</a>
                <a href="docs/#characters-all" className="text-lg hover:text-fuchsia-500">Get all characters</a>
                <a href="docs/#characters-single" className="text-lg hover:text-fuchsia-500">Get a single character</a>
                <a href="docs/#characters-multiple" className="text-lg hover:text-fuchsia-500">Get multiple characters</a>
                <a href="docs/#characters-filter" className="text-lg hover:text-fuchsia-500">Filter characters</a>
            </div>
            <div className="flex flex-col space-y-2.5">
                <a href="docs/#episodes" className="text-2xl font-semibold hover:text-fuchsia-500">Episodes</a>
                <a href="docs/#episode-schema" className="text-lg hover:text-fuchsia-500">Episode schema</a>
                <a href="docs/#episodes-all" className="text-lg hover:text-fuchsia-500">Get all episodes</a>
                <a href="docs/#episodes-single" className="text-lg hover:text-fuchsia-500">Get a single episode</a>
                <a href="docs/#episodes-multiple" className="text-lg hover:text-fuchsia-500">Get multiple episodes</a>
                <a href="docs/#episodes-filter" className="text-lg hover:text-fuchsia-500">Filter episodes</a>
            </div>
        </div>
    )
}