// Assemble the explicitly authored Grade 5 subject sequences into weeks 9-36.
const ANNUAL_G5 = Array.from({ length: 28 }, (_, index) => {
  const subjects = [
    ANNUAL_G5_MATH[index],
    ANNUAL_G5_ELA[index],
    ANNUAL_G5_SCIENCE[index],
    ANNUAL_G5_SOCIAL[index]
  ];
  return {
    week: index + 9,
    title: `${subjects[0].concept} & ${subjects[3].concept} Week`,
    subjects
  };
});