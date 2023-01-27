import { useState } from 'react';
import style from './UserList.module.css';
import UserListFilters from './UserListFilters';
import UserRow from './UserRow';

const UserList = ({ initialUseres }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);

	let useresFiltered = filterUsersByName(initialUseres, search);
	useresFiltered = filterOnlyActive(useresFiltered, onlyActive);
	useresFiltered = filterBySort(useresFiltered, sortBy);
	// const useresRendered = renderUsers(useresFiltered);

	// console.log(users);
	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserListFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<UserListRows users={useresFiltered} />
		</div>
	);
};

/* Filtramos por lo que escriba */
const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const normalizedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(normalizedSearch)
	);
};
/* Filtramos solo activos */
const filterOnlyActive = (users, search) => {
	if (!search) return [...users];

	return users.filter(user => user.active);
};
/* filtramos alfabéticamente */
const filterBySort = (users, sortBy) => {
	const usersFiltered = [...users];
	switch (sortBy) {
		case 1:
			return usersFiltered.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return usersFiltered;
	}
};

/* Renderizamos el resultado de la busqueda */
const UserListRows = ({ users }) => {
	/* Comprovamos si existe usuarios, si lo hay lo pintamos */
	if (users <= 0) return <p>NO hay usuario</p>;

	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
