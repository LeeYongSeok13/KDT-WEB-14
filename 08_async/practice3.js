// 실습3. Promise로 배경색 변경하기
function colorChange(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve(colorChange);
    }, 1000);
  });
}

async function backgroundChange() {
  await colorChange("red");
  await colorChange("orange");
  await colorChange("yellow");
  await colorChange("green");
  await colorChange("blue");
}

backgroundChange();
