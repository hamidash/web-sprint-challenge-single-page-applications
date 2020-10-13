import React, {useState, useEffect} from "react";
import {Link, Route} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const fromSchema = yup.object().shape({
    name: yup
            .string()
            .required('Name is required')
            .min(3,'Name is too short, get a better name')
            .matches(/[a-zA-Z]/, "Name can only contain Latin letters")
})

function PizzaForm() {

    const [formState, setFormState] = useState({
        name:"",
        size:"",
        peperoni:false,
        olive: false,
        chicken:false,
        mushrooms:false,
        instruction:""
    });

    const[buttonDisabled, setButtonDisabled] = useState(true);

    const[order,setOrder] = useState([]);

   
    useEffect(() => {
        fromSchema.isValid(formState).then(valid=> {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    function inputChange(e){
        const newFormState = {
            ...formState,
            [e.target.name]:e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        setFormState(newFormState);
    }

    

    function submitHandler(e){
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users', formState)
            .then(res => {
                setOrder(res.data);
                console.log(order);

                setFormState({
                    name:"",
                    size:"",
                    peperoni:false,
                    olive: false,
                    chicken:false,
                    mushrooms:false,
                    instruction:""
                })
            })
            .catch(err => {
                alert(`Couldn't process the order`)
                console.log(err.response);
    });
    }

    return(
        <form onSubmit={submitHandler} name="orderForm">
            <label htmlFor="name">
                <p>Please enter your name below</p>
                <input type="text" name="name" onChange={inputChange} value={formState.name}/>
            </label>
            <label htmlFor="size">
                 <p> Please select size below</p>  
                <select id="size" name="size" onChange={inputChange} value={formState.size}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </label>
            <p>Please check toppings below</p> 
            <label htmlFor="peperoni" className="topping" value={formState.peperoni}>
                <input
                type="checkbox"
                name="peperoni"
                checked={formState.peperoni}
                onChange={inputChange}
                />
                Peperoni
            </label>
            <label htmlFor="olive" className="topping" value={formState.olive}>
                <input
                type="checkbox"
                name="olive"
                checked={formState.olive}
                onChange={inputChange}
                />
                Olive
            </label>
            <label htmlFor="chicken" className="topping" value={formState.chicken}>
                <input
                type="checkbox"
                name="chicken"
                checked={formState.chicken}
                onChange={inputChange}
                />
                Chicken
            </label>
            <label htmlFor="mushroom" className="topping" value={formState.mushroom}>
                <input
                type="checkbox"
                name="mushroom"
                checked={formState.mushroom}
                onChange={inputChange}
                />
                Mushroom
            </label>

            <label htmlFor="instruction" value={formState.instruction}>
                Any special instructions?
                <textarea
                name="instruction"
                value={formState.instruction}
                onChange={inputChange}
                />
                
            </label>

            <button disabled={buttonDisabled}>Add to Order</button>
            <pre>{JSON.stringify(order, null, 2)}</pre>

        </form>
    )
}

export default PizzaForm;
