import React from "react";

const getNameRoleSelector = (
  isFreshmenButtonSelected: boolean,
  isCurrentStudentButtonSelected: boolean,
  isStaffButtonSelected: boolean
) => {
  const roles = [
    { name: "freshmen", selected: isFreshmenButtonSelected },
    { name: "currentStudent", selected: isCurrentStudentButtonSelected },
    { name: "staff", selected: isStaffButtonSelected },
  ];
  let result;

  roles.forEach((role) => {
    if (role.selected) {
      result = role.name;
    }
  });
  console.log("role: " + result);
  return result
};

export default getNameRoleSelector;
