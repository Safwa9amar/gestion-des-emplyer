import React from "react";

export default function PageContainer({ children }) {
  return (
    <div
      dir="rtl"
      style={{ minHeight: "calc(100vh - 4.5rem)" }}
      className="flex items-center justify-center overflow-hidden "
    >
      {children}
    </div>
  );
}
