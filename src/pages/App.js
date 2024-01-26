import gitLogo from '../assets/github.png'

import {Container} from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ListRepo/ItemRepo";
import Button from "../components/Button";
import {useState} from "react";
import {api} from "../services/api";
import ListRepo from "../components/ListRepo";

function App() {

    const [profileImage, setProfileImage] = useState(gitLogo);
    const [repoUser, setRepoUser] = useState('');
    const [repos, setRepos] = useState([]);

    const handleRemoveRepo = (repoId) => {
        const updatedRepos = repos.filter(repo => repo.id !== repoId);
        setRepos(updatedRepos);
    };

    const handleSearchRepo = async () => {
        try {
            const {data} = await api.get(`users/${repoUser}/repos`);

            if (data.length > 0) {
                setRepos(data)
                setProfileImage(data[0].owner.avatar_url)
            } else {
                alert("Repositório vazio")
            }


        } catch (e) {
            console.log(e.message)
            alert("Usuário não encontrado")
        }
    }

    return (
        <Container>
            <img className={profileImage === gitLogo ? "" : "user"} src={profileImage} width={72} height={72} alt={'Logo'}/>
            <Input value={repoUser} onChange={(e) => setRepoUser(e.target.value)}/>
            <Button onClick={handleSearchRepo}/>
            <ListRepo repos={repos} onRemoveRepo={handleRemoveRepo}/>

        </Container>
    );
}

export default App;
