import UserList from './components/UserList';

const USERS = [
	{
		id: 0,
		name: 'Joselu',
		active: true,
		role: 'teacher'
	},
	{
		id: 1,
		name: 'Carlos',
		active: true,
		role: 'student'
	},
	{
		id: 2,
		name: 'Vincent',
		active: false,
		role: 'peet'
	},
	{
		id: 3,
		name: 'Katerio',
		active: false,
		role: 'peet'
	},
	{
		id: 4,
		name: 'Paquito',
		active: false,
		role: 'student'
	},
	{
		id: 5,
		name: 'Raúl',
		active: true,
		role: 'teacher'
	},
	{
		id: 6,
		name: 'Raquel',
		active: true,
		role: 'student'
	},
	{
		id: 7,
		name: 'David',
		active: false,
		role: 'student'
	},
	{
		id: 8,
		name: 'Magus',
		active: false,
		role: 'student'
	},
	{
		id: 9,
		name: 'Javier',
		active: true,
		role: 'teacher'
	}
];

const App = () => <UserList initialUseres={USERS}></UserList>;

export default App;
