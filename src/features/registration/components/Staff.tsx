import { Container, TextField } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";

interface StaffProps {
  std_first_name_th: string;
  setSTD_first_name_th: React.Dispatch<React.SetStateAction<string>>;

  std_last_name_th: string;
  setSTD_last_name_th: React.Dispatch<React.SetStateAction<string>>;
}

const Staff = ({
  std_first_name_th,
  setSTD_first_name_th,
  std_last_name_th,
  setSTD_last_name_th

}:StaffProps) => {
  const [nameError, setNameError] = useState<string | null>(null);

  const validateFullName = (name: string): boolean => {
    const nameParts = name.trim().split(" ");
    return nameParts.length === 2 && nameParts[0] !== '' && nameParts[1] !== '';
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 2,
      }}
    >
      <TextField
        label="ชื่อนามสกุล"
        size="small"
        onChange={(e) => {
          const value = e.target.value;
          const nameParts = value.trim().split(" ");
          
          if (validateFullName(value)) {
            setSTD_first_name_th(nameParts[0]);
            setSTD_last_name_th(nameParts[1]);
            setNameError(null);
          } else {
            setNameError('Please enter both first name and last name separated by a space.');
          }
        }}
        fullWidth
        error={!!nameError}
        helperText={nameError}
      />
    </Container>
  );
};

export default Staff;
