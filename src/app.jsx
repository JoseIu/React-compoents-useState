import UserList from './components/UserList';

const USERS = [
	{
		name: 'Joselu',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Carlos',
		active: true,
		role: 'student'
	},
	{
		name: 'Vincent',
		active: false,
		role: 'peet'
	},
	{
		name: 'Katerio',
		active: false,
		role: 'peet'
	},
	{
		name: 'Paquito',
		active: false,
		role: 'student'
	},
	{
		name: 'Raúl',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Raquel',
		active: true,
		role: 'student'
	},
	{
		name: 'David',
		active: false,
		role: 'student'
	},
	{
		name: 'Magus',
		active: false,
		role: 'student'
	},
	{
		name: 'Javier',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UserList users={USERS}></UserList>;

export default App;
