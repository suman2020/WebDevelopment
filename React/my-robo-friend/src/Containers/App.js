 import React, {useState, useEffect} from 'react';
import CardList from '../Components/CardList';
// import { Robots } from '../Components/robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';


// class always has a render that returns something
function App() {
	/*
	constructor(){
		super(); // cause we are using the properties of Component: the parent
		// STATE: an object that describes our application
		this.state = {
			robots: [],
			searchField : ''
		}
		console.log('I am constructor');
	}
	*/

	// use of Hooks
	const [robots, setRobots] = useState([]);
	const [searchField,setSearchField] = useState('');

	const onSearchChange= (event)=>{
		// not this.state.searchfield = ..... )(must always use setstate when there is change in state eg. the value inside searchfield)
		//this.setState({searchField: event.target.value});
		setSearchField(event.target.value);
	}
	/*
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => this.setState({robots:users}))

		console.log('Helllo what up. this is ComposeDidMount()')
	}
	*/
	
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
	console.log("Render");
	return (

		<div className = 'tc'>
			<h1 > Robot Friends </h1>
			<SearchBox searchChange = {onSearchChange} /> 
			<Scroll>
				<ErrorBoundary>
					<CardList Robots = {filterRobots} />
				</ErrorBoundary>		
			</Scroll>
		</div>
		);
	
}



export default App;