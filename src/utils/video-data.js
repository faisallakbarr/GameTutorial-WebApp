const videoData = [
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "PSY - GANGNAM STYLE(강남스타일) M/V",
    }
]

const getVideoData = () => {
    return videoData.map((video, index) => ({
        id: index + 1,
        ...video
    }));
};

export {getVideoData}