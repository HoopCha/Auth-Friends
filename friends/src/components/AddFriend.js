import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'

const H1 = styled.h1 `
    margin: 3% 0 2%;
    padding-top:1%;
`

const Div = styled.div `
    text-align:center;
    height:150px;
    width:40%;
    margin: auto;
    background:#82D4BB;
`

const Form = styled.form `
`

const Input = styled.input `
    padding: 5px;
    margin: 5px;
`

const Button = styled.button `
    border-radius:5px;
    background:white
    width:10%;
    font-size:1em;
        :hover{background:#74776B;
        color:white;
        }
`

const AddFriend = (props) => {

    const initialValue = {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    }

    const [friend, setFriend] = useState(initialValue)

    const clearState = () => {
        setFriend(props.friends.name = "", props.friends.age = "", props.friends.email = "");
      };

    const handleChanges = event => {
        setFriend({
            ...friend,
             [event.target.name]: event.target.value
        })
   }

   const submitItem = event => {
        event.preventDefault();
        axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
          setFriend(res.data)
      })
      .then(clearState)
      .catch(err => console.log(err.res));
  }
   

    return (
        <>
            <Div>
                <H1>Add New Friend</H1>
                <Form onSubmit={submitItem}>
                    <Input 
                    type="text"
                    name="name"
                    value={props.friends.name}
                    onChange={handleChanges}
                    placeholder='Name'
                    />
                    <Input 
                    type="text"
                    name="age"
                    value={props.friends.age}
                    onChange={handleChanges}
                    placeholder='Age'
                    />
                    <Input 
                    type="text"
                    name="email"
                    value={props.friends.email}
                    onChange={handleChanges}
                    placeholder='Email'
                    />
                    <Button>Add</Button>
                </Form>
            </Div>
        </>
    )
    
}
export default AddFriend