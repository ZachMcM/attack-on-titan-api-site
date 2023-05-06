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