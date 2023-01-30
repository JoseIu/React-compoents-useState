import UserList from './components/UserList';

const USERS = [
	{
		username: 'jose',
		name: 'Joselu',
		active: true,
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
		active: false,
		role: 'teacher'
	}
];

const App = () => <UserList initialUseres={USERS}></UserList>;

export default App;
