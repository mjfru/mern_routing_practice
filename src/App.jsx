import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom'
import './App.css'

const Home = (props) => {       //* Working, don't break it
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

// Refactor into one thing or break into components... Something like { input } isNaN(input) ---> Number, etc. Otherwise it will just read whatever is listed first here. 
const DisplayContent = (props) => {
  const { input, textColor, bgColor } = useParams();
  const style = {
    color: textColor,
    backgroundColor: bgColor
  }
  return isNaN(input) ? <h1 style={style}>The word is { input }!</h1> : <h1 style={style}>The number is { input }!</h1> 
};

//* Idea for future revision, put DisplayContent and Home into their own components

// const NumberPage = (props) => {
//   const { num } = useParams();
//   if (isNaN(num)) {
//     return <Home />
//   }
//   return (
//     <h1>The number is { num }!</h1>
//   )
// };

// const WordPage = (props) => {
//   const { string } = useParams();
//   if (!isNaN(string)) {
//     return <Home />
//   }
//   return (
//     <h1>The word is { string }!</h1>
//   )
// };

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:input" element={<DisplayContent/>}/>
        <Route path="/:input/:textColor" element={<DisplayContent/>}/>
        <Route path="/:input/:textColor/:bgColor" element={<DisplayContent/>}/>
        {/* <Route path="/:num" element={<NumberPage/>}/>
        <Route path="/:string" element={<WordPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
