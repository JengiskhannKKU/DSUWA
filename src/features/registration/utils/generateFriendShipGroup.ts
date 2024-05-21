import db from "@/shared/services/firebase/config";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import React from "react";

const generateFriendshipGroup = async () => {
  try {
    const friendshipGroupsDocCollection = collection(db, "friendship_groups");
    const selectorGroupDocRef = doc(db, "friendship_groups/A");
    const islamGroupDocRef = doc(db, "friendship_groups/Y");

    const islamGroup = (await getDoc(islamGroupDocRef)).data();
    const friendshipGroupsSnapshot = await getDocs(friendshipGroupsDocCollection);
    const selector = (await getDoc(selectorGroupDocRef)).data();

    if (selector && selector.group_selector && islamGroup) {
      console.log(`Current Group: ${selector.group_selector}`);

      for (let i = 0; i < friendshipGroupsSnapshot.docs.length; i++) {
        let groupDoc = friendshipGroupsSnapshot.docs[i];
        console.log(groupDoc.id, " => ", groupDoc.data());
        console.log("islam amount: ",islamGroup.amount);


        if (groupDoc.id === selector.group_selector && islamGroup.amount <= 100 && groupDoc.id == 'Y') {
            groupDoc = friendshipGroupsSnapshot.docs[i+1];
          const currentAmount = groupDoc.data().amount; 
          const updatedAmount = currentAmount + 1; 

          await updateDoc(selectorGroupDocRef, {
            group_selector: getNextGroupWithOutIslamGroup(groupDoc.id)
          });

          await updateDoc(doc(db, `friendship_groups/${groupDoc.id}`), {
            amount: updatedAmount
          })

          console.log("Updated group successfully");
          console.log("Current group selector: " + getNextGroupWithOutIslamGroup(groupDoc.id));

          return groupDoc.id

        } else if (groupDoc.id === selector.group_selector) {
            const currentAmount = groupDoc.data().amount; 
            const updatedAmount = currentAmount + 1; 

            await updateDoc(selectorGroupDocRef, {
                group_selector: getNextGroup(groupDoc.id)
            });

            await updateDoc(doc(db, `friendship_groups/${groupDoc.id}`), {
                amount: updatedAmount
            })

            console.log("Updated group successfully");
            console.log("Current group selector: " + getNextGroup(groupDoc.id));
            
            return groupDoc.id;
        }
      }
    } else {
      console.log("No current group data found.");
    }
  } catch (error) {
    console.error("Error fetching friendship groups:", error);
  }
};

export default generateFriendshipGroup;

const getNextGroupWithOutIslamGroup = (group: string) => {
  const GROUPS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'
  ];

  const currentIndex = GROUPS.indexOf(group);
  if (currentIndex === -1 || group === 'Z') {
    return 'A';
  }
  return GROUPS[currentIndex + 1];
};

const getNextGroup = (group: string) => {
    const GROUPS = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
  
    const currentIndex = GROUPS.indexOf(group);
    if (currentIndex === -1 || group === 'Z') {
      return 'A';
    }
    return GROUPS[currentIndex + 1];
  };