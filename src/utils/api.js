const api = (() => {
    const BASE_URL = 'https://forum-api.dicoding.dev/v1';

    function putAccessToken(token) {
        console.log('Setting access token:', token);
        localStorage.setItem('accessToken', token);
    }

    function getAccessToken() {
        const token = localStorage.getItem('accessToken');
        console.log('Getting access token:', token);
        return token;
    }

    async function _fetchWithAuth(url, options = {}) {
        const token = getAccessToken();
        if (!token) {
            throw new Error('No access token found');
        }
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`
            }
        });
    }

    async function register({ id, name, password }) {
        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, password }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { user } } = responseJson;

        return user;
    }

    async function login({ id, password }) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, password }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { token } } = responseJson;
        putAccessToken(token); // Save the token for future requests
        return token;
    }

    async function getOwnProfile() {
        const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
        if (response.status === 401) {
            throw new Error('Unauthorized');
        }
        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { user } } = responseJson;

        return user;
    }

    async function getAllTalks() {
        const response = await fetch(`${BASE_URL}/talks`);

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { talks } } = responseJson;

        return talks;
    }

    async function getTalkDetail(id) {
        const response = await fetch(`${BASE_URL}/talks/${id}`);
        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { talkDetail } } = responseJson;

        return talkDetail;
    }

    async function createTalk({ text, replyTo = '' }) {
        const response = await _fetchWithAuth(`${BASE_URL}/talks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, replyTo })
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { talk } } = responseJson;
        return talk;
    }

    async function toggleLikeTalk(id) {
        const response = await _fetchWithAuth(`${BASE_URL}/talks/likes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ talkId: id })
        });
        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }
    }

    return {
        putAccessToken,
        getAccessToken,
        register,
        login,
        getOwnProfile,
        getAllTalks,
        getTalkDetail,
        createTalk,
        toggleLikeTalk
    };
})();

export default api;
