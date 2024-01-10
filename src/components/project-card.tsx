import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
	src: string;
	title: string;
	description: string;
	href: string;
};

export function ProjectCard(props: ProjectCardProps) {
	return (
		<Link
			className="group rounded-xl border border-white/30 bg-neutral-900 p-1 outline-none transition-colors duration-200 hover:border-white/40 focus-visible:border-2 focus-visible:border-neutral-300"
			href={props.href}
			rel="noreferrer"
		>
			<div className="relative w-full overflow-hidden rounded-lg">
				<span className="fade-overlay">
					<span className="halftone">
						<Image
							className="rendering-pixelated w-full object-fill transition-all duration-200 ease-in-out [filter:grayscale(1)] group-hover:[filter:grayscale(0)] group-focus-visible:[filter:grayscale(0)]"
							src={props.src}
							alt={props.title}
							width={308}
							height={230}
						/>
					</span>
				</span>

				<div
					className={
						'absolute bottom-0 left-0 z-10 w-full p-4 font-sans-display  duration-200 ease-in-out will-change-transform group-hover:-translate-y-[2px]'
					}
				>
					<p className="text-sm font-medium leading-4 text-neutral-50 sm:leading-6">
						{props.title}
					</p>
					<p className="text-sm font-normal leading-4 text-neutral-300 sm:leading-[9px]">
						{props.description}
					</p>
				</div>
			</div>
		</Link>
	);
}
