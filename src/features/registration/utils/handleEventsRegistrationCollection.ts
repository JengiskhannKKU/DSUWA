import {
  collection,
  addDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import handleSelectEvents from "./handleSelectEvents";
import db from "@/shared/services/firebase/config";
import { v4 as uuidv4 } from "uuid";
import generateFriendShipGroup from "./generateFriendShipGroup";

const handleEventsRegistrationCollection = async (
  stdID: string,
  isEventSelected: boolean[],
  isFriendshipEventSelected: boolean
) => {
  const eventsName = await handleSelectEvents();
  const eventsColRef = collection(db, "events");
  const eventsRegisterColRef = collection(db, "event_registrations");

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

          if (isFriendshipEventSelected && eventName == "Friendship Group") {
            // Await the result of generateFriendShipGroup() to get the friendship group
            const friendshipGroup = await generateFriendShipGroup();
            await addDoc(eventsRegisterColRef, {
              uuid_event: eventID,
              uuid_student: stdID,
              timestamp: serverTimestamp(),
              code: uuidv4().split("-")[0],
              code_isUsed: false,
              code_isUsed_timestamp: null,
              code_point_isUsed: null,
              code_point_isUsed_timestamp: null,
              friendship_group: friendshipGroup,
              code_point_isDisable: null,
            });

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
};

export default handleEventsRegistrationCollection;
