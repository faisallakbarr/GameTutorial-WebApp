const forumData = [
    {
        name: 'George',
        message: 'Hello, I am new here. Can someone help me with the rules of the game?'
    },
    {
        name: 'John',
        message: 'Hi, I am looking for a new team to join. Can someone help me?'
    }
]

const getForumData = () => {
    return forumData.map((forum, index) => ({
        id: index + 1,
        ...forum
    }));
};

const getForumById = (id) => {
    const forum = getForumData();
    return forum.find(forum => forum.id === parseInt(id));
};

export { getForumData, getForumById };