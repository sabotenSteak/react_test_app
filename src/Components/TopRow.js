import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";


const TopRow =
    ({ monthlyWindow }) =>
{   
    const WINDOW_HEIGHT = 60;

    const firstTabelName = ({
        "titleJA":"担当者",
        "titleEN":"Staffs"
    });
    const lastTableName = ({
        "titleJA":"",
        "titleEN":""
    });
    const tableNames = [
        firstTabelName,
        ...monthlyWindow,
        lastTableName
    ];

    return (
        <Box
            sx = {{
                textAlign:"center",
                p:"30px 0px 0px"
            }}
        >
            <Stack
                direction="row"
                //borderBottom="1px solid black"
            >
                {[...tableNames].map((val, i)=>
                    <Grid
                        xs={12/[...tableNames].length}
                        height={WINDOW_HEIGHT+"px"}
                        borderLeft={
                            i !== 0
                                ? "1pt dashed black"
                                : ""
                        }
                    >
                        <Typography 
                            variant="subtitle2"
                            color="gray"
                        >
                            {val.titleEN}<br/>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            {val.titleJA}
                        </Typography>
                    </Grid>
                )}
            </Stack>
        </Box>
    );
};

export default TopRow;