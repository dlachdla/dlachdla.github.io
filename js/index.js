const check_id = document.querySelector("#username");
const check_pwd = document.querySelector("#password");
const check_login = document.querySelector("#login_bin");
const hidden = document.querySelector(".wrap");
const visible = document.querySelector("#menu");

function checkValue(){
    const ID = check_id.value;
    const PassWord = check_pwd.value;

    // console.log(ID, PassWord);
    const members = JSON.parse(localStorage.getItem('members'));
    members.forEach((member) => {
        const {id, password} = member;
        // console.log(id, password);
        if(id == ID && password == PassWord){
            alert("성공");
            hidden.style.visibility = 'hidden';
            visible.style.visibility = 'visible';
            // window.location.href = 'members.html'
        }else{
            alert("실패");
        }
    })
};

function init(){
    check_login.addEventListener("click", checkValue);
}
init();