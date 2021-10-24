import React from "react";
import { Grid, Stack } from "@mui/material";

import NameCard from "./NameCard";
import BadgeInputter from "./BadgeInputter";
import NumberPresenter from "./NumberPresenter"
import BadgeTermAdjuster from "./BadgeTermAdjuster"
import BadgeNumberAdjuster from "./BadgeNumberAdjuster"
import TotalResultPresenter from "./TotalResultPresenter";
import BadgeAllocater from "./BadgeAllocater";

const ScheduleOfStaff = 
    ({ 
        staff,
        monthlyWindow,
        badgeUnits,
        //extendStopper,
        onClassification = f => f,
        onStartMonth = f => f,
        onEndMonth = f => f,
        onTermChange = f => f,
        onBadgeNumberChange = f => f
     }) => 
{
    const GRID_HEIGHT = 280;

    const sumTermsLength = badgeUnits.reduce((prev, current)  =>
        {return prev + Number(current.badgeLength)}, 0);

    const extendStopper =
        sumTermsLength >= [...monthlyWindow].length * 4
            ? true 
            : false

    const addBadgeStopper =
        sumTermsLength > [...monthlyWindow].length * 4 - 2
            ? true
            : false

    const isTotalTermMatched =
        sumTermsLength === [...monthlyWindow].length * 4
            ? true
            : false
    
    return(
        <>
            <Stack
                direction="row"
            >
                <Grid
                    container
                    columns={4*[...monthlyWindow].length}
                >
                    <Grid
                        xs={4*[...monthlyWindow].length/([...monthlyWindow].length+2)}
                        height={GRID_HEIGHT+"px"}
                        border="1px solid gray"
                    >
                        <BadgeNumberAdjuster
                            staff={staff}
                            onBadgeNumberChange={onBadgeNumberChange}
                            addBadgeStopper={addBadgeStopper}
                        />
                        <NameCard
                            staff={staff}
                        />
                        <BadgeAllocater />
                    </Grid>
                        <Grid
                            xs={4*[...monthlyWindow].length*[...monthlyWindow].length/([...monthlyWindow].length+2)}
                            >
                            <Stack
                                direction="row"
                            >
                            {[...badgeUnits].map((_,i) => 
                                <Grid
                                    xs={badgeUnits[i].badgeLength}
                                    height={GRID_HEIGHT+"px"}
                                    border="1px solid gray"
                                    bgcolor={
                                        i % 2 !== 0
                                        ? "#f8f4e6"
                                        : "#fffff9"
                                    }
                                >
                                    <BadgeTermAdjuster
                                        index={i}
                                        staff={staff}
                                        badgeUnit={badgeUnits[i]}
                                        onTermChange={onTermChange}
                                        extendStopper={extendStopper}
                                    />
                                    <BadgeInputter
                                        index={i}
                                        staff={staff}
                                        badgeUnit={badgeUnits[i]}
                                        onClassification={onClassification}
                                        onStartMonth={onStartMonth}
                                        onEndMonth={onEndMonth}
                                    />
                                    <NumberPresenter
                                        badgeUnit={badgeUnits[i]}
                                    />
                                </Grid>
                            )}
                            </Stack>
                        </Grid>
                    <Grid
                        xs={4*[...monthlyWindow].length/([...monthlyWindow].length+2)}
                        height={GRID_HEIGHT+"px"}
                        border={
                            isTotalTermMatched === true
                                ? "1px solid gray"
                                : "1px dashed #ff6347"
                        }
                    >
                        <TotalResultPresenter
                            badgeUnits={badgeUnits}
                            isTotalTermMatched={isTotalTermMatched}
                        />
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
};

export default ScheduleOfStaff;