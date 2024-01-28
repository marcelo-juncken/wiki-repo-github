import {useCallback, useState} from "react";
import {Repository, User} from "../models";
import {fetchUserData} from "../services/api";

export const useUserProfile = () => {
    const [userSelected, setUserSelected] = useState<User | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [status, setStatus] = useState<"active" | "inactive" | "">("")

    const handleSearch = async (username: string) => {
        try {

            const {user, repos} = await fetchUserData(username)

            setRepositories(repos);
            setUserSelected(user);
            setStatus('active')

        } catch (e: any) {
            reset()
            alert("Usuário não encontrado")
        }
    }

    const reset = useCallback(() => {
        setUserSelected(null);
        setRepositories([]);
        setStatus('inactive');
    }, []);

    const handleRemoveRepo = useCallback((repoId: string) => {
        setRepositories(repos => repos.filter(repo => repo.id !== repoId));
    }, []);

    const handleOnViewClick = (repositoryUrl : string) => {
        window.open(repositoryUrl, "_blank", "noopener,noreferrer");
    }

    return {userSelected, repositories, status, handleSearch, reset, handleRemoveRepo, handleOnViewClick}
}