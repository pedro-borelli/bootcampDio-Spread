import { Routes, Route } from "react-router-dom";

import Error404 from "./pages/error404";
import MainPage from "./pages/mainPage/mainPage";


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/error" element={<Error404/>}/>
        </Routes>
    )
}

export default MainRoutes
