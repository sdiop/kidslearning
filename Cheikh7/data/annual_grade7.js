// Assemble the explicitly authored Grade 7 subject sequences into weeks 9-36.
const ANNUAL_G7 = Array.from({ length: 28 }, (_, index) => {
  const subjects = [
    ANNUAL_G7_MATH[index],
    ANNUAL_G7_ELA[index],
    ANNUAL_G7_SCIENCE[index],
    ANNUAL_G7_SOCIAL[index]
  ];
  return {
    week: index + 9,
    title: `${subjects[0].concept} & ${subjects[3].concept} Week`,
    subjects
  };
});