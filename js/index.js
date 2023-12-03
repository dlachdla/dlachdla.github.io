const check_login = document.querySelector("#login_bin");
const login = document.querySelector(".wrap");
const category = document.querySelector("#category");

const checkValue = () => {
    const loginUsername = document.querySelector('#username').value;
    const loginPassword = document.querySelector('#password').value;

   // members로 저장된 배열이 있다면 그걸사용하고, 없으면 새 배열을 생성한다
    const members = JSON.parse(localStorage.getItem('members')) || [];

    //  아이디와 비밀번호가 일치하는 회원 찾기
    const memberInfo = members.find(member => member.id === loginUsername && member.password === loginPassword);
    
    if (memberInfo) {
        alert(`❤ ${memberInfo.id}회원님 환영합니다 ❤`);
        login.style.visibility = 'hidden';
        category.style.visibility = 'visible';
    } else {ej
        alert("💦 ID와 Password를 다시 입력해주세요. 💦");
    }
};
function init(){
    check_login.addEventListener("click", checkValue);
}
init();


