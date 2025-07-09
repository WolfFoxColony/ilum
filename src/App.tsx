import React from 'react';
import './assets/styles/global.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';
import Contact from "./components/Contact/Contact.tsx";
import Grid from "@mui/material/Grid";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.tsx";
import Earth from "./components/Earth/Earth.tsx";
import SkillsPage from "./Pages/SkillsPage/SkillsPage.tsx";
import Box from "@mui/material/Box";
import ResumePage from "./Pages/ResumePage/ResumePage.tsx";
import CertificatesPage from "./Pages/CertificatesPage/CertificatesPage.tsx";

function App() {
    return (
        <Router>
            <Box sx={{maxHeight: "100%", height: "100%", position: 'relative', display:'grid'}}>
                <Contact/>

                <Grid size={{xl: 11}} sx={{height: '100%'}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/projects" element={<ProjectsPage/>}/>
                        <Route path="/skills" element={<SkillsPage/>}/>
                        <Route path="/resume" element={<ResumePage/>}/>
                        <Route path="/certificates" element={<CertificatesPage/>}/>
                    </Routes>
                </Grid>

                <Earth/>
            </Box>
        </Router>
    );
}

export default App;
