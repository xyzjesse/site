import { CurrentTime } from '@/components/current-time';
import { GitHubRepos } from '@/components/github-repos';
import { NextJSIcon, SuitcaseIcon, TerminalIcon } from '@/components/icons';
import { ProjectCard } from '@/components/project-card';
import { ProjectListItemSkeleton } from '@/components/project-list-item';
import { Section } from '@/components/section';
import { Tooltip } from '@/components/tooltip';
import { getProjects } from '@/lib/projects';
import { cn } from '@/lib/util';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, type PropsWithChildren } from 'react';

export default function Home() {
	return (
		<article className="mx-auto max-w-2xl space-y-8">
			{/* Status Bar */}
			<div className="flex items-center font-mono text-xs">
				<span aria-hidden className="ping" />
				<p>Available for work</p>
				<hr aria-hidden className="mx-3 flex-1 border-theme-600" />
				<CurrentTime />
			</div>
			<div className="space-y-4 text-base">
				{/* Title */}
				<h1 className="text-3xl font-bold">hey, im jesse</h1>

				{/* Introduction */}
				<div className="prose !max-w-full leading-6 -tracking-[0.2px] text-theme-300 dark:prose-invert">
					<p>
						im a junior developer mainly interested in front-end web development, sometimes back-end
						and software development.
					</p>
					<p>
						you can view the source for all my public projects on my{' '}
						<a
							className="no-underline"
							href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
						>
							github
						</a>
						, or read more about my main ones below.
					</p>
				</div>
			</div>

			{/* Sections */}
			<div className="space-y-8">
				<ProjectsSection />
				<OpenSourceSection />
				<TechStackSection />
			</div>
		</article>
	);
}

function ProjectsSection() {
	const projects = getProjects();

	return (
		<Section.Root>
			<Section.Header>
				<Section.Icon>
					<SuitcaseIcon />
				</Section.Icon>
				<Section.Title>projects</Section.Title>
				<Section.Link className="group relative inline-flex gap-1" href="/projects">
					see more <AnimatedRightArrow />
				</Section.Link>
			</Section.Header>
			<Section.Body className="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
				<NoiseGlow className="left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-6 opacity-60" />
				<NoiseGlow className="right-0 top-1/2 hidden h-96 w-32 -translate-y-1/2 translate-x-1/2 opacity-50 sm:block" />
				<NoiseGlow className="bottom-0 h-32 w-full translate-y-2/4 opacity-50" />
				{projects.map((project) => {
					return (
						<ProjectCard
							key={project.slug}
							src={project.metadata.thumbnailURL}
							title={project.metadata.title}
							description={project.metadata.description}
							href={`/projects/${project.slug}`}
						/>
					);
				})}
			</Section.Body>
		</Section.Root>
	);
}

function OpenSourceSection() {
	return (
		<Section.Root>
			<Section.Header>
				<Section.Icon>
					<Image
						unoptimized
						alt="GitHub Mona loading gif"
						className="-scale-x-100"
						src="https://github.githubassets.com/images/mona-loading-dark.gif"
						width={24}
						height={24}
					/>
				</Section.Icon>
				<Section.Title className="-ml-2">open source</Section.Title>
				<Section.Link
					className="group relative inline-flex gap-1"
					href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
				>
					see more <AnimatedRightArrow />
				</Section.Link>
			</Section.Header>
			<Section.Body className="group/parent focus-within:text-theme-400 hover:text-theme-400">
				<Suspense fallback={<ProjectListItemSkeleton />}>
					<GitHubRepos />
				</Suspense>
			</Section.Body>
		</Section.Root>
	);
}

function TechStackSection() {
	return (
		<Section.Root>
			<Section.Header>
				<Section.Icon>
					<TerminalIcon />
				</Section.Icon>
				<Section.Title>what i use</Section.Title>
			</Section.Header>
			<Section.Body className="flex flex-wrap gap-2">
				<StackIcon href="https://figma.com" tooltip="Figma" />
				<StackIcon href="https://code.visualstudio.com" tooltip="VSCode" />
				<StackIcon href="https://www.typescriptlang.org" tooltip="TypeScript" />
				<StackIcon href="https://rust-lang.org" tooltip="Rust" />
				<StackIcon href="https://www.typescriptlang.org" tooltip="React" />
				<StackIcon href="https://tailwindcss.com" tooltip="Tailwind" />
				<StackIcon href="https://tauri.app" tooltip="Tauri" />
				<StackIcon href="https://www.prisma.io" tooltip="Prisma" />
				<StackIcon href="https://nextjs.org" tooltip="NextJS">
					<NextJSIcon />
				</StackIcon>
			</Section.Body>
		</Section.Root>
	);
}

export function StackIcon({
	href,
	tooltip,
	children
}: PropsWithChildren<{ href: string; tooltip: string }>) {
	return (
		<Tooltip tooltip={tooltip}>
			<Link
				aria-label={`Icon for ${tooltip}`}
				target="_blank"
				href={href}
				className={
					'rounded-md border-[0.5px] border-theme-50/10 bg-theme-900 p-[6px] text-theme-300 outline-offset-0 hover:bg-theme-800'
				}
			>
				{!children && (
					<svg role="img" width="16" height="16">
						<use href={`/sprites.svg#${tooltip?.toLowerCase()}`} />
					</svg>
				)}
				{children}
			</Link>
		</Tooltip>
	);
}

function NoiseGlow({ className }: { className: string }) {
	return (
		<span
			className={cn(
				'rendering-pixelated absolute -z-10 bg-[url(/noise.webp)] [mask-image:radial-gradient(black_30%,transparent_80%)]',
				className
			)}
		/>
	);
}

function AnimatedRightArrow() {
	return (
		<div className="transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
			-&gt;
		</div>
	);
}
