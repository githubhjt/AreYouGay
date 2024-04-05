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

  // 학과 선택 드롭다운 메뉴 생성
  let collegeDropdown = createSelect().addClass('college-dropdown');
  collegeDropdown.option('학부 선택');
  for (let college of ['공연학부', '영상학부', '음악학부', '문예학부', '디자인학부', '커뮤티케이션학부', '예술창작기초학부']) {
    collegeDropdown.option(college);
  }

  // 학부 선택 드롭다운 메뉴 생성
  let departmentDropdown = createSelect().addClass('department-dropdown');
  departmentDropdown.option('학과 선택');
  for (let department of ['연극전공', '연기전공', '무용전공', '영화전공', '방송영상전공','디지털아트전공','실용음악전공','한국음악전공','문예창작전공','극작전공','사진전공','시각디자인전공','공간디자인전공','광고창작전공','예술경영전공','예술창작기초학부']) {
    departmentDropdown.option(department);
  }

  // 그룹을 centeredContent에 추가
  nameInputGroup.parent(centeredContent);
  phoneInputGroup.parent(centeredContent);
  collegeDropdown.parent(centeredContent);
  departmentDropdown.parent(centeredContent);

  // 버튼 생성 및 이벤트 리스너 설정
  let submitBtn = createButton('완료');
  submitBtn.parent(centeredContent);
  submitBtn.mousePressed(() => {
    console.log("이름(풀네임): " + surnameInput.value() + nameInput.value());
    console.log("휴대폰 번호: " + phoneNumberInput1.value() + "-" + phoneNumberInput2.value() + "-" + phoneNumberInput3.value());
    console.log("학부: " + collegeDropdown.value());
    console.log("학과: " + departmentDropdown.value());
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
