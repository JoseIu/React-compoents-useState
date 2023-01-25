import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	// console.log(active);
	const activeClasName = active ? style.active : style.inactive;
	return (
		<span className={activeClasName}>{active ? 'Activo' : 'Inactivo'}</span>
	);
};

export default UserStatus;
