import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  SelectClasses,
  Stack,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import handleStudentFaculty from "../utils/handleStudentFaculty";
import UnstyledSelectMultiple from "./FoodAllergySelectMultiple";
import FoodAllergySelectMultiple from "./FoodAllergySelectMultiple";
import DrugAllergyMultipleSelectChip from "./DrugAllergySelectMultiple";
import Tags from "./UnderlyingDiseaseMultipleValues";
import FreeSoloMultipleAutocomplete from "./UnderlyingDiseaseMultipleValues";
import TypeFoodCheckBoxes from "./TypeFoodCheckBoxes";
import { validate } from "uuid";

const faculties: { code: string; nameTh: string; nameEng: string }[] = [
  { code: "02", nameTh: "คณะวิทยาศาสตร์", nameEng: "Faculty of Science" },
  { code: "03", nameTh: "คณะเกษตรศาสตร์", nameEng: "Faculty of Agriculture" },
  {
    code: "04",
    nameTh: "คณะวิศวกรรมศาสตร์",
    nameEng: "Faculty of Engineering",
  },
  { code: "05", nameTh: "คณะศึกษาศาสตร์", nameEng: "Faculty of Education" },
  { code: "06", nameTh: "คณะพยาบาลศาสตร์", nameEng: "Faculty of Nursing" },
  { code: "07", nameTh: "คณะแพทยศาสตร์", nameEng: "Faculty of Medicine" },
  {
    code: "08",
    nameTh: "คณะมนุษยศาสตร์และสังคมศาสตร์",
    nameEng: "Faculty of Humanities and Social Sciences",
  },
  {
    code: "09",
    nameTh: "คณะเทคนิคการแพทย์",
    nameEng: "Faculty of Associated Medical Sciences",
  },
  { code: "10", nameTh: "บัณฑิตวิทยาลัย", nameEng: "Graduate School" },
  {
    code: "11",
    nameTh: "คณะสาธารณสุขศาสตร์",
    nameEng: "Faculty of Public Health",
  },
  { code: "13", nameTh: "คณะทันตแพทยศาสตร์", nameEng: "Faculty of Dentistry" },
  {
    code: "15",
    nameTh: "คณะเภสัชศาสตร์",
    nameEng: "Faculty of Pharmaceutical Sciences",
  },
  { code: "16", nameTh: "คณะเทคโนโลยี", nameEng: "Faculty of Technology" },
  {
    code: "18",
    nameTh: "คณะสัตวแพทยศาสตร์",
    nameEng: "Faculty of Veterinary Medicine",
  },
  {
    code: "20",
    nameTh: "คณะสถาปัตยกรรมศาสตร์",
    nameEng: "Faculty of Architecture",
  },
  {
    code: "21",
    nameTh: "คณะบริหารธุรกิจและการบัญชี",
    nameEng: "Faculty of Business Administration and Accountancy",
  },
  {
    code: "22",
    nameTh: "คณะศิลปกรรมศาสตร์",
    nameEng: "Faculty of Fine and Applied Arts",
  },
  {
    code: "23",
    nameTh: "คณะสหวิทยาการ",
    nameEng: "Faculty of Interdisciplinary Studies",
  },
  { code: "27", nameTh: "คณะนิติศาสตร์", nameEng: "Faculty of Law" },
  {
    code: "28",
    nameTh: "วิทยาลัยการปกครองท้องถิ่น",
    nameEng: "College of Local Administration",
  },
  { code: "29", nameTh: "วิทยาลัยนานาชาติ", nameEng: "International College" },
  { code: "32", nameTh: "คณะเศรษฐศาสตร์", nameEng: "Faculty of Economics" },
  {
    code: "38",
    nameTh: "วิทยาลัยการคอมพิวเตอร์",
    nameEng: "College of Computing",
  },
  {
    code: "74",
    nameTh: "วิทยาลัยบัณฑิตศึกษาการจัดการ",
    nameEng: "College of Graduate Study in Management",
  },
];

interface FreshmenProps {
  std_code: string;
  setSTD_code: React.Dispatch<React.SetStateAction<string>>;

  std_first_name_th: string;
  setSTD_first_name_th: React.Dispatch<React.SetStateAction<string>>;

  std_last_name_th: string;
  setSTD_last_name_th: React.Dispatch<React.SetStateAction<string>>;

  std_nickname: string;
  setSTD_nickname: React.Dispatch<React.SetStateAction<string>>;

  std_faculty_name: string;
  setSTD_faculty_name: React.Dispatch<React.SetStateAction<string>>;

  std_religion: string;
  setSTD_religion: React.Dispatch<React.SetStateAction<string>>;

  std_food_type: string;
  setSTD_food_type: React.Dispatch<React.SetStateAction<string>>;

  std_food_allergy: string[];
  setSTD_food_allergy: React.Dispatch<React.SetStateAction<string[]>>;

  std_drug_allergy: string[];
  setSTD_drug_allergy: React.Dispatch<React.SetStateAction<string[]>>;

  std_underlying_disease: string[];
  setSTD_underlying_disease: React.Dispatch<React.SetStateAction<string[]>>;

  std_telephone: string;
  setSTD_telephone: React.Dispatch<React.SetStateAction<string>>;

  std_friend_telephone: string;
  setSTD_friend_telephone: React.Dispatch<React.SetStateAction<string>>;

  std_facebook: string;
  setSTD_facebook: React.Dispatch<React.SetStateAction<string>>;

  std_instagram: string;
  setSTD_instagram: React.Dispatch<React.SetStateAction<string>>;

  isDisableStudentCode: boolean;
  setIsDisableStudentCode :React.Dispatch<React.SetStateAction<boolean>>;
}

const Freshmen = ({
  std_code,
  std_first_name_th,
  std_last_name_th,
  std_nickname,
  std_faculty_name,
  std_religion,
  std_food_type,
  std_food_allergy,
  std_drug_allergy,
  std_underlying_disease,
  std_telephone,
  std_friend_telephone,
  std_facebook,
  std_instagram,
  isDisableStudentCode,
  setSTD_code,
  setSTD_first_name_th,
  setSTD_last_name_th,
  setSTD_nickname,
  setSTD_faculty_name,
  setSTD_religion,
  setSTD_food_type,
  setSTD_food_allergy,
  setSTD_drug_allergy,
  setSTD_underlying_disease,
  setSTD_telephone,
  setSTD_friend_telephone,
  setSTD_facebook,
  setSTD_instagram,
  setIsDisableStudentCode
}: FreshmenProps) => {
  const [facultyCode, setFacultyCode] = useState("");
  // const [isDisableStudentCode, setIsDisableStudentCode] =
  //   useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [stdCodeError, setStdCodeError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneNumError, setPhoneNumError] = useState<string | null>(null);

  const handleFacultyChange = (e: SelectChangeEvent<string>) => {
    const selectedCode = e.target.value;
    setFacultyCode(selectedCode);
    const selectedFaculty = faculties.find((fac) => fac.code === selectedCode);
    setSTD_faculty_name(selectedFaculty ? selectedFaculty.nameTh : "");
  };

  const handleStdCodeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSTD_code(value);
    const facultyCodeFromStdCode = value.substring(3, 5);

    const selectedFaculty = faculties.find(
      (fac) => fac.code === facultyCodeFromStdCode
    );
    console.log("selectedFaculty: ", selectedFaculty);
    setFacultyCode(facultyCodeFromStdCode);
    setSTD_faculty_name(selectedFaculty ? selectedFaculty.nameTh : "");
  };

  const handleSTDTelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSTD_telephone(value);
  };

  useEffect(() => {
    const code = handleStudentFaculty(std_code);
    setFacultyCode(code);
  }, [std_code]);

  const validateStdCode = (code: string): boolean => {
    const pattern = /^\d{9}-\d{1}$/;
    return pattern.test(code);
  };

  const validateFullName = (name: string): boolean => {
    const nameParts = name.trim().split(" ");
    return nameParts.length === 2 && nameParts[0] !== "" && nameParts[1] !== "";
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const pattern = /^0\d{9}$/;
    return pattern.test(phoneNumber);
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
          disabled={isDisableStudentCode}
        />

        <FormControlLabel
          sx={{'& .MuiFormControlLabel-label': { fontFamily: "Athiti", fontSize: 14 } }} 
          control={
            <Checkbox
              onChange={(e) => {
                setIsDisableStudentCode(e.target.checked);
                setSTD_code("");
                setStdCodeError(null);
              }}
            />
          }
          label="*สำหรับนักศึกษาที่ยังไม่ได้รับรหัสนักศึกษา"
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

        <TextField
          label="ชื่อเล่น"
          size="small"
          value={std_nickname}
          onChange={(e) => {
            setSTD_nickname(e.target.value);
          }}
          fullWidth
        />

        <FormControl size="small">
          <InputLabel id="faculty-label">คณะ</InputLabel>
          <Select
            labelId="faculty-label"
            label="คณะ"
            value={facultyCode}
            onChange={(e) => {
              handleFacultyChange(e);
            }}
          >
            {faculties.map((faculty) => (
              <MenuItem key={faculty.nameTh} value={faculty.code}>
                {faculty.nameTh}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="religion-label">ศาสนา</InputLabel>
          <Select
            labelId="religion-label"
            label="ศาสนา"
            value={std_religion}
            onChange={(e) => {
              setSTD_religion(e.target.value);
              console.log("religion :", e.target.value);
            }}
          >
            <MenuItem value="พุทธ">พุทธ</MenuItem>
            <MenuItem value="คริสต์">คริสต์</MenuItem>
            <MenuItem value="อิสลาม">อิสลาม</MenuItem>
          </Select>
        </FormControl>

        <TypeFoodCheckBoxes
          std_food_type={std_food_type}
          setSTD_food_type={setSTD_food_type}
        ></TypeFoodCheckBoxes>

        <Stack spacing={2}>
          <FoodAllergySelectMultiple
            std_food_allergy={std_food_allergy}
            setSTD_food_allergy={setSTD_food_allergy}
          ></FoodAllergySelectMultiple>

          <DrugAllergyMultipleSelectChip
            std_drug_allergy={std_drug_allergy}
            setSTD_drug_allergy={setSTD_drug_allergy}
          ></DrugAllergyMultipleSelectChip>

          <FreeSoloMultipleAutocomplete
            std_underlying_disease={std_underlying_disease}
            setSTD_underlying_disease={setSTD_underlying_disease}
          ></FreeSoloMultipleAutocomplete>
        </Stack>

        <TextField
          label="เบอร์โทรศัพท์"
          size="small"
          value={std_telephone}
          onChange={(e) => {
            handleSTDTelChange(e);

            if (validatePhoneNumber(e.target.value)) {
              setPhoneNumError(null);
            } else {
              setPhoneNumError(
                "Phone Number should starts with 0 and contains 10 digits"
              );
            }
          }}
          error={!!phoneNumError}
          helperText={phoneNumError}
        />

        <TextField
          label="Facebook"
          size="small"
          value={std_facebook}
          onChange={(e) => {
            setSTD_facebook(e.target.value);
          }}
        />

        <TextField
          label="Instagram"
          size="small"
          value={std_instagram}
          onChange={(e) => {
            setSTD_instagram(e.target.value);
          }}
        />
      </Stack>
    </Container>
  );
};

export default Freshmen;
