import Link from 'next/link';

export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto w-fit">
			<div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_640px_1fr]">
				<nav className="left-0 top-12 mb-0 mr-6 h-fit pt-2 sm:sticky">
					<Link className="group flex text-sm italic text-neutral-200 hover:text-white" href="/">
						<span className="icon-right-hook-arrow mr-2 inline-block rotate-180 pt-px" />
						<span className="group-hover:underline">Home</span>
					</Link>
				</nav>
				{children}
			</div>
		</div>
	);
}