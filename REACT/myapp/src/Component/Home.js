import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    let [value, setValue] = useState();

    return (
        <>
            <h1>Home page</h1>
            <input type="number" id="inputValue" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {
                value === 5 ? navigate('/about')
                    :
                    alert('invalid')
            }}>click here</button >
        </>
    )
}

export default Home