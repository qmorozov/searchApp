import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { SearchPage, HomePage } from "./components";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="search" element={<SearchPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;