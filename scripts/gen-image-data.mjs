import { imageSize as sizeOf } from 'image-size'
import { readdirSync, writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dir = join(__dirname, '../public/images')

const files = readdirSync(dir)
  .filter(f => f.endsWith('.JPG') || f.endsWith('.jpg'))
  .sort()

const images = files.map(file => {
  const buf = readFileSync(join(dir, file))
  const { width, height } = sizeOf(buf)
  return { src: file, width, height }
})

writeFileSync(
  join(__dirname, '../src/data/images.js'),
  `export const IMAGES = ${JSON.stringify(images, null, 2)}\n`
)

console.log(`Generated ${images.length} images`)
