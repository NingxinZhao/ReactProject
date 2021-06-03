import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 58px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
	background-size: contain;
`;

export const NavItem = styled.div`
	line-hight: 56px;
	padding: 0 15px;
	font-size: 17px;
	margin-top: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
	background-size: contain;
`;

export const NavSearch = styled.input.attrs({
	placeholder: 'search'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #777;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 250px;
	}
	&.slide-enter {
		width: 160px;
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-enter-active {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 160px;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont{
		position: absolute;
		right: 5px;
		bottom: 5px;
		line-hight: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-hight: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 12px;
	cursor: pointer;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-hight: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 15px;
	margin-right: 20px;
	padding: 0 20px;
	line-hight: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 17px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;

