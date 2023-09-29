import logo from './logo.svg';
import './App.css';
import { HomeScreen } from './screens';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Task2 } from './screens';
import { Task3 } from './screens';
import { Task4 } from './screens';
import { Task5 } from './screens';
import { Task6 } from './screens';
import { Task7 } from './screens';
import { Task8 } from './screens';
import { Task9 } from './screens';
import { Task10 } from './screens';
import { Task11 } from './screens';
import { Task12 } from './screens';
import { Task13 } from './screens';
import { Task14 } from './screens';
import { Example } from './screens';
import { Example1 } from './screens';
import { Task15 } from './screens';
import { Task16 } from './screens';
function App() {
  return (
    <div className='App'>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/task2' element={<Task2 />}></Route>
          <Route path='/task3' element={<Task3 />}></Route>
          <Route path='/task4' element={<Task4 />}></Route>
          <Route path='/task5' element={<Task5 />}></Route>
          <Route path='/task6' element={<Task6 />}></Route>
          <Route path='/task7' element={<Task7 />}></Route>
          <Route path='/task8' element={<Task8 />}></Route>
          <Route path='/task9' element={<Task9 />}></Route>
          <Route path='/task10' element={<Task10 />}></Route>
          <Route path='/task11' element={<Task11 />}></Route>
          <Route path='/task12' element={<Task12 />}></Route>
          <Route path='/task13' element={<Task13 />}></Route>
          <Route path='/task14' element={<Task14 />}></Route>
          <Route path='/example' element={<Example />}></Route>
          <Route path='/example1' element={<Example1 />}></Route>
          <Route path='/task15' element={<Task15 />}></Route>
          <Route path='/task16' element={<Task16 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
