import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import PizzaForm from './components/Form'
import Home from './components/Homepage';
import Nav from './components/Navigation';
import schema from './validation/formSchema';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  onion: false,
  mushroom: false,
  instructions: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  instructions: ''
}

const initialPizza = [];
const initialDisabled = true;



const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizza = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setPizza(res.data)
      })
      .catch(err => console.error(err))
  }

  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      setPizza([res.data, ...pizza])
    })
    .catch(err => console.error(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }
  

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = () => {
    const morePizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'onion', 'mushroom'].filter(topping => formValues[topping])
    }
    postPizza(morePizza)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])



  return (
    <>
      <h1>Tuan's Pizzeria</h1>
      <Switch>
        <Route path="/pizza">
          <Nav/>
            <PizzaForm values ={formValues} change={onChange} submit={onSubmit} error={formErrors} disabled={disabled} />
        </Route>
        <Route path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
