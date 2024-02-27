function showBanner(index) {
  var banners = document.querySelectorAll(".banner-box li");
  var buttons = document.querySelectorAll(".button-list button");

  // 모든 배너 숨기기
  banners.forEach(function (banner) {
    banner.style.display = "none";
  });

  // 클릭한 버튼에 해당하는 배너 보이기
  banners[index - 1].style.display = "block";

  // 모든 버튼 스타일 초기화
  buttons.forEach(function (button) {
    button.style.backgroundColor = "#fff";
  });

  // 클릭한 버튼 스타일 변경
  buttons[index - 1].style.backgroundColor = "#ccc";
}

// 재택근무 부분

let currentIndex = 0;

function showSlide() {
  const slides = document.querySelectorAll(".homework-items");
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? 2 : currentIndex - 1;
  showSlide();
}

function nextSlide() {
  currentIndex = currentIndex === 2 ? 0 : currentIndex + 1;
  showSlide();
}

window.addEventListener("load", showSlide);
