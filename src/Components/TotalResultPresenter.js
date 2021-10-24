import React from "react";
import { Box, Typography } from "@mui/material";
import { Warning } from "@mui/icons-material";

const TotalResultPresenter =
    ({
        badgeUnits,
        isTotalTermMatched={isTotalTermMatched}
    }) =>
{   
    //console.log(badgeUnits)
    const totalAmount = badgeUnits.reduce(
        (prev, current) => {
            return prev + Number(current.amount);
        }, 0
    )

    return(
        <Box
            sx={{
                m:2,
                //border:1,
                textAlign:"right"
            }}
        >
            <Box
                sx={{
                //border:1,
                height:"195px",
                }}
            >
            </Box>
            {isTotalTermMatched === true ?
            <>
                <Typography 
                    color="black"
                    variant="subtitle2"
                    sx={{
                        textAlign:"right",
                        fontSize:"12px",
                    }}
                >
                    Sum Est.:<br/>
                </Typography>
                <Typography 
                    color="#24140e"
                    variant="h5"
                >
                    {totalAmount}件
                </Typography>
            </>
            :
            <>
                <Warning
                    color="error"
                    fontSize="small"
                    />
                <Typography 
                    color="error.light"
                    variant="subtitle2"
                    sx={{
                        fontSize:"10px"
                    }}
                >
                    Please adjust term length
                </Typography>
            </>
            }
        </Box>
    )
}

export default TotalResultPresenter;