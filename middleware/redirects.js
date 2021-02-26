export default function(req, res, next) {
  const redirects = [
    "star",
    "stars",
    "speaker",
    "speakers",
    "streamer",
    "streamers"
  ];
  const url = req.url.split("/");
  if (redirects.includes(url[1])) {
    res.writeHead(301, { Location: `/${url[2]}` });
    res.end();
  } else {
    next();
  }
}
