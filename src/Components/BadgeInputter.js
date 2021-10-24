import React from "react";
import { InputLabel, MenuItem, FormControl, Select, Box, Stack, TextField } from "@mui/material";

const BadgeInputter =
    ({
        index,
        staff,
        badgeUnit,
        onClassification = f => f,
        onStartMonth = f => f,
        onEndMonth = f => f
    }) =>
{   
    //console.log(badgeUnit)
    return(
        <Box 
            sx={{
                m:2,
                //border:1
            }}
        >
            <FormControl 
                fullWidth
            >
                <InputLabel 
                    id="classificationSelectLabel"
                >
                    Class
                </InputLabel>
                <Select
                    labelid="classificationSelectLabel"
                    id="classificationSelect"
                    value={badgeUnit.badgeClassification}
                    label="classification"
                    sx={{
                        fontSize:"12px",
                        color:"black"
                    }}
                    onChange={(e) =>
                        onClassification(staff.id, index, e.target.value)
                    }
                >                       
                    {[...staff.associatedBadge].map((val) =>
                        <MenuItem 
                            value={val.badgeValue}
                            sx={{fontSize:"10px"}}
                        >
                            {val.badgeValue}- {val.badgeName}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>

            <Stack
                component="form"
                p="10pt 5pt 0pt"
            >
                <TextField                    
                    variant="standard"
                    id="startMonth"
                    label="Term Starting Month"
                    value={badgeUnit.startMonth}
                    type="month"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                        sx:{fontSize:"14px"}
                    }}
                    InputProps={{
                        sx:{fontSize:"12px"}
                    }}
                    onChange={(e) => 
                        //badgeUnit.startMonth = e.target.value
                        onStartMonth(staff.id, index, e.target.value)
                    }
                />
            </Stack>

            <Stack  
                component="form"
                p="5pt 5pt 0pt"
            >
                <TextField
                    variant="standard"
                    id="endMonth"
                    label="Term Ending Month"
                    value={badgeUnit.endMonth}
                    type="month"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                        sx:{fontSize:"14px"}
                    }}
                    InputProps={{
                        sx:{fontSize:"12px"}
                    }}
                    onChange={(e) =>
                        onEndMonth(staff.id, index, e.target.value)
                    }
                />
            </Stack>
        </Box>
    );
};

export default BadgeInputter;