'use client';

import { satoshi } from '@/styles/fonts';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import {
	CSSProperties,
	HTMLAttributes,
	PropsWithChildren,
	SyntheticEvent,
	useEffect,
	useRef,
	useState
} from 'react';
import { TimelineSlider } from './timeline-slider';
import { VolumeSlider } from './volume-slider';

type AudioEvent = SyntheticEvent<HTMLAudioElement, Event>;

type Track = {
	theme: CSSProperties;
	uri: string;
	name: string;
	coverArt: {
		url: string;
	};
	duration: {
		totalMilliseconds: number;
	};
	previews: {
		audioPreviews: {
			items: {
				url: string;
			}[];
		};
	};
	artists: {
		items: {
			uri: string;
			profile: {
				name: string;
			};
		}[];
	};
};

const tracks: Track[] = [
	{
		theme: {
			'--widget-50': '247 248 237',
			'--widget-100': '236 240 215',
			'--widget-200': '219 226 180',
			'--widget-300': '194 207 135',
			'--widget-400': '169 186 97',
			'--widget-500': '140 159 67',
			'--widget-600': '104 120 48',
			'--widget-700': '84 97 42',
			'--widget-800': '68 78 38',
			'--widget-900': '59 67 36'
		} as CSSProperties,
		uri: 'spotify:track:4NsPgRYUdHu2Q5JRNgXYU5',
		name: 'Sweden',
		coverArt: {
			url: '/images/c418-sweden-thumbnail.png'
		},
		duration: {
			totalMilliseconds: 30000 //215500
		},
		previews: {
			audioPreviews: {
				items: [
					{
						url: 'https://p.scdn.co/mp3-preview/d9913e7d4c6d570eb5a99183bf5bea6455184da1'
					}
				]
			}
		},
		artists: {
			items: [
				{
					uri: 'spotify:artist:4uFZsG1vXrPcvnZ4iSQyrx',
					profile: {
						name: 'C418'
					}
				}
			]
		}
	}
];

export function SpotifyWidget() {
	const videoRef = useRef<HTMLAudioElement | null>(null);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const [isPlaying, setIsPlaying] = useState(Boolean(videoRef.current?.paused));
	const [isLoading, setIsLoading] = useState(true);

	const track = tracks[0]!;

	function handleTimelineSeek(value: number) {
		if (!videoRef.current) {
			return;
		}

		const currentTimeSeconds = value / 1000;
		videoRef.current.currentTime = currentTimeSeconds - 0.1;
	}

	const handleVolumeChange = (volume: number) => {
		if (!videoRef.current) {
			return;
		}

		videoRef.current.volume = volume;
	};

	function handleVideoTimeUpdate(event: AudioEvent) {
		setCurrentTime(event.currentTarget.currentTime * 1000);
	}

	function handleAudioLoaded() {
		if (!videoRef.current) {
			return;
		}

		setIsLoading(false);
		setDuration(videoRef.current?.duration * 1000);
	}

	useEffect(() => {
		handleAudioLoaded();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [videoRef.current]);

	return (
		<div
			style={track.theme as CSSProperties}
			className={cn(
				'not-prose h-[84px] w-[364px] overflow-hidden rounded-lg border border-widget-700/80 bg-widget-800/80 p-0.5 font-satoshi text-widget-200 backdrop-blur-sm transition-colors',
				satoshi.variable
			)}
		>
			<audio
				ref={videoRef}
				src={track.previews.audioPreviews.items[0]?.url}
				onPause={() => setIsPlaying(false)}
				onPlay={() => setIsPlaying(true)}
				onTimeUpdate={handleVideoTimeUpdate}
				onLoadedData={handleAudioLoaded}
			/>

			<div className="flex">
				<Thumbnail
					loading={isLoading}
					src={track.coverArt.url}
					alt={`Cover art for ${track.name} by ${track.artists.items[0]?.profile.name}`}
				>
					<Controls
						isPlaying={isPlaying}
						onPause={() => videoRef.current?.pause()}
						onPlay={() => videoRef.current?.play()}
					/>
				</Thumbnail>

				<div className="flex flex-1 gap-1 px-3 py-2">
					<div className="flex flex-1 flex-col">
						<TrackInfo loading={isLoading} className="flex-grow" track={track} />

						<TimelineSlider
							loading={isLoading}
							data={{
								timelinePosition: currentTime,
								timelineStartTime: 0,
								timelineEndTime: duration
							}}
							onSeek={handleTimelineSeek}
						/>
					</div>

					{/* Volume Slider */}
					<span className="pl-2">
						<VolumeSlider loading={isLoading} volume={0.5} onVolumeChange={handleVolumeChange} />
					</span>
				</div>
			</div>
		</div>
	);
}

type TrackInfoBaseProps = {
	loading?: boolean;
	track: Track;
};
type TrackInfoProps = TrackInfoBaseProps & HTMLAttributes<HTMLDivElement>;

function TrackInfo({ loading = false, track, className }: TrackInfoProps) {
	if (loading) {
		return (
			<div className="-mt-0.5 flex-1 animate-pulse space-y-1">
				<div className="h-3.5 w-1/2 rounded-full bg-widget-600" />
				<div className="h-3 w-1/4 rounded-full bg-widget-600" />
			</div>
		);
	}

	return (
		<div className={cn('-mt-1 -space-y-1', className)}>
			<Link
				className={
					'-mx-px inline-block max-w-full truncate rounded-sm px-px text-base font-medium leading-none outline-offset-2 hover:text-widget-100 hover:underline'
				}
				href={track.uri}
			>
				{track.name}
			</Link>
			<div className="flex gap-1">
				{track.artists.items.map((item) => (
					<Link
						key={item.profile.name}
						className={
							'max-w-full truncate rounded-sm text-xs outline-offset-2 hover:text-widget-100 hover:underline'
						}
						href={item.uri}
					>
						{item.profile.name}
					</Link>
				))}
			</div>
		</div>
	);
}

type ThumbnailProps = {
	loading?: boolean;
	src: string;
	alt: string;
};
function Thumbnail({ loading = false, src, alt, children }: PropsWithChildren<ThumbnailProps>) {
	if (loading) {
		return (
			<div className="relative h-[78px] w-[78px] overflow-hidden rounded-md border border-widget-700">
				<div className="h-full w-full animate-pulse bg-widget-700" />
			</div>
		);
	}

	return (
		<div className="group relative h-[78px] w-[78px] self-center overflow-hidden rounded-md border border-widget-700">
			<Image className="sticky inset-0" alt={alt} src={src} width="76" height="76" />
			<div
				onAnimationStart={(event) =>
					(event.currentTarget.dataset['active'] = String(event.animationName === 'slide-in'))
				}
				className={cn(
					'absolute bottom-0 left-0 z-10 flex w-full items-center justify-center py-1 pt-2',
					'bg-gradient-to-b from-transparent via-widget-700/80 to-widget-800',
					'translate-y-full animate-slide-out transition-transform [animation-delay:1s]',
					'group-focus-within:animate-slide-in group-focus-within:delay-0 group-hover:animate-slide-in group-hover:[animation-delay:0] [&[data-active=true]]:translate-y-0'
				)}
			>
				{children}
			</div>
		</div>
	);
}

type ControlsProps = {
	isPlaying: boolean;
	onPlay?: () => void;
	onPause?: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
};

function Controls({ isPlaying, onNext, onPause, onPlay, onPrevious }: ControlsProps) {
	return (
		<div className="pointer-events-auto flex">
			<button
				className="flex h-5 w-5 cursor-default flex-col items-center justify-center rounded-sm text-widget-200 outline-none outline-offset-2 transition-colors hover:text-widget-50"
				onClick={onPrevious}
			>
				<PreviousIcon />
			</button>
			{!isPlaying && (
				<button
					className="flex h-5 w-5 cursor-default flex-col items-center justify-center rounded-sm text-widget-200 outline-none outline-offset-2 transition-colors hover:text-widget-50"
					onClick={onPlay}
				>
					<PlayIcon />
				</button>
			)}
			{isPlaying && (
				<button
					className="flex h-5 w-5 cursor-default flex-col items-center justify-center rounded-sm text-widget-200 outline-none outline-offset-2 transition-colors hover:text-widget-50"
					onClick={onPause}
				>
					<PauseIcon />
				</button>
			)}
			<button
				className="flex h-5 w-5 cursor-default flex-col items-center justify-center rounded-sm text-widget-200 outline-none outline-offset-2 transition-colors hover:text-widget-50"
				onClick={onNext}
			>
				<NextIcon />
			</button>
		</div>
	);
}

function PauseIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="currentColor"
				d="M5 6a1 1 0 0 1 2 0v4.65a1 1 0 1 1-2 0V6Zm4 0a1 1 0 0 1 2 0v4.65a1 1 0 1 1-2 0V6Z"
			/>
		</svg>
	);
}
function NextIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="currentColor"
				d="M5 5.52a.47.47 0 0 1 .765-.367l3.482 2.785a.47.47 0 0 1 0 .735L5.765 11.46A.47.47 0 0 1 5 11.092V5.52ZM9.5 6a1 1 0 0 1 2 0v4.65a1 1 0 1 1-2 0V6Z"
			/>
		</svg>
	);
}
function PreviousIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="currentColor"
				d="M11.5 11.13a.47.47 0 0 1-.765.367L7.253 8.712a.47.47 0 0 1 0-.735l3.482-2.786a.47.47 0 0 1 .765.368v5.57ZM7 10.65a1 1 0 1 1-2 0V6a1 1 0 0 1 2 0v4.65Z"
			/>
		</svg>
	);
}
function PlayIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="currentColor"
				d="M6 5.468a.5.5 0 0 1 .815-.388l3.398 2.752a.5.5 0 0 1-.006.782l-3.398 2.67A.5.5 0 0 1 6 10.891V5.468Z"
			/>
		</svg>
	);
}