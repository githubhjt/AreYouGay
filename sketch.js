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

  // 생년월일 입력 드롭다운 생성
  let dobInputGroup = createDiv('').addClass('input-group');

  let yearDropdown = createSelect().addClass('dob-dropdown');
  yearDropdown.option('년도 선택');
  for (let year = 2024; year >= 1950; year--) { // 내림차순으로 변경
    yearDropdown.option(year);
  }

  let monthDropdown = createSelect().addClass('dob-dropdown');
  monthDropdown.option('월 선택');
  for (let month = 1; month <= 12; month++) {
    monthDropdown.option(month < 10 ? '0' + month : month); // 한 자리수일 때 앞에 0 추가
  }

  let dayDropdown = createSelect().addClass('dob-dropdown');
  dayDropdown.option('일 선택');
  for (let day = 1; day <= 31; day++) {
    dayDropdown.option(day);
  }
  yearDropdown.parent(dobInputGroup);
  monthDropdown.parent(dobInputGroup);
  dayDropdown.parent(dobInputGroup);

  // 전화번호 입력 필드 그룹 생성
  let phoneInputGroup = createDiv('').addClass('input-group');
  let phoneNumberInput1 = createInput('').attribute('maxlength', '3').attribute('placeholder', '010').addClass('phone-input');
  let phoneNumberInput2 = createInput('').attribute('maxlength', '4').attribute('placeholder', 'XXXX').addClass('phone-input');
  let phoneNumberInput3 = createInput('').attribute('maxlength', '4').attribute('placeholder', 'XXXX').addClass('phone-input');

  // 전화번호 입력 시 다음 칸으로 포커스 이동하는 이벤트 리스너 추가
  phoneNumberInput1.input(() => {
    if (phoneNumberInput1.value().length === 3) {
      phoneNumberInput2.elt.focus(); // phoneNumberInput2에 포커스를 설정합니다.
    }
  });

  phoneNumberInput2.input(() => {
    if (phoneNumberInput2.value().length === 4) {
      phoneNumberInput3.elt.focus(); // phoneNumberInput3에 포커스를 설정합니다.
    }
  });

  phoneNumberInput3.input(() => {
    if (phoneNumberInput3.value().length === 4) {
      // 포커스 이동이 필요 없으므로 아무 작업도 하지 않습니다.
    }
  });

  phoneNumberInput1.parent(phoneInputGroup);
  createSpan('-').parent(phoneInputGroup).style('margin', '0 10px'); // "-" 추가 및 스타일링
  phoneNumberInput2.parent(phoneInputGroup);
  createSpan('-').parent(phoneInputGroup).style('margin', '0 10px'); // "-" 추가 및 스타일링
  phoneNumberInput3.parent(phoneInputGroup);

  // 학부 선택 드롭다운 메뉴 생성
  let collegeDropdown = createSelect().addClass('college-dropdown');
  collegeDropdown.option('학부 선택');
  for (let college of ['공연학부', '영상학부', '음악학부', '문예학부', '디자인학부', '커뮤티케이션학부', '예술창작기초학부']) {
    collegeDropdown.option(college);
  }

  // 전공 선택 드롭다운 메뉴 생성 (비활성화)
  let departmentDropdown = createSelect().addClass('department-dropdown');
  departmentDropdown.option('전공 선택');
  departmentDropdown.attribute('disabled', ''); // 학부가 선택되지 않은 경우 비활성화

  // 그룹을 centeredContent에 추가
  nameInputGroup.parent(centeredContent);
  dobInputGroup.parent(centeredContent);
  phoneInputGroup.parent(centeredContent);

  // 학부 선택 이벤트 리스너 설정
  collegeDropdown.changed(() => {
    let selectedCollege = collegeDropdown.value(); // 선택된 학부

    // 선택된 학부에 따라 해당하는 전공 옵션을 설정
    switch (selectedCollege) {
      case '공연학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['연극', '연기', '무용']) {
          departmentDropdown.option(department);
        }
        break;
      case '영상학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['영화', '방송영상', '디지털아트']) {
          departmentDropdown.option(department);
        }
        break;
      case '음악학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['실용음악', '한국음악']) {
          departmentDropdown.option(department);
        }
        break;
      case '문예학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['문예창작', '극작']) {
          departmentDropdown.option(department);
        }
        break;
      case '디자인학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['사진', '시각디자인', '공간디자인']) {
          departmentDropdown.option(department);
        }
        break;
      case '커뮤티케이션학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        for (let department of ['광고창작', '예술경영']) {
          departmentDropdown.option(department);
        }
        break;
      case '예술창작기초학부':
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('예술창작기초학부');
        break;
      default:
        departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
        departmentDropdown = createSelect().addClass('department-dropdown');
        departmentDropdown.option('전공 선택');
        departmentDropdown.attribute('disabled', ''); // 학부가 선택되지 않은 경우 비활성화
        break;
    }

    // 전공 선택 드롭다운 메뉴를 학부 선택 드롭다운 메뉴 오른쪽에 추가
    departmentDropdown.parent(collegeDropdown.parent());
  });

  // 그룹을 centeredContent에 추가
  collegeDropdown.parent(centeredContent);

  // 학부 및 전공 선택 그룹 생성 및 추가
  let selectGroup = createDiv('').addClass('select-group');
  selectGroup.parent(centeredContent);
  collegeDropdown.parent(selectGroup);
  departmentDropdown.parent(selectGroup);

  // 버튼 생성 및 이벤트 리스너 설정
  let submitBtn = createButton('완료');
  submitBtn.mousePressed(() => {
    console.log("이름(풀네임): " + surnameInput.value() + nameInput.value());
    console.log("생년월일: " + yearDropdown.value() + "-" + (monthDropdown.value().length === 1 ? '0' + monthDropdown.value() : monthDropdown.value()) + "-" + dayDropdown.value());
    console.log("휴대폰 번호: " + phoneNumberInput1.value() + "-" + phoneNumberInput2.value() + "-" + phoneNumberInput3.value());
    console.log("학부: " + collegeDropdown.value());
    console.log("전공: " + departmentDropdown.value());
  });

  // 완료 버튼을 모든 항목 맨 아래에 추가
  submitBtn.parent(centeredContent);
}
