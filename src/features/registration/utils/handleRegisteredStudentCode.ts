import db from '@/shared/services/firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react'


const handleRegisteredStudentCode = async (studentId: string): Promise<boolean> => {
    try {
     
      const studentsCollection = collection(db, "students");
      
      const q = query(studentsCollection, where("std_code", "==", studentId));
  
      
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot.docs);
      
      
      if (!querySnapshot.empty) {
        console.log("Student ID already registered.");
        return true; 
      } else {
        console.log("Student ID is available.");
        return false; 
      }
    } catch (error) {
      console.error("Error checking student ID:", error);
      throw error;
    }
  }

export default handleRegisteredStudentCode;
