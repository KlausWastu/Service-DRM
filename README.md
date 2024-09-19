Project Microservices ini dirancang sebagai service yang akan diintegrasikan ke dalam SuperApps SPJT. SuperApps tersebut akan memiliki berbagai modul, salah satunya adalah service-DRM. DRM digunakan oleh perusahaan eksternal yang ingin bekerja sama atau menjadi mitra SPJT, di mana perusahaan tersebut diwajibkan untuk mendaftar terlebih dahulu. Saat ini, proses pendaftaran dilakukan melalui formulir Google yang ditempatkan di situs web SPJT. Dengan implementasi service ini, diharapkan proses pendaftaran dapat dilakukan dengan lebih terstruktur dan terintegrasi secara langsung ke dalam sistem SuperApps, sehingga meningkatkan efisiensi dan kemudahan bagi calon mitra.

Sebelum menjalankan aplikasi alangkah lebih baiknya melakukan instalasi dependensi dengan perintah berikut:

~ npm install

Setelah melakukan instalasi dependensi, jangan lupa untuk membuat file .env dengan format berikut:

PORT=

DB_DATABASE=database_name

DB_USERNAME=database_username

DB_PASSWORD=database_password

DB_HOST=localhost

Jangan lupa membuat database terlebih dahulu dan pastikan nama databasenya disesuaikan dengan DB_DATABASE. Setelah membuat database jalankan perintah:

~ npx sequelize db:migrate

Perintah diatas menjalankan pembuatan table/migrations

Jalankan server dan silahkan dicoba menggunakan API berikut:

https://documenter.getpostman.com/view/25757044/2sAXqs6Msd
