function setup() {
  // 캔버스 생성을 방지
  noCanvas();

  // 입력 필드 생성
  let nameInput = createInput('').attribute('placeholder', 'First Name');
  let surnameInput = createInput('').attribute('placeholder', 'Last Name');
  let phoneNumberInput = createInput('').attribute('placeholder', 'Phone Number');
  
  // 버튼 생성 및 클릭 이벤트 설정
  let submitBtn = createButton('Done');
  submitBtn.mousePressed(() => {
    console.log("First Name: " + nameInput.value());
    console.log("Last Name: " + surnameInput.value());
    console.log("Phone Number: " + phoneNumberInput.value());
  });

  // 스타일링을 위한 클래스 추가 (옵션)
  nameInput.parent('input-group');
  surnameInput.parent('input-group');
  phoneNumberInput.parent('input-group');
  submitBtn.parent('centered-content');
}

