import React from 'react';
import CardList from './CardList';
import { Robots } from './robots';
import SearchBox from './SearchBox';



class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: Robots,
			searchField : ''
		}
	}

	onSearchChange= (event)=>{
		this.setState({searchField: event.target.value});
	}

	render(){
		const filterRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
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