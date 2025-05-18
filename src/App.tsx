import React from 'react';
import './assets/styles/main.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.tsx';
import Contact from "./components/Contact/Contact.tsx";
import Grid from "@mui/material/Grid";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.tsx";
import {Container} from "@mui/material";
import Earth from "./components/Earth/Earth.tsx";
import SkillsPage from "./Pages/SkillsPage/SkillsPage.tsx";

function App() {
    return (
        <Router>
            <Container maxWidth={false} sx={{
                backgroundImage: `url('../bg.webp')`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                height: "100vh",
                width: "100%"
            }}>

                <Grid container spacing={2}
                      sx={{
                          justifyContent: "space-around",
                          alignItems: "center",
                          maxHeight: "100%",
                          height: "100vh"
                      }}>

                    <Grid size={{xl: 1}}>
                        <Contact/>
                    </Grid>

                    <Grid size={{xl: 11}} sx={{height: '100%', zIndex: '99'}}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/projects" element={<ProjectsPage/>}/>
                            <Route path="/skills" element={<SkillsPage/>}/>
                        </Routes>
                    </Grid>

                    <Earth/>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;
