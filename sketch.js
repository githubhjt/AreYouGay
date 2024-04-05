function setup() {
  // 캔버스 생성을 방지
  noCanvas();

  // 'centered-content' 요소 생성 및 body에 추가
  let centeredContent = createDiv('').addClass('centered-content');
  
  // 'input-group' 요소 생성 및 'centered-content'에 추가
  let inputGroup = createDiv('').addClass('input-group').parent(centeredContent);

  // 입력 필드 생성 및 'input-group'에 추가
  let nameInput = createInput('').attribute('placeholder', 'First Name').parent(inputGroup);
  let surnameInput = createInput('').attribute('placeholder', 'Last Name').parent(inputGroup);
  let phoneNumberInput = createInput('').attribute('placeholder', 'Phone Number').parent(inputGroup);
  
  // 버튼 생성 및 'centered-content'에 추가, 클릭 이벤트 설정
  let submitBtn = createButton('Done').parent(centeredContent);
  submitBtn.mousePressed(() => {
    console.log("First Name: " + nameInput.value());
    console.log("Last Name: " + surnameInput.value());
    console.log("Phone Number: " + phoneNumberInput.value());
  });
}
