const resourceList = [
    "Characters",
    "Episodes",
    "Locations",
    "Organizations",
    "Titans"
]

export default function Sidebar() {
    return (
        <div className="hidden border-r md:w-1/4 lg:w-1/5 p-10 md:flex flex-col space-y-10 overflow-y-auto">
            <div className="flex flex-col space-y-2.5">
                <a href="#intro" className="text-2xl font-semibold hover:text-fuchsia-500">Introduction</a>
                <a href="#rest" className="text-lg hover:text-fuchsia-500">REST</a>
                <a href="#info" className="text-lg hover:text-fuchsia-500">Info and Pagination</a>
            </div>
            <>
                {
                    resourceList.map((resource: string) => {
                        return (
                            <div className="flex flex-col space-y-2.5">
                                <a href={`#${resource.toLowerCase()}`} className="text-2xl font-semibold hover:text-fuchsia-500">{resource}</a>
                                <a href={`#${resource.toLowerCase()}-schema`} className="text-lg hover:text-fuchsia-500">{resource.substring(0, resource.lastIndexOf("s"))} schema</a>
                                <a href={`#${resource.toLowerCase()}-all`} className="text-lg hover:text-fuchsia-500">Get all {resource.toLowerCase()}</a>
                                <a href={`#${resource.toLowerCase()}-single`} className="text-lg hover:text-fuchsia-500">Get a single {resource.toLowerCase().substring(0, resource.lastIndexOf("s"))}</a>
                                <a href={`#${resource.toLowerCase()}-multiple`} className="text-lg hover:text-fuchsia-500">Get multiple {resource.toLowerCase()}</a>
                                <a href={`#${resource.toLowerCase()}-filter`} className="text-lg hover:text-fuchsia-500">Filter {resource.toLowerCase()}</a>
                            </div>
                        )
                    })
                }
            </>
        </div>
    )
}