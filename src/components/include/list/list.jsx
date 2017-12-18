import React from 'react';
import s from './list.less';


class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<ul className={s.wrap}>
				{
					this.props.data.map((item,index) => {
						return (
								<li>
									<img src={item.icon} alt=""/>
									<span>{item.text}</span>
								</li>
							)
					})
				}
			</ul>

			)
	}

}

export default List;