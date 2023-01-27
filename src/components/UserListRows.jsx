import UserRow from './UserRow';

const UserListRows = ({ users, toggleUserActive }) => {
	/* Comprovamos si existe usuarios, si lo hay lo pintamos */
	if (!users.length) return <p>No hay usuario</p>;

	return users.map(user => (
		<UserRow key={user.id} toggleUserActive={toggleUserActive} {...user} />
	));
};

export default UserListRows;
