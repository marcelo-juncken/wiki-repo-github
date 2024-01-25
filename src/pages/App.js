import gitLogo from '../assets/github.png'

import {Container} from "./styles";
import Input from "../components/Input";

function App() {
    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt={'Github Logo'}/>
            <Input/>
        </Container>
    );
}

export default App;
