import db from "@/shared/services/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const handleSelectEvents = async () => {
  const eventsCollectionRef = collection(db, "events");
  const eventsName: string[] = [];

  try {
    const querySnapshot = await getDocs(eventsCollectionRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().event_name);
      eventsName.push(doc.data().event_name);
    });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }

  return eventsName;
};

export default handleSelectEvents;
