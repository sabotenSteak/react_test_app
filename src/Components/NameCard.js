import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const NameCard = 
    ({
        staff
    }) =>
{
    return (
        <Box
            p="1"
            sx={{
                p:2
            }}
            //border="1px solid black"
        >
            <Typography
                variant="subtitle2"
            >
                ID:{staff.id}<br/>
            </Typography>
            <Typography
                variant="subtitle2"
            >
                {staff.position}
            </Typography>
            <Typography
                variant="subtitle2"
                marginTop="20pt"
            >
                {staff.nameEn}
            </Typography>
            <Typography
                variant="h5"
                sx={{fontWeight:"600"}}
            >
                {staff.name}
            </Typography>
        </Box>
    )
}

export default NameCard;