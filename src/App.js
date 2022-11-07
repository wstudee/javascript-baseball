class App {
  computer = [];  // 컴퓨터의 수

  play() {
    // 컴퓨터의 수 선택
    this.computer = computersNumbers();




  }

}
const MissionUtils = require("@woowacourse/mission-utils");

// 컴퓨터의 수 선택
function computersNumbers(){
  var computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

const app = new App();
app.play();

//module.exports = App;

// -----------------------------------------------------------------
// Console
// .readLine(query, callback)
// 주어진 질문을 화면에 출력하고, 사용자의 답변 입력을 기다린 다음
// 입력된 답변을 인수로 전달하는 콜백함수 호출

// .print(message)
// 주어진 문자열을 콘솔에 출력 

// .close()
// Console 에서 입출력 제어하기 위해 사용하는 인스턴스를 닫음

// Random
// .pickNumberInRange(startInclusive, endInclusive)
// 지정한 숫자 범위를 포함하여 숫자 반환 

// .pickNumberInList(array)
// 목록에 있는 숫자 중 하나를 반환 

// .pickUniqueNumbersInRange(startInclusive, endInclusive, count)
// 숫자 범위 내에서 지정된 갯수만큼 겹치치 않는 숫자 반환

// .shuffle(array)
// 무작위로 섞인 새 목록을 반환
