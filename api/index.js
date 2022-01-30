export default function handler(req, res)
{
	res.status(200).json({
		body: {
			"test": "serverless function"
		},
		query: req.query,
		cookies: req.cookies,
	});
}
