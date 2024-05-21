import { Container, Stack, Typography, Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";

interface EventsSelectorProps {
  events: string[];
  isEventSelected: boolean[];
  setIsEventSelected: React.Dispatch<React.SetStateAction<boolean>>[];
  isFreshmenButtonSelected: boolean;
  isCurrentStudentButtonSelected: boolean;
  isStaffButtonSelected: boolean;
}

const EventsSelector = ({
  events,
  isEventSelected,
  setIsEventSelected,
  isFreshmenButtonSelected,
  isCurrentStudentButtonSelected,
  isStaffButtonSelected,
}: EventsSelectorProps) => {
  const handleChange = (index: number, checked: boolean) => {
    setIsEventSelected[index](checked);
  };

  useEffect(() => {
    if (!isFreshmenButtonSelected && events.includes("Friendship Group")) {
      const friendshipGroupIndex = events.indexOf("Friendship Group");
      if (isEventSelected[friendshipGroupIndex]) {
        setIsEventSelected[friendshipGroupIndex](false);
      }
    }
  }, [isFreshmenButtonSelected, events, isEventSelected, setIsEventSelected]);

  const filteredEvents = events.filter((eventName) => {
    return !((isCurrentStudentButtonSelected || isStaffButtonSelected) && eventName === "Friendship Group");
  });

  return (
    <Container>
      <Stack spacing={1}>

        <Typography
          sx={{
            fontFamily: "Athiti",
            textAlign: "left",
            fontSize: "22px",
            fontWeight: "medium",
          }}
        >
          กิจกรรม
        </Typography>

        {filteredEvents.map((eventName, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={isEventSelected[index]}
                onChange={(e) => {
                  handleChange(index, e.target.checked);
                }}
                disabled={
                  (isCurrentStudentButtonSelected && eventName === "Friendship Group") ||
                  (isStaffButtonSelected && eventName === "Friendship Group")
                }
              />
            }
            label={eventName}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default EventsSelector;
