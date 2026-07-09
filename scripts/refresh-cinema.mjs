// Regenera la lista de videos LARGOS (sin shorts) para Kazoo Cinema.
// Uso:  YOUTUBE_API_KEY=xxxx node scripts/refresh-cinema.mjs
// Luego pega el resultado en src/config.js (cinemaVideos).
const KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST = "UUYpZdxCsTjOEmFKuVDz7kZQ"; // uploads de @KazooGod02
const MIN_SEC = 181; // > 3 min = video largo (descarta shorts)

if (!KEY) { console.error("Falta YOUTUBE_API_KEY en el entorno."); process.exit(1); }

const isoSec = (d) => { const m = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/); return (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + (+(m[3] || 0)); };

const ids = [];
let page = "";
do {
  const u = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  u.search = new URLSearchParams({ part: "contentDetails", maxResults: "50", playlistId: PLAYLIST, key: KEY, ...(page ? { pageToken: page } : {}) });
  const j = await (await fetch(u)).json();
  ids.push(...j.items.map((i) => i.contentDetails.videoId));
  page = j.nextPageToken || "";
} while (page);

const longs = [];
for (let i = 0; i < ids.length; i += 50) {
  const batch = ids.slice(i, i + 50).join(",");
  const j = await (await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${batch}&key=${KEY}`)).json();
  for (const it of j.items) if (isoSec(it.contentDetails.duration) >= MIN_SEC) longs.push(it.id);
}

console.log(`\n${longs.length} videos largos. Pega esto en src/config.js:\n`);
console.log("cinemaVideos: " + JSON.stringify(longs, null, 0) + ",");
