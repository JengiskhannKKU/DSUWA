import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createFilterOptions } from "@mui/material/Autocomplete";

interface FreeSoloMultipleAutocompleteProps {
  std_underlying_disease: string[];
  setSTD_underlying_disease: React.Dispatch<React.SetStateAction<string[]>>;
}

const FreeSoloMultipleAutocomplete: React.FC<FreeSoloMultipleAutocompleteProps> = ({
  std_underlying_disease,
  setSTD_underlying_disease,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddClick = () => {
    if (inputValue && !std_underlying_disease.includes(inputValue)) {
      setSTD_underlying_disease([...std_underlying_disease, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      filterSelectedOptions
      options={[]}
      value={std_underlying_disease}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        setSTD_underlying_disease(newValue as string[]);
      }}
      filterOptions={(options, params) => {
        const filtered = createFilterOptions<string>()(options, params);
        if (params.inputValue !== "" && !std_underlying_disease.includes(params.inputValue)) {
          filtered.push(params.inputValue);
        }
        return filtered;
      }}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <Box display="flex" alignItems="center">
          <TextField
            {...params}
            label="โรคประจำตัว"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAddClick} variant="contained" sx={{ marginLeft: 1, fontFamily: "Athiti" }}>
            เพิ่ม
          </Button>
        </Box>
      )}
    />
  );
};

export default FreeSoloMultipleAutocomplete;
