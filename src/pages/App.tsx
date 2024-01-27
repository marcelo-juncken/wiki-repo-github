import {Container} from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import {useState} from "react";
import {api} from "../services/api";
import CardList from "../components/CardList";
import {Repository, User} from "../models";
import Profile from "../components/Profile";

function App() {

    const [userSelected, setUserSelected] = useState<User | null>(null);
    const [input, setInput] = useState<string>("");
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const handleRemoveRepo = (repoId: string) => {
        const updatedRepos = repositories.filter(repo => repo.id !== repoId);
        setRepositories(updatedRepos);

    };

    const handleSearchRepo = async () => {
        try {

            const [userDataResponse, reposDataResponse] = await Promise.all([
                api.get(`users/${input}`),
                api.get(`users/${input}/repos`)
            ])

            const userData = userDataResponse.data;
            const reposData = reposDataResponse.data;

            const user = new User(userData.id, userData.name, userData.avatar_url, userData.location, userData.followers, userData.bio);

            const repos = reposData.map((repoData: Repository) =>
                new Repository(
                    repoData.id,
                    repoData.name,
                    repoData.description,
                    repoData.language,
                    repoData.updated_at,
                    repoData.stargazers_count,
                    repoData.watchers_count,
                    repoData.html_url
                ));

            setRepositories(repos);
            setUserSelected(user);


        } catch (e: any) {
            console.log(typeof e)
            alert("Usuário não encontrado")
        }
    }

    const reset = () => {
        setUserSelected(null)
        setRepositories([])
    }

    return (
        <Container>
            <Profile userSelected={userSelected}/>
            <Input value={input} onChange={(e) => setInput(e.target.value)}/>
            <Button onClick={handleSearchRepo}/>
            <button onClick={reset}>RESETAR</button>
            <CardList repositories={repositories} onRemoveRepo={handleRemoveRepo}/>

        </Container>
    );
}

export default App;
