import { useContext } from "react";
import { contexte } from "../App";


function Home() {
    const { apiAccess } = useContext(contexte);

    return (
        <div id="home">
            <h1>PAGE PRINCIPALE</h1>
        </div>
    )
}
export default Home;