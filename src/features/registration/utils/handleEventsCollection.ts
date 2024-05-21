import React from 'react'
import db from "@/shared/services/firebase/config";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";


export const handleEventsCollection = async() => {
    const eventsColRef = collection(db, "events");

    await addDoc(eventsColRef, {
      uuid_club: "student_union",
      event_name: "First Meet",
      event_year: "2024",
  
      event_open_register: new Date("June 1, 2024 08:00:00"),
      event_close_register: new Date("June 10, 2024 23:59:59"),
  
      event_location: "หอประชุมกีฬากลาง",
      event_start_date: new Date("June 11, 2024 08:00:00"),
      event_end_date: new Date("June 11, 2024 16:00:00"),
      event_dress: "ชุดสุภาพ",
    });
    
    await addDoc(eventsColRef, {
      uuid_club: "student_union",
      event_name: "Friendship Group",
      event_year: "2024",
  
      event_open_register: new Date("June 1, 2024 08:00:00"),
      event_close_register: new Date("June 11, 2024 23:59:59"),
  
      event_location: "หอประชุมกีฬากลาง",
      event_start_date: new Date("June 12, 2024 08:00:00"),
      event_end_date: new Date("June 12, 2024 16:00:00"),
      event_dress: "ชุดสุภาพ",
    });

    await addDoc(eventsColRef, {
      uuid_club : "student_union",
      event_name : "Pradabchor",
      จัดโดย : "student union",
      event_year : "2024",

      event_open_register: new Date("June 1, 2024 08:00:00"),
      event_close_register: new Date("June 10, 2024 23:59:59"),

      event_location: "หอประชุมกีฬากลาง",
      event_start_date: new Date("June 11, 2024 08:00:00"),
      event_end_date: new Date("June 11, 2024 16:00:00"),
      event_dress: "ชุดสุภาพ"
    });
};

export default handleEventsCollection;