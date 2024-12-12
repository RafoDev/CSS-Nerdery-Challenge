import { Aside } from "./features/aside/aside";
import { Main } from "./features/main/main";
import { Navbar } from "./features/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Aside />
    </>
  );
}

export default App;
