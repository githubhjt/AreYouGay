function setup() {
  noCanvas(); // 캔버스 생성 방지

  // 중앙 정렬을 위한 컨테이너 생성
  let centeredContent = createDiv('').addClass('centered-content');

  // 입력 필드 그룹 생성
  let inputGroup1 = createDiv('').addClass('input-group');
  let inputGroup2 = createDiv('').addClass('input-group');

  // 이름 입력 필드 생성
  let nameInput = createInput('').attribute('placeholder', 'First Name');
  let surnameInput = createInput('').attribute('placeholder', 'Last Name');

  // 전화번호 입력 필드 생성
  let phoneNumberInput = createInput('').attribute('placeholder', 'Phone Number');

  // 입력 필드를 그룹에 추가
  nameInput.parent(inputGroup1);
  surnameInput.parent(inputGroup1);
  phoneNumberInput.parent(inputGroup2);

  // 그룹을 centeredContent에 추가
  inputGroup1.parent(centeredContent);
  inputGroup2.parent(centeredContent);

  // 버튼 생성 및 이벤트 리스너 설정
  let submitBtn = createButton('Done');
  submitBtn.parent(centeredContent);
  submitBtn.mousePressed(() => {
    console.log("First Name: " + nameInput.value());
    console.log("Last Name: " + surnameInput.value());
    console.log("Phone Number: " + phoneNumberInput.value());
  });
}
