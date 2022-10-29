let config = {
    "url": {
        "launch": {
            "dev": "https://dev-games-rgs.sportsit-tech.net/",
            "prod": "https://dev-games-rgs.sportsit-tech.net/",
            "truewavedev": "https://truewavedev.pixentstudio.com/"
        },
        "server": "https://dev-beapi-games-rgs.sportsit-tech.net/rgs/",
        "serverstaging": "https://stg-beapi-games-rgs.sportsit-tech.net/rgs/",
        "serverprod": "https://beapi-games-rgs.sportsit-tech.net/rgs/"
    },
    "games": [
        {
            "gameName": "Catch The Trend",
            "gameCode": "catchTheTrend",
            "amount": "25,000,000",
            "icon": "ctt_icon.png"
        },
        {
            "gameName": "Virtual Catch The Trend",
            "gameCode": "virtualCatchTheTrend",
            "amount": "20,000,000",
            "icon": "vctt_icon.png"
        },
        {
            "gameName": "First Wicket Partnership",
            "gameCode": "firstWicketPartnership",
            "amount": "15,000,000",
            "icon": "fwp_icon.png"
        },
        {
            "gameName": "Defender",
            "gameCode": "defender",
            "amount": "20,000,000",
            "icon": "defender_icon.png"
        },
        {
            "gameName": "Penalty Shootout",
            "gameCode": "penaltyShootout",
            "amount": "12,000,000",
            "icon": "penaltyshootout_icon.png"
        },
        {
            "gameName": "Penalty Shootout",
            "gameCode": "penaltyshootout",
            "amount": "12,000,000",
            "icon": "penaltyshootout_icon.png"
        },
        {
            "gameName": "Pick 6",
            "gameCode": "pick6",
            "amount": "20,000,000",
            "icon": "pick6_football_icon.png",
            "version": "v2"
        },
        {
            "gameName": "Cricket Pick 6",
            "gameCode": "cricketPick6",
            "amount": "15,000,000",
            "icon": "pick6_cricket_icon.png"
        },
        {
            "gameName": "Match Predictor",
            "gameCode": "matchpredictor",
            "amount": "20,000,000",
            "icon": "matchpredictor_football_icon.png",
            "version": "v2"
        },
        {
            "gameName": "Football Match Predictor",
            "gameCode": "footballmatchpredictor",
            "amount": "20,000,000",
            "icon": "matchpredictor_football_icon.png"
        },
        {
            "gameName": "V League",
            "gameCode": "vleague",
            "amount": "20,000,000",
            "icon": "vleague_icon.png",
            "version": "v3"
        }
    ],
    "externalGameMappings": {
        "psv2": "penaltyShootout",
        "penaltyshootout": "penaltyShootout",
        "firstwicketpartnership": "firstwicketpartnership"
    }
}

export default config;