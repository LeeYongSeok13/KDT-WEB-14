const loginResult = document.querySelector(".loginResult");
function login() {
  const form = document.fomrs["login"];
  const data = {
    userId: form.userId.value,
    userPw: form.userPw.value,
  };

  axios({
    method: "post",
    url: "/profile",
    data: data,
  }).then((res) => {
    console.log(res.data);
    if (res.data.isSuccess) {
      window.location.href = "/profile";
    } else {
      loginResult.textContent = "아이디, 비밀번호를 확인해 주세요.";
    }
  });
}

function goProfile() {
  window.location.href = "/profile";
}
