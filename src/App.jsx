import React from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import { SearchPage, HomePage } from "./components";

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="search" element={<SearchPage />}/>
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;