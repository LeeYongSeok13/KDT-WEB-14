import React, { useState } from "react";

export default function Practice1() {
  const [user, setUser] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addUser = () => {
    if (inputName.trim().length === 0 && inputEmail.trim().length === 0) {
      return;
    }
    const newUser = user.concat({
      id: user.length + 1,
      name: inputName,
      email: inputEmail,
    });
    setUser(newUser);

    setInputName("");
    setInputEmail("");
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      addUser();
    }
  };

  const deleteUser = (targetId) => {
    const newUser = user.filter((value) => value.id !== targetId);
    setUser(newUser);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyDown={keyDown}
      />
      <button onClick={addUser}>등록</button>

      {user.map((value) => {
        return (
          <h2 key={value.id} onDoubleClick={() => deleteUser(value.id)}>
            {value.name}: {value.email}
          </h2>
        );
      })}
    </div>
  );
}
