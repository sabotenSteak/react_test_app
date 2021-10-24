import React from "react";
import { Box, ButtonGroup, Button, Tooltip } from "@mui/material";
import { DeleteForeverOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

const BadgeNumberAdjuster = 
    ({
        staff,
        addBadgeStopper,
        onBadgeNumberChange = f => f
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
                    title="Remove a badge"
                >                     
                    <Button                            
                        //disabled={badgeUnit.badgeLength <= 2}
                        onClick={()=>onBadgeNumberChange(staff.id, false)}
                    >
                        <DeleteForeverOutlined
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
                <Tooltip
                    title="Add a badge"
                >                     
                    <Button
                        disabled={addBadgeStopper === true}
                        onClick={()=>onBadgeNumberChange(staff.id, true)}
                    >
                        <AddCircleOutlineOutlined
                            fontSize="small"
                        />
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </Box>
    )
}

export default BadgeNumberAdjuster;