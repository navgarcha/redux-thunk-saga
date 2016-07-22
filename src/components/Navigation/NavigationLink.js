import { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class NavigationLink extends Component {
	render() {
		return (
			<Link {...this.props} activeClassName={styles.active} />
		);
	}
}
