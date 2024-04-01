const fs = require('fs');
const path = require('path');

// Mendapatkan path lengkap ke file 'notes.txt' menggunakan path.resolve()
const filePath = path.resolve(__dirname,'notes.txt');

// Membaca isi file notes.txt secara asynchronous
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // Menampilkan isi file di console
});
