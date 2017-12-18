import React from 'react';
import style from './SearchBar.less'
class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	componentDidMount() {
		
	}

	changeValue = (e) => {
		this.props.changeState('searchData',data.lately);
		this.props.changeState('searchBol',false);
		if(!e.target.value){
			this.props.changeState('searchData',[]);
			this.props.changeState('searchBol',true);
		}
	}
	
	goSearch = () => {
		if(this.props.disabled){
			app.mainView.router.load({
				url: 'p/search.html',
				animatePages: true
			})
		}
	}

	render() {
		return (
				<div className={style.wrap}>
					<div className={style.cont} onClick={this.goSearch}>
						<i></i>
						<input type="text" id='search' onChange={this.changeValue} placeholder={this.props.placeholder} disabled={this.props.disabled}/>
					</div>
				</div>
			)
	}

}

export default SearchBar;