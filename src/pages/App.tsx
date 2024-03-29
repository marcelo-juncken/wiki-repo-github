import {Container} from "./styles";
import Input from "../components/Input";
import Button from "../components/Button";
import CardList from "../components/CardList";
import Profile from "../components/Profile";
import {useUserProfile} from "../hooks/useUserProfile";
import {useState} from "react";

function App() {

    const [inputValue, setInputValue] = useState<string>("");

    const {
        userSelected,
        repositories,
        status,
        handleSearch,
        reset,
        handleRemoveRepo,
        handleOnViewClick
    } = useUserProfile()

    return (
        <Container>
            <Profile status={status} userSelected={userSelected} onResetClick={reset}/>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <div className="buttons-container">
                <Button classname={`search-button ${status}`} $marginright="8px" text={"Search"}
                        onClick={() => handleSearch(inputValue)}/>
                <Button classname={`reset-button ${status}`} $marginleft="8px" text={"Reset"} onClick={reset}/>
            </div>
            <CardList status={status} repositories={repositories} onRemoveRepo={handleRemoveRepo} onViewClick={handleOnViewClick}/>
        </Container>
    );
}

export default App;
