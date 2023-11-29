document.signupFrm.onsubmit = (e) =>{
    // 아이디 유효성검사 (영소문자 이면서 5글자이상 12글자사이)
    if(!/^[A-za-z]{5,12}$/.test(id.value)){
        alert('유효한 아이디입력하세요~🚫');
        return false; // 틀린 값이 들어가면 안돼서 false로 리턴함
    }

    // 비밀번호 유효성검사 (비밀번호는 7~15자리 숫자/문자/특수문자를 포함)
    const regexps = [/^.{7,15}$/, /[A-za-z]/, /[0-9]/, /[!@#$%&*]/];
    if(!regexps[0].test(password.value)){
        alert('비밀번호는 7~15자리여야 합니다~🚫');
        return false;
    }
    if(!regexps[1].test(password.value)){
        alert('비밀번호는 영문자를 하나이상 포함해야합니다~🚫');
        return false;
    }
    if(!regexps[2].test(password.value)){
        alert('비밀번호는 숫자를 하나이상 포함해야합니다~🚫');
        return false;
    }
    if(!regexps[3].test(password.value)){
        alert('비밀번호는 특수문자를 하나이상 포함해야합니다~🚫');
        return false;
    }

}


const saveMembers = () => {
    // localStorage에 저장
    // members로 저장된 배열이 있다면 그걸사용하고, 없으면 새 배열을 생성한다.
    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(new Members(id.value, password.value, email.value, address.value));

    localStorage.setItem('members', JSON.stringify(members));

    // 초기화
    id.value = '';
    password.value = '';
    email.value = '';
    address.value = '';

};

class Members {
    constructor(id, password, email, address){
        this.id = id;
        this.password = password;
        this.email = email;
        this.address = address;
    }
}

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordconfirm = document.querySelector("#password-confirm");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

// 비밀번호 안내문구 노출,숨김 input + p.msg-required의 구조동일하므로 반복문이용해서 각각 바인딩
[id, password, passwordconfirm, email, address].forEach((input) => {
    input.addEventListener('blur', (e) => {
        
        // 값이 있으면 숨김처리, 없으면 문구노출
        if(e.target.value)
            e.target.nextElementSibling.style.display = 'none';
        else
            e.target.nextElementSibling.style.display = 'block';
    });
});
l