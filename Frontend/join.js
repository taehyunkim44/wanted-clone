document.addEventListener("DOMContentLoaded", function () {
  // 약관 전체 동의 체크박스
  const allAgreeCheckbox = document.querySelector(
    'label > input[type="checkbox"]'
  );
  // 개별 약관 동의 체크박스들
  const agreeCheckboxes = document.querySelectorAll(
    'ul li input[type="checkbox"]'
  );

  // 약관 전체 동의 체크박스 클릭 이벤트
  allAgreeCheckbox.addEventListener("change", function () {
    const isChecked = this.checked;
    agreeCheckboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

  // 개별 체크박스 변경시 전체 동의 체크박스 상태 업데이트
  agreeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      // 모든 체크박스가 체크되어 있으면 true, 아니면 false
      allAgreeCheckbox.checked = Array.from(agreeCheckboxes).every(
        (cb) => cb.checked
      );
    });
  });
});
