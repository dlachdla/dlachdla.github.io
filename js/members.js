const renderMembers = () => {
    // localStorage 에서 members 읽어오기
    const members = JSON.parse(localStorage.getItem('members')) || [];
    // tr태그로 변환하고 tbody에 추가
    const tbody = document.querySelector("table#tb-membersbook tbody");
    tbody.innerHTML = ''; //초기화
    
    document.querySelector("table#tb-membersbook tbody").innerHTML =
        members.reduce((html, {id, password, email, address, createdAt}) => {
            return`
            ${html}
            <tr>
                <td>${id}</td>
                <td>${password}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${convertToDatTime(createdAt)}</td>
            </tr>`;

        }, "");
};
const f = (n) => n < 10 ? '0' + n : n;

const convertToDatTime = (millis) => {
  const d = new Date(millis);
  const mm = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const hh = f(d.getHours());
  const mi = f(d.getMinutes());
  return `${mm}/${dd} ${hh}:${mi}`;
};
// 출력
renderMembers();