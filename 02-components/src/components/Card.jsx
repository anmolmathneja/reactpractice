function Card(){

    const age = 30
    const name = 'anmol'
    return(
        <div className="card">
            <h1>My name is {name}</h1>
            <p>I am {age} years old</p>
        </div>
    )
}

export default Card;