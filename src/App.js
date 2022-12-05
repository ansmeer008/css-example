import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import StyledComponent from "./StyledComponent";
import TailwindComponent from "./TailwindComponent";

//css는 또 styled-components에서 import 해와야 함
//아마 Js 구문 넣어줄 때 사용할 수 있는듯?

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
      <TailwindComponent />
    </>
  );
}

export default App;
