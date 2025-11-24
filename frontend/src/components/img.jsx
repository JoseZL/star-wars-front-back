const imageMap = {
    characters: {
        '1': 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796',
        '2': 'https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536',
        '3': 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536',
        '4': 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720',
        '5': 'https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786',
        '6': 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593',
        '7': 'https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527',
        '8': 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666',
        '9': 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878',
        '10': 'https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721',
    },
    planets: {
        '1': 'https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534',
        '2': 'https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720',
        '3': 'https://lumiere-a.akamaihd.net/v1/images/yavin-4-main_bd23f447.jpeg?region=331%2C0%2C949%2C534',
        '4': 'https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675',
        '5': 'https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711',
        '6': 'https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878',
        '7': 'https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878',
        '8': 'https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878',
        '9': 'https://lumiere-a.akamaihd.net/v1/images/coruscant-main_d2fad5f2.jpeg?region=245%2C0%2C1430%2C804',
        '10': 'https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542',
    },
    vehicles: {
        '4': 'https://lumiere-a.akamaihd.net/v1/images/sandcrawler-main_eb1b036b.jpeg?region=251%2C20%2C865%2C487',
        '7': 'https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819',
        '6': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab940dbf-6b1c-43d5-9e49-aa8736340b2d/dclh32o-d561b1e3-0522-47df-9973-07d7a45faa61.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiOTQwZGJmLTZiMWMtNDNkNS05ZTQ5LWFhODczNjM0MGIyZFwvZGNsaDMyby1kNTYxYjFlMy0wNTIyLTQ3ZGYtOTk3My0wN2Q3YTQ1ZmFhNjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BWcsYZBwFbHRmsHFeEkk1sfunOCRtkz-0qfgnILPFTU',
        '8': 'https://lumiere-a.akamaihd.net/v1/images/heavy-tie-main_3dd47ac6.jpeg?region=1%2C0%2C1198%2C674',
        '14': 'https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154',
        '18': 'https://lumiere-a.akamaihd.net/v1/images/tlj-db-first-order-at-at-walker-main-image_2cd57eb2.jpeg?region=0%2C0%2C768%2C432',
        '16': 'https://lumiere-a.akamaihd.net/v1/images/tie-bomber-main_d4d9b979.jpeg?region=424%2C0%2C632%2C356',
        '19': 'https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802',
        '20': 'https://lumiere-a.akamaihd.net/v1/images/cloud-car-main-image_8d2e4e89.jpeg?region=271%2C0%2C1009%2C568',
        '24': 'https://lumiere-a.akamaihd.net/v1/images/the-khetanna-main_80954d51.jpeg?region=166%2C0%2C948%2C533',
    }
};

export function getImageUrl(type, uid) {
    if (imageMap[type] && imageMap[type][uid]) {
        return imageMap[type][uid];
    }
    return 'https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254';
}