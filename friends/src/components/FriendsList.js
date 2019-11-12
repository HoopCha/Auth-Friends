import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from './AddFriend';
import styled from 'styled-components'

const FriendCard = styled.div `
margin: 2% 5%;
width:20%;
text-align:center;
background:white;
border-radius:5px;
border:2px solid darkgrey;
`

const Div = styled.div `
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`

const ButtonDiv = styled.div `
    margin-bottom:3%;
        
`

const EditButton = styled.button `
    font-size:1em;
    margin-right:3%;
        :hover{
            background:yellow;
        }
`

const DeleteButton = styled.button `
    font-size:1em;
        :hover{
            background:red;
            color:white;
        }
`

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const [editingFriend, setEditingFriend] = useState ()


    useEffect(() => {
      const getFriends = () => {
        axiosWithAuth()
          .get('/friends')
          .then(response => {
            setFriends(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getFriends();
    },[friends]);
    

    const deleteFriend = id => {
        axiosWithAuth().delete(`/friends/${id}`)
        .then(res => {
          //updates the rendering so the friend is removed
          setFriends(res.data);
        })
        .catch(err => console.log (err.response))
      }

      const editFriend = friend => {
        setEditingFriend(friend);
      }

        return (
            <>
                <AddFriend friends={friends} editingFriend={editingFriend} setEditingFriend={setEditingFriend}/>
                <Div>
                    {friends.map(friend => (
                        <FriendCard key={friend.id}>
                            <h2>{friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                            <ButtonDiv>
                                <EditButton onClick={()=>editFriend(friend)}>Edit Info</EditButton>
                                <DeleteButton onClick={()=>deleteFriend(friend.id)}>Delete</DeleteButton>
                            </ButtonDiv>
                        </FriendCard>
                    ))}
                </Div>
            </>
        )
}
export default FriendsList