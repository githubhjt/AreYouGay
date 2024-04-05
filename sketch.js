function setup() {
  noCanvas(); // 캔버스 생성 방지

  // 중앙 정렬을 위한 컨테이너 생성
  let centeredContent = createDiv('').addClass('centered-content');

  // 이름 입력 필드 그룹 생성
  let nameInputGroup = createDiv('').addClass('input-group');
  let nameInput = createInput('').attribute('placeholder', '이름');
  let surnameInput = createInput('').attribute('placeholder', '성');
  nameInput.parent(nameInputGroup);
  surnameInput.parent(nameInputGroup);

  // 전화번호 입력 필드 그룹 생성
  let phoneInputGroup = createDiv('').addClass('input-group');
  let phoneNumberInput1 = createInput('').attribute('maxlength', '3').attribute('placeholder', '010').addClass('phone-input');
  let phoneNumberInput2 = createInput('').attribute('maxlength', '4').attribute('placeholder', 'XXXX').addClass('phone-input');
  let phoneNumberInput3 = createInput('').attribute('maxlength', '4').attribute('placeholder', 'XXXX').addClass('phone-input');
  phoneNumberInput1.parent(phoneInputGroup);
  createSpan('-').parent(phoneInputGroup).style('margin', '0 10px'); // "-" 추가 및 스타일링
  phoneNumberInput2.parent(phoneInputGroup);
  createSpan('-').parent(phoneInputGroup).style('margin', '0 10px'); // "-" 추가 및 스타일링
  phoneNumberInput3.parent(phoneInputGroup);

  // 그룹을 centeredContent에 추가
  nameInputGroup.parent(centeredContent);
  phoneInputGroup.parent(centeredContent);

  // 버튼 생성 및 이벤트 리스너 설정
  let submitBtn = createButton('완료');
  submitBtn.parent(centeredContent);
  submitBtn.mousePressed(() => {
    console.log("이름: " + nameInput.value() + " " + surnameInput.value());
    console.log("휴대폰 번호: " + phoneNumberInput1.value() + "-" + phoneNumberInput2.value() + "-" + phoneNumberInput3.value());
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
