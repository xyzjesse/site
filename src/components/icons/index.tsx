function SuitcaseIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.66668 1.5C5.39579 1.5 4.33334 2.56244 4.33334 3.83333V5.16667H2.66668C1.9303 5.16667 1.33334 5.76362 1.33334 6.5V13.1667C1.33334 13.9031 1.9303 14.5 2.66668 14.5L4.33334 14.5C4.33334 15.7897 6.33334 15.7897 6.33334 14.5H9.66668C9.66668 15.7897 11.6667 15.7897 11.6667 14.5L13.3333 14.5C14.0697 14.5 14.6667 13.9031 14.6667 13.1667V6.5C14.6667 5.76362 14.0697 5.16667 13.3333 5.16667H11.6667V3.83333C11.6667 2.56244 10.6042 1.5 9.33334 1.5H6.66668ZM9.66668 5.16667V3.83333C9.66668 3.65652 9.51015 3.5 9.33334 3.5H6.66668C6.48987 3.5 6.33334 3.65652 6.33334 3.83333V5.16667H9.66668Z"
				fill="currentColor"
			/>
			<path
				d="M4.33334 5.41667H4.58334V5.16667V3.83333C4.58334 2.70052 5.53386 1.75 6.66668 1.75H9.33334C10.4662 1.75 11.4167 2.70052 11.4167 3.83333V5.16667V5.41667H11.6667H13.3333C13.9317 5.41667 14.4167 5.90169 14.4167 6.5V13.1667C14.4167 13.765 13.9317 14.25 13.3333 14.25L11.6667 14.25L11.4167 14.25V14.5C11.4167 14.7516 11.3219 14.9235 11.1912 15.0359C11.0553 15.1528 10.8656 15.2173 10.6667 15.2173C10.4677 15.2173 10.2781 15.1528 10.1422 15.0359C10.0114 14.9235 9.91668 14.7516 9.91668 14.5V14.25H9.66668H6.33334H6.08334V14.5C6.08334 14.7516 5.98858 14.9235 5.85786 15.0359C5.72192 15.1528 5.53228 15.2173 5.33334 15.2173C5.13441 15.2173 4.94476 15.1528 4.80883 15.0359C4.6781 14.9235 4.58334 14.7516 4.58334 14.5V14.25L4.33334 14.25L2.66668 14.25C2.06837 14.25 1.58334 13.765 1.58334 13.1667V6.5C1.58334 5.90169 2.06837 5.41667 2.66668 5.41667H4.33334ZM9.66668 5.41667H9.91668V5.16667V3.83333C9.91668 3.51845 9.64822 3.25 9.33334 3.25H6.66668C6.35179 3.25 6.08334 3.51845 6.08334 3.83333V5.16667V5.41667H6.33334H9.66668Z"
				stroke="url(#paint0_linear_467_516)"
				strokeOpacity="0.3"
				strokeWidth="0.5"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_467_516"
					x1="8.00001"
					y1="0.722222"
					x2="8.00001"
					y2="15.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset="1" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function TerminalIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.66666 11.8335L6.66666 7.8335L2.66666 3.8335"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 13.1665H13.3333"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function NextJSIcon() {
	return (
		<svg
			role="img"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 15.207L5.58542 4H4V11.7914H5.26833V5.6654L13.0044 16C13.3534 15.7584 13.686 15.4934 14 15.207Z"
				fill="url(#a)"
			/>
			<path d="M11.6434 4H10.3869V11.7947H11.6434V4Z" fill="url(#b)" />
			<defs>
				<linearGradient
					id="a"
					x1="9.75867"
					y1="10.7662"
					x2="13.627"
					y2="15.4033"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" />
					<stop offset="1" stopColor="currentColor" stopOpacity="0" />
				</linearGradient>
				<linearGradient
					id="b"
					x1="11.0152"
					y1="4"
					x2="10.9927"
					y2="9.72422"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="currentColor" />
					<stop offset="1" stopColor="currentColor" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export { SuitcaseIcon, TerminalIcon };
