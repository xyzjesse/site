'use client';

import { SuitcaseIcon } from '@/components/icons/suitcase-icon';
import { TerminalIcon } from '@/components/icons/terminal-icon';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { usePrettyTime } from '@/hooks/use-pretty-time';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="px-6 pt-8 sm:pt-16 md:px-0">
			<article className="mx-auto flex max-w-[640px] flex-col">
				<div className="flex flex-col gap-3 font-mono text-xs">
					<div className="flex items-center">
						<span aria-hidden className="ping" />
						<p className="flex items-center gap-px">Available for work</p>
						<hr
							aria-hidden
							className="mx-3 flex-1 self-center border-neutral-600 mix-blend-lighten"
						/>
						<CurrentTime />
					</div>
					<div className="relative">
						<Image
							src="/images/header.png"
							alt="Monochromatic image of a bunch of leaves with a halftone effect applied"
							width={640}
							height={150}
						/>
						<Image
							draggable={false}
							className="rendering-pixelated relative mx-auto w-[89.5%] -translate-y-1/2"
							src="/images/name.png"
							alt="My name gradually getting more pixelated with each letter"
							width={572}
							height={108}
						/>
					</div>
				</div>

				<div className="flex flex-col gap-8 text-base">
					<div className="text-sm leading-6 -tracking-[0.2px] text-neutral-100 [&_span]:text-neutral-400">
						<p>
							I&apos;m currently a hobbyist <span>web developer</span> looking for work in{' '}
							<span>front-end development</span>, with a growing interest in back-end and software
							development.
						</p>
						<br />
						<p>
							Recently I&apos;ve been learning <span>Rust</span> in my free time to create desktop
							apps with the <span>Tauri</span> framework.
						</p>
					</div>
					<Section.Root>
						<Section.Header>
							<Section.Icon>
								<SuitcaseIcon />
							</Section.Icon>
							<Section.Title>projects</Section.Title>
							<Section.Link href="/projects">see more -&gt;</Section.Link>
						</Section.Header>
						<Section.Body className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<ProjectCard
								src="/images/projects/pbsrmoto.png"
								title="Pit Bikes Spares &amp; Repairs"
								description="ecommerce store"
								href="/projects/pbsrmoto"
							/>
							<ProjectCard
								src="/images/projects/pbsrmoto.png"
								title="Pit Bikes Spares &amp; Repairs"
								description="ecommerce store"
								href="/projects/pbsrmoto"
							/>
							<ProjectCard
								src="/images/projects/pbsrmoto.png"
								title="Pit Bikes Spares &amp; Repairs"
								description="ecommerce store"
								href="/projects/pbsrmoto"
							/>
							<ProjectCard
								src="/images/projects/pbsrmoto.png"
								title="Pit Bikes Spares &amp; Repairs"
								description="ecommerce store"
								href="/projects/pbsrmoto"
							/>
						</Section.Body>
					</Section.Root>
					<Section.Root>
						<Section.Header>
							<Section.Icon>
								<TerminalIcon />
							</Section.Icon>
							<Section.Title>stack</Section.Title>
						</Section.Header>
						<Section.Body>
							<h1>Hello World</h1>
						</Section.Body>
					</Section.Root>
				</div>
			</article>
		</main>
	);
}

function CurrentTime() {
	const prettyTime = usePrettyTime();
	return <p suppressHydrationWarning>{prettyTime}</p>;
}
