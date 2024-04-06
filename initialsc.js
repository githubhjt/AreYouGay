let initialScreen; // 초기 화면을 위한 변수
let mainSketch; // 메인 스케치를 위한 변수

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 초기 화면 생성
  initialScreen = new InitialScreen();
  
  // 이벤트 리스너 추가
  initialScreen.touchStarted(); // 터치 이벤트를 시작합니다.
}

function draw() {
  background(220);
  
  // 초기 화면 표시
  initialScreen.display();
}

// 초기 화면 클래스
class InitialScreen {
  constructor() {
    this.message = "화면을 터치하여 시작하세요."; // 화면 터치 메시지
  }
  
  // 화면 표시
  display() {
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.message, width / 2, height / 2);
  }
  
  // 터치 이벤트 처리
  touchStarted() {
    let self = this; // 이벤트 핸들러 내에서 'this'를 사용하기 위해
  
    // 터치 이벤트 리스너 추가
    this.touchEventHandler = function() {
      // 스케치 전환
      mainSketch = new p5(sketch, "sketch-container");
      
      // 초기 화면에서 이벤트 리스너 제거
      canvas.removeEventListener('touchstart', self.touchEventHandler);
    };
    
    // 터치 이벤트 리스너 추가
    canvas.addEventListener('touchstart', this.touchEventHandler);
  }
}

// 메인 스케치 코드
let sketch = function(p) {
  p.setup = function() {
    let sketchContainer = document.getElementById("sketch-container");
    let canvas = p.createCanvas(sketchContainer.offsetWidth, sketchContainer.offsetHeight);
    canvas.parent(sketchContainer);
    
    // 메인 스케치의 setup 함수 호출
    setup();
  };

  p.draw = function() {
    // 메인 스케치의 draw 함수 호출
    draw();
  };
};
