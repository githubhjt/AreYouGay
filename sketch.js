function setup() {
  noCanvas(); // 캔버스 생성 방지

  // 중앙 정렬을 위한 컨테이너 생성
  let centeredContent = createDiv('').addClass('centered-content');

  // 그룹 1: 이름 입력 필드
  let nameInputGroup = createDiv('').addClass('input-group');
  let nameInput = createInput('').attribute('placeholder', '이름 (First Name)').addClass('required-field').addClass('input-field');
  nameInput.parent(nameInputGroup);
  nameInputGroup.parent(centeredContent);

  // 그룹 2: 성 입력 필드
  let surnameInputGroup = createDiv('').addClass('input-group');
  let surnameInput = createInput('').attribute('placeholder', '성 (Last Name)').addClass('required-field').addClass('input-field');
  surnameInput.parent(surnameInputGroup);
  surnameInputGroup.parent(centeredContent);

  // 그룹 3: 성별 선택 드롭다운
  let genderDropdown = createSelect().addClass('gender-dropdown').addClass('required-field').addClass('input-field');
  genderDropdown.option('성별 (Gender)');
  genderDropdown.option('남성 (Male)');
  genderDropdown.option('여성 (Female)');
  genderDropdown.parent(centeredContent);

  // 그룹 4: 년도, 월, 일 선택 드롭다운
  let dobInputGroup = createDiv('').addClass('input-group');
  let yearDropdown = createSelect().addClass('dob-dropdown').addClass('required-field').addClass('input-field');
  yearDropdown.option('년도 (YY)');
  for (let year = 2024; year >= 1950; year--) {
    yearDropdown.option(year);
  }
  let monthDropdown = createSelect().addClass('dob-dropdown').addClass('required-field').addClass('input-field');
  monthDropdown.option('월 (MM)');
  for (let month = 1; month <= 12; month++) {
    monthDropdown.option(month < 10 ? '0' + month : month);
  }
  let dayDropdown = createSelect().addClass('dob-dropdown').addClass('required-field').addClass('input-field');
  dayDropdown.option('일 (DD)');
  for (let day = 1; day <= 31; day++) {
    dayDropdown.option(day);
  }
  yearDropdown.parent(dobInputGroup);
  monthDropdown.parent(dobInputGroup);
  dayDropdown.parent(dobInputGroup);
  dobInputGroup.parent(centeredContent);

  // 그룹 5: 학번 입력 필드
  let studentIdInput = createInput('').attribute('placeholder', '학번 (Student ID)').addClass('required-field').addClass('input-field');
  studentIdInput.parent(centeredContent);

  // 그룹 6: 학부 선택 드롭다운
  let departmentInputGroup = createDiv('').addClass('input-group');
  let departmentDropdown = createSelect().addClass('department-dropdown').addClass('required-field').addClass('input-field');
  departmentDropdown.option('학부 (Department)');
  for (let department of ['공연학부 (Performance)', '영상학부 (Film & Media)', '음악학부 (Music)', '문예학부 (Writing)', '디자인학부 (Design)', '커뮤티케이션학부 (Communications)', '예술창작기초학부 (Arts Foundations)']) {
    departmentDropdown.option(department);
  }
  departmentDropdown.parent(departmentInputGroup);
  departmentInputGroup.parent(centeredContent);

  // 그룹 7: 전공 선택 드롭다운 (초기에는 비활성화)
  let majorDropdownGroup = createDiv('').addClass('input-group');
  let majorDropdown = createSelect().addClass('major-dropdown').addClass('required-field').addClass('input-field').attribute('disabled', '');
  majorDropdown.option('전공 (Major)');
  majorDropdown.parent(majorDropdownGroup);
  majorDropdownGroup.parent(centeredContent);

  // 학부 선택 이벤트 리스너 설정
  departmentDropdown.changed(() => {
    let selectedDepartment = departmentDropdown.value(); // 선택된 학부

    switch (selectedDepartment) {
      case '공연학부 (Performance)':
        enableMajorDropdown(['연극 (Theatre)', '연기 (Acting)', '무용 (Dance)']);
        break;
      case '영상학부 (Film & Media)':
        enableMajorDropdown(['영화 (Film)', '방송영상 (Television)', '디지털아트 (Digital Arts)']);
        break;
      case '음악학부 (Music)':
        enableMajorDropdown(['실용음악 (Applied Music)', '한국음악 (Korean Music)']);
        break;
      case '문예학부 (Writing)':
        enableMajorDropdown(['문예창작 (Creative Writing)', '극작 (Dramatic Writing)']);
        break;
      case '디자인학부 (Design)':
        enableMajorDropdown(['사진 (Photography)', '시각디자인 (Visual Design)', '공간디자인 (Interior Design)']);
        break;
      case '커뮤티케이션학부 (Communications)':
        enableMajorDropdown(['광고창작 (Creative Advertising)', '예술경영 (Arts Management)']);
        break;
      case '예술창작기초학부 (Arts Foundations)':
        disableMajorDropdown();
        break;
      default:
        disableMajorDropdown();
        break;
    }
  });

  // 그룹 8: 완료 버튼
  let submitBtn = createButton('확인 (Confirm)').addClass('submit-btn'); // submit-btn 클래스 추가
  submitBtn.mousePressed(() => {
    // 필수 입력 필드가 모두 입력되었는지 확인
    let isAnyFieldEmpty =
      nameInput.value() === '' ||
      surnameInput.value() === '' ||
      genderDropdown.value() === '성별 (Gender)' ||
      yearDropdown.value() === '년도 (YY)' ||
      monthDropdown.value() === '월 (MM)' ||
      dayDropdown.value() === '일 (DD)' ||
      studentIdInput.value() === '' ||
      departmentDropdown.value() === '학부 (Department)' ||
      majorDropdown.value() === '전공 (Major)';

    // 필수 입력 필드가 비어 있으면 해당 필드의 테두리 색을 빨간색으로 변경
    nameInput.style('border-color', nameInput.value() === '' ? 'red' : '');
    surnameInput.style('border-color', surnameInput.value() === '' ? 'red' : '');
    genderDropdown.style('border-color', genderDropdown.value() === '성별 (Gender)' ? 'red' : '');
    yearDropdown.style('border-color', yearDropdown.value() === '년도 (YY)' ? 'red' : '');
    monthDropdown.style('border-color', monthDropdown.value() === '월 (MM)' ? 'red' : '');
    dayDropdown.style('border-color', dayDropdown.value() === '일 (DD)' ? 'red' : '');
    studentIdInput.style('border-color', studentIdInput.value() === '' ? 'red' : '');
    departmentDropdown.style('border-color', departmentDropdown.value() === '학부 (Department)' ? 'red' : '');
    majorDropdown.style('border-color', majorDropdown.value() === '전공 (Major)' ? 'red' : '');

    // 필수 입력 필드가 하나라도 비어 있으면 팝업창 띄움
    if (isAnyFieldEmpty) {
      alert('정보를 모두 입력해주세요.');
      return;
    }

    // 모든 필드가 입력되었을 때 실행할 동작 작성
    console.log("이름: " + surnameInput.value() + nameInput.value());
    console.log("성별: " + genderDropdown.value());
    console.log("생년월일: " + yearDropdown.value() + "-" + (monthDropdown.value().length === 1 ? '0' + monthDropdown.value() : monthDropdown.value()) + "-" + dayDropdown.value());
    console.log("학번: " + studentIdInput.value());
    console.log("학부: " + departmentDropdown.value());
    console.log("전공: " + majorDropdown.value());

    // 정보를 성공적으로 입력한 메시지 출력
    alert('정보를 성공적으로 입력하였습니다.');

    // 입력된 정보 초기화
    nameInput.value('');
    surnameInput.value('');
    genderDropdown.selected('성별 (Gender)');
    yearDropdown.selected('년도 (YY)');
    monthDropdown.selected('월 (MM)');
    dayDropdown.selected('일 (DD)');
    studentIdInput.value('');
    departmentDropdown.selected('학부 (Department)');
    majorDropdown.selected('전공 (Major)');
  });
  submitBtn.parent(centeredContent);



  // 전공 선택 드롭다운을 활성화하고 해당하는 전공 옵션을 추가하는 함수
  function enableMajorDropdown(majors) {
    majorDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    majorDropdown = createSelect().addClass('major-dropdown');
    majorDropdown.option('전공 (Major)');
    for (let major of majors) {
      majorDropdown.option(major);
    }
    majorDropdown.parent(majorDropdownGroup);
  }

  // 전공 선택 드롭다운을 비활성화하는 함수
  function disableMajorDropdown() {
    majorDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    majorDropdown = createSelect().addClass('major-dropdown').attribute('disabled', '');
    majorDropdown.option('전공 (Major)');
    majorDropdown.parent(majorDropdownGroup);
  }
}
