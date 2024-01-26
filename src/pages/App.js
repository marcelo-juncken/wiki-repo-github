import gitLogo from '../assets/github.png'

import {Container} from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import {useState} from "react";
import {api} from "../services/api";

function App() {

    const [repoUser, setRepoUser] = useState('');
    const [repos, setRepos] = useState([]);
    const handleSearchRepo = async () => {
    console.log("123")

        try {
            const {data} = await api.get(`users/${repoUser}/repos`);
            console.log("data", data)

            data.length > 0 ? setRepos(data) : alert("Repositório vazio")


        } catch (e) {
            console.log(e.message)
            alert("Usuário não encontrado")
        }
    }


    const handleRemoveRepo = (id) => {
        console.log('Removendo registro', id);

    }

    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt={'Github Logo'}/>
            <Input value={repoUser} onChange={(e) => setRepoUser(e.target.value)}/>
            <Button onClick={handleSearchRepo}/>
            {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}

        </Container>
    );
}

export default App;
