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