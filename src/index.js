import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container py-4">
            <div className="row">
                <Main></Main>
                <Aside></Aside>
            </div>
        </div>
        
        <div className="bg-info">
            <Footer></Footer>
        </div>

    </StrictMode>
);