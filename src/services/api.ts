import axios from "axios";
import {Repository, User} from "../models";

const api = axios.create({
    baseURL: 'https://api.github.com'
})

export const fetchUserData = async (username: string) => {
    const [userDataResponse, reposDataResponse] = await Promise.all([
        api.get(`users/${username}`),
        api.get(`users/${username}/repos`)
    ]);

    const userData = userDataResponse.data;
    const reposData = reposDataResponse.data;

    const user = new User(
        userData.id,
        userData.name,
        userData.avatar_url,
        userData.location,
        userData.followers,
        userData.bio
    );

    const repos = reposData.map((repoData: Repository) => new Repository(
        repoData.id,
        repoData.name,
        repoData.description,
        repoData.language,
        repoData.updated_at,
        repoData.stargazers_count,
        repoData.watchers_count,
        repoData.html_url
    ));

    return {user, repos};
};