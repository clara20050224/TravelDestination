# 🌏 Travel Destination App

## 📖 Deskripsi Singkat
Aplikasi ini menampilkan daftar destinasi wisata dunia seperti Jepang, Korea Selatan, Swiss, Thailand, dan New York.  
Pengguna dapat mengklik salah satu destinasi untuk melihat detail informasi seperti deskripsi, gambar, dan rating.

---

## ⚙️ Komponen Utama
1. **App.jsx**
   - Komponen utama yang menyimpan data dan mengatur state `selectedDestination`.
   - Mengirim data ke komponen anak menggunakan **props**.

2. **DestinationList.jsx**
   - Menampilkan semua destinasi dalam bentuk kartu (card).
   - Menerima data destinasi melalui **props** dari App.jsx.

3. **DestinationCard.jsx**
   - Menampilkan detail singkat (nama, gambar, rating).
   - Mengirim data destinasi ke App.jsx saat diklik.

4. **DestinationDetail.jsx**
   - Menampilkan informasi detail dari destinasi yang dipilih secara dinamis.

---

## 🔄 Penggunaan Props dan State
- **State** digunakan di `App.jsx`:
  ```js
  const [selectedDestination, setSelectedDestination] = useState(null);
