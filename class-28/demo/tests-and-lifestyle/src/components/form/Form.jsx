import {useState} from 'react';

import './form.scss';

function Form(props) {

  let [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    props.makeTheCall(formData.url, formData.method, formData.body);
  }

  function handleChange(e) {
    // e is an event
    // e is also an object
    // e might look like: { target: { name: "url", value: "https://swapi.dev/api/people/1"} }
    let fieldName = e.target.name;
    let value = e.target.value;

    // ...formData is the spread operator that makes a copy of formData
    // and then we add the new key/value pair to that copy after the comma
    setFormData( {...formData, [fieldName]: value} );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 data-testid="method">Method: {formData.method}</h3>
      <h3 data-testid="url"> URL: {formData.url}</h3>
      <div>
       <span>URL: </span> <input data-testid="url-input" onChange={handleChange} type="text" name="url" />
      </div>
      <div>

        <label>
          <input data-testid="get-input" onChange={handleChange} type="radio" name="method" value="get" />
          <span>GET</span>
        </label>

        <label>
          <input data-testid="post-input" onChange={handleChange} type="radio" name="method" value="post" />
          <span>POST</span>
        </label>

        <label>
          <input data-testid="put-input" onChange={handleChange} type="radio" name="method" value="put" />
          <span>PUT</span>
        </label>

        <label>
          <input data-testid="delete-input" onChange={handleChange} type="radio" name="method" value="delete" />
          <span>DELETE</span>
        </label>
      </div>
      <div>
        <div>JSON BODY FOR POST/PUT:</div>
        <textarea onChange={handleChange} name="body"></textarea>
      </div>
      <div>
        <button data-testid="fetch-api-button" type="submit">Make API Call</button>
      </div>
    </form>
  )

}

export default Form;
