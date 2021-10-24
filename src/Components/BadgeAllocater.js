import React from "react";

import { Box, IconButton, Tooltip } from "@mui/material";
import { PlaylistAddCheck } from "@mui/icons-material";


const BadgeAllocater =
    (

    ) =>
{
    const openBadgeDialog = () => {
        
    };

    const closeBadgeDialog = () => {

    };

    return(
        <Box
            sx={{
                //border: "1px dashed black",
                m:1
            }}
        >
            <Tooltip 
                title="Change associated badge"
            >
                <IconButton
                    onClick={openBadgeDialog}
                >
                    <PlaylistAddCheck />
                </IconButton>
            </Tooltip>
            <badgeDialog
                onClose={closeBadgeDialog}
            />
        </Box>
    )
};

export default BadgeAllocater;