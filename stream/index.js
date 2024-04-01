const fs = require('fs');

// Buat readable stream dari file input.txt
const readableStream = fs.createReadStream('stream/input.txt', { encoding: 'utf8' });

// Buat writable stream untuk menulis ke file output.txt
const writableStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });

// Pipe readable stream ke writable stream
readableStream.pipe(writableStream);

// Tambahkan event listener untuk menangani ketika proses pipe selesai
writableStream.on('finish', () => {
  console.log('Data telah berhasil ditulis ke file output.txt');
});
