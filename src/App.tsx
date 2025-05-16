import React from 'react';
import './assets/styles/main.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.tsx';
import Contact from "./components/Contact/Contact.tsx";
import Grid from "@mui/material/Grid";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage.tsx";
import {Container} from "@mui/material";
import Earth from "./components/Earth/Earth.tsx";

function App() {
    return (
        <Router>
            <Container maxWidth={false} sx={{
                backgroundImage: `url('../bg.webp')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                overflow: 'hidden'
            }}>

                <Grid container spacing={2} sx={{justifyContent: "space-around", position: 'relative', alignItems: "center", height: '100%', overflow: 'hidden'}}>
                    <Grid size={{xl: 1}}>
                        <Contact/>
                    </Grid>

                    <Grid size={{xl: 11}} sx={{height: '100%', overflow: 'hidden'}}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/projects" element={<ProjectsPage/>}/>
                        </Routes>
                    </Grid>

                    <Earth/>
                </Grid>
            </Container>
        </Router>
    );
}

export default App;
