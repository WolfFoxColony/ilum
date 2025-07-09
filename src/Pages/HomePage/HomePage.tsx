import React from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import ButtonOpen from "../../components/Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";

function HomePage() {
    const bg = '/bg.webp';
    const bgLoaded = usePreloadImage(bg);

    return (
        <Box sx={{background: bgLoaded ? `url(${bg})` : '#02022b', backgroundRepeat: "repeat", backgroundSize: "cover", overflow:'hidden', height: "100%"}}>
            <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '50px', pb: '50px'}}>

                <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', height: '80%'}}>
                    <Grid size={{xl: 11, xs: 7}}  justifyContent="center" direction="column" container alignItems="center">
                        <Headline fontSize={"3.5rem"}>Hello fellow galaxy member</Headline>

                        <Headline fontSize={"2rem"}>Welcome to my space!</Headline>
                    </Grid>
                </Grid>

                <Grid justifyContent="center" direction="row" container alignItems="center">
                    <ButtonOpen path={"/skills"} variant={"h4"}>OPEN</ButtonOpen>
                </Grid>

            </Container>
        </Box>
    );
}

export default HomePage;
