import React, { useState } from 'react';
import BookList from './BookList';



// const { user } = userContext(UserContext)

function  Profile({ user }) {
    return(
  <div>
    <h2>Heyyy! </h2>
    <BookList  /> 
  </div>
    )
}




export default Profile