import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import handleClubsCollection from "../utils/handleClubsCollection";
import handleEventsCollection from "../utils/handleEventsCollection";
import handleStudentsCollection from "../utils/handleStudentsCollection";
import handleEventsRegistrationCollection from "../utils/handleEventsRegistrationCollection";
import handleRegisteredStudentCode from "../utils/handleRegisteredStudentCode";
import handleIsamGroup from "../utils/handleIsamGroup";

interface SubmitButtonProp {
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

  isFreshmenButtonSelected: boolean;
  isCurrentStudentButtonSelected: boolean;
  isStaffButtonSelected: boolean;

  isPradabchorEventSelected : boolean;
  isFirstMeetEventSelected : boolean;
  isFriendshipEventSelected : boolean;
}

const SubmitButton = ({
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
  isFreshmenButtonSelected,
  isCurrentStudentButtonSelected,
  isStaffButtonSelected,
  isFirstMeetEventSelected,
  isFriendshipEventSelected,
  isPradabchorEventSelected
}: SubmitButtonProp) => {
  const parametersHandleStudentsCollection = {
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
    isFreshmenButtonSelected,
    isCurrentStudentButtonSelected,
    isStaffButtonSelected,
  };


  const formValidation = () => {

    if(isFreshmenButtonSelected) {
      if(
        std_code == "" ||
        std_first_name_th == "" ||
        std_last_name_th == "" ||
        std_nickname == "" ||
        std_faculty_name == "" ||
        std_religion == "" ||
        // std_food_type == "" ||
        // std_food_allergy == "" ||
        // std_drug_allergy == "" ||
        // std_underlying_disease == "" ||
        std_telephone == "" ||
        //std_friend_telephone == "" ||
        std_facebook == "" ||
        std_instagram == ""
      ) {
        console.log("Info must be filled out")
        return false;
      } 
    } else if(isCurrentStudentButtonSelected) {
        if(
          std_code == "" ||
          std_first_name_th == "" ||
          std_last_name_th == "" 
        ) {
            console.log("Info must be filled out")
          return false;
        } 
    } else if(isStaffButtonSelected) {
        if(
        std_first_name_th == "" ||
        std_last_name_th == "" 
      ) {
        console.log("Info must be filled out")
        return false;
      } 
    }
    console.log("okokokok")
    return true;
  };

  function validateFormCompletion() {
    if(isFreshmenButtonSelected){
      if (
        !std_code ||
        !std_first_name_th ||
        !std_last_name_th ||
        !std_faculty_name ||
        !std_religion ||
        !std_telephone ||
        !std_nickname ||
        !std_facebook ||
        !std_instagram
        // !std_food_type.length > 0 ||
        // !std_food_allergy.length > 0 ||
        // !std_drug_allergy.length > 0 ||
        // !std_underlying_disease.length > 0
      ) {
        // If any required field is empty, return false
        return false;
      }
    } else if(isCurrentStudentButtonSelected){
        if(
          !std_code ||
          !std_first_name_th ||
          !std_last_name_th
        ) {
          return false;
        }
    }

      // If all required fields are filled but no optional fields are filled, return true
      return true;
    }


  
  

  return (
    <Button
      variant="contained"
      sx={{
        fontFamily: "Athiti",
      }}
      onClick={async (e) => {
        if (formValidation() && ! await handleRegisteredStudentCode(std_code) && std_religion == "อิสลาม") {
          const uuid_student = handleStudentsCollection(
            parametersHandleStudentsCollection
          );

          handleIsamGroup(await uuid_student, [
            isPradabchorEventSelected,
            isFirstMeetEventSelected,
            isFriendshipEventSelected,
          ], isFriendshipEventSelected)

          console.log("Already submit Islam group.");
        }
        else if(formValidation() && ! await handleRegisteredStudentCode(std_code) ){
          const uuid_student = handleStudentsCollection(
          parametersHandleStudentsCollection
        );
        // handleClubsCollection();
        // handleEventsCollection();
        handleEventsRegistrationCollection(await uuid_student, [
          isPradabchorEventSelected,
          isFirstMeetEventSelected,
          isFriendshipEventSelected,
        ], isFriendshipEventSelected);
        
        console.log("Already submit.");}
        
      }}
      disabled={!validateFormCompletion() && (!isFreshmenButtonSelected || !isCurrentStudentButtonSelected)}
    >
      ลงทะเบียน
    </Button>
  );
};

export default SubmitButton;