import { useParams } from "react-router-dom"
import Data from "./Data.js"

const About = () => {

    const { id } = useParams();
    // console.log(ids);
    const dataId = Data.find((i) => i.id === Number(id));


    return (
        <>
            <h1>About page</h1>

            {dataId ?


                <h1>{Data[dataId].id}{Data[dataId].name}</h1>
                :
                <h1>not found</h1>

            }


        </>

    )
}

export default About