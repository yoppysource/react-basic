import React from "react";

const DemoOutput: React.FC<{ show: boolean }> = ({ show }) => {
  return <p>{show ? "This is New" : ""}</p>;
};

// When wrapping with this method, it means react compare props with previous prop and when the prop is changed,
// component should be re-evaluate
// compare하기 위한 비용 따라서, props 비교 연산과, 재평가 연산의 trade-off임
export default React.memo(DemoOutput);
