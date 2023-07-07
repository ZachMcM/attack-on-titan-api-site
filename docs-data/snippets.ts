export const baseRoute = `{
    "characters": "https://api.attackontitanapi.com/characters",
    "episodes": "https://api./attackontitanapi.com/episodes",
    "locations": "https://api.attackontitanapi.com/locations",
    "organizations": "https://api.attackontitanapi.com/organizations",
    "titans": "https://api.attackontitanapi.com/titans"
}`;

export const infoObject = `{
    "info": {
      "count": 201,
      "pages": 11,
      "next_page": "https://api.attackontitanapi.com/characters?page=2",
      "prev_page": null
    },
    "results": [
        // ...
    ]
}`;

export const charactersAll = `{
    "info": {
      "count": 201,
      "pages": 11,
      "next_page": "https://api.attackontitanapi.com/characters?page=2",
      "prev_page": null
    },
    "results": [
      {
        "id": 1,
        "name": "Armin Arlelt",
        "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647",
        "alias": [
          "Colossal Titan"
        ],
        "species": [
          "Human",
          "Intelligent Titan"
        ],
        "gender": "Male",
        "age": 19,
        "height": "60 m (Colossal Titan form)",
        "relatives": [
          {
            "family": "Arlelt family",
            "members": [
              "Unnamed father",
              "Unnamed mother",
              "Unnamed grandfather"
            ]
          }
        ],
        "birthplace": "Shiganshina District",
        "residence": "Wall Rose",
        "status": "Alive",
        "occupation": "Soldier",
        "groups": [
          {
            "name": "Scout Regiment",
            "sub_groups": [
              "Special Operations Squad"
            ]
          }
        ],
        "roles": [
          "Colossal Titans",
          "Scout Regiment Commanders"
        ],
        "episodes": [
          "https://api.attackontitanapi.com/episodes/1",
          "https://api.attackontitanapi.com/episodes/2",
          "https://api.attackontitanapi.com/episodes/3",
          "https://api.attackontitanapi.com/episodes/4",
          // ...
        ]
      },
      // ...
    ]`

export const characterSingle = `{
    "id": 188,
    "name": "Eren Jaeger",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20220123225500",
    "alias": [
      "Suicidal Maniac",
      "Titan boy",
      "Attack Titan",
      "Mysterious Titan",
      "Berserk Titan",
      "Founding Titan",
      "Founder",
      "Mister Kruger",
      "Usurper",
      "War Hammer Titan",
      "Doomsday Titan"
    ],
    "species": [
      "Human",
      "Intelligent Titan"
    ],
    "gender": "Male",
    "age": 19,
    "height": "15 m (Titan form)",
    "relatives": [
      {
        "family": "Jaeger family",
        "members": [
          "https://api.attackontitanapi.com/characters/160",
          "https://api.attackontitanapi.com/characters/161",
          "https://api.attackontitanapi.com/characters/184",
          "https://api.attackontitanapi.com/characters/173",
          "Unnamed grandmother",
          "https://api.attackontitanapi.com/characters/181"
        ]
      }
    ],
    "birthplace": "Shiganshina District",
    "residence": "Wall Rose",
    "status": "Alive",
    "occupation": "Soldier",
    "groups": [],
    "roles": [
      "Attack Titans",
      "Founding Titans",
      "War Hammer Titans"
    ],
    "episodes": [
      "https://api.attackontitanapi.com/episodes/1",
      "https://api.attackontitanapi.com/episodes/2",
      "https://api.attackontitanapi.com/episodes/3",
      // ...
    ]
}`

export const charactersMultiple = `[
    {
      "id": 59,
      "name": "Duran",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/b/b2/Duran_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20180730213708",
      "alias": [],
      "species": [
        "Human"
      ],
      "gender": "Male",
      "age": null,
      "height": null,
      "relatives": [],
      "birthplace": null,
      "residence": "Wall Sina",
      "status": "Deceased",
      "occupation": "Soldier",
      "groups": [
        {
          "name": "Military Police Regiment",
          "sub_groups": [
            "Anti-Personnel Control Squad"
          ]
        }
      ],
      "roles": [],
      "episodes": [
        "https://api.attackontitanapi.com/episodes/38",
        "https://api.attackontitanapi.com/episodes/39",
        "https://api.attackontitanapi.com/episodes/43"
      ]
    },
    {
      "id": 188,
      "name": "Eren Jaeger",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20220123225500",
      "alias": [
        "Suicidal Maniac",
        "Titan boy",
        "Attack Titan",
        "Mysterious Titan",
        "Berserk Titan",
        "Founding Titan",
        "Founder",
        "Mister Kruger",
        "Usurper",
        "War Hammer Titan",
        "Doomsday Titan"
      ],
      "species": [
        "Human",
        "Intelligent Titan"
      ],
      "gender": "Male",
      "age": 19,
      "height": "15 m (Titan form)",
      "relatives": [
        {
          "family": "Jaeger family",
          "members": [
            "https://api.attackontitanapi.com/characters/160",
            "https://api.attackontitanapi.com/characters/161",
            "https://api.attackontitanapi.com/characters/184",
            "https://api.attackontitanapi.com/characters/173",
            "Unnamed grandmother",
            "https://api.attackontitanapi.com/characters/181"
          ]
        }
      ],
      "birthplace": "Shiganshina District",
      "residence": "Wall Rose",
      "status": "Alive",
      "occupation": "Soldier",
      "groups": [],
      "roles": [
        "Attack Titans",
        "Founding Titans",
        "War Hammer Titans"
      ],
      "episodes": [
        "https://api.attackontitanapi.com/episodes/1",
        "https://api.attackontitanapi.com/episodes/2",
        "https://api.attackontitanapi.com/episodes/3",
        // ...
      ]
    }
]`

export const charactersFilter = `{
    "info": {
      "count": 26,
      "pages": 2,
      "next_page": "https://api.attackontitanapi.com/characters?page=2?status=alive&occupation=soldier",
      "prev_page": null
    },
    "results": [
      {
        "id": 1,
        "name": "Armin Arlelt",
        "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647",
        "alias": [
          "Colossal Titan"
        ],
        "species": [
          "Human",
          "Intelligent Titan"
        ],
        "gender": "Male",
        "age": 19,
        "height": "60 m (Colossal Titan form)",
        "relatives": [
          {
            "family": "Arlelt family",
            "members": [
              "Unnamed father",
              "Unnamed mother",
              "Unnamed grandfather"
            ]
          }
        ],
        "birthplace": "Shiganshina District",
        "residence": "Wall Rose",
        "status": "Alive",
        "occupation": "Soldier",
        "groups": [
          {
            "name": "Scout Regiment",
            "sub_groups": [
              "Special Operations Squad"
            ]
          }
        ],
        "roles": [
          "Colossal Titans",
          "Scout Regiment Commanders"
        ],
        "episodes": [
          "https://api.attackontitanapi.com/episodes/1",
          "https://api.attackontitanapi.com/episodes/2",
          "https://api.attackontitanapi.com/episodes/3",
          // ...
        ]
      },
      {
        "id": 2,
        "name": "Mikasa Ackermann",
        "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Mikasa_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210221220718",
        "alias": [],
        "species": [
          "Human"
        ],
        "gender": "Female",
        "age": 19,
        "height": null,
        "relatives": [
          {
            "family": "Ackermann family",
            "members": [
              "Unnamed father",
              "Unnamed relative",
              "https://api.attackontitanapi.com/characters/57",
              "https://api.attackontitanapi.com/characters/165",
              "https://api.attackontitanapi.com/characters/5",
              "Unnamed mother",
              "https://api.attackontitanapi.com/characters/125"
            ]
          }
        ],
        "birthplace": "Shiganshina District Outskirts? → Shiganshina District",
        "residence": "Wall Rose",
        "status": "Alive",
        "occupation": "Soldier",
        "groups": [
          {
            "name": "Scout Regiment",
            "sub_groups": [
              "Special Operations Squad"
            ]
          }
        ],
        "roles": [],
        "episodes": [
          "https://api.attackontitanapi.com/episodes/1",
          "https://api.attackontitanapi.com/episodes/2",
          "https://api.attackontitanapi.com/episodes/3",
          // ...
        ]
      },
      {
        "id": 3,
        "name": "Jean Kirschtein",
        "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/3/38/Jean_Kirschtein_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210207230042",
        "alias": [
          "Horse face"
        ],
        "species": [
          "Human"
        ],
        "gender": "Male",
        "age": 19,
        "height": null,
        "relatives": [
          {
            "family": "Kirschtein family",
            "members": [
              "Unnamed mother",
              "Unnamed father[2]"
            ]
          }
        ],
        "birthplace": "Trost District",
        "residence": "Wall Rose",
        "status": "Alive",
        "occupation": "Soldier",
        "groups": [
          {
            "name": "Scout Regiment",
            "sub_groups": [
              "Special Operations Squad"
            ]
          }
        ],
        "roles": [],
        "episodes": [
          "https://api.attackontitanapi.com/episodes/2",
          "https://api.attackontitanapi.com/episodes/3",
          "https://api.attackontitanapi.com/episodes/4",
          // ...
        ]
    },
    // ...
]`

export const episodesAll = `{
  "info": {
    "count": 88,
    "pages": 5,
    "next_page": "https://api.attackontitanapi.com/episodes?page=2",
    "prev_page": null
  },
  "results": [
    {
      "id": 1,
      "name": "To You, in 2000 Years: The Fall of Shiganshina, Part 1",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/b/b4/The_Colossal_Titan_outside_Shiganshina.png/revision/latest/scale-to-width-down/350?cb=20180721185812",
      "episode": "S01E01",
      "characters": [
        "https://api.attackontitanapi.com/characters/188",
        "https://api.attackontitanapi.com/titans/4",
        "https://api.attackontitanapi.com/characters/1",
        // ...
      ]
    },
    // ...
  ]
}`

export const episodesSingle = `{
  "id": 88,
  "name": "THE FINAL CHAPTERS Special 1",
  "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/1/18/Levi_bids_Hange_farewell.png/revision/latest/scale-to-width-down/350?cb=20230304060942",
  "episode": "S04E29",
  "characters": [
    "https://api.attackontitanapi.com/characters/2",
    "https://api.attackontitanapi.com/characters/188",
    "https://api.attackontitanapi.com/characters/174",
    // ...
  ]
}`

export const episodesMultiple = `[
  {
    "id": 87,
    "name": "The Dawn of Humanity",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/0/0b/Eren_talks_to_Zeke.png/revision/latest/scale-to-width-down/350?cb=20220323100254",
    "episode": "S04E28",
    "characters": [
      "https://api.attackontitanapi.com/characters/2",
      "https://api.attackontitanapi.com/characters/188",
      "https://api.attackontitanapi.com/characters/10",
      // ...
    ]
  },
  {
    "id": 88,
    "name": "THE FINAL CHAPTERS Special 1",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/1/18/Levi_bids_Hange_farewell.png/revision/latest/scale-to-width-down/350?cb=20230304060942",
    "episode": "S04E29",
    "characters": [
      "https://api.attackontitanapi.com/characters/2",
      "https://api.attackontitanapi.com/characters/188",
      "https://api.attackontitanapi.com/characters/174",
      // ...
    ]
  }
]`

export const episodesFilter = `{
  "info": {
    "count": 25,
    "pages": 2,
    "next_page": "https://api.attackontitanapi.com/episodes?page=2?episode=S1",
    "prev_page": null
  },
  "results": [
    {
      "id": 1,
      "name": "To You, in 2000 Years: The Fall of Shiganshina, Part 1",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/b/b4/The_Colossal_Titan_outside_Shiganshina.png/revision/latest/scale-to-width-down/350?cb=20180721185812",
      "episode": "S1E01",
      "characters": [
        "https://api.attackontitanapi.com/characters/188",
        "https://api.attackontitanapi.com/titans/4",
        "https://api.attackontitanapi.com/characters/1",
        // ...
      ]
    },
    {
      "id": 2,
      "name": "That Day: The Fall of Shiganshina, Part 2",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/1/13/A_Titan_grabs_a_citizen.png/revision/latest/scale-to-width-down/350?cb=20180721191547",
      "episode": "S1E02",
      "characters": [
        "https://api.attackontitanapi.com/characters/67",
        "https://api.attackontitanapi.com/characters/188",
        "https://api.attackontitanapi.com/characters/2",
        // ...
      ]
    },
    // ...
  ]
}`

export const locationsAll = `{
  "info": {
    "count": 36,
    "pages": 2,
    "next_page": "https://api.attackontitanapi.com/locations?page=2",
    "prev_page": null
  },
  "results": [
    {
      "id": 1,
      "name": "Basement",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/90/Anime_basement.png/revision/latest/scale-to-width-down/350?cb=20190610052624",
      "territory": "Shiganshina District",
      "region": "South",
      "notable_inhabitants": [],
      "notable_former_inhabitants": [],
      "debut": "https://api.attackontitanapi.com/episodes/10"
    },
    {
      "id": 2,
      "name": "Braus Stables",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/2/2b/Falco_and_Gabi_arrive_at_the_stables.png/revision/latest/scale-to-width-down/350?cb=20230318132617",
      "territory": "Dauper",
      "region": "South",
      "notable_inhabitants": [
        "Braus family",
        "https://api.attackontitanapi.com/characters/131",
        "https://api.attackontitanapi.com/characters/147",
        "https://api.attackontitanapi.com/characters/132"
      ],
      "notable_former_inhabitants": [],
      "debut": "https://api.attackontitanapi.com/episodes/70"
    },
    // ...
  ]
}`

export const locationsSingle = `{
  "id": 1,
  "name": "Basement",
  "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/90/Anime_basement.png/revision/latest/scale-to-width-down/350?cb=20190610052624",
  "territory": "Shiganshina District",
  "region": "South",
  "notable_inhabitants": [],
  "notable_former_inhabitants": [],
  "debut": "https://api.attackontitanapi.com/episodes/10"
}`

export const locationsMultiple = `[
  {
    "id": 1,
    "name": "Basement",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/90/Anime_basement.png/revision/latest/scale-to-width-down/350?cb=20190610052624",
    "territory": "Shiganshina District",
    "region": "South",
    "notable_inhabitants": [],
    "notable_former_inhabitants": [],
    "debut": "https://api.attackontitanapi.com/episodes/10"
  },
  {
    "id": 2,
    "name": "Braus Stables",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/2/2b/Falco_and_Gabi_arrive_at_the_stables.png/revision/latest/scale-to-width-down/350?cb=20230318132617",
    "territory": "Dauper",
    "region": "South",
    "notable_inhabitants": [
      "Braus family",
      "https://api.attackontitanapi.com/characters/131",
      "https://api.attackontitanapi.com/characters/147",
      "https://api.attackontitanapi.com/characters/132"
    ],
    "notable_former_inhabitants": [],
    "debut": "https://api.attackontitanapi.com/episodes/70"
  }
]`

export const locationsFilter = `{
  "info": {
    "count": 12,
    "pages": 1,
    "next_page": null,
    "prev_page": null
  },
  "results": [
    {
      "id": 3,
      "name": "Calaneth District",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/9a/Karanese-ANIME.png/revision/latest/scale-to-width-down/350?cb=20170710122443",
      "territory": "Wall Rose",
      "region": "East",
      "notable_inhabitants": [
        "https://api.attackontitanapi.com/characters/126",
        "https://api.attackontitanapi.com/characters/77"
      ],
      "notable_former_inhabitants": [],
      "debut": "https://api.attackontitanapi.com/episodes/16"
    },
    {
      "id": 5,
      "name": "Dauper",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/e/e1/Dauper_in_the_anime.jpg/revision/latest/scale-to-width-down/350?cb=20170410194648",
      "territory": "Wall Rose",
      "region": "South",
      "notable_inhabitants": [],
      "notable_former_inhabitants": [],
      "debut": "https://api.attackontitanapi.com/episodes/27"
    },
    // ...
  ]
}`

export const organizationsAll = `{
  "info": {
    "count": 17,
    "pages": 1,
    "next_page": null,
    "prev_page": null
  },
  "results": [
    {
      "id": 1,
      "name": "Anti-Marleyan Volunteers",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/3/36/Anti-Marleyan_Volunteers_%28Anime%29.jpeg/revision/latest/scale-to-width-down/350?cb=20210211153018",
      "occupations": [],
      "notable_members": [
        "https://api.attackontitanapi.com/characters/183"
      ],
      "notable_former_members": [],
      "affiliation": "unknown",
      "debut": "https://api.attackontitanapi.com/episodes/68"
    },
    {
      "id": 2,
      "name": "Berg Newspapers",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/d/de/Flegel_pressures_Roy_to_publish_the_truth.png/revision/latest/scale-to-width-down/350?cb=20190714091248",
      "occupations": [],
      "notable_members": [],
      "notable_former_members": [],
      "affiliation": "Royal Government",
      "debut": "https://api.attackontitanapi.com/episodes/41"
    },
    // ...
  ]
}`

export const organizationsSingle = `{
  "id": 5,
  "name": "Global Alliance",
  "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Global_Alliance_Navy.png/revision/latest/scale-to-width-down/350?cb=20220403223102",
  "occupations": [],
  "notable_members": [],
  "notable_former_members": [],
  "affiliation": "unknown",
  "debut": "https://api.attackontitanapi.com/episodes/69"
}`

export const organizationsMultiple = `[
  {
    "id": 5,
    "name": "Global Alliance",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Global_Alliance_Navy.png/revision/latest/scale-to-width-down/350?cb=20220403223102",
    "occupations": [],
    "notable_members": [],
    "notable_former_members": [],
    "affiliation": "unknown",
    "debut": "https://api.attackontitanapi.com/episodes/69"
  },
  {
    "id": 17,
    "name": "Warriors",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Warriors_%28854%29.png/revision/latest/scale-to-width-down/350?cb=20220321040257",
    "occupations": [
      "Serving as the main force as Marleyan military's main ground assault unit ground-based warfare",
      "Titan Warriors act as the main assault force in ground-based combat",
      "Acted as spies in the Paradis Island Operation."
    ],
    "notable_members": [
      "https://api.attackontitanapi.com/characters/86",
      "https://api.attackontitanapi.com/characters/87",
      "https://api.attackontitanapi.com/characters/88",
      "https://api.attackontitanapi.com/characters/89"
    ],
    "notable_former_members": [],
    "affiliation": "Marleyan military",
    "debut": "https://api.attackontitanapi.com/episodes/29"
  }
]`

export const organizationsFilter = `{
  "info": {
    "count": 3,
    "pages": 1,
    "next_page": null,
    "prev_page": null
  },
  "results": [
    {
      "id": 7,
      "name": "Marley Public Security",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/e/e8/The_authorities_corner_Ymir.png/revision/latest/scale-to-width-down/350?cb=20170827054750",
      "occupations": [
        "Maintain public order and containment of the internment zone",
        "Suppression of dissents"
      ],
      "notable_members": [],
      "notable_former_members": [],
      "affiliation": "Marley",
      "debut": "https://api.attackontitanapi.com/episodes/35"
    },
    {
      "id": 16,
      "name": "Titan Biology Research Society",
      "img": "unknown",
      "occupations": [],
      "notable_members": [],
      "notable_former_members": [],
      "affiliation": "Marley",
      "debut": "https://api.attackontitanapi.com/episodes/74"
    },
    {
      "id": 17,
      "name": "Warriors",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Warriors_%28854%29.png/revision/latest/scale-to-width-down/350?cb=20220321040257",
      "occupations": [
        "Serving as the main force as Marleyan military's main ground assault unit ground-based warfare",
        "Titan Warriors act as the main assault force in ground-based combat",
        "Acted as spies in the Paradis Island Operation."
      ],
      "notable_members": [
        "https://api.attackontitanapi.com/characters/86",
        "https://api.attackontitanapi.com/characters/87",
        "https://api.attackontitanapi.com/characters/88",
        "https://api.attackontitanapi.com/characters/89"
      ],
      "notable_former_members": [],
      "affiliation": "Marleyan military",
      "debut": "https://api.attackontitanapi.com/episodes/29"
    }
  ]
}`

export const titansAll = `{
  "info": {
    "count": 9,
    "pages": 1,
    "next_page": null,
    "prev_page": null
  },
  "results": [
    {
      "id": 1,
      "name": "Attack Titan",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/a/ae/Attack_Titan_%28Anime%29_character_image_%28Eren_Jaeger%29.png/revision/latest/scale-to-width-down/350?cb=20170513212951",
      "height": "15m",
      "abilities": [
        "Future memory inheritance"
      ],
      "current_inheritor": "https://api.attackontitanapi.com/characters/188",
      "former_inheritors": [
        "https://api.attackontitanapi.com/characters/160",
        "https://api.attackontitanapi.com/characters/98"
      ],
      "allegiance": "Eldia"
    },
    {
      "id": 2,
      "name": "Founding Titan",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/3/3a/Eren_Jaeger_%28Anime%29_character_image_%28Founding_Titan%29.png/revision/latest/scale-to-width-down/350?cb=20220404091959",
      "height": "350m",
      "abilities": [
        "Titan creation",
        "Titan behavioral control",
        "Memory and body manipulation of subjects of ymir",
        "Telepathic communication with subjects of ymir"
      ],
      "current_inheritor": "https://api.attackontitanapi.com/characters/188",
      "former_inheritors": [
        "https://api.attackontitanapi.com/characters/160",
        "https://api.attackontitanapi.com/characters/110",
        "https://api.attackontitanapi.com/characters/111",
        "https://api.attackontitanapi.com/characters/112",
        "https://api.attackontitanapi.com/characters/113",
        "https://api.attackontitanapi.com/characters/124"
      ],
      "allegiance": [
        "Eldia"
      ]
    },
    // ...
  ]
}`

export const titansSingle = `{
  "id": 1,
  "name": "Attack Titan",
  "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/a/ae/Attack_Titan_%28Anime%29_character_image_%28Eren_Jaeger%29.png/revision/latest/scale-to-width-down/350?cb=20170513212951",
  "height": "15m",
  "abilities": [
    "Future memory inheritance"
  ],
  "current_inheritor": "https://api.attackontitanapi.com/characters/188",
  "former_inheritors": [
    "https://api.attackontitanapi.com/characters/160",
    "https://api.attackontitanapi.com/characters/98"
  ],
  "allegiance": "Eldia"
}`

export const titansMultiple = `[
  {
    "id": 1,
    "name": "Attack Titan",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/a/ae/Attack_Titan_%28Anime%29_character_image_%28Eren_Jaeger%29.png/revision/latest/scale-to-width-down/350?cb=20170513212951",
    "height": "15m",
    "abilities": [
      "Future memory inheritance"
    ],
    "current_inheritor": "https://api.attackontitanapi.com/characters/188",
    "former_inheritors": [
      "https://api.attackontitanapi.com/characters/160",
      "https://api.attackontitanapi.com/characters/98"
    ],
    "allegiance": "Eldia"
  },
  {
    "id": 3,
    "name": "War Hammer Titan",
    "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/b/b2/Lara_Tybur_%28Anime%29_character_image_%28Titan%29.png/revision/latest/scale-to-width-down/350?cb=20210117211130",
    "height": "~15m",
    "abilities": [
      "Structural hardening",
      "Remote operation"
    ],
    "current_inheritor": "https://api.attackontitanapi.com/characters/188",
    "former_inheritors": [
      "https://api.attackontitanapi.com/characters/118"
    ],
    "allegiance": "Eldia"
  }
]`

export const titansFilter = `{
  "info": {
    "count": 4,
    "pages": 1,
    "next_page": null,
    "prev_page": null
  },
  "results": [
    {
      "id": 5,
      "name": "Armored Titan",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/c/cf/Armored_Titan_%28Anime%29_character_image_%28Reiner_Braun%29.png/revision/latest/scale-to-width-down/350?cb=20170507070844",
      "height": "15m",
      "abilities": [
        "Armored skin",
        "Hardening"
      ],
      "current_inheritor": "https://api.attackontitanapi.com/characters/86",
      "former_inheritors": [],
      "allegiance": "Marley"
    },
    {
      "id": 6,
      "name": "Female Titan",
      "img": "https://static.wikia.nocookie.net/shingekinokyojin/images/4/44/Female_Titan_%28Anime%29_character_image_%28Annie_Leonhart%29.png/revision/latest/scale-to-width-down/350?cb=20170708025046",
      "height": "14m",
      "abilities": [
        "Versatility",
        "Titan ",
        "Attraction",
        "Crystallization"
      ],
      "current_inheritor": "https://api.attackontitanapi.com/characters/87",
      "former_inheritors": [],
      "allegiance": "Marley"
    },
    // ...
  ]
}`