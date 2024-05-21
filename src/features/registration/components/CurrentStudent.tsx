import { Container, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";

interface CurrentStudentProps {
  std_code: string;
  setSTD_code: React.Dispatch<React.SetStateAction<string>>;

  std_first_name_th: string;
  setSTD_first_name_th: React.Dispatch<React.SetStateAction<string>>;

  std_last_name_th: string;
  setSTD_last_name_th: React.Dispatch<React.SetStateAction<string>>;
}

const CurrentStudent = ({
  std_code,
  setSTD_code,
  std_first_name_th,
  setSTD_first_name_th,
  std_last_name_th,
  setSTD_last_name_th,
}: CurrentStudentProps) => {
  const [stdCodeError, setStdCodeError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);

  const validateStdCode = (code: string): boolean => {
    const pattern = /^\d{9}-\d{1}$/;
    return pattern.test(code);
  };

  const validateFullName = (name: string): boolean => {
    const nameParts = name.trim().split(" ");
    return nameParts.length === 2 && nameParts[0] !== "" && nameParts[1] !== "";
  };

  const handleStdCodeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSTD_code(value);
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
      <Stack spacing={1}>

      <Typography
          sx={{
            fontFamily: "Athiti",
            textAlign: "left",
            fontSize: "26px",
            fontWeight: "medium",
          }}
        >
          ข้อมูลสำหรับการลงทะเบียน
        </Typography>
        <hr />
        <br />

        <TextField
          label="รหัสนักศึกษา"
          size="small"
          value={std_code}
          onChange={(e) => {
            handleStdCodeChange(e);

            if (!validateStdCode(e.target.value)) {
              setStdCodeError(
                "Invalid standard code format. Expected format: 653380283-4"
              );
            } else {
              setStdCodeError(null);
            }
          }}
          error={!!stdCodeError}
          helperText={stdCodeError}
        />

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
              setNameError(
                "Please enter both first name and last name separated by a space."
              );
            }
          }}
          fullWidth
          error={!!nameError}
          helperText={nameError}
        />
      </Stack>
    </Container>
  );
};

export default CurrentStudent;
