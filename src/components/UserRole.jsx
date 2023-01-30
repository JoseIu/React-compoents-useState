import style from './UserRole.module.css';

/* asignamos los coleres a cada rol */
const ROLE_STYLES = {
	teacher: ['Profesor', style.teacher],
	student: ['Alumno', style.student],
	peet: ['Mascota', style.peet],
	other: ['otro', style.other]
};
const UserRole = ({ role }) => {
	/* destructuring de ROLE_STYLES */
	const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;
	return (
		<span className={`${style.roleSpan} ${roleClassname}`}>{roleName}</span>
	);
};
export default UserRole;
