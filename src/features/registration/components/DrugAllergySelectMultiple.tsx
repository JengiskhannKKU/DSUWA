import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface DrugAllergyProps {
  std_drug_allergy: string[];
  setSTD_drug_allergy: React.Dispatch<React.SetStateAction<string[]>>;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const defaultItems = [
  "Penicillin",
  "Cephalosporin",
  "Ibuprofen",
  "Naproxen",
  "Diclofenac",
  "Allopurinol",
  "Carbamazepine",
  "Phenobarbital",
  "Hydroxyzine",
  "Cetirizine",
  "Bilastine",
  "Fexofenadine",
  "Loratadine",
  "Desloratadine",
  "ยาแก้ปวด",
  "ยารักษาวัณโรค",
  "CPM",
  "Other", // Add "Other" option here
];

function getStyles(
  item: string,
  std_drug_allergy: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      std_drug_allergy.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DrugAllergyMultipleSelectChip({
  std_drug_allergy,
  setSTD_drug_allergy,
}: DrugAllergyProps) {
  const theme = useTheme();
  const [otherInput, setOtherInput] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(defaultItems);
  const otherInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: SelectChangeEvent<typeof std_drug_allergy>) => {
    const {
      target: { value },
    } = event;
    const newValue = typeof value === "string" ? value.split(",") : value;

    if (newValue.includes("Other")) {
      setOpen(false);
      setTimeout(() => {
        otherInputRef.current?.focus();
      }, 0);
    }

    setSTD_drug_allergy(newValue);
  };

  const handleOtherInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherInput(event.target.value);
  };

  const handleAddOther = () => {
    if (otherInput.trim() !== "") {
      const newValue = std_drug_allergy.map((item) =>
        item === "Other" ? otherInput.trim() : item
      );
      setSTD_drug_allergy(newValue);
      if (!items.includes(otherInput.trim())) {
        setItems([...items, otherInput.trim()]);
      }
      setOtherInput("");
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormControl sx={{ m: 0 }} fullWidth>
        <InputLabel id="demo-multiple-chip-label">ยาที่แพ้</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          value={std_drug_allergy}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="ยาที่แพ้" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {items.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, std_drug_allergy, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {std_drug_allergy.includes("Other") && (
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <TextField
            label="Specify Other"
            value={otherInput}
            onChange={handleOtherInputChange}
            variant="outlined"
            size="small"
            inputRef={otherInputRef}
          />
          <Button
            onClick={handleAddOther}
            variant="contained"
            color="primary"
            size="small"
            sx={{ ml: 1, fontFamily: "Athiti" }}
          >
            เพิ่ม
          </Button>
        </Box>
      )}
    </div>
  );
}
