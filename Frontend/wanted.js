document.addEventListener('DOMContentLoaded', function() {
    const more = document.getElementById('more');
    const moreMenu = document.getElementById('moreMenu');

    more.addEventListener('mouseover', function() {
        moreMenu.style.display = 'block';
    });

    // 마우스가 moreMenu 위에 있을 때도 메뉴가 사라지지 않도록 처리
    moreMenu.addEventListener('mouseleave', function() {
        moreMenu.style.display = 'none';
    });

    // 선택적: 마우스가 more에서 벗어났을 때도 처리
    more.addEventListener('mouseleave', function(e) {
        if (!moreMenu.contains(e.relatedTarget)) {
            moreMenu.style.display = 'none';
        }
    });
});



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



// 테마로 모아보기 부분

let currentIndex2 = 0;

function showSlide2() {
  const slides = document.querySelectorAll(".thema-items");
  slides.forEach((slide, index) => {
    if (index === currentIndex2) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide2() {
  currentIndex2 = currentIndex2 === 0 ? 2 : currentIndex2 - 1;
  showSlide2();
}

function nextSlide2() {
  currentIndex2 = currentIndex2 === 2 ? 0 : currentIndex2 + 1;
  showSlide2();
}

window.addEventListener("load", showSlide2);
