
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    // console.log(error);
    
    return (
        <div id="error-page" className="Main">
            <h1>OOps!</h1>
            <p>Sorry, this page doesn't exist.</p>
      </div>  
    );
}

export default ErrorPage;