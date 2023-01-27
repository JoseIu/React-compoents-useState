import { useState } from 'react';
import { UsersContext } from '../lib/contexts/UsersContext';
import style from './UserList.module.css';
import UserListFilters from './UserListFilters';
import UserListRows from './UserListRows';

const UserList = ({ initialUseres }) => {
	const { search, onlyActive, sortBy, ...setFilterFunctions } = useFilters();

	const { users, toggleUserActive } = useUsers(initialUseres);

	let useresFiltered = filterOnlyActive(users, onlyActive);
	useresFiltered = filterUsersByName(useresFiltered, search);
	useresFiltered = filterBySort(useresFiltered, sortBy);

	// console.log(users);
	return (
		<div className={style.list}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFilterFunctions}
			/>
			<UsersContext.Provider value={{ toggleUserActive }}>
				<UserListRows users={useresFiltered} />
			</UsersContext.Provider>
		</div>
	);
};
/* custom HOOK */
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});
	const setSearch = search =>
		setFilters({
			...filters,
			search
		});

	const setOnlyActive = onlyActive =>
		setFilters({
			...filters,
			onlyActive
		});
	const setSortBy = sortBy =>
		setFilters({
			...filters,
			sortBy
		});

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};
const useUsers = initialUseres => {
	const [users, setUsers] = useState(initialUseres);
	const toggleUserActive = userID => {
		const newUsers = [...users];

		const userIndex = newUsers.findIndex(user => user.id === userID);

		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;
		setUsers(newUsers);
	};
	return { users, toggleUserActive };
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

export default UserList;
