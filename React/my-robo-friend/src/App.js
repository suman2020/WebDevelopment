 import React from 'react';
import CardList from './CardList';
// import { Robots } from './robots';
import SearchBox from './SearchBox';


// class always has a render that returns something
class App extends React.Component{
	constructor(){
		super(); // cause we are using the properties of Component: the parent
		// STATE: an object that describes our application
		this.state = {
			robots: [],
			searchField : ''
		}
		console.log('I am constructor');
	}

	onSearchChange= (event)=>{
		// not this.state.searchfield = ..... )(must always use setstate when there is change in state eg. the value inside searchfield)
		this.setState({searchField: event.target.value});
	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => this.setState({robots:users}))

		console.log('Helllo what up. this is ComposeDidMount()')
	}

	render(){
		const filterRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		console.log("Render");
		return (

			<div className = 'tc'>
				<h1 > Robot Friends </h1>
				<SearchBox searchChange = {this.onSearchChange} /> 

				<CardList Robots = {filterRobots} />
			</div>
			);
	}
}



export default App;