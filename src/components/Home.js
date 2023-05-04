import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
   return(
     <div>
        <h1>Welcome to National Security Service</h1>
        <p>Home page body content</p>
        <Link to="/todo">Todo</Link>
      </div>
   )
}

