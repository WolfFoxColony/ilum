import React from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import ButtonOpen from "../../components/Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";

function HomePage() {
    return (
        <>
            <Grid justifyContent="center" direction="column" container alignItems="center" sx={{height: '70%'}}>
                <Headline variant={"h2"}>Hello fellow galaxy member</Headline>
                <Headline>Welcome to my space!</Headline>
            </Grid>

            <Grid justifyContent="center" direction="row" container alignItems="center" sx={{height: '30%'}}>
                <ButtonOpen path={"/skills"} variant={"h4"}>OPEN</ButtonOpen>
            </Grid>
        </>
    );
}

export default HomePage;
