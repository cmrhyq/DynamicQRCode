import './App.css';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";

function App() {
    const routeElement = useRoutes(routes);
    return (
        <div className="app">
            {routeElement}
        </div>
    );
}

export default App;
