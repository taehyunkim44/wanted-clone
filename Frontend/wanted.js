// JavaScript로 배너 슬라이드 구현
const bannerItems = document.querySelectorAll(".Banner_Item");
const bannerButtons = document.querySelectorAll(".Main_bannerDots button");

// 버튼 클릭 시 배너 표시
bannerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showBanner(index);
  });
});

let currentIndex = 0;

function showBanner(index) {
  bannerItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = "block";
      bannerButtons[i].classList.add("active"); // 해당 버튼 활성화
    } else {
      item.style.display = "none";
      bannerButtons[i].classList.remove("active"); // 나머지 버튼 비활성화
    }
  });
}

// 초기에 첫 번째 배너 표시
showBanner(currentIndex);

// 일정 간격으로 다음 배너 표시
setInterval(nextBanner, 3000);

function nextBanner() {
  currentIndex = (currentIndex + 1) % bannerItems.length;
  showBanner(currentIndex);
}

// 재택근무 부분

let currentIndex2 = 0;

function showSlide() {
  const slides = document.querySelectorAll(".Homework_Items");
  slides.forEach((slide, index) => {
    if (index === currentIndex2) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide() {
  currentIndex2 = currentIndex2 === 0 ? 2 : currentIndex2 - 1;
  showSlide();
}

function nextSlide() {
  currentIndex2 = currentIndex2 === 2 ? 0 : currentIndex2 + 1;
  showSlide();
}
