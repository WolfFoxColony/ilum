import React, {useMemo} from 'react';
import Headline from "../../components/Headline/Headline.tsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {usePreloadImage} from "../../hooks/usePreloadImage/usePreloadImage.tsx";
import SwiperSlider from "../../components/Swiper/Swiper.tsx";

function CertificatesPage() {
    const bg = '/bg-certificates.webp';
    const bgLoaded = usePreloadImage(bg);

    const bgStyle = useMemo(() => ({
        backgroundImage: bgLoaded ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})` : '#050e1e',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: "repeat",
        transition: 'background 0.4s ease-in-out',
    }), [bgLoaded, bg]);

    return (
        <Box sx={bgStyle} id={'certificates-page'}>
            <Container sx={{height: "100%", zIndex: '99', position: "relative", pt: '100px', pb: '100px'}}>

                <Grid container={true} spacing={2} justifyContent="center" sx={{mb: '40px', height: '80%'}}>
                    <Grid size={{xl: 11, xs: 7}} justifyContent="center" direction="column" flexWrap='wrap' container alignItems="center">
                        <Headline fontSize='2rem'>Certificates</Headline>

                        <SwiperSlider/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default CertificatesPage;
