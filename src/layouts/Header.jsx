

import Title from '../components/Title.jsx';
import TextField from '../components/TextField.jsx';
import IconButton from '../components/IconButton.jsx';
import { FaHeart, FaUserCircle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => (
	<header style={{
		display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px', background: '#fff', borderBottom: '1.5px solid #e0e0e0', gap: 18
	}}>
		<div>
			<Link to="/" style={{ textDecoration: 'none' }}>
				<Title text="HomeFinder" />
			</Link>
		</div>
						<TextField
								placeholder="Search by city, address, or ZIP code"
								style={{ width: 340 }}
								startElement={
									<IconButton style={{ border: 'none', padding: 0 }} title="Search">
										<FaSearch color="#8a5be6" size={18} />
									</IconButton>
								}
						/>
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			<button style={{ background: 'none', border: '1.5px solid #5a4fcf', borderRadius: '50%', padding: 6, cursor: 'pointer', display: 'flex', alignItems: 'center' }} title="Favourites">
				<FaHeart color="#5a4fcf" size={22} />
			</button>
			<Link to="/profile" style={{ display: 'flex' }}>
				<button style={{ background: 'none', border: '1.5px solid #5a4fcf', borderRadius: '50%', padding: 6, cursor: 'pointer', display: 'flex', alignItems: 'center' }} title="Profile">
					<FaUserCircle color="#5a4fcf" size={22} />
				</button>
			</Link>
		</div>
	</header>
);

export default Header;
