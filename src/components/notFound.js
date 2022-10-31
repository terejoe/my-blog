import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, this page cannot be found</h2>
            <Link to="/"><p>Back to the home page...</p></Link>
        </div>
     );
}
 
export default NotFound;