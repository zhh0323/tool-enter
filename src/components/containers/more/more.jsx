import React from 'react';
import List from '../../include/list/list';
class More extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
				<div className='page'>
					<div className='page-content'>
						<List data={data.lately}/>
					</div>
				</div>
			)
	}
}

export default More;