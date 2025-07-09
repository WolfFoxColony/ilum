import React, {useMemo} from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import ButtonOpen from "../../components/Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";

function ResumePage() {
    const bg = 'bg-secondary.webp';
    const bgLoaded = usePreloadImage(bg);

    const bgStyle = useMemo(() => ({
        backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})` : 'none',
        backgroundSize: 'cover',
        height: '100%',
        overflow: 'hidden',
        backgroundRepeat: "repeat"
    }), [bgLoaded, bg]);

    return (
        <Box sx={bgStyle}>
            <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '50px', pb: '50px'}}>

                <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', height: '80%'}}>
                    <Grid size={{xl: 11, xs: 7}} justifyContent="center" direction="column" container alignItems="center">
                        <Headline>
                            <a style={{textDecoration:'none'}} target='_blank' href={'https://drive.google.com/file/d/1a8OYZ1lzQ-QwSaq2_cc58qYzvPEwQf0j/view?usp=sharing'}>
                                View Full Resume
                            </a>
                        </Headline>

                    </Grid>
                </Grid>

                <Grid size={{xl: 12}} container alignItems={'center'} justifyContent={'space-around'}>
                    <ButtonOpen path={"/"} variant={"h4"}>HOME</ButtonOpen>
                    <ButtonOpen path={"/certificates"} variant={"h4"}>Certificates</ButtonOpen>
                </Grid>

            </Container>
        </Box>
    );
}

export default ResumePage;
