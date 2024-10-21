// 회원가입 클릭 시 테이블에 데이터 추가
async function createUser() {
  const form = document.forms["signup"];

  if (!form.checkValidity()) {
    console.log("check");
    form.reportValidity(); // 유저에게 validity
    return;
  }

  const { data } = await axios({
    method: "POST",
    url: "/signup",
    data: {
      userid: form.userid.value,
      name: form.name.value,
      pw: form.pw.value,
    },
  });
  console.log(data);
  if (data.result) {
    alert("회원가입 성공");
    // 가입 성공시 로그인 페이지로 이동
    document.location.href = "/";
  }
}
