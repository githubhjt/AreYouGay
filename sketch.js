function setup() {
  noCanvas(); // 캔버스 생성 방지

  // 중앙 정렬을 위한 컨테이너 생성
  let centeredContent = createDiv('').addClass('centered-content');

  // 입력 필드 그룹 생성
  let inputGroup1 = createDiv('').addClass('input-group');
  let inputGroup2 = createDiv('').addClass('input-group');
  let inputGroup3 = createDiv('').addClass('input-group'); // 추가된 부분

  // 이름 입력 필드 생성
  let nameInput = createInput('').attribute('placeholder', '이름');
  let surnameInput = createInput('').attribute('placeholder', '성');

  // 수정된 부분: 휴대폰 번호 입력 필드를 세 개로 분할하여 생성
  let phoneNumberInput1 = createInput('').attribute('maxlength', '3').attribute('placeholder', '000');
  let phoneNumberInput2 = createInput('').attribute('maxlength', '4').attribute('placeholder', '');
  let phoneNumberInput3 = createInput('').attribute('maxlength', '4').attribute('placeholder', '0000');

  // 입력 필드를 그룹에 추가
  nameInput.parent(inputGroup1);
  surnameInput.parent(inputGroup1);
  phoneNumberInput1.parent(inputGroup2);
  phoneNumberInput2.parent(inputGroup2);
  phoneNumberInput3.parent(inputGroup3); // 추가된 부분

  // 그룹을 centeredContent에 추가
  inputGroup1.parent(centeredContent);
  inputGroup2.parent(centeredContent);
  inputGroup3.parent(centeredContent); // 추가된 부분

  // 버튼 생성 및 이벤트 리스너 설정
  let submitBtn = createButton('완료');
  submitBtn.parent(centeredContent);
  submitBtn.mousePressed(() => {
    console.log("이름: " + nameInput.value());
    console.log("성: " + surnameInput.value());
    console.log("휴대폰 번호: " + phoneNumberInput1.value() + phoneNumberInput2.value() + phoneNumberInput3.value());
  });

  // 입력 필드 감시하여 다음 필드로 이동
  phoneNumberInput1.input(() => {
    if (phoneNumberInput1.value().length == 3) {
      phoneNumberInput2.elt.focus();
    }
  });
  phoneNumberInput2.input(() => {
    if (phoneNumberInput2.value().length == 4) {
      phoneNumberInput3.elt.focus();
    }
  });
}
