import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home, About } from "../pages";

import { Navbar } from "../shared/components/navbar/Navbar";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Navbar />
            
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="*" Component={() => <Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    );
}