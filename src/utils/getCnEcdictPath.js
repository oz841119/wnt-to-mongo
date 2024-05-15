import { fileURLToPath } from 'url';
import path from 'path';
export function getCnEcdictPath() {
  const __filename = fileURLToPath(import.meta.url);
  const currentDirectory = path.dirname(__filename);
  const cnEcdictPath = path.resolve(currentDirectory, '../..', process.env['CN_CSV_PATH']);
  return cnEcdictPath
}