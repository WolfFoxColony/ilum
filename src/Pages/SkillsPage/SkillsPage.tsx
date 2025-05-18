import React from 'react';
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";
import Headline from "../../components/Headline/Headline.tsx";
import Tile from "../../components/Tile/Tile.tsx";
import Grid from "@mui/material/Grid";

function SkillsPage() {
    return (
        <>
            <Grid container={true} spacing={4}>
                <Grid size={{xl: 12}} sx={{padding: '40px 0'}}>
                    <Headline>My Skills</Headline>
                </Grid>
                <Grid size={{xl: 3}}>
                    <Tile>JavaScript</Tile>
                    <Tile>TypeScript</Tile>
                    <Tile>React</Tile>
                    <Tile>Material UI</Tile>
                </Grid>

                <Grid size={{xl: 3}}>
                    <Tile>Redux(RTK)</Tile>
                    <Tile>CSS/Sass/Scss/Less</Tile>
                    <Tile>HTML/BEM</Tile>
                </Grid>

                <Grid size={{xl: 3}}>
                    <Tile>Git/GitHub/GitLab</Tile>
                    <Tile>npm</Tile>
                    <Tile>JIRA/Asana</Tile>
                    <Tile>Scrum</Tile>
                </Grid>

                <Grid size={{xl: 3}} sx={{mb: '40px'}}>
                    <Tile>Shopify platform/Liquid</Tile>
                    <Tile>FreeMarker</Tile>
                    <Tile>Figma/Avocode</Tile>
                    <Tile>WebStorm/Intellij</Tile>
                </Grid>

                <Grid size={{xl: 12}} container alignItems={'center'} justifyContent={'space-around'}>
                    <ButtonPrimary fontSize={'2rem'} path={-1} variant={'body1'}>Back</ButtonPrimary>
                    <ButtonPrimary fontSize={'2rem'} path={'/projects'} variant={'body1'}>Projects</ButtonPrimary>
                </Grid>
            </Grid>
        </>
    );
}

export default SkillsPage;
