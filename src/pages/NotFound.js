import { Link } from "react-router-dom";

const NotFound = () => {

    return (

        <>

            <h1>Her er NotFound</h1>

            <p>Tryk <Link to={"/"}>her</Link> for at komme tilbage til forsiden</p>

        </>

     );
     
}

export default NotFound;