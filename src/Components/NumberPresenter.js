import React from "react";
import { Box, Typography, Stack, Grid, Tooltip, Card } from "@mui/material";
import { Warning } from "@mui/icons-material";

import amountPerBadgeMonth from "../resources/amountPerBadgeMonth.json"

const NumberPresenter 
    = ({
        badgeUnit
    }) => 
{
    const termStartYear = Number(badgeUnit.startMonth.substr(0,4));
    const termStartMonth = Number(badgeUnit.startMonth.substr(5,6));
    const termEndYear = Number(badgeUnit.endMonth.substr(0,4));
    const termEndMonth = Number(badgeUnit.endMonth.substr(5,6));
    const badgeClassification = badgeUnit.badgeClassification;

    /*
    const filteredAmounts = 
        [...amountPerBadgeMonth].filter(
            val =>
                (val.badge === badgeClassification) &&
                (
                    (val.year === termStartYear && val.month >= termStartMonth)
                        || (val.year > termStartYear)
                ) &&
                (
                    (val.year === termEndYear && val.month <= termEndMonth)
                        || (val.year < termEndYear)
                )
        );
    badgeUnit.amount = filteredAmounts.reduce(
        (prev, current) => {
            return prev + current.amount
        }, 0
    );*/
    const filteredAmountsOfLastYear =
        [...amountPerBadgeMonth].filter(
            val =>
                (val.badge === badgeClassification) &&
                (
                    (val.year === termStartYear-1 && val.month >= termStartMonth)
                        || (val.year > termStartYear-1)
                ) &&
                (
                    (val.year === termEndYear-1 && val.month <= termEndMonth)
                        || (val.year < termEndYear-1)
                )
        );
    const amoutOfLastYear = filteredAmountsOfLastYear.reduce(
        (prev, current) => {
            return prev + current.amount
        }, 0
    );

    const filteredAmountsOfTwoYearsAgo =
        [...amountPerBadgeMonth].filter(
            val =>
                (val.badge === badgeClassification) &&
                (
                    (val.year === termStartYear-2 && val.month >= termStartMonth)
                        || (val.year > termStartYear-2)
                ) &&
                (
                    (val.year === termEndYear-2 && val.month <= termEndMonth)
                        || (val.year < termEndYear-2)
                )
        );
    const amoutOfTwoYearsAgo = filteredAmountsOfTwoYearsAgo.reduce(
        (prev, current) => {
            return prev + current.amount
        }, 0
    );
    const filteredAmountsOfThreeYearsAgo =
        [...amountPerBadgeMonth].filter(
            val =>
                (val.badge === badgeClassification) &&
                (
                    (val.year === termStartYear-3 && val.month >= termStartMonth)
                        || (val.year > termStartYear-3)
                ) &&
                (
                    (val.year === termEndYear-3 && val.month <= termEndMonth)
                        || (val.year < termEndYear-3)
                )
        );
    const amoutOfThreeYearsAgo = filteredAmountsOfThreeYearsAgo.reduce(
        (prev, current) => {
            return prev + current.amount
        }, 0
    );

    badgeUnit.amount = Math.floor((amoutOfLastYear + amoutOfTwoYearsAgo + amoutOfThreeYearsAgo) /3)

    return(
        <Box
            sx={{
                m:2,
                height:"50px",
                textAlign:"center"
            }}
        >
        {termStartYear !== 0 && termEndYear !== 0 && badgeClassification !== ""
            ?
            termStartYear*12 + termStartMonth > termEndYear*12 + termEndMonth
                ?
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
                        開始月が終了月の後になっています
                    </Typography>
                </>
                :
                <>
                {/*
                    <Typography 
                        color="gray"
                        variant="subtitle2"
                        sx={{
                            whiteSpace:"nowrap",
                            textAlign:"left",
                            fontSize:"12px",
                            p:"0px 0px 0px 12px"
                        }}
                    >
                        Est. Amounts:<br/>
                    </Typography>
                    <Typography 
                        color="#696969"
                        variant="subtitle1"
                    >
                        {badgeUnit.amount}件
                    </Typography>*/}
                    <Stack
                        direction="row"
                    >
                        <Grid
                            container
                        >
                            <Grid
                                xs={8}
                            >
                                <Box 
                                    sx={{
                                        textAlign:"right",
                                        whiteSpace:"nowrap",
                                        color:"gray"
                                    }}
                                >
                                    <Tooltip  title="3 years ago record">
                                        <Typography
                                            sx={{
                                            fontSize:"12px",
                                        }}>
                                            {amoutOfThreeYearsAgo}
                                        </Typography>
                                    </Tooltip>
                                    <Tooltip title="2 years ago record">
                                        <Typography
                                            sx={{
                                                fontSize:"12px",
                                            }}>
                                                {amoutOfTwoYearsAgo}
                                        </Typography>
                                    </Tooltip>
                                    <Tooltip title="Last year record">
                                        <Typography
                                            sx={{
                                                fontSize:"12px",
                                            }}
                                        >
                                            {amoutOfLastYear}
                                        </Typography>
                                    </Tooltip>
                                </Box>
                            </Grid>
                            <Grid
                                xs={20}
                            >
                                <Typography                                     
                                    noWrap="true"
                                    color="gray"
                                    variant="subtitle2"
                                    textAlign="right"
                                    paddingTop="12px"
                                    sx={{
                                        fontSize:"12px",
                                    }}
                                >
                                    Est.:<br/>
                                </Typography>
                                <Typography 
                                    noWrap="true"
                                    color="black"
                                    variant="subtitle1"
                                    textAlign="right"
                                >
                                    {badgeUnit.amount}件
                                </Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </>  
            :
            <>
                <Typography 
                    variant="subtitle2"
                    color="gray"
                    p="10px 0px 0px"
                    sx={{
                        fontSize:"12px"
                    }}
                >
                    Pleast enter parameters
                </Typography>
            </>
        }
        </Box>
    )
};

export default NumberPresenter;