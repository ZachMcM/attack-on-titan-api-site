export type SchemaData = {
    key: string,
    type: string,
    desc: string 
}

export const characterSchema: SchemaData[] = [
    {
        key: "id",
        type: "int",
        desc: "The character's id."
    },
    {
        key: "name",
        type: "string",
        desc: "The character's name."
    },
    {
        key: "img",
        type: "string",
        desc: "The url to the character's image."
    },
    {
        key: "alias",
        type: "string[]",
        desc: "The character's aliases."
    },
    {
        key: "species",
        type: "string[]",
        desc: "The character's species."
    },
    {
        key: "gender",
        type: "string",
        desc: "The character's gender."
    },
    {
        key: "age",
        type: "int",
        desc: "The character's age."
    },
    {
        key: "height",
        type: "string",
        desc: "The character's height."
    },
    {
        key: "relatives",
        type: "object[]",
        desc: "The families and people the character is related to."
    },
    {
        key: "birthplace",
        type: "string",
        desc: "The character's birthplace."
    },
    {
        key: "residence",
        type: "string",
        desc: "The character's residence."
    },
    {
        key: "status",
        type: "stirng",
        desc: "The character's status (alive or dead)"
    },
    {
        key: "occupation",
        type: "string",
        desc: "The character's occupation"
    },
    {
        key: "groups",
        type: "object[]",
        desc: "The groups the character belongs to."
    },
    {
        key: "roles",
        type: "string[]",
        desc: "The character's roles."
    },
    {
        key: "episodes",
        type: "string[]",
        desc: "The episodes the character appears in."
    }
]

export const episodeSchema: SchemaData[] = [
    {
        key: "id",
        type: "int",
        desc: "The episode's id."
    },
    {
        key: "name",
        type: "string",
        desc: "The episode's name."
    },
    {
        key: "img",
        type: "string",
        desc: "The url to the episode's image."
    },
    {
        key: "episode",
        type: "string",
        desc: "The code of the episode."
    },
    {
        key: "characters",
        type: "string[]",
        desc: "A list of characters that appear in the episode."
    }
]

export const locationSchema: SchemaData[] = [
    {
        key: "id",
        type: "int",
        desc: "The location's id."
    },
    {
        key: "name",
        type: "string",
        desc: "The location's name."
    },
    {
        key: "territory",
        type: "string",
        desc: "The territory where the location exits."
    },
    {
        key: "region",
        type: "string",
        desc: "The region where the location exists."
    },
    {
        key: "notable_inhabitants",
        type: "string[]",
        desc: "A list of the location's notable inhabitants."
    },
    {
        key: "notable_former_inhabitants",
        type: "string[]",
        desc: "A list of the location's notable former inhabitants."
    },
    {
        key: "deubt",
        type: "string",
        desc: "The first episode the location appeared in."
    }
]

export const organizationSchema: SchemaData[] = [
    {
        key: "id",
        type: "int",
        desc: "The organization's id."
    },
    {
        key: "name",
        type: "string",
        desc: "The organization's name."
    },
    {
        key: "img",
        type: "string",
        desc: "The url to the organization's image."
    },
    {
        key: "occupations",
        type: "string[]",
        desc: "A list of the organization's occupations."
    },
    {
        key: "notable_members",
        type: "string[]",
        desc: "A list of notable members of the organization."
    },
    {
        key: "notable_former_members",
        type: "string[]",
        desc: "A list of notable former members of the organization."
    },
    {
        key: "affiliation",
        type: "string",
        desc: "The organization's affiliation/"
    },
    {
        key: "debut",
        type: "string",
        desc: "The first episode the organization appeared in."
    }
]

export const titanSchema: SchemaData[] = [
    {
        key: "id",
        type: "int",
        desc: "The titan's id."
    },
    {
        key: "name",
        type: "string",
        desc: "The titan's name"
    },
    {
        key: "img",
        type: "string",
        desc: "A url to the titan's image."
    },
    {
        key: "height",
        type: "string",
        desc: "The titan's height."
    },
    {
        key: "abilities",
        type: "string[]",
        desc: "The titan's abilities."
    },
    {
        key: "current_inheritor",
        type: "string",
        desc: "The current inheritor of the titan."
    },
    {
        key: "former_inheritors",
        type: "string[]",
        desc: "A list of former inheritors of the titan."
    },
    {
        key: "allegiance",
        type: "string",
        desc: "The titan's allegiance (Marley, Eldia, or None)."
    }
]