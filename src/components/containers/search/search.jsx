import React from 'react';
import SearchBar from '../../include/SearchBar/SearchBar';
import List from '../../include/list/list';
import s from './search.less';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state={
      searchData: [],
      searchBol: true
		}
	}
	changeState = (type,value) => {
    if(type == 'searchData'){
      this.setState({
        searchData: value
      })
    }else if(type == 'searchBol') {
      this.setState({
        searchBol: value
      })
    }
  }
	render() {
		return (
			<div className='page'>
				<SearchBar changeState={this.changeState} disabled={false} placeholder="搜索应用" />
				<div className={`${s.wrap} page-content`}>
					<div className={s.msg} style={this.state.searchBol?null:{"display":"none"}}>搜索感兴趣的应用</div>
					<div className={s.list}>
						<List data={this.state.searchData} />
					</div>
				</div>
			</div>
			)
	}
}

export default Search;