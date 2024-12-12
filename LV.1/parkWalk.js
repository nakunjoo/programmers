function solution(park, routes) {
  var answer = [];
  let x = park[0].length - 1;
  let y = park.length - 1;
  for (let i = 0; i < park.length; i++) {
    const indexof = park[i].indexOf("S");
    if (indexof > -1) {
      answer = [i, indexof];
    }
  }
  for (const route of routes) {
    const split = route.split(" ");
    const direction = split[0];
    const move = Number(split[1]);
    let success = true;
    let move_y = answer[0];
    let move_x = answer[1];
    if (direction === "E" || direction === "W") {
      for (let i = answer[1] + 1; i <= answer[1] + move; i++) {
        move_x += direction === "E" ? 1 : -1;
        if (move_x < 0 || move_x > x) {
          success = false;
        }
        if (park[answer[0]].charAt(move_x) === "X") {
          success = false;
        }
      }
    } else {
      for (let i = answer[0] + 1; i <= answer[0] + move; i++) {
        move_y += direction === "S" ? 1 : -1;
        if (move_y < 0 || move_y > y) {
          success = false;
        } else {
          if (park[move_y].charAt(answer[1]) === "X") {
            success = false;
          }
        }
      }
    }
    if (success) {
      answer = [move_y, move_x];
    }
  }
  return answer;
}
const park = ["OOSOOXO", "OOXXOOX", "OXOXOOO", "OXXOOXX", "OOXOOOO", "XXOOOOO"];
const routes = ["E 2", "S 3", "N 1", "N 4", "E 2", "W 3", "S 2", "E 1"];
console.log(solution(park, routes));
