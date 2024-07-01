import { BiMenu } from "react-icons/bi";
import { Outlet } from "react-router-dom";

interface MainSectionProps {
	asideActivo: boolean;
	setAsideActivo: (asideactivo: boolean) => void;
}

const MainSection = ({ asideActivo, setAsideActivo }: MainSectionProps) => {
	return (
		<div>
			{/* barra superior */}
			<div className='w-full border-b h-16 shadow flex items-center justify-between px-4'>
				{/* menu */}
				<button
					className='flex hover:bg-gray-200 w-10 h-10 justify-center items-center rounded-md'
					onClick={() => setAsideActivo(!asideActivo)}
				>
					<BiMenu size={30} />
				</button>
				{/* usuario */}
				<div className=''>
					{/* avatar */}
					<button className='w-10 h-10 bg-gray-400 flex justify-center items-center text-xl font-medium rounded-full'>
						<span className='mt-[-2px]'>A</span>
					</button>
				</div>
			</div>
			<section className='p-4 pt-8'>
				<Outlet />
			</section>
		</div>
	);
};

export default MainSection;
