import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component {
	
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const jsList = list.toJS();
		const pageList = [];

		if (jsList.length) {
			for ( let i = (page-1) * 10; i<page * 10; i++ ) {
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
				<SearchInfoTitle>
					Hot Search
					<SearchInfoSwitch onClick={() => handleChangePage}>Change</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

	render() {
		const { focused, handleInputFocus, handleInputBlur, list } = this.props;
		return(
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>Main</NavItem>
					<NavItem className='left'>Download</NavItem>
					<NavItem className='right'>Login</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}>
							</NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont': 'iconfont'}>&#xe687;</i>
						{this.getListArea()}	
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe708;</i>
						Write
					</Button>
					<Button className='reg'>Sign-in</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page:state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLease());
		},
		handleChangePage(page, totalPage) {
			if (page < totalPage){
				dispatch(actionCreators.change(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
			
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
