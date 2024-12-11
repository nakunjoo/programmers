function solution(friends, gifts) {
  var answer = 0;
  let names = [];
  for (let friend of friends) {
    const obj1 = {
      name: friend,
      send_friend: [],
      get_friend: [],
      get: 0,
      send: 0,
      value: 0,
    };
    for (let fri of friends) {
      if (friend !== fri) {
        const obj2 = {
          name: fri,
          gift: 0,
        };
        const obj3 = {
          name: fri,
          gift: 0,
        };
        obj1.send_friend.push(obj2);
        obj1.get_friend.push(obj3);
      }
    }
    names.push(obj1);
  }
  for (let gift of gifts) {
    const friend = gift.split(" ");
    for (let name of names) {
      if (name.name === friend[0]) {
        for (let send of name.send_friend) {
          if (send.name === friend[1]) {
            send.gift += 1;
          }
        }
        name.send += 1;
      }
      if (name.name === friend[1]) {
        for (let get of name.get_friend) {
          if (get.name === friend[0]) {
            get.gift += 1;
          }
        }
        name.get += 1;
      }
    }
  }
  for (const name of names) {
    for (const send of name.send_friend) {
      if (send.gift > 0) {
        for (const get of name.get_friend) {
          if (send.name === get.name) {
            if (send.gift > get.gift) {
              name.value += 1;
            } else if (send.gift === get.gift) {
              let name_value = name.send - name.get;
              let get_value = 0;
              for (const na of names) {
                if (get.name === na.name) {
                  get_value = na.send - na.get;
                }
              }
              if (name_value > get_value) {
                name.value += 1;
              }
            }
          }
        }
      } else {
        for (const get of name.get_friend) {
          if (send.name === get.name) {
            if (get.gift === 0) {
              let name_value = name.send - name.get;
              let get_value = 0;
              for (const na of names) {
                if (get.name === na.name) {
                  get_value = na.send - na.get;
                }
              }
              if (name_value > get_value) {
                name.value += 1;
              }
            }
          }
        }
      }
    }
    console.log(name);
    if (name.value > answer) {
      answer = name.value;
    }
  }
  return answer;
}
const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
console.log(solution(friends, gifts));
