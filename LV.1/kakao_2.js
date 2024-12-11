function solution(id_list, reports, k) {
  var answer = [];
  const ids = {};
  const report_list = [];
  for (let id of id_list) {
    const obj1 = {
      id: id,
      report_id: [],
      mail: 0,
      reported: 0,
    };
    for (let report of reports) {
      const names = report.split(" ");
      if (id === names[0]) {
        if (!obj1.report_id.includes(names[1])) {
          obj1.report_id.push(names[1]);
          report_list.push(names[1]);
        }
      }
    }
    ids[id] = obj1;
  }
  for (const id of report_list) {
    ids[id].reported += 1;
  }

  console.log("ids:", ids);
  console.log("report_list:", report_list);
  return answer;
}
const id_list = ["muzi", "frodo", "apeach", "neo"];
const reports = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
console.log(solution(id_list, reports, k));
