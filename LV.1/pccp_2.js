function conversion(times) {
  const time = times.split(":");
  function num(t) {
    if (t.charAt(0) === "0") {
      t = t.slice(1, 2);
    }
    return Number(t);
  }
  const mm = num(time[0]);
  const ss = num(time[1]);

  return mm * 60 + ss;
}
function opCheck(op_start, op_end, val) {
  if (val >= op_start && val < op_end) {
    return op_end;
  }
  return val;
}
function inversion(times) {
  let mm = Math.floor(times / 60);
  let ss = times % 60;
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  return `${mm}:${ss}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  var answer = "";
  const video_len_c = conversion(video_len);
  const pos_c = conversion(pos);
  const op_start_c = conversion(op_start);
  const op_end_c = conversion(op_end);
  let value = opCheck(op_start_c, op_end_c, pos_c);

  for (const command of commands) {
    if (command === "next") {
      value += 10;
      if (value > video_len_c) {
        value = video_len_c;
      }
    } else {
      value -= 10;
      if (value < 0) {
        value = 0;
      }
    }
    value = opCheck(op_start_c, op_end_c, value);
  }
  answer = inversion(value);
  return answer;
}
const video_len = "07:22";
const pos = "04:05";
const op_start = "00:15";
const op_end = "04:07";
const commands = ["next"];
console.log(solution(video_len, pos, op_start, op_end, commands));
