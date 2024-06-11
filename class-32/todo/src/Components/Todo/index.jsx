import React, { useEffect, useState, useContext } from 'react';
import { Pagination } from '@mantine/core';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';

import {SettingsContext} from '../../Context/Settings';

import Header from '../Header';
import List from '../List';
import Form from '../Form';

const Todo = () => {

  const context = useContext(SettingsContext);
  const defaultValues = context.settings;

  const [list, setList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {

    let filteredList = list.filter( item => {
      return defaultValues.showCompleted ? true : item.complete === false;
    });

    let start = defaultValues.perPage * (currentPage - 1);
    let end = start + defaultValues.perPage;

    setDisplayList(filteredList.slice(start, end));

    let incompleteCount = filteredList.length;
    setIncomplete(incompleteCount);

    document.title = `To Do List: ${incompleteCount}`;


  }, [list, currentPage, defaultValues]);

  let numPages = Math.ceil(incomplete / defaultValues.perPage);

  return (
    <>

      <Header openItems={incomplete} />

      <Form handleChange={handleChange} handleSubmit={handleSubmit} difficulty={defaultValues.difficulty} />

      <List list={displayList} toggleComplete={toggleComplete} deleteItem={deleteItem} />

      <Pagination total={numPages} onChange={setCurrentPage} size="lg" radius="lg" withEdges />

    </>
  );
};

export default Todo;
