import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface TypeFoodProps {
    std_food_type: string;
    setSTD_food_type: React.Dispatch<React.SetStateAction<string>>;
}

export default function TypeFoodCheckBoxes({std_food_type, setSTD_food_type}:TypeFoodProps) {
  const [otherFoodType, setOtherFoodType] = React.useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSTD_food_type((event.target as HTMLInputElement).value);
  };

  const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherFoodType(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel sx={{ mt: 1, fontFamily: "Athiti", fontSize: '18px', fontWeight: 'medium' }}>
        ประเภทอาหารที่รับประทาน
      </FormLabel>
      <RadioGroup row
        sx={{ justifyContent: 'space-around', flexWrap: 'wrap'}}
        value={std_food_type}
        onChange={handleRadioChange}
      >
        <FormControlLabel 
          sx={{ mt: "-4px", '& .MuiFormControlLabel-label': { fontFamily: "Athiti" } }} 
          value="อาหารทั่วไป" 
          control={<Radio />} 
          label="อาหารทั่วไป" 
        />
        <FormControlLabel 
          sx={{ mt: "-4px", '& .MuiFormControlLabel-label': { fontFamily: "Athiti" } }} 
          value="อาหารฮาลาล" 
          control={<Radio />} 
          label="อาหารฮาลาล" 
        />
      </RadioGroup>
    </FormControl>
  );
}
