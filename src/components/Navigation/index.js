import { Component } from 'react';
import NavigationLink from './NavigationLink';
import styles from './styles.css';

export default class Navigation extends Component {
	render() {
		return (
			<div className={styles.navigation}>
				<NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink>
				<NavigationLink to="/posts">Posts (thunk)</NavigationLink>
				<NavigationLink to="/albums">Albums (saga)</NavigationLink>
			</div>
		);
	}
}
