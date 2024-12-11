function solution(bandage, health, attacks) {
  var answer = 0;
  let continuity = 0;
  let hp = health;
  const last_time = attacks[attacks.length - 1][0];

  const calculate = () => {
    for (let i = 0; i <= last_time; i++) {
      continuity++;
      let atk = false;
      let recovery = bandage[1];
      for (const attack of attacks) {
        if (i === attack[0]) {
          hp = hp - attack[1];
          continuity = 0;
          atk = true;
        }
      }
      if (hp <= 0) {
        hp = -1;
        return hp;
      }
      if (atk === false) {
        if (bandage[0] === continuity) {
          recovery += bandage[2];
          continuity = 0;
        }
        if (hp < health) {
          hp += recovery;
          if (hp > health) {
            hp = health;
          }
        }
      }
    }
    return hp;
  };
  answer = calculate();
  return answer;
}
const bandage = [5, 1, 5];
const health = 30;
const attacks = [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
];
console.log(solution(bandage, health, attacks));
