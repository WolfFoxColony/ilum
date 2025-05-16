import React from 'react';
import Headline from "../Headline/Headline.tsx";
import ButtonOpen from "../Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";

function HomePage() {
    return (
        <>
            <Grid justifyContent="center" direction="column" container alignItems="center" sx={{height: '60%'}}>
                <Headline variant={"h2"}>Hello fellow galaxy</Headline>
                <Headline>member</Headline>
            </Grid>

            <Grid justifyContent="center" direction="row" container alignItems="center" sx={{height: '5%'}}>
                <ButtonOpen path={"/projects"} variant={"h4"}>CLICK <br/>TO OPEN</ButtonOpen>
            </Grid>
        </>
    );
}

export default HomePage;
