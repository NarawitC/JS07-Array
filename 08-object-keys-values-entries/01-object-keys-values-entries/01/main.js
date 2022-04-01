let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

Object.values(salaries).reduce((sum, el) => (sum += el));
