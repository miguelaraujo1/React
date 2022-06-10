import { useState } from "react";

const inputControlado = () => {
    const [nome, setnome] = useState("nome inicial")
    return(
        <label>
            nome: 
            <input type="text" value={nome} onChange={(e)} />
        </label>
    );
}
export default inputControlado