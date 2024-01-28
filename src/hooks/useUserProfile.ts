import {useCallback, useRef, useState} from "react";
import {Repository, User} from "../models";
import {fetchUserData} from "../services/api";

export const useUserProfile = () => {
    const [userSelected, setUserSelected] = useState<User | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [status, setStatus] = useState<"active" | "inactive" | "">("")

    const resetTimeoutRef = useRef<number | null>(null);

    const handleSearch = async (username: string) => {
        try {

            const {user, repos} = await fetchUserData(username)

            resetTimeoutRef.current && clearTimeout(resetTimeoutRef.current);

            setRepositories(repos);
            setUserSelected(user);
            setStatus('active')

        } catch (e) {
            reset()
            alert("Usuário não encontrado")
        }
    }


    const reset = useCallback(() => {
        if (resetTimeoutRef.current !== null) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
        }

        setStatus('inactive');

        resetTimeoutRef.current = setTimeout(() => {
            setUserSelected(null);
            setRepositories([]);
        }, 900) as unknown as number;
    }, []);


    const handleRemoveRepo = useCallback((repoId: string) => {
        setRepositories(repos => repos.filter(repo => repo.id !== repoId));
    }, []);

    const handleOnViewClick = (repositoryUrl: string) => {
        window.open(repositoryUrl, "_blank", "noopener,noreferrer");
    }

    return {userSelected, repositories, status, handleSearch, reset, handleRemoveRepo, handleOnViewClick}
}