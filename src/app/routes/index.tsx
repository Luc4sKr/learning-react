import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home, Lessons, MessageList, Clicker } from "../pages";

import { Navbar } from "../shared/components/navbar/Navbar";

export const RoutesPath = () => {
    return (
        <BrowserRouter>
            <Navbar />
            
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/lessons" Component={Lessons}/>

                <Route path="/lessons/messageList" Component={MessageList}/>
                <Route path="/lessons/clicker" Component={Clicker} />

                <Route path="*" Component={() => <Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    );
}