function solution(id_list, reports, k) {
  var answer = [];
  const ids = {};
  const report_list = [];
  const suspended_list = [];
  for (let id of id_list) {
    const obj1 = {
      id: id,
      report_id: [],
      mail: 0,
      reported: 0,
    };
    ids[id] = obj1;
  }
  for (let report of reports) {
    const names = report.split(" ");
    if (!ids[names[0]].report_id.includes(names[1])) {
      ids[names[0]].report_id.push(names[1]);
      report_list.push(names[1]);
    }
  }
  for (const id of report_list) {
    ids[id].reported += 1;
    if (ids[id].reported >= k) {
      if (!suspended_list.includes(id)) {
        suspended_list.push(id);
      }
    }
  }
  for (const id of Object.values(ids)) {
    for (const suspended of suspended_list) {
      if (id.report_id.includes(suspended)) {
        id.mail += 1;
      }
    }
    answer.push(id.mail);
  }

  return answer;
}
const id_list = ["muzi", "frodo", "apeach", "neo", "con", "ryan"];
const reports = [
  "muzi frodo",
  "apeach frodo",
  "neo apeach",
  "neo muzi",
  "apeach muzi",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
  "muzi frodo",
  "muzi frodo",
  "ryan con",
  "ryan con",
  "ryan con",
  "muzi ryan",
  "frodo ryan",
  "con neo",
  "ryan apeach",
];
const k = 2;
console.log(solution(id_list, reports, k));
