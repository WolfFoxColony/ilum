import React, {useMemo} from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import ButtonOpen from "../../components/Buttons/ButtonPrimary.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary.tsx";

function CertificatesPage() {
    const bg = '/bg-certificates.webp';
    const bgLoaded = usePreloadImage(bg);

    const bgStyle = useMemo(() => ({
        backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})` : 'none',
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
                            Certificates
                        </Headline>

                    </Grid>
                </Grid>

                <Grid justifyContent="space-around" direction="row" container>
                    <ButtonPrimary fontSize={'2rem'} path={-1} variant={'body1'}>Back</ButtonPrimary>
                    <ButtonOpen path={"/"} variant={"h4"}>HOME</ButtonOpen>
                </Grid>

            </Container>
        </Box>
    );
}

export default CertificatesPage;
