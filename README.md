# Meteor Panorama — Yazılımcı Teslim Paketi

## İçerik
- index.html: Türkçe anasayfa ve SEO meta bilgileri.
- styles.css: Masaüstü/mobil stilleri, animasyonlar ve büyük logo düzenlemesi.
- script.js: Ürün sekmeleri, klavye kontrolleri ve dinamik yıl.
- assets/logo.png: Onaylanan logo taslağı; PNG, vektör değildir.
- assets/hero.png: Yapay zekâ ile oluşturulan temsili mimari görsel; gerçek uygulama referansı değildir.

## Çalıştırma ve yayınlama
Kurulum veya derleme gerekmez. index.html dosyasını tarayıcıda açın.
Yerel sunucu tercih edilirse bu klasörde `python -m http.server 8080` çalıştırın ve http://localhost:8080 adresini açın.
index.html, styles.css, script.js ve assets klasörünü aynı dizin yapısıyla hosting web köküne yükleyin. PHP, Node.js veya veritabanı gerekmez. Harici font/CDN bağımlılığı yoktur.

## Tasarım
Ana mesaj: Sınırları kaldır. Hayata açıl.
Durum: Web sitemiz yapım aşamasında — Çok yakında.
Ürünler: Cam Balkon, Giyotin Cam, Kış Bahçesi; devamında “Ve çok daha fazlası…”.
Ana renkler: #0a1118 (koyu antrasit), #00bce8 (elektrik mavisi), #ffffff (beyaz).
Yazı ailesi: Arial / Helvetica / sans-serif.
Mobil kırılım: 700 px. Büyük ekran düzenlemesi: 1700 px.
Logo beyaz fondaki orijinal PNG üzerinden CSS filtresiyle koyu temaya uyarlanır. Bu efekt kaldırılırsa beyaz zemin görünür; şeffaf veya vektör logo ileride hazırlanabilir.

## İşlevler ve kapsam
“Neler geliyor?” düğmesi ürünler bölümüne kaydırır. Ürün sekmeleri açıklamayı değiştirir; yön tuşları, Home ve End desteklenir. Hareket azaltma tercihi gözetilir.
Form, müşteri kaydı, analitik, WhatsApp veya iletişim entegrasyonu yoktur. Telefon, e-posta, alan adı ve açılış tarihi verilmediğinden eklenmedi.
Açılış tarihi belirlenmediği için geri sayım kullanılmadı.

## Kontrol ve teslim notları
Bu paket son yayınlanan tasarımın HTML/CSS/JS olarak ayrılmış sürümüdür. JavaScript sözdizimi, yerel dosya referansları ve ZIP bütünlüğü kontrol edildi. Tarayıcıda görsel kontrol yapılmadı; yayın öncesi güncel mobil/masaüstü tarayıcılarda kontrol edilmelidir.
Önizleme: https://meteor-panorama.alightgnome7.chatgpt.site
