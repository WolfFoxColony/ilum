import React from 'react';
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";
import Headline from "../../components/Headline/Headline.tsx";
import Tile from "../../components/Tile/Tile.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";

function SkillsPage() {
    const bg = '/skills_bg.webp';
    const bgLoaded = usePreloadImage(bg);

    return (
        <Box sx={{background: bgLoaded ? `url(${bg})` : '#02022b', backgroundSize: "cover", height: "100%"}}>
            <Container maxWidth={false} sx={{height: "100%", zIndex: '99', position: "relative", padding:'50px 0'}}>

                <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', mr:' 20px', ml:' 20px'}}>
                    <Grid size={{xl: 12, xs: 12}}>
                        <Headline>My Skills</Headline>
                    </Grid>

                    <Grid size={{xl: 0, sm: 1, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile>JavaScript</Tile>
                        <Tile>TypeScript</Tile>
                        <Tile>React</Tile>
                        <Tile>Redux(RTK)</Tile>
                    </Grid>

                    <Grid size={{xl: 0, sm: 0, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile>Material UI</Tile>
                        <Tile>CSS, Scss, Less</Tile>
                        <Tile>HTML(BEM)</Tile>
                    </Grid>

                    <Grid size={{xl: 0, sm: 1, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile>Git</Tile>
                        <Tile>GitHub, GitLab</Tile>
                        <Tile>npm</Tile>
                        <Tile>JIRA, Asana</Tile>
                        <Tile>Scrum</Tile>
                    </Grid>

                    <Grid size={{xl: 0, sm: 0, xs: 2}}></Grid>

                    <Grid size={{xl: 2, sm: 5, xs: 10}}>
                        <Tile>Shopify, Liquid</Tile>
                        <Tile>FreeMarker</Tile>
                        <Tile>Figma, Avocode</Tile>
                        <Tile>WebStorm</Tile>
                        <Tile>Intellij</Tile>
                    </Grid>
                </Grid>

                <Grid size={{xl: 12}} container alignItems={'center'} justifyContent={'space-around'}>
                    <ButtonPrimary fontSize={'2rem'} path={-1} variant={'body1'}>Back</ButtonPrimary>
                    <ButtonPrimary fontSize={'2rem'} path={'/projects'} variant={'body1'}>Projects</ButtonPrimary>
                </Grid>
            </Container>
        </Box>
    );
}

export default SkillsPage;
