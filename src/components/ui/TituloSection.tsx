const TituloSection = ({
	icon,
	label,
}: {
	icon: JSX.Element;
	label: string;
}) => {
	return (
		<div className='flex gap-2 items-center'>
			{/* icono titulo */}
			<div className='w-11 h-11 flex justify-center items-center bg-[#6A2C70] text-white rounded-md'>
				{icon}
			</div>
			{/* texto titulo */}
			<h2 className='text-2xl font-medium'>{label}</h2>
		</div>
	);
};

export default TituloSection;
