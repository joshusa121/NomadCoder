// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>


const Select = document.querySelector('.Select');
const COUNTRY = "currentCountry";


//locaStorage에 내용을 넣는 함수
 function saveCountry(event) {
    localStorage.setItem(COUNTRY, event.target.Value);
  }
  

// 제출 후 이벤트 초기화 prevent

 function handleCountry(event) {
    const currentValue = input.value;
    select.addEventListener("change", saveCountry);
    saveCountry();
  }
  


// Application에 저장된 이름을 불러오는 기능

function loadCountry() {
  const currentCountry = localStorage.getItem(COUNTRY);
  if (currentCountry === null) {
    saveCountry()
  } else {
    handleCountry();
  }
}


//실행
function init() {
  loadCountry();
}

init();