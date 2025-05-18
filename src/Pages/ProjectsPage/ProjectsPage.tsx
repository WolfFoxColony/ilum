import React from 'react';
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";
import Headline from "../../components/Headline/Headline.tsx";
import Tile from "../../components/Tile/Tile.tsx";
import Grid from "@mui/material/Grid";

function ProjectsPage() {
    return (
        <>
            <Grid container={true} spacing={4}>
                <Grid size={{xl: 12}} sx={{padding: '40px 0'}}>
                    <Headline>My projects</Headline>
                </Grid>
                <Grid size={{xl: 3}}>
                    <Tile href={'https://pitchbook.com/'}>PitchBook</Tile>
                    <Tile href={'https://pitchbook.com/profiles/company/10472-86'}>McDonald's Profiles</Tile>
                    <Tile href={'https://pitchbook.com/profiles/company/41082-40'}>Apple Profiles</Tile>
                    <Tile href={'https://pitchbook.com/products'}>Products</Tile>
                    <Tile href={'https://pitchbook.com/solutions'}>Solutions</Tile>
                    <Tile href={'https://pitchbook.com/blog'}>Blog</Tile>
                </Grid>

                <Grid size={{xl: 3}}>
                    <Tile href={'https://terraoutdoor.com/pages/shop-by-material'}>Material Integrity</Tile>
                    <Tile href={'https://terraoutdoor.com/pages/showrooms'}>Showrooms</Tile>
                </Grid>

                <Grid size={{xl: 3}}>
                    <Tile href={'https://habit-tracker-react-ts.netlify.app/'}>Habit Tracker</Tile>
                    <Tile href={'https://tender-almeida-915c4d.netlify.app/'}>Todo List</Tile>
                    <Tile href={'https://unruffled-mccarthy-a80f48.netlify.app/'}>Blog</Tile>
                    <Tile href={'https://gifted-shockley-841923.netlify.app/index.html'}>Choco Rocco Shop</Tile>

                </Grid>
                <Grid size={{xl: 3}}>
                    <Tile href={'https://fervent-hodgkin-88c3ab.netlify.app/'}>Nava</Tile>
                    <Tile href={'https://flamboyant-lamarr-01238c.netlify.app/'}>Barmy</Tile>
                </Grid>

                <Grid size={{xl: 6}} >
                    <ButtonPrimary path={-1} variant={'body1'} fontSize = {'2rem'}>Back</ButtonPrimary>
                </Grid>
            </Grid>
        </>
    );
}

export default ProjectsPage;
