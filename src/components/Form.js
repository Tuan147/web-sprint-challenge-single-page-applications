import React from 'react';

const Form = (props) => {
    const { values, submit, change, errors, disabled } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form className='pizza-form' onSubmit={onSubmit}>
            <div className='pizza-form-submit'>
                <h2>Build your pizza!</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div className='form-group-inputs'>
                <h4>Please enter your name and pizza order</h4>

                <label> Name
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label> Size 
                    <select
                    value={values.size}
                    onChange={onChange}
                    name='size'
                    >
                        <option value=''>--Select a Size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

            <div className='form-group-toppings'>
                <h3>Toppings</h3>
                <label> Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label> Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label> 
                <label> Onion
                    <input 
                        type='checkbox'
                        name='onion'
                        onChange={onChange}
                        checked={values.onion}
                    />
                </label> 
                <label> Mushrooms
                    <input 
                        type='checkbox'
                        name='mushroom'
                        onChange={onChange}
                        checked={values.mushroom}
                    />
                </label>

                <br />

                <label> Special Instructions
                    <input 
                        name='instructions' type='textbox' onChange={onChange} value={values.instructions}
                    />
                </label>

                <button id='submit' disabled={disabled}>Submit Order</button>

            </div>    
        </div>
    </form>
    )
}

export default Form;