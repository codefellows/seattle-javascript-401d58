import React from 'react';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import App from './App.jsx';

// What we expect back from our server ...
// This creates a CONTRACT between front end and back end teams
const getReturn = [ {name:'John'}, {name:'Cathy'} ];
const getReturnString = JSON.stringify(getReturn);

const postReturn = { id:1, name:'John'}
const postReturnString = JSON.stringify(postReturn);

const putReturn = { id:1, name:'Zach'}
const putReturnString = JSON.stringify(putReturn);

const deleteReturn = { };
const deleteReturnString = JSON.stringify(deleteReturn);

const server = setupServer(
  http.get('/customers', (req, res, ctx) => {
    return HttpResponse.json(getReturn);
  }),
  http.post('/customers', (req, res, ctx) => {
    return HttpResponse.json(postReturn);
  }),
  http.put('/customers/1', (req, res, ctx) => {
    return HttpResponse.json(putReturn);
  }),
  http.delete('/customers/1', (req, res, ctx) => {
    return HttpResponse.json(deleteReturn);
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App', () => {

  it('should do a get api call', async () => {

    render(<App />);

    const urlInput = screen.getByTestId('url-input');
    const getInput = screen.getByTestId('get-input');
    const jsonDisplay = screen.getByTestId('json-display');
    const submitButton = screen.getByTestId('fetch-api-button');

    let method = 'get';
    let url = '/customers';

    // 1 - if I type into the url and method fields, does the url display change?
    fireEvent.change(urlInput, {target: {value: url}});
    fireEvent.click(getInput, {target: {value: method}});
    fireEvent.click(submitButton);

    // does the json display show the results of the API call?
    expect(jsonDisplay).not.toBeNull();
    // How can I test that the json display is what I expect?
    // expect(jsonDisplay).toHaveTextContent(getReturnString);
  });

  it('should do a post api call', async () => {

    render(<App />);

    const urlInput = screen.getByTestId('url-input');
    const postInput = screen.getByTestId('post-input');
    const jsonDisplay = screen.getByTestId('json-display');
    const submitButton = screen.getByTestId('fetch-api-button');

    let method = 'post';
    let url = '/customers';

    // 1 - if I type into the url and method fields, does the url display change?
    fireEvent.change(urlInput, {target: {value: url}});
    fireEvent.click(postInput, {target: {value: method}});
    fireEvent.click(submitButton);

    // does the json display show the results of the API call?
    expect(jsonDisplay).not.toBeNull();
  });

  it('should do a put api call', async () => {

  });

  it('should do a delete api call', async () => {

  });

});




