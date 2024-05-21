import React from 'react'
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
  import app from 'next/app';
import db from '@/shared/services/firebase/config';
import getNameRoleSelector from './getNameRoleSelector';

interface StudentDetails {
  std_code: string;
  std_first_name_th: string;
  std_last_name_th: string;
  std_nickname: string;
  std_faculty_name: string;
  std_religion: string;
  std_food_type: string;
  std_food_allergy: string[];
  std_drug_allergy: string[];
  std_underlying_disease: string[];
  std_telephone: string;
  std_friend_telephone: string;
  std_facebook: string;
  std_instagram: string;
  isFreshmenButtonSelected : boolean,
  isCurrentStudentButtonSelected : boolean,
  isStaffButtonSelected : boolean,
}

const handleStudentsCollection = async (
  {
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
  }: StudentDetails
) => {
      const studentsColRef = collection(db, "students");
      const uuid_student = await addDoc(studentsColRef, {
        std_registration_timestamp: serverTimestamp(),
        std_code: std_code,
        std_prefix_name: null,
        std_firstname_th: std_first_name_th,
        std_lastname_th: std_last_name_th,
        std_nickname: std_nickname,
        std_prefix: null,
        std_first_name: null,
        std_last_name: null,
        std_faculty_name: std_faculty_name,
        std_religion: std_religion,
        std_food_type: std_food_type,
        std_food_allergy: std_food_allergy,
        std_drug_allergy: std_drug_allergy,
        std_underlying_disease: std_underlying_disease,
        std_telephone: std_telephone,
        std_friend_telephone: std_friend_telephone,
        std_facebook: std_facebook,
        std_instagram: std_instagram,
        std_role: getNameRoleSelector(
          isFreshmenButtonSelected,
          isCurrentStudentButtonSelected,
          isStaffButtonSelected
        ),
      });
      

      console.log("student_uuid : " + uuid_student.id);

      return uuid_student.id
      
};      
        

export default handleStudentsCollection;