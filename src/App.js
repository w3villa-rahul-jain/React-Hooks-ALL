import './App.css';

// import UseStateHook from './Component/UseStateHook';
// import UseEffectHook from './Component/UseEffectHook';
// import UseContextHook from './Component/UseContextHook';
// import Home from './Component/Home';
// import { ThemeProvider } from './Component/Store'
// import UseRefHook from './Component/UseRefHook';
// import UseRefHookTwo from './Component/UseRefHookTwo';
import UseCallbackHook from './Component/UseCallbackHook';
import UseMemoHook from './Component/UseMemoHook';



function App() {

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseMemoHook />
      
      
      
      
      {/* <UseRefHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <ThemeProvider>
        <Home></Home>
      </ThemeProvider> */}
      {/* <UseContextHook /> */}

    </div>
  );
}

export default App;
