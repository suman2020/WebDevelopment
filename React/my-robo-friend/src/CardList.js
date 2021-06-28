import React from 'react';
import Card from './Card';


const CardList = ({Robots}) =>
{
	const CardComponent = Robots.map((user,i) =>{
		return (<Card key = {i} id = {user.id} name = {user.name} email = {user.email }/>)
	})
	return(
		<div>
		    {CardComponent}
		    
  		</div>
		);
}

export default CardList;