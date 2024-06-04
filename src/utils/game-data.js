import mlbbBanner from '../assets/game-banner/mlbb-banner.jpg';
import valorantBanner from '../assets/game-banner/valorant-banner.jpg';
import hokBanner from '../assets/game-banner/hok-banner.jpg';
import cs2Banner from '../assets/game-banner/cs2-banner.jpg';
import dota2Banner from '../assets/game-banner/dota2-banner.jpg';
import lolBanner from '../assets/game-banner/lol-banner.jpg';
import tekken8Banner from '../assets/game-banner/tekken8-banner.jpg';
import streetfighterBanner from '../assets/game-banner/streetfighter-banner.jpg';
import eafc24Banner from '../assets/game-banner/eafc24-banner.jpg';
import efootballBanner from '../assets/game-banner/efootball-banner.jpg';

const gameData = [
    {
        url: mlbbBanner,
        title: 'Mobile Legends',
        description: 'Mobile Legends: Bang Bang is a multiplayer online battle arena (MOBA) game designed for mobile phones. The two opposing teams fight to reach and destroy the enemy’s base while defending their own base for control of a path, the three “lanes” known as “top”, “middle” and “bottom”, which connects the bases.',
        releaseDate: 'July 11, 2016',
        developer: 'Moonton',
        platform: 'Android, iOS',
        picture: 'mlbb.jpg'
    },
    {
        url: valorantBanner,
        title: 'Valorant',
        description: 'Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games, for Microsoft Windows. First teased with the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by official release on June 2, 2020.',
        releaseDate: 'June 2, 2020',
        developer: 'Riot Games',
        platform: 'PC',
        picture: 'valorant.jpg'
    },
    {
        url: hokBanner,
        title: 'Honor Of Kings',
        description: 'Honor of Kings is a mobile multiplayer online battle arena game developed by Timi Studios and published by Tencent Games. The game was first released on November 26, 2015, and has since become one of the world’s largest and most popular MOBA games.',
        releaseDate: 'November 26, 2015',
        developer: 'TiMi Studios',
        platform: 'Android, iOS',
        picture: 'hok.jpg'
    },
    {
        url: cs2Banner,
        title: 'Counter Strike 2',
        description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.',
        releaseDate: '22 August 2012',
        developer: 'Valve Corporation',
        platform: 'PC',
        picture: 'cs2.jpg'
    },
    {
        url: dota2Banner,
        title: 'Dota 2',
        description: 'Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment’s Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne.',
        releaseDate: 'July 9, 2013',
        developer: 'Valve Corporation',
        platform: 'PC',
        picture: 'dota2.jpg'
    },
    {
        url: lolBanner,
        title: 'League Of Legends',
        description: 'League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. Inspired by the Warcraft III: The Frozen Throne mod Defense of the Ancients, the game follows a freemium model and is supported by microtransactions.',
        releaseDate: 'October 27, 2009',
        developer: 'Riot Games',
        platform: 'PC',
        picture: 'lol.jpg'
    },
    {
        url: tekken8Banner,
        title: 'Tekken 8',
        description: 'Tekken 8 is a fighting game developed and published by Bandai Namco Entertainment. It is the ninth installment in the Tekken series. The game was announced on January 23, 2023, and was released on March 18, 2023.',
        releaseDate: 'March 18, 2023',
        developer: 'Bandai Namco Entertainment',
        platform: 'PC, PlayStation, Xbox',
        picture: 'tekken8.jpg'
    },
    {
        url: streetfighterBanner,
        title: 'Street Fighter',
        description: 'Street Fighter is a fighting video game franchise developed and published by Capcom. The first game in the series was released in 1987, followed by five other main series games, various spin-offs and crossovers, and numerous appearances in various other media.',
        releaseDate: 'August 30, 1987',
        developer: 'Capcom',
        platform: 'PC, PlayStation, Xbox',
        picture: 'streetfighter.jpg'
    },
    {
        url: eafc24Banner,
        title: 'EA Sports FIFA 24',
        description: 'EA Sports FIFA 24 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 31st installment in the FIFA series and was released on October 6, 2023.',
        releaseDate: 'October 6, 2023',
        developer: 'EA Sports',
        platform: 'PC, PlayStation, Xbox',
        picture: 'eafc24.jpg'
    },
    {
        url: efootballBanner,
        title: 'eFootball',
        description: 'eFootball is a football simulation video game developed and published by Konami. It is the 29th installment in the Pro Evolution Soccer series and was released on September 30, 2021.',
        releaseDate: 'September 30, 2021',
        developer: 'Konami',
        platform: 'PC, PlayStation, Xbox',
        picture: 'efootball.jpg'
    },
];

const getGameData = () => {
    return gameData.map((game, index) => ({
        id: index + 1,
        ...game
    }));
};

const getGameById = (id) => {
    const videos = getGameData();
    return videos.find(video => video.id === parseInt(id));
};

export { getGameData, getGameById };
