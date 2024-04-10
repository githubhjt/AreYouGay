function setup() {
  noCanvas(); // 캔버스 생성 방지

  // 중앙 정렬을 위한 컨테이너 생성
  let centeredContent = createDiv("").addClass("centered-content");

  // 그룹 1: 이름 입력 필드
  let nameInputGroup = createDiv("").addClass("input-group");
  let nameInput = createInput("")
    .attribute("placeholder", "First Name")
    .addClass("required-field")
    .addClass("input-field");
  nameInput.parent(nameInputGroup);
  nameInputGroup.parent(centeredContent);

  // 그룹 2: 성 입력 필드
  let surnameInputGroup = createDiv("").addClass("input-group");
  let surnameInput = createInput("")
    .attribute("placeholder", "Last Name")
    .addClass("required-field")
    .addClass("input-field");
  surnameInput.parent(surnameInputGroup);
  surnameInputGroup.parent(centeredContent);

  // 그룹 3: 성별 선택 드롭다운
  let genderDropdown = createSelect()
    .addClass("gender-dropdown")
    .addClass("required-field")
    .addClass("input-field");
  genderDropdown.option("Gender");
  genderDropdown.option("Male");
  genderDropdown.option("Female");
  genderDropdown.option("Transgender");
  genderDropdown.option("Bigender:female&male");
  genderDropdown.option("Bigender:androgyne&neutrois");
  genderDropdown.option("Bigender:thirdgender&demiboy");
  genderDropdown.option("Androgyne");
  genderDropdown.option("Neutrois");
  genderDropdown.option("Agender/Genderless");
  genderDropdown.option("Intergender");
  genderDropdown.option("Demiboy");
  genderDropdown.option("Demigirl");
  genderDropdown.option("Demiagender:with demigirl");
  genderDropdown.option("Thirdgender");
  genderDropdown.option("Genderqueer/Non-binary");
  genderDropdown.option("Pangender/Poligender");
  genderDropdown.option("Epicene");
  genderDropdown.option("Genderfluid");
  genderDropdown.option("Genderfluid:female&male");
  genderDropdown.option("Genderfluid:intergender&neutrois");
  genderDropdown.option("Genderfluid:thirdgender&demigirl");
  genderDropdown.option("Genderfluid:androgyne&female");
  genderDropdown.option("Agender:version1");
  genderDropdown.option("Agneder:version2");
  genderDropdown.option("Agender:version gendervoid");
  genderDropdown.option("Demiagender(with thirdgender");
  genderDropdown.option("Femme");
  genderDropdown.option("Butch");
  genderDropdown.option("Travesti n-b");
  genderDropdown.option("Aliagender");
  genderDropdown.parent(centeredContent);

  // 생년월일 그룹: 3개의 입력 필드
  let dobInputGroup = createDiv("").addClass("input-group");
  let yearInput = createInput("")
    .attribute("placeholder", "YYYY")
    .addClass("required-field")
    .addClass("input-field")
    .addClass("dob-input");
  let monthInput = createInput("")
    .attribute("placeholder", "MM")
    .addClass("required-field")
    .addClass("input-field")
    .addClass("dob-input");
  let dayInput = createInput("")
    .attribute("placeholder", "DD")
    .addClass("required-field")
    .addClass("input-field")
    .addClass("dob-input");
  yearInput.parent(dobInputGroup);
  monthInput.parent(dobInputGroup);
  dayInput.parent(dobInputGroup);
  dobInputGroup.parent(centeredContent);

  // 그룹 5: 학번 입력 필드
  let studentIdInput = createInput("")
    .attribute("placeholder", "Student ID")
    .addClass("required-field")
    .addClass("input-field");
  studentIdInput.parent(centeredContent);

  // 그룹 6: 학부 선택 드롭다운
  let departmentInputGroup = createDiv("").addClass("input-group");
  let departmentDropdown = createSelect()
    .addClass("department-dropdown")
    .addClass("required-field")
    .addClass("input-field");
  departmentDropdown.option("Department (학부)");
  for (let department of [
    "Performance (공연학부)",
    "Film & Media (영상학부)",
    "Music (음악학부)",
    "Writing (문예학부)",
    "Design (디자인학부)",
    "Communications (커뮤니케이션학부)",
    "Arts Foundations (예술창작기초학부)",
  ]) {
    departmentDropdown.option(department);
  }
  departmentDropdown.parent(departmentInputGroup);
  departmentInputGroup.parent(centeredContent);

  // 그룹 7: 전공 선택 드롭다운 (초기에는 비활성화)
  let majorDropdownGroup = createDiv("").addClass("input-group");
  let majorDropdown = createSelect()
    .addClass("major-dropdown")
    .addClass("required-field")
    .addClass("input-field")
    .attribute("disabled", "");
  majorDropdown.option("Major (전공)");
  majorDropdown.parent(majorDropdownGroup);
  majorDropdownGroup.parent(centeredContent);

  // 그룹 8: 완료 버튼
  let submitBtn = createButton("C O N F I R M").addClass("submit-btn"); // submit-btn 클래스 추가

  // 정보 입력 횟수를 저장할 함수
  let informationCounter = 0;

  // 완료 버튼 클릭 시 실행되는 함수
  submitBtn.mousePressed(() => {
    // 필수 입력 필드가 모두 입력되었는지 확인
    let isAnyFieldEmpty =
      nameInput.value() === "" ||
      surnameInput.value() === "" ||
      genderDropdown.value() === "Gender" || // 수정된 부분
      yearInput.value() === "" ||
      monthInput.value() === "" ||
      dayInput.value() === "" ||
      studentIdInput.value() === "" ||
      departmentDropdown.value() === "Department (학부)" ||
      majorDropdown.value() === "Major (전공)";

    // 필수 입력 필드가 비어 있으면 해당 필드의 테두리 색을 빨간색으로 변경
    nameInput.style("border-color", nameInput.value() === "" ? "red" : "");
    surnameInput.style(
      "border-color",
      surnameInput.value() === "" ? "red" : ""
    );
    genderDropdown.style(
      "border-color",
      genderDropdown.value() === "Gender" ? "red" : ""
    ); // 수정된 부분
    yearInput.style("border-color", yearInput.value() === "" ? "red" : "");
    monthInput.style("border-color", monthInput.value() === "" ? "red" : "");
    dayInput.style("border-color", dayInput.value() === "" ? "red" : "");
    studentIdInput.style(
      "border-color",
      studentIdInput.value() === "" ? "red" : ""
    );
    departmentDropdown.style(
      "border-color",
      departmentDropdown.value() === "Department (학부)" ? "red" : ""
    );
    majorDropdown.style(
      "border-color",
      majorDropdown.value() === "Major (전공)" ? "red" : ""
    );

    // 필수 입력 필드가 하나라도 비어 있으면 팝업창 띄움
    if (isAnyFieldEmpty) {
      alert("정보를 모두 입력해주세요.");
      return;
    }

    informationCounter++; //informationCounter에 대한 값 +1씩.

    // 모든 필드가 입력되었을 때 실행할 동작 작성
    console.log("Info" + informationCounter);
    console.log("이름: " + surnameInput.value() + nameInput.value());
    console.log("성별: " + genderDropdown.value());
    console.log("생년월일: " + dobInputGroup.value());
    console.log("학번: " + studentIdInput.value());
    console.log("학부: " + departmentDropdown.value());
    console.log("전공: " + majorDropdown.value());

    // 정보를 성공적으로 입력한 메시지 출력
    alert("정보를 성공적으로 입력하였습니다.");

    // 입력된 정보 초기화
    nameInput.value("");
    surnameInput.value("");
    genderDropdown.selected("Gender"); // Gender 드롭다운 초기화
    yearInput.value("");
    monthInput.value("");
    dayInput.value("");
    studentIdInput.value("");
    departmentDropdown.selected("Department (학부)");
    majorDropdown.selected("Major (전공)");

    // 전공 드롭다운 비활성화
    majorDropdown.attribute("disabled", "");
  });

  submitBtn.parent(centeredContent);

  // 학부 선택 이벤트 리스너 설정
  departmentDropdown.changed(() => {
    let selectedDepartment = departmentDropdown.value(); // 선택된 학부

    switch (selectedDepartment) {
      case "Performance (공연학부)":
        enableMajorDropdown([
          "Theatre (연극)",
          "Acting (연기)",
          "Dance (무용)",
        ]);
        break;
      case "Film & Media (영상학부)":
        enableMajorDropdown([
          "Film (영화)",
          "Television (방송영상)",
          "Digital Arts (디지털아트)",
        ]);
        break;
      case "Music (음악학부)":
        enableMajorDropdown([
          "Applied Music (실용음악)",
          "Korean Music (한국음악)",
        ]);
        break;
      case "Writing (문예학부)":
        enableMajorDropdown([
          "Creative Writing (문예창작)",
          "Dramatic Writing (극작)",
        ]);
        break;
      case "Design (디자인학부)":
        enableMajorDropdown([
          "Photography (사진)",
          "Visual Design (시각디자인)",
          "Interior Design (공간디자인)",
        ]);
        break;
      case "Communications (커뮤니케이션학부)":
        enableMajorDropdown([
          "Creative Advertising (광고창작)",
          "Arts Management (예술경영)",
        ]);
        break;
      case "Arts Foundations (예술창작기초학부)":
        disableMajorDropdown();
        break;
      default:
        disableMajorDropdown();
        break;
    }
  });

  // 전공 선택 드롭다운을 활성화하고 해당하는 전공 옵션을 추가하는 함수
  function enableMajorDropdown(majors) {
    majorDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    majorDropdown = createSelect().addClass("major-dropdown");
    majorDropdown.option("Major (전공)");
    for (let major of majors) {
      majorDropdown.option(major);
    }
    majorDropdown.parent(majorDropdownGroup);
  }

  // 전공 선택 드롭다운을 비활성화하는 함수
  function disableMajorDropdown() {
    majorDropdown.remove(); // 이전에 선택된 학부의 전공을 제거
    majorDropdown = createSelect()
      .addClass("major-dropdown")
      .attribute("disabled", "");
    majorDropdown.option("Major (전공)");
    majorDropdown.parent(majorDropdownGroup);
  }

  yearInput.addClass('year-input');
  monthInput.addClass('month-input');

  // 생년월일 입력 필드에 입력 이벤트 리스너 설정
  yearInput.input(formatDateInput);
  monthInput.input(formatDateInput);
  dayInput.input(formatDateInput);

  // 생년월일 입력 필드에 날짜 형식 지정하는 함수
  function formatDateInput() {
    let input1 = this.value();
    // 입력된 값에서 숫자와 '-'만 남기고 나머지는 제거
    let formattedInput = input1.replace(/[^\d-]/g, "");
    // 형식이 YYYY-MM-DD 형태가 되도록 입력 필드에 값 설정
    this.value(formattedInput);
  }
}
