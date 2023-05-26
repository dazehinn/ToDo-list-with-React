/* eslint-disable */
import {Routes, Route } from 'react-router-dom';
import Home from '@/routes/Home';
import About from '@/routes/About';
import NotMatch from '@/routes/NotMatch';
import Layout from './Layout';

const TodoApp = () => {
  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
      <Route index element = {<Home />} />
      <Route path='about' element={<About />} />
      <Route path = '*' element = {<NotMatch />} />
      </Route>
    </Routes>
  )
};
export default TodoApp;
