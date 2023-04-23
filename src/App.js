import logo from './logo.svg';
import './App.css';
import AddCard from './components/addcards/AddCard';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element : <RootLayout />
    },
    {
      path:"/addcard",
      element: <AddCard />
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router} />     
    </div>
  );
}

export default App;
