// Makes a light copy of each post picture, for WhatsApp, LinkedIn and X previews.
// Run:  node scripts/make-share-images.mjs
import fs from "node:fs";
import path from "node:path";

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("The tool 'sharp' was not found. Run:  npm install --save-dev sharp");
  process.exit(1);
}

const folder = path.join(process.cwd(), "public", "images", "posts");
const maxBytes = 250 * 1024; // 250 KB

if (!fs.existsSync(folder)) {
  console.error("Folder not found: " + folder);
  process.exit(1);
}

const sources = fs
  .readdirSync(folder)
  .filter((f) => /\.(png|jpe?g)$/i.test(f) && !/-share\.jpg$/i.test(f));

for (const file of sources) {
  const name = file.replace(/\.(png|jpe?g)$/i, "");
  const out = path.join(folder, `${name}-share.jpg`);

  let quality = 85;
  let buffer;
  do {
    buffer = await sharp(path.join(folder, file))
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .flatten({ background: "#fbfaf7" })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    quality -= 5;
  } while (buffer.length > maxBytes && quality >= 40);

  fs.writeFileSync(out, buffer);
  console.log(`${name}-share.jpg  ${Math.round(buffer.length / 1024)} KB`);
}