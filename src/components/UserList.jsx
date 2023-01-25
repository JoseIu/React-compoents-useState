import { useState } from 'react';
import style from './UserList.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');

	const useresFiltered = filterUsersByName(users, search);
	const useresRendered = renderUsers(useresFiltered);

	// console.log(users);
	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>

			<input
				className={style.search}
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>

			{useresRendered}
		</div>
	);
};

/* Filtramos por lo que escriba */
const filterUsersByName = (users, search) => {
	if (!search) return users;
	const normalizedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(normalizedSearch)
	);
};

/* Renderizamos el resultado de la busqueda */
const renderUsers = users => {
	/* Comprovamos si existe usuarios, si lo hay lo pintamos */
	if (users <= 0) return <p>NO hay usuario</p>;

	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
