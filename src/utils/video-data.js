const videoData = [
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
        duration: "4:13",
        videos: "Easy"
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
        desc: "acumalak gfggc",
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