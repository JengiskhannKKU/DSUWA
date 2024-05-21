import React from "react";
import handleSelectEvents from "./handleSelectEvents";
import db from "@/shared/services/firebase/config";
import { collection } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { query, where, getDocs, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore";


const handleIsamGroup = async (
  stdID: string,
  isEventSelected: boolean[],
  isFriendshipEventSelected: boolean
) => {
  try {
    const eventsName = await handleSelectEvents();
    const eventsColRef = collection(db, "events");
    const eventsRegisterColRef = collection(db, "event_registrations");

    const islamGroupDocRef = doc(db, "friendship_groups/Y");
    const islamGroup = (await getDoc(islamGroupDocRef)).data();

    for (let i = 0; i < eventsName.length; i++) {
        const eventName = eventsName[i];
        const isSelected = isEventSelected[i];
        console.log(eventName, isEventSelected[i]);
    
        if (isSelected) {
          const q = query(eventsColRef, where("event_name", "==", eventName));
          const querySnapshot = await getDocs(q);
    
          querySnapshot.forEach(async (doc) => {
            const eventID = doc.id;
    
            try {
    
              if (isFriendshipEventSelected && islamGroup && eventName == "Friendship Group") {
                await addDoc(eventsRegisterColRef, {
                  uuid_event: eventID,
                  uuid_student: stdID,
                  timestamp: serverTimestamp(),
                  code: uuidv4().split("-")[0],
                  code_isUsed: false,
                  code_isUsed_timestamp: null,
                  code_point_isUsed: null,
                  code_point_isUsed_timestamp: null,
                  friendship_group: 'Y',
                  code_point_isDisable: null,
                });

                const currentAmount = islamGroup.amount;
                const updatedAmount = currentAmount + 1;

                await updateDoc(islamGroupDocRef, {
                    amount: updatedAmount
                  })
                
                isFriendshipEventSelected = false;
                return;
              }
    
              await addDoc(eventsRegisterColRef, {
                uuid_event: eventID,
                uuid_student: stdID,
                timestamp: serverTimestamp(),
                code: uuidv4().split("-")[0],
                code_isUsed: false,
                code_isUsed_timestamp: null,
                code_point_isUsed: null,
                code_point_isUsed_timestamp: null,
                friendship_group: null,
                code_point_isDisable: null,
              });
            } catch (error) {
              console.error("Error adding document:", error);
            }
          });
        }
      }
} catch (error) {
    console.error("Error fetching Isam groups:", error);
  }
};

export default handleIsamGroup;
