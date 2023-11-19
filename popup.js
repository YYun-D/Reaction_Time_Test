var timeoutId;
var clickTime;

document.addEventListener('mousedown', () => {

  var title = document.getElementById('title');
  var description = document.getElementById('description');

  if (description.innerText) {
    title.style.fontSize = '60px';
    title.innerText = 'Wait for green';
    description.innerText = '';
    document.body.style.backgroundColor = '#ce2636';

    // 3초에서 6초 사이의 랜덤한 시간 설정 (단위: 밀리초)
    var randomTime = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;

    // 설정된 랜덤한 시간 후에 함수 실행
    timeoutId = setTimeout(() => {
      // 지정된 시간이 지나면 배경색을 초록색으로 변경
      document.body.style.backgroundColor = '#4bdb6a';
      title.style.fontSize = '80px';
      title.innerText = 'Click!';
      clickTime = new Date();
    }, randomTime);
  }

  else if (title.innerText === 'Wait for green'){
    // clearTimeout으로 기존의 setTimeout을 취소
    clearTimeout(timeoutId);
    // 클릭이 너무 빨리 발생했을 때
    title.innerText = 'Too soon';
    description.innerText = 'Click to try again';
    
    // 원래의 예정된 시간보다 빨리 클릭한 경우 배경색을 바로 파란색으로 변경
    document.body.style.backgroundColor = '#2b87d1';
  }

  else if (title.innerText === 'Click!') {
    title.innerText = `${new Date() - clickTime}ms`;
    description.innerText = 'Click to try again';
  }
})