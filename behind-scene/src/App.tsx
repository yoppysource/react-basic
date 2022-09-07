import { useCallback, useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";

function App() {
  // states, props, context가 바뀔때 re-render함
  const [showParagraph, setShowParagraph] = useState<boolean>(false);
  const [allowToggle, setAllowToggle] = useState<boolean>(false);

  // react.memo를 Button component에 래핑해도 항상 re-render하는 문제가 생긴다.
  // 이유는 아래 함수가 app 컴포넌트가 재실행될때 새로 생겨나서 === 연산자에서 false를 반환하기 때문이다.
  // 따라서 useCallback을 이용해서 react 내부의 같은 메모리 위치에 함수를 저장함으로서 이 문제를 해결할 수 있다.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
    // when allowToggle이 변하면 함수 재생성해라!
    // 이걸 설정을 안해두면, 함수 선언과 동시에 allowToggle이 정의되어버리기 때문에, 제대로 기능이 동작은 안한다.
    // 따라서 allowToggle이 바뀔때마다 함수를 재생성 해야한다.
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
