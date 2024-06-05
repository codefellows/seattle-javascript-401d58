import React from 'react';
import { describe, it, expect } from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import Form from './Form.jsx';

describe('API Form', () => {
  it('should capture the request', () => {

    function makeTheCall() { return; }

    render(<Form makeTheCall={makeTheCall} />);

    const methodDisplay = screen.getByTestId('method');
    const urlDisplay = screen.getByTestId('url');
    const urlInput = screen.getByTestId('url-input');
    const getInput = screen.getByTestId('get-input');

    let expectedMethod = 'get';
    let expectedURL = 'https://swapi.dev/api/people/1';

    // 1 - if I type into the url and method fields, does the url display change?
    fireEvent.change(urlInput, {target: {value: expectedURL}});
    fireEvent.click(getInput, {target: {value: expectedMethod}});
    expect(urlDisplay).toHaveTextContent(expectedURL);
    expect(methodDisplay).toHaveTextContent(expectedMethod);

  });

});
