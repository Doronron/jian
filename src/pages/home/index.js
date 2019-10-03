import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Write from './components/Write';
import { actionCreators} from './store';
import  { BackTop } from './style';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
 } from './style';

class Home extends PureComponent {
	
	handleScrollTop() {
		window.scrollTo(0,0);
	}



	render () {


		return (

			<HomeWrapper>
				<HomeLeft>
					<img alt='' className="banner-img" src="https://e2.365dm.com/19/10/768x432/skysports-dele-alli-tammy-abraham_4794270.jpg?20191003142549" />
					<Topic />
					<List />

				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Write />
				</HomeRight>
				{this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>BackTop</BackTop> : null}
				
			</HomeWrapper>

			)
	}  


	componentDidMount() {

	this.props.changeHomeData();
	this.bindEvents();
	}

	componentWillUnmout() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}
}


const mapState = (state) => ({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData(){
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if(document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		} else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});






export default connect(mapState, mapDispatch)(Home)