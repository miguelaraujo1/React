const Estado = () => {
    let nome = "João Felipe";
  
    const handleClick = () =>{
        console.log(nome)
    }

    return (
      <div>
        <h1>{nome}</h1>
        <input type="button" value="Mudar Nome" onClick={handleClick}/>
      </div>
    )
  }
  
  export default Estado