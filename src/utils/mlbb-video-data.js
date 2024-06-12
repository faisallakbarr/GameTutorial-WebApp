import mlbb from '../assets/video-tutorial/mlbb.mp4';
import mlbbBanner from '../assets/game-banner/mlbb-banner.jpg';

const mlbbVideoData = [
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "4:13",
        difficult: "Beginner",
        locked: false
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "6:13",
        difficult: "Beginner",
        locked: false
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "11:13",
        difficult: "Intermediate",
        locked: true
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "14:01",
        difficult: "Intermediate",
        locked: true
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "24:33",
        difficult: "Advanced",
        locked: true
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "20:44",
        difficult: "Expert",
        locked: true
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "24:11",
        difficult: "Expert",
        locked: true
    },
    {
        url: mlbb,
        img: mlbbBanner,
        title: "Mobile Legends",
        desc: "Tutorial Mobile Legends",
        duration: "34:13",
        difficult: "Expert",
        locked: true
    },
]

const getVideoData = () => {
    return mlbbVideoData.map((video, index) => ({
        id: index + 1,
        ...video
    }));
}

export { getVideoData }
