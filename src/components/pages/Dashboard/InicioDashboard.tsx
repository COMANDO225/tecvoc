import { IoSpeedometerSharp } from "react-icons/io5";
import { Fragment } from "react/jsx-runtime";
import TituloSection from "../../ui/TituloSection";
import { FaRegComments, FaRegEye } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const InicioDashboard = () => {
	const datos: {
		icono: JSX.Element;
		texto: string;
		valor: string;
		background: string;
	}[] = [
		{
			icono: <FaRegEye size={32} />,
			texto: "Total Views",
			valor: "112,567",
			background: "#6FEDD6",
		},
		{
			icono: <FaRegComments size={32} />,
			texto: "Total Comments",
			valor: "112,567",
			background: "#C1D5A4",
		},
		{
			icono: <RiShareForwardLine size={32} />,
			texto: "Total Share",
			valor: "112,567",
			background: "#FFD39A",
		},
	];

	return (
		<Fragment>
			{/* titulo */}
			<TituloSection
				icon={<IoSpeedometerSharp size={32} />}
				label='Dashboard'
			/>
			{/* padre grid */}
			<div className='grid grid-cols-3 mt-8 gap-3'>
				{datos.map((dato, indice) => (
					<div
						key={indice}
						className='flex flex-col items-center text-center p-3 py-6 rounded-lg'
						style={{
							backgroundColor: dato.background,
						}}
					>
						{/* icono */}
						<div>{dato.icono}</div>
						{/* texto */}
						<div className='font-medium'>{dato.texto}</div>
						{/* valor */}
						<div className='text-3xl md:text-4xl font-medium'>
							{dato.valor}
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default InicioDashboard;
