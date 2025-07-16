import { DateTime } from "luxon";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse) =>
{
	const props = {
		label: "First Hello World:",
		width: 196,
		leftSize: 100,
		rightSide: 100,
		rightSize: 96,

		duration()
		{
			const secondsSinceIHaveWrittenHelloWorld = 1180664350;
			const now = DateTime.now();
			const dayStart = DateTime.fromSeconds(secondsSinceIHaveWrittenHelloWorld);
			return Math.round(now.diff(dayStart, 'days').toObject().days);
		},
		renderSvg()
		{
			return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="20" aria-label="${this.label}"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="${this.width}" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h${this.leftSize}v20H0z"/><path fill="#97ca00" d="M${this.rightSide} 0h${this.rightSize}v20H${this.rightSide}z"/><path fill="url(#b)" d="M0 0h${this.width}v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="500" y="150" fill="#010101" fill-opacity=".3" textLength="900px" transform="scale(.1)">${this.label}</text><text x="500" y="140" textLength="900px" transform="scale(.1)">${this.label}</text><text aria-hidden="true" x="1450" y="150" fill="#010101" fill-opacity=".3" textLength="850px" transform="scale(.1)">${this.duration()} days ago</text><text x="1450" y="140" textLength="850px" transform="scale(.1)">${this.duration()} days ago</text></g></svg>`;
		}
	};
	
	let res = response.status(200).setHeader('Content-Type', "image/svg+xml");
	res.send(props.renderSvg());
}
