import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Counter, FullNameForm, Greeting, Test } from './App.jsx'
import TodoList from './reduser.jsx'
import { CardProductCompoent } from './components/productCardComponent.jsx'
import   ExampleComponent  from './use-effect.jsx'
import UserList from './use-effect.jsx'
import PostList from './use-effect.jsx'
import ThemeToggler from './use-effect.jsx'
import SearchComponent from './SearchComponent.jsx'
import TimerComponent from './TimerComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}
    {/* greeting */}
    {/* <Greeting/> */}
    {/* fullName */}
    {/* <FullNameForm/> */}
    {/* counter */}
    {/* <Counter/> */}
    {/* <Test/> */}
    {/* <TodoList/>
    <GetProduct/> */}
    {/* <ExampleComponent/> */}
    {/* <UserList/> */}
    {/* <PostList/> */}
    <ThemeToggler/>
    <SearchComponent/>
    <TimerComponent/>
  </StrictMode>,
)
