import UserList from './components/UserList';

const USERS = [
	{
		username: 'jose',
		name: 'Joselu',
		active: false,
		role: 'teacher'
	},
	{
		username: 'carlos',
		name: 'Carlos',
		active: true,
		role: 'student'
	},
	{
		username: 'vicent',
		name: 'Vincent',
		active: true,
		role: 'other'
	}
];

const App = () => <UserList initialUseres={USERS}></UserList>;

export default App;
