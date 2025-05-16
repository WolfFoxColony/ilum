import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Headline from "../Headline/Headline.tsx";

function ButtonPrimary(props: any) {
    const {children, variant, path} = props;
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(path)} size="medium"
                sx={{
                    zIndex: 99,
                    border: '1px solid rgb(207 107 232)',
                    boxSizing: 'border-contain',
                    boxShadow: '10px 5px 11px rgba(200,21,206,0.77)',
                }}>
            <Headline variant={variant}>{children}</Headline>
        </Button>
    );
}

export default ButtonPrimary;
