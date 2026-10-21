// Makes a light copy of each post picture, for WhatsApp, LinkedIn and X previews.
// The whole picture is kept. It sits in the middle of a wide card,
// and the empty sides are filled with the picture's own paper colour.
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

// Reads the colour of the top-left corner, so the side fill matches the paper.
async function paperColour(file) {
  const { data } = await sharp(file)
    .flatten({ background: "#fbfaf7" })
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { r: data[0], g: data[1], b: data[2] };
}

const sources = fs
  .readdirSync(folder)
  .filter((f) => /\.(png|jpe?g)$/i.test(f) && !/-share\.jpg$/i.test(f));

for (const file of sources) {
  const name = file.replace(/\.(png|jpe?g)$/i, "");
  const input = path.join(folder, file);
  const out = path.join(folder, `${name}-share.jpg`);
  const background = await paperColour(input);

  let quality = 85;
  let buffer;
  do {
    buffer = await sharp(input)
      .flatten({ background })
      .resize(1200, 630, { fit: "contain", background })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    quality -= 5;
  } while (buffer.length > maxBytes && quality >= 40);

  fs.writeFileSync(out, buffer);
  console.log(`${name}-share.jpg  ${Math.round(buffer.length / 1024)} KB`);
}