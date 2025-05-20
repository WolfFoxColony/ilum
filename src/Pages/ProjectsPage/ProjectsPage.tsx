import React from 'react';
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";
import Headline from "../../components/Headline/Headline.tsx";
import Tile from "../../components/Tile/Tile.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";

function ProjectsPage() {
    const bg = '/projects_bg.webp';
    const bgLoaded = usePreloadImage(bg);

    return (
        <Box sx={{background: bgLoaded ? `url(${bg})` : '#02022b', backgroundSize: "cover", height: "100%"}}>
            <Container maxWidth={false} sx={{height: "100%", zIndex: '99', position: "relative", padding:'50px 0'}}>

                <Grid container={true} spacing={2} sx={{flexDirection: "center", mb: '40px', justifyContent: 'center'}}>
                    <Grid size={{xl: 12, xs: 12}}>
                        <Headline>My projects</Headline>
                    </Grid>

                    <Grid size={{xl: 0, sm: 1, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile href={'https://pitchbook.com/'}>PitchBook</Tile>
                        <Tile href={'https://pitchbook.com/profiles/company/10472-86'}>McDonald's Profile</Tile>
                        <Tile href={'https://pitchbook.com/profiles/company/41082-40'}>Apple Profile</Tile>

                    </Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile href={'https://pitchbook.com/products'}>Products</Tile>
                        <Tile href={'https://pitchbook.com/solutions'}>Solutions</Tile>
                        <Tile href={'https://pitchbook.com/blog'}>Blog</Tile>
                    </Grid>

                    <Grid size={{xl: 0, sm: 1, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile href={'https://habit-tracker-react-ts.netlify.app/'}>Habit Tracker</Tile>
                        <Tile href={'https://terraoutdoor.com/pages/shop-by-material'}>Material Integrity</Tile>
                        <Tile href={'https://terraoutdoor.com/pages/showrooms'}>Showrooms</Tile>
                    </Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile href={'https://tender-almeida-915c4d.netlify.app/'}>Todo List</Tile>
                        <Tile href={'https://gifted-shockley-841923.netlify.app/index.html'}>Choco Rocco Shop</Tile>
                    </Grid>
                </Grid>

                <Grid size={{xl: 12}} container alignItems={'center'} justifyContent={'space-around'}>
                    <ButtonPrimary path={-1} variant={'body1'} fontSize={'2rem'}>Back</ButtonPrimary>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectsPage;
