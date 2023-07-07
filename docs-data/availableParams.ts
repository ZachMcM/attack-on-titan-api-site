export type Param = {
    name: string,
    desc: string
}

export const characterParams: Param[] = [
    {
        name: "name",
        desc: "Filter by name"
    },
    {
        name: "gender",
        desc: "Filter by gender (male, female, or unknown)"
    },
    {
        name: "status",
        desc: "Filter by status (alive, deceased, or unknown)"
    },
    {
        name: "occupation",
        desc: "Filter by occupation (soldier, thug, etc.)"
    }
]

export const episodeParams: Param[] = [
    {
        name: "name",
        desc: "Filter by name"
    },
    {
        name: "episode",
        desc: "Filter by episode code"
    }
]

export const locationParams: Param[] = [
    {
        name: "name",
        desc: "Filter by name"
    },
    {
        name: "territory",
        desc: "Filter by terriotry (e.g.  Shiganshina)"
    },
    {
        name: "region",
        desc: "Filter by region (e.g. South)"
    }
]

export const organizationParams: Param[] = [
    {
        name: "name",
        desc: "Filter by name"
    },
    {
        name: "affiliation",
        desc: "Filter by affiliation (Marley, Warriors, Scouts, unknown, etc.)"
    }
]

export const titanParams: Param[] = [
    {
        name: "name",
        desc: "Filter by name"
    },
    {
        name: "allegiance",
        desc: "Filter by allegiance (Marley, Eldia or None)."
    }
]