import React from "react";

export default function PageLayout({ children }) {
  return (
    <div>
      <header style={{ background: "#eee", padding: "16px" }}>헤더</header>
      <main style={{ padding: "16px" }}>{children}</main>
      <footer
        style={{ background: "#eee", padding: "16px", marginTop: "16px" }}
      >
        <p>푸터</p>
      </footer>
    </div>
  );
}
