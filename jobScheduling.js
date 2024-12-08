function JobScheduling(jobs, n) {
  jobs.sort((a, b) => (b.profit - a.profit));
  let maxDay = 0;
  jobs.forEach(x => {
    maxDay = Math.max(maxDay, x.dead);
  });
  let completed = Array(maxDay).fill(-1);
  let profit = 0, len = 0;
  for (let job of jobs) {
    let j = job.dead - 1;
    while (j >= 0 && completed[j] != -1) {
      j--;
    }
    if (completed[j] == -1) {
      profit += job.profit;
      len++;
      completed[j] = job.id;
    }
  }
  return [len, profit];
}
const jobs = [
  {
    id: 1,
    dead: 4,
    profit: 20
  },
  {
    id: 2,
    dead: 1,
    profit: 1
  },
  {
    id: 3,
    dead: 1,
    profit: 40
  },
  {
    id: 4,
    dead: 1,
    profit: 30
  },
];
console.log(JobScheduling(jobs, 4));