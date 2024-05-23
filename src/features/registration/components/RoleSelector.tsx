import {
  Box,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";

interface RolesSelectorProps {
  setIsFreshmenButtonSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCurrentStudentButtonSelected: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setIsStaffButtonSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const RolesSelector = ({
  setIsFreshmenButtonSelected,
  setIsCurrentStudentButtonSelected,
  setIsStaffButtonSelected,
}: RolesSelectorProps) => {
  const handleRolesRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    switch (value) {
      case "freshmen":
        setIsFreshmenButtonSelected(true);
        setIsCurrentStudentButtonSelected(false);
        setIsStaffButtonSelected(false);
        break;
      case "currentStudent":
        setIsFreshmenButtonSelected(false);
        setIsCurrentStudentButtonSelected(true);
        setIsStaffButtonSelected(false);
        break;
      // case "staff":
      //   setIsFreshmenButtonSelected(false);
      //   setIsCurrentStudentButtonSelected(false);
      //   setIsStaffButtonSelected(true);
      //   break;
      default:
        break;
    }
  };

  return (
    <Container
      sx={{
        ml: 2,
        mt: 2,
        mb: 2,
      }}
    >
      <RadioGroup
        name="RolesSelectorGroup"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        onChange={handleRolesRadioButton}
      >
        <FormControlLabel
          value="freshmen"
          control={<Radio />}
          label="เพื่อนใหม่"
          sx={{
            "& .MuiFormControlLabel-label": { fontFamily: "Athiti" },
          }}
        />
        <FormControlLabel
          value="currentStudent"
          control={<Radio />}
          label="นักศึกษาปัจจุบัน"
          sx={{ "& .MuiFormControlLabel-label": { fontFamily: "Athiti" } }}
        />
      </RadioGroup>
      {/* ------------------------------------------------------------------------- */}
      {/* <Box>
        <RadioGroup
          name="RolesSelectorGroup"
          onChange={handleRolesRadioButton}
        >
          <FormControlLabel value="staff" control={<Radio />} label="บุคลากร" />
        </RadioGroup>
      </Box> */}
    </Container>
  );
};

export default RolesSelector;
