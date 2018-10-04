const fs = require('fs');

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
fs.writeFile("testAsync.txt", "content of the file - 1" + new Date().getFullYear());
fs.writeFile("testAsync.txt", "content of the file - 2");



fs.writeFileSync("testSync.txt", "content of the file - 1" + new Date().getFullYear());
fs.writeFileSync("testSync.txt", "content of the file - 2");