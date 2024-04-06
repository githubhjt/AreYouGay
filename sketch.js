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
  let collegeInputGroup = createDiv('').addClass('input-group');
  let collegeDropdown = createSelect().addClass('college-dropdown').addClass('required-field').addClass('input-field');
  collegeDropdown.option('학부 선택');
  for (let college of ['공연학부 (Performance)', '영상학부 (Film & Media)', '음악학부 (Music)', '문예학부 (Writing)', '디자인학부 (Design)', '커뮤티케이션학부 (Communications)', '예술창작기초학부 (Arts Foundations)']) {
    collegeDropdown.option(college);
  }
  collegeDropdown.parent(collegeInputGroup);
  collegeInputGroup.parent(centeredContent);

  // 그룹 7: 전공 선택 드롭다운 (초기에는 비활성화)
  let departmentDropdownGroup = createDiv('').addClass('input-group');
  let departmentDropdown = createSelect().addClass('department-dropdown').addClass('required-field').addClass('input-field').attribute('disabled', '');
  departmentDropdown.option('전공 (Department)');
  departmentDropdown.parent(departmentDropdownGroup);
  departmentDropdownGroup.parent(centeredContent);

  // 학부 선택 이벤트 리스너 설정
  collegeDropdown.changed(() => {
    let selectedCollege = collegeDropdown.value(); // 선택된 학부

    switch (selectedCollege) {
      case '공연학부 (Performance)':
        enableDepartmentDropdown(['연극 (Theatre)', '연기 (Acting)', '무용 (Dance)']);
        break;
      case '영상학부 (Film & Media)':
        enableDepartmentDropdown(['영화 (Film)', '방송영상 (Television)', '디지털아트 (Digital Arts)']);
        break;
      case '음악학부 (Music)':
        enableDepartmentDropdown(['실용음악 (Applied Music)', '한국음악 (Korean Music)']);
        break;
      case '문예학부 (Writing)':
        enableDepartmentDropdown(['문예창작 (Creative Writing)', '극작 (Dramatic Writing)']);
        break;
      case '디자인학부 (Design)':
        enableDepartmentDropdown(['사진 (Photography)', '시각디자인 (Visual Design)', '공간디자인 (Interior Design)']);
        break;
      case '커뮤티케이션학부 (Communications)':
        enableDepartmentDropdown(['광고창작 (Creative Advertising)', '예술경영 (Arts Management)']);
        break;
      case '예술창작기초학부 (Arts Foundations)':
        disableDepartmentDropdown();
        break;
      default:
        disableDepartmentDropdown();
        break;
    }
  });

// 그룹 8: 완료 버튼
let submitBtn = createButton('완료');
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
    collegeDropdown.value() === '학부 선택' ||
    departmentDropdown.value() === '전공 (Department)';

  // 필수 입력 필드가 비어 있으면 해당 필드의 테두리 색을 빨간색으로 변경
  nameInput.style('border-color', nameInput.value() === '' ? 'red' : '');
  surnameInput.style('border-color', surnameInput.value() === '' ? 'red' : '');
  genderDropdown.style('border-color', genderDropdown.value() === '성별 (Gender)' ? 'red' : '');
  yearDropdown.style('border-color', yearDropdown.value() === '년도 (YY)' ? 'red' : '');
  monthDropdown.style('border-color', monthDropdown.value() === '월 (MM)' ? 'red' : '');
  dayDropdown.style('border-color', dayDropdown.value() === '일 (DD)' ? 'red' : '');
  studentIdInput.style('border-color', studentIdInput.value() === '' ? 'red' : '');
  collegeDropdown.style('border-color', collegeDropdown.value() === '학부 선택' ? 'red' : '');
  departmentDropdown.style('border-color', departmentDropdown.value() === '전공 (Department)' ? 'red' : '');

  // 필수 입력 필드가 하나라도 비어 있으면 팝업창 띄움
  if (isAnyFieldEmpty) {
    alert('정보를 모두 입력해주세요.');
    return;
  }

  // 모든 필드가 입력되었을 때 실행할 동작 작성
  console.log("이름(풀네임): " + surnameInput.value() + nameInput.value());
  console.log("성별: " + genderDropdown.value());
  console.log("생년월일: " + yearDropdown.value() + "-" + (monthDropdown.value().length === 1 ? '0' + monthDropdown.value() : monthDropdown.value()) + "-" + dayDropdown.value());
  console.log("학번: " + studentIdInput.value());
  console.log("학부: " + collegeDropdown.value());
  console.log("전공: " + departmentDropdown.value());

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
  collegeDropdown.selected('학부 선택');
  departmentDropdown.selected('전공 (Department)');
});
submitBtn.parent(centeredContent);


  // 전공 선택 드롭다운을 활성화하고 해당하는 전공 옵션을 추가하는 함수
  function enableDepartmentDropdown(departments) {
    departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    departmentDropdown = createSelect().addClass('department-dropdown');
    departmentDropdown.option('전공 (Department)');
    for (let department of departments) {
      departmentDropdown.option(department);
    }
    departmentDropdown.parent(departmentDropdownGroup);
  }

  // 전공 선택 드롭다운을 비활성화하는 함수
  function disableDepartmentDropdown() {
    departmentDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    departmentDropdown = createSelect().addClass('department-dropdown').attribute('disabled', '');
    departmentDropdown.option('전공 (Department)');
    departmentDropdown.parent(departmentDropdownGroup);
  }
}
