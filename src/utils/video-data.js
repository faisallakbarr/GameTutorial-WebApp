import mlbb from '../assets/video-tutorial/mlbb.mp4';
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

const videoData = [
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/aBSAMbldYtY?si=_hnvhLMHYUHHzLrf",
        img: valorantBanner,
        title: "Valorant",
        desc: "Tutorial Valorant",
        duration: "7:14",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/VP8jK14mYYc?si=jtHUImI5pfWumvP2",
        img: hokBanner,
        title: "Honor Of King",
        desc: "Tutorial Honor Of King",
        duration: "4:56",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/DbUqf-qClfg?si=x07Q_bMi4K8_7wEq",
        img: cs2Banner,
        title: "League Of Legends",
        desc: "Tutorial League Of Legends",
        duration: "15:05",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/_GgocZCYGa0?si=lNln78r5r83tcbw5",
        img: dota2Banner,
        title: "Tekken 8",
        desc: "Tutorial Tekken 8",
        duration: "15:08",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/NY_NaGAaxBI?si=K_MqT-7WuQanzAmE",
        img: lolBanner,
        title: "Counter Strike 2",
        desc: "Tutorial Counter Strike 2",
        duration: "13:06",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/DbUqf-qClfg?si=x07Q_bMi4K8_7wEq",
        img: tekken8Banner,
        title: "Video",
        desc: "-",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/DbUqf-qClfg?si=x07Q_bMi4K8_7wEq",
        img: streetfighterBanner,
        title: "Video",
        desc: "-",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://youtu.be/DbUqf-qClfg?si=x07Q_bMi4K8_7wEq",
        img: eafc24Banner,
        title: "Video",
        desc: "-",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "-",
        title: "Video",
        desc: "-",
        duration: "4:13",
        videos: "Easy"
    },
    
]

const getVideoData = () => {
    return videoData.map((video, index) => ({
        id: index + 1,
        ...video
    }));
};

const getVideoById = (id) => {
    const videos = getVideoData();
    return videos.find(video => video.id === parseInt(id));
};

export { getVideoData, getVideoById };