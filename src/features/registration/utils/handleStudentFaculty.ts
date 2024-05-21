const faculties: { code: string; name: string }[] = [
  { code: "02", name: "คณะวิทยาศาสตร์" },
  { code: "03", name: "คณะเกษตรศาสตร์" },
  { code: "04", name: "คณะวิศวกรรมศาสตร์" },
  { code: "05", name: "คณะศึกษาศาสตร์" },
  { code: "06", name: "คณะพยาบาลศาสตร์" },
  { code: "07", name: "คณะแพทยศาสตร์" },
  { code: "08", name: "คณะมนุษยศาสตร์และสังคมศาสตร์" },
  { code: "09", name: "คณะเทคนิคการแพทย์" },
  { code: "10", name: "บัณฑิตวิทยาลัย" },
  { code: "11", name: "คณะสาธารณสุขศาสตร์" },
  { code: "13", name: "คณะทันตแพทยศาสตร์" },
  { code: "15", name: "คณะเภสัชศาสตร์" },
  { code: "16", name: "คณะเทคโนโลยี" },
  { code: "18", name: "คณะสัตวแพทยศาสตร์" },
  { code: "20", name: "คณะสถาปัตยกรรมศาสตร์" },
  { code: "21", name: "คณะบริหารธุรกิจและการบัญชี" },
  { code: "22", name: "คณะศิลปกรรมศาสตร์" },
  { code: "23", name: "คณะสหวิทยาการ" },
  { code: "27", name: "คณะนิติศาสตร์" },
  { code: "28", name: "วิทยาลัยการปกครองท้องถิ่น" },
  { code: "29", name: "วิทยาลัยนานาชาติ" },
  { code: "32", name: "คณะเศรษฐศาสตร์" },
  { code: "38", name: "วิทยาลัยการคอมพิวเตอร์" },
  { code: "74", name: "วิทยาลัยบัณฑิตศึกษาการจัดการ" },
];

const handleStudentFaculty = (student_id: string): string => {
  console.log(student_id.substring(3, 5));
  const facultyCode = student_id.substring(3, 5);

  const faculty = faculties.find((faculty) => faculty.code === facultyCode);

  if (faculty) {
    return facultyCode;
  } else {
    return "";
  }
};

export default handleStudentFaculty;