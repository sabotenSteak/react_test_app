import React from "react";
import { Box, ButtonGroup, Button, Tooltip } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const TermAdjuster = 
      ({ 
        index,
        badgeUnit,
        staff,
        extendStopper,
        onTermChange = f => f
      }) =>
{    
    return (
        <Box
            sx={{
                textAlign : "right"
            }}
        >
            <ButtonGroup 
                disableElevation
                variant="text"
                size="small"
                aria-label="term adjuster buttons"
            >
                <Tooltip
                    title="Shortening"
                >                     
                    <Button                            
                        disabled={badgeUnit.badgeLength <= 2}
                        onClick={()=>onTermChange(staff.id, index, false)}
                    >
                        <KeyboardArrowLeft
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
                <Tooltip
                    title="Extending"
                >                     
                    <Button
                        disabled={badgeUnit.badgeLength >= 8 || extendStopper === true}
                        onClick={()=>onTermChange(staff.id, index, true)}
                    >
                        <KeyboardArrowRight
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </Box>
    )
};

export default TermAdjuster;