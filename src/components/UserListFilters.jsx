import style from './UserListFilters.module.css';

const UserListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className={style.form}>
		<input
			className={style.search}
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
		/>
		<div className={style.active}>
			<input
				type='checkbox'
				name='active'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			/>
			<label htmlFor='active'>Sólo activos</label>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
			<option value={0}>Por defecto</option>
			<option value={1}>Por nombre</option>
		</select>
	</form>
);

export default UserListFilters;
