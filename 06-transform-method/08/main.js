const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 },
];

sumWeight = scores.reduce((sum, el) => sum + el.weight, 0);

scores.reduce((sum, el) => {
  sum = sum + (el.score * el.weight) / sumWeight;
  return sum;
}, 0);
