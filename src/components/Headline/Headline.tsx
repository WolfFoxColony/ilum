import React from 'react';
import Typography from "@mui/material/Typography";

function Headline(props: any) {
    const {children, fontSize, variant='h2'} = props;
    const customFont = "'Rowdies', sans-serif";  // sans-serif - fallback(alternative font)

    return (
        <Typography variant={variant} sx={{
            lineHeight: '1.1',
            fontFamily: customFont,
            textTransform: 'uppercase',
            color: 'transparent',
            textShadow: '5px 8px 13px rgba(200, 21, 206, 0.77);',
            WebkitTextStroke: '2px rgb(207 107 232)',
            fontSize: fontSize,
            fontWeight: '700',
            textAlign: 'center',
            zIndex:99
        }}>
            {children}
        </Typography>
    );
}

export default Headline;
