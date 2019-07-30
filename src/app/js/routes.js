import HomePage from './components/HomePage';
import TodoList from './components/TodoList';
import NoPage from './components/NoPage';

export const routesConfig = [
  {
    key: 'todo-list',
    path: '/todolist',
    exact: false,
    component: TodoList
  },
  {
    key: 'home',
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    key: 'nopage',
    path: '*',
    component: NoPage
  }
];