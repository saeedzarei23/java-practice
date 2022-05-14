// Ex:
// 1: Khone avale Tamame Araye Haye xArray0 Ro Chap Kone.
// 2: 2 Arraye Level3 ro mohtavasho Chap Kon
// Special: hameye mohtavahaye tamame Arayeharo beriz to yek araye be esme specialArray

let xArray0 = [1, 5, [10, 2, "Amir", 4, 5], [100, 3, "Ali"]];

// teamrin shomare 2
function tamrin2(level2) {
  for (let i = 0; i < level2.length; i++) {
    for (let j = 0; j < level2[i].length; j++) {
      console.log(level2[i][j]);
    }
  }
}
// tamrin2(xArray0);

// tamrin shomare 3
var specialArray = function (arr) {
  if (typeof arr == "object") {
    for (let i = 0; i < arr.length; i++) {
      specialArray(arr[i]);
    }
  } else console.log(arr);
};
// specialArray(xArray0)
