import { Routes, Route } from "react-router-dom";
import About from "./About";
import Work from "./Work";
const Content = () => {
    return(
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route/>
        </Routes>
    );
}

export default Content;