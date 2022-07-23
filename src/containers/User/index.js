import '../../style.css';

import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../../components/sidebar';
import Main from './Main';

export default function User() {
	return (
		<div className='App'>
			<Sidebar />
			<Main />
		</div>
	);
}
