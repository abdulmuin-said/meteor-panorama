/**
 * Meteor Panorama — site script
 * - TR / DE / EN translations (TR prices in ₺, DE/EN in €)
 * - Price calculator + WhatsApp quote link
 * - Product detail modal, contact form -> WhatsApp, mobile menu
 */
document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '905308447736';

  // ---------------------------------------------------
  // Translations
  // ---------------------------------------------------
  const t = {
    tr: {
      nav_products: 'Ürünler', nav_calculator: 'Fiyat Hesapla', nav_production: 'Üretim', nav_contact: 'İletişim',
      hero_place: 'Kayseri · Mimarsinan OSB',
      hero_title: 'Cam balkon, giyotin cam ve kış bahçesi sistemleri',
      hero_lead: "Kayseri'deki tesisimizde her projeyi ölçüye özel üretiyor, Türkiye ve Avrupa'ya teslim ediyoruz.",
      hero_cta_calc: 'Fiyat hesapla', hero_cta_wa: "WhatsApp'tan yazın",
      hero_p1: 'Ölçüye özel üretim', hero_p2: 'Yerinde keşif ve ölçü', hero_p3: 'Türkçe · Deutsch · English',
      prod_title: 'Ürünler',
      prod_desc: 'Balkon, teras ve işletmeler için dört ana sistem. Hepsi ölçünüze göre üretilir.',
      p1_title: 'Isıcamlı Cam Balkon', p1_desc: 'Çift camlı katlanır sistem. Balkonu kışın da kullanılabilir bir odaya dönüştürür.',
      p2_title: 'Motorlu Giyotin Cam', p2_desc: 'Kumandayla dikey açılan cam paneller. Açıkken korkuluk, kapalıyken tam cephe olur.',
      p3_title: 'Kış Bahçesi', p3_desc: 'Alüminyum taşıyıcı ve cam çatıyla bahçe ya da terasta dört mevsim kullanılan alan.',
      p4_title: 'Alüminyum Sürme Sistem', p4_desc: 'İnce profilli, eşiksiz ray seçenekli sürme kapılar. Salonu bahçeye ya da terasa açar.',
      price_from: 'm² başlangıç', btn_details: 'Teknik detay', btn_calc_this: 'Hesapla',
      calc_title: 'Tahmini fiyat hesaplama',
      calc_desc: "Ürünü ve yaklaşık ölçüleri seçin. Sonucu tek tıkla WhatsApp'tan bize gönderebilirsiniz.",
      step1_title: 'Ürün', step2_title: 'Alan şekli', step3_title: 'Ölçüler', step4_title: 'Cam ve profil',
      shape_flat: 'Düz', shape_l: 'L tipi', shape_u: 'U tipi',
      label_width: 'Toplam genişlik (m)', label_height: 'Yükseklik (m)',
      label_glass_type: 'Cam', label_profile_color: 'Profil rengi',
      opt_glass_clear: 'Şeffaf çift cam', opt_glass_fume: 'Füme', opt_glass_bronze: 'Bronz', opt_glass_reflect: 'Reflekte',
      opt_color_anthracite: 'Antrasit (RAL 7016)', opt_color_black: 'Siyah (RAL 9005)', opt_color_white: 'Beyaz (RAL 9016)', opt_color_eloxal: 'Eloksal', opt_color_wood: 'Ahşap desen',
      res_est_title: 'Tahmini fiyat aralığı',
      btn_whatsapp_quote: "Bu ölçülerle WhatsApp'tan teklif iste",
      res_disclaimer: 'Bu tutar bilgi amaçlıdır. Kesin fiyat, yerinde ölçü alındıktan sonra verilir.',
      prod2_title: "Üretim Kayseri'de",
      prod2_p1: "Profil kesiminden cam montajına kadar tüm işlemler Kayseri Mimarsinan Organize Sanayi Bölgesi'ndeki tesisimizde yapılır. Siparişler Türkiye'nin yanı sıra Almanya ve diğer Avrupa ülkelerine de gönderilir.",
      prod2_p2: "Almanya'daki iş ortağımız sayesinde Avrupa'daki müşterilerimizle Almanca iletişim kurabiliyoruz.",
      s1_title: 'Keşif ve ölçü', s1_desc: 'Alanı yerinde ölçer, size uygun sistemi birlikte belirleriz.',
      s2_title: 'Üretim', s2_desc: 'Onaylanan ölçülere göre sistem tesisimizde üretilir.',
      s3_title: 'Teslim ve montaj', s3_desc: 'Ürün korumalı ambalajla gönderilir ve montajı yapılır.',
      contact_title: 'İletişim', contact_addr_title: 'Adres', contact_phone_title: 'Telefon / WhatsApp',
      contact_email_title: 'E-posta', contact_hours_title: 'Çalışma saatleri', contact_hours_val: 'Pazartesi – Cumartesi, 08:30 – 18:30',
      form_title: 'Bize yazın', form_label_name: 'Ad soyad', form_label_phone: 'Telefon', form_label_country: 'Şehir / ülke',
      form_label_interest: 'İlgilendiğiniz ürün', form_opt_other: 'Diğer', form_label_msg: 'Mesajınız', form_btn_send: 'WhatsApp ile gönder',
      area: 'm²', specs_title: 'Teknik bilgiler', modal_calc: 'Bu ürün için fiyat hesapla', modal_wa: "WhatsApp'tan bilgi al"
    },
    de: {
      nav_products: 'Produkte', nav_calculator: 'Preisrechner', nav_production: 'Fertigung', nav_contact: 'Kontakt',
      hero_place: 'Kayseri · Industriegebiet Mimarsinan',
      hero_title: 'Balkonverglasung, Guillotine-Glas und Wintergärten',
      hero_lead: 'Wir fertigen jedes Projekt nach Maß in unserem Werk in Kayseri und liefern in die Türkei und nach Europa.',
      hero_cta_calc: 'Preis berechnen', hero_cta_wa: 'Per WhatsApp schreiben',
      hero_p1: 'Fertigung nach Maß', hero_p2: 'Aufmaß vor Ort', hero_p3: 'Türkçe · Deutsch · English',
      prod_title: 'Produkte',
      prod_desc: 'Vier Systeme für Balkon, Terrasse und Gewerbe – jeweils nach Ihren Maßen gefertigt.',
      p1_title: 'Isolierte Balkonverglasung', p1_desc: 'Faltsystem mit Doppelverglasung. Macht den Balkon auch im Winter nutzbar.',
      p2_title: 'Elektrisches Guillotine-Glas', p2_desc: 'Vertikal fahrende Glaselemente per Fernbedienung. Offen eine Brüstung, geschlossen eine Glasfront.',
      p3_title: 'Wintergarten', p3_desc: 'Aluminiumkonstruktion mit Glasdach – ganzjährig nutzbarer Raum im Garten oder auf der Terrasse.',
      p4_title: 'Aluminium-Schiebesystem', p4_desc: 'Schiebetüren mit schmalen Profilen, auf Wunsch mit schwellenloser Schiene.',
      price_from: 'ab pro m²', btn_details: 'Technische Daten', btn_calc_this: 'Berechnen',
      calc_title: 'Richtpreis berechnen',
      calc_desc: 'Wählen Sie Produkt und ungefähre Maße. Das Ergebnis senden Sie uns mit einem Klick per WhatsApp.',
      step1_title: 'Produkt', step2_title: 'Form', step3_title: 'Maße', step4_title: 'Glas und Profil',
      shape_flat: 'Gerade', shape_l: 'L-Form', shape_u: 'U-Form',
      label_width: 'Gesamtbreite (m)', label_height: 'Höhe (m)',
      label_glass_type: 'Glas', label_profile_color: 'Profilfarbe',
      opt_glass_clear: 'Klares Isolierglas', opt_glass_fume: 'Grau getönt', opt_glass_bronze: 'Bronze', opt_glass_reflect: 'Reflektierend',
      opt_color_anthracite: 'Anthrazit (RAL 7016)', opt_color_black: 'Schwarz (RAL 9005)', opt_color_white: 'Weiß (RAL 9016)', opt_color_eloxal: 'Eloxiert', opt_color_wood: 'Holzdekor',
      res_est_title: 'Geschätzte Preisspanne',
      btn_whatsapp_quote: 'Angebot per WhatsApp anfragen',
      res_disclaimer: 'Unverbindlicher Richtwert. Der genaue Preis folgt nach dem Aufmaß vor Ort.',
      prod2_title: 'Gefertigt in Kayseri',
      prod2_p1: 'Vom Profilzuschnitt bis zur Glasmontage erfolgen alle Arbeitsschritte in unserem Werk im Industriegebiet Mimarsinan in Kayseri. Wir liefern in die Türkei, nach Deutschland und in weitere europäische Länder.',
      prod2_p2: 'Über unseren Partner in Deutschland betreuen wir Kunden in Europa auch auf Deutsch.',
      s1_title: 'Beratung und Aufmaß', s1_desc: 'Wir messen vor Ort und wählen mit Ihnen das passende System.',
      s2_title: 'Fertigung', s2_desc: 'Das System wird nach den freigegebenen Maßen in unserem Werk gefertigt.',
      s3_title: 'Lieferung und Montage', s3_desc: 'Sicher verpackt geliefert und fachgerecht montiert.',
      contact_title: 'Kontakt', contact_addr_title: 'Adresse', contact_phone_title: 'Telefon / WhatsApp',
      contact_email_title: 'E-Mail', contact_hours_title: 'Öffnungszeiten', contact_hours_val: 'Montag – Samstag, 08:30 – 18:30 (TR)',
      form_title: 'Schreiben Sie uns', form_label_name: 'Name', form_label_phone: 'Telefon', form_label_country: 'Stadt / Land',
      form_label_interest: 'Produkt', form_opt_other: 'Sonstiges', form_label_msg: 'Nachricht', form_btn_send: 'Per WhatsApp senden',
      area: 'm²', specs_title: 'Technische Daten', modal_calc: 'Preis für dieses Produkt berechnen', modal_wa: 'Per WhatsApp anfragen'
    },
    en: {
      nav_products: 'Products', nav_calculator: 'Price Calculator', nav_production: 'Production', nav_contact: 'Contact',
      hero_place: 'Kayseri · Mimarsinan Industrial Zone',
      hero_title: 'Balcony glazing, guillotine glass and winter gardens',
      hero_lead: 'We manufacture every project to measure at our plant in Kayseri and deliver across Turkey and Europe.',
      hero_cta_calc: 'Calculate price', hero_cta_wa: 'Message on WhatsApp',
      hero_p1: 'Made to measure', hero_p2: 'On-site survey', hero_p3: 'Türkçe · Deutsch · English',
      prod_title: 'Products',
      prod_desc: 'Four systems for balconies, terraces and businesses – each built to your dimensions.',
      p1_title: 'Insulated Balcony Glazing', p1_desc: 'Double-glazed folding system that makes your balcony usable in winter too.',
      p2_title: 'Motorized Guillotine Glass', p2_desc: 'Remote-controlled vertical glass panels. A balustrade when open, a full glass front when closed.',
      p3_title: 'Winter Garden', p3_desc: 'Aluminium frame with glass roof – a year-round room in your garden or on your terrace.',
      p4_title: 'Aluminium Sliding System', p4_desc: 'Slim-profile sliding doors with an optional flush threshold.',
      price_from: 'from per m²', btn_details: 'Specifications', btn_calc_this: 'Calculate',
      calc_title: 'Price estimate',
      calc_desc: 'Choose the product and approximate size. Send us the result on WhatsApp with one click.',
      step1_title: 'Product', step2_title: 'Layout', step3_title: 'Dimensions', step4_title: 'Glass and frame',
      shape_flat: 'Straight', shape_l: 'L-shape', shape_u: 'U-shape',
      label_width: 'Total width (m)', label_height: 'Height (m)',
      label_glass_type: 'Glass', label_profile_color: 'Frame colour',
      opt_glass_clear: 'Clear double glazing', opt_glass_fume: 'Grey tint', opt_glass_bronze: 'Bronze', opt_glass_reflect: 'Reflective',
      opt_color_anthracite: 'Anthracite (RAL 7016)', opt_color_black: 'Black (RAL 9005)', opt_color_white: 'White (RAL 9016)', opt_color_eloxal: 'Anodised', opt_color_wood: 'Wood finish',
      res_est_title: 'Estimated price range',
      btn_whatsapp_quote: 'Request a quote on WhatsApp',
      res_disclaimer: 'For guidance only. The final price is confirmed after an on-site survey.',
      prod2_title: 'Made in Kayseri',
      prod2_p1: 'From profile cutting to glass fitting, all work is done at our plant in the Mimarsinan Organised Industrial Zone in Kayseri. We deliver within Turkey, to Germany and to other European countries.',
      prod2_p2: 'Through our partner in Germany we can also support European customers in German.',
      s1_title: 'Survey and measuring', s1_desc: 'We measure on site and choose the right system with you.',
      s2_title: 'Production', s2_desc: 'The system is built at our plant to the approved dimensions.',
      s3_title: 'Delivery and installation', s3_desc: 'Shipped in protective packaging and installed.',
      contact_title: 'Contact', contact_addr_title: 'Address', contact_phone_title: 'Phone / WhatsApp',
      contact_email_title: 'Email', contact_hours_title: 'Opening hours', contact_hours_val: 'Monday – Saturday, 08:30 – 18:30 (TR)',
      form_title: 'Write to us', form_label_name: 'Full name', form_label_phone: 'Phone', form_label_country: 'City / country',
      form_label_interest: 'Product', form_opt_other: 'Other', form_label_msg: 'Message', form_btn_send: 'Send via WhatsApp',
      area: 'm²', specs_title: 'Specifications', modal_calc: 'Calculate price for this product', modal_wa: 'Ask on WhatsApp'
    }
  };

  const startingPrices = {
    tr: { isicam: '4.500 ₺', giyotin: '8.500 ₺', kisbahcesi: '14.000 ₺', surme: '5.000 ₺' },
    eu: { isicam: '190 €', giyotin: '380 €', kisbahcesi: '620 €', surme: '220 €' }
  };

  let lang = 'tr';
  const tr = (key) => (t[lang] && t[lang][key]) || t.tr[key] || key;

  function setLanguage(next) {
    if (!t[next]) return;
    lang = next;
    document.documentElement.lang = next;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === next));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t[next][el.dataset.i18n];
      if (v) el.textContent = v;
    });
    const prices = next === 'tr' ? startingPrices.tr : startingPrices.eu;
    document.querySelectorAll('[data-price-code]').forEach(el => {
      el.textContent = prices[el.dataset.priceCode] || el.textContent;
    });
    calculatePrice();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      try { localStorage.setItem('meteor_lang', btn.dataset.lang); } catch (e) {}
    });
  });

  // ---------------------------------------------------
  // Calculator
  // ---------------------------------------------------
  const rates = {
    isicamli:   { tr: [4500, 5800],   eu: [190, 250] },
    giyotin:    { tr: [8500, 11500],  eu: [380, 500] },
    kisbahcesi: { tr: [14000, 19000], eu: [620, 820] },
    surme:      { tr: [5000, 6800],   eu: [220, 290] }
  };
  const productKey = { isicamli: 'p1_title', giyotin: 'p2_title', kisbahcesi: 'p3_title', surme: 'p4_title' };
  const shapeMod = { 'duz': 1, 'l-tipi': 1.08, 'u-tipi': 1.15 };
  const shapeKey = { 'duz': 'shape_flat', 'l-tipi': 'shape_l', 'u-tipi': 'shape_u' };
  const glassMod = { seffaf: 1, fume: 1.07, bronz: 1.07, reflekte: 1.12 };

  const state = { product: 'isicamli', shape: 'duz', width: 3.5, height: 1.6 };

  const $ = (s) => document.querySelector(s);
  const inW = $('#inputWidth'), rgW = $('#rangeWidth'), inH = $('#inputHeight'), rgH = $('#rangeHeight');
  const glassSel = $('#glassType'), colorSel = $('#profileColor');

  function bindDim(input, range, key, min, max, rangeMax) {
    input.addEventListener('input', () => {
      const v = parseFloat(input.value);
      if (isNaN(v)) return;
      state[key] = Math.max(min, Math.min(max, v));
      range.value = Math.min(rangeMax, state[key]);
      calculatePrice();
    });
    range.addEventListener('input', () => {
      state[key] = parseFloat(range.value);
      input.value = state[key];
      calculatePrice();
    });
  }
  bindDim(inW, rgW, 'width', 1, 50, 20);
  bindDim(inH, rgH, 'height', 0.8, 6, 4);

  function bindChoices(selector, attr, key) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => item.addEventListener('click', () => {
      items.forEach(i => { i.classList.remove('active'); i.setAttribute('aria-checked', 'false'); });
      item.classList.add('active');
      item.setAttribute('aria-checked', 'true');
      state[key] = item.getAttribute(attr);
      calculatePrice();
    }));
  }
  bindChoices('.choice[data-product]', 'data-product', 'product');
  bindChoices('.choice[data-shape]', 'data-shape', 'shape');
  glassSel.addEventListener('change', calculatePrice);
  colorSel.addEventListener('change', calculatePrice);

  const locale = () => (lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : 'en-GB');
  const money = (n) => n.toLocaleString(locale()) + (lang === 'tr' ? ' ₺' : ' €');

  function calculatePrice() {
    const w = state.width, h = state.height;
    const area = Math.round(w * h * 100) / 100;
    const r = rates[state.product][lang === 'tr' ? 'tr' : 'eu'];
    const mod = (shapeMod[state.shape] || 1) * (glassMod[glassSel.value] || 1);
    const round = lang === 'tr' ? 50 : 10;
    const min = Math.round(area * r[0] * mod / round) * round;
    const max = Math.round(area * r[1] * mod / round) * round;

    $('#resPriceDisplay').textContent = `${money(min)} – ${money(max)}`;
    $('#resDimensions').textContent = `${w.toFixed(1)} × ${h.toFixed(1)} m`;
    $('#resTotalArea').textContent = `${area.toFixed(2)} m²`;

    const glassTxt = glassSel.options[glassSel.selectedIndex].text;
    const colorTxt = colorSel.options[colorSel.selectedIndex].text;
    const lines = {
      tr: ['Merhaba, web sitenizden fiyat hesapladım:', 'Ürün', 'Şekil', 'Ölçü', 'Cam', 'Profil', 'Tahmini fiyat', 'Detaylı teklif almak istiyorum.'],
      de: ['Hallo, ich habe auf Ihrer Website einen Richtpreis berechnet:', 'Produkt', 'Form', 'Maße', 'Glas', 'Profil', 'Richtpreis', 'Ich bitte um ein Angebot.'],
      en: ['Hello, I calculated an estimate on your website:', 'Product', 'Layout', 'Size', 'Glass', 'Frame', 'Estimate', 'I would like a detailed quote.']
    }[lang];
    const msg = `${lines[0]}\n\n` +
      `${lines[1]}: ${tr(productKey[state.product])}\n` +
      `${lines[2]}: ${tr(shapeKey[state.shape])}\n` +
      `${lines[3]}: ${w.toFixed(1)} × ${h.toFixed(1)} m (${area.toFixed(2)} m²)\n` +
      `${lines[4]}: ${glassTxt}\n` +
      `${lines[5]}: ${colorTxt}\n` +
      `${lines[6]}: ${money(min)} – ${money(max)}\n\n${lines[7]}`;
    $('#btnSendWhatsapp').href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  }

  document.querySelectorAll('.btn-select-product').forEach(btn => {
    btn.addEventListener('click', () => selectAndScroll(btn.dataset.targetProduct));
  });
  function selectAndScroll(product) {
    const chip = document.querySelector(`.choice[data-product="${product}"]`);
    if (chip) chip.click();
    $('#hesaplayici').scrollIntoView({ behavior: 'smooth' });
  }

  // ---------------------------------------------------
  // Product modal
  // ---------------------------------------------------
  const modalData = {
    'modal-isicam': {
      img: 'assets/hero-light.jpg', product: 'isicamli', title: 'p1_title', desc: 'p1_desc',
      specs: {
        tr: [['Cam', '4+12+4 veya 4+16+4 temperli çift cam'], ['Profil', 'Alüminyum, elektrostatik toz boya'], ['Açılım', 'Katlanır, içe veya dışa toplanır'], ['Conta', 'EPDM fitil'], ['Üretim', 'Kayseri']],
        de: [['Glas', '4+12+4 oder 4+16+4 ESG-Isolierglas'], ['Profil', 'Aluminium, pulverbeschichtet'], ['Öffnung', 'Faltbar, nach innen oder außen'], ['Dichtung', 'EPDM'], ['Fertigung', 'Kayseri']],
        en: [['Glass', '4+12+4 or 4+16+4 tempered double glazing'], ['Frame', 'Aluminium, powder coated'], ['Opening', 'Folding, inward or outward'], ['Seals', 'EPDM'], ['Made in', 'Kayseri']]
      }
    },
    'modal-giyotin': {
      img: 'assets/giyotin-light.jpg', product: 'giyotin', title: 'p2_title', desc: 'p2_desc',
      specs: {
        tr: [['Cam', '8–10 mm temperli veya ısıcam'], ['Hareket', 'Motorlu, kayış tahrikli'], ['Kumanda', 'Uzaktan kumanda / duvar anahtarı'], ['Kullanım', 'Teras, balkon, restoran'], ['Üretim', 'Kayseri']],
        de: [['Glas', '8–10 mm ESG oder Isolierglas'], ['Antrieb', 'Motorisch, Zahnriemen'], ['Steuerung', 'Fernbedienung / Wandschalter'], ['Einsatz', 'Terrasse, Balkon, Gastronomie'], ['Fertigung', 'Kayseri']],
        en: [['Glass', '8–10 mm tempered or insulated'], ['Drive', 'Motorized belt drive'], ['Control', 'Remote / wall switch'], ['Use', 'Terrace, balcony, restaurant'], ['Made in', 'Kayseri']]
      }
    },
    'modal-kis-bahcesi': {
      img: 'assets/wintergarten-light.jpg', product: 'kisbahcesi', title: 'p3_title', desc: 'p3_desc',
      specs: {
        tr: [['Taşıyıcı', 'Alüminyum kolon ve kiriş'], ['Çatı', 'Lamine cam veya panel'], ['Yan yüzeyler', 'Sürme, katlanır veya giyotin cam'], ['Drenaj', 'Gizli yağmur oluğu'], ['Üretim', 'Kayseri']],
        de: [['Tragwerk', 'Aluminiumstützen und -träger'], ['Dach', 'VSG-Glas oder Paneel'], ['Seiten', 'Schiebe-, Falt- oder Guillotine-Glas'], ['Entwässerung', 'Verdeckte Regenrinne'], ['Fertigung', 'Kayseri']],
        en: [['Structure', 'Aluminium posts and beams'], ['Roof', 'Laminated glass or panel'], ['Sides', 'Sliding, folding or guillotine glass'], ['Drainage', 'Concealed gutter'], ['Made in', 'Kayseri']]
      }
    },
    'modal-surme': {
      img: 'assets/sliding-light.jpg', product: 'surme', title: 'p4_title', desc: 'p4_desc',
      specs: {
        tr: [['Cam', 'Tek cam veya ısıcam'], ['Ray', 'Standart veya eşiksiz (gömme) ray'], ['Kilit', 'Anahtarlı kilit seçeneği'], ['Profil', 'Alüminyum, ince kasa'], ['Üretim', 'Kayseri']],
        de: [['Glas', 'Einfach- oder Isolierglas'], ['Schiene', 'Standard oder schwellenlos'], ['Verriegelung', 'Optional mit Schloss'], ['Profil', 'Aluminium, schmal'], ['Fertigung', 'Kayseri']],
        en: [['Glass', 'Single or double glazing'], ['Track', 'Standard or flush threshold'], ['Lock', 'Optional key lock'], ['Frame', 'Slim aluminium'], ['Made in', 'Kayseri']]
      }
    }
  };

  const backdrop = $('#productModalBackdrop');
  const content = $('#modalContentArea');

  function openModal(key) {
    const d = modalData[key];
    if (!d) return;
    const title = tr(d.title);
    const rows = d.specs[lang].map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('');
    const waText = encodeURIComponent(`${lang === 'tr' ? 'Merhaba, şu ürün hakkında bilgi almak istiyorum' : lang === 'de' ? 'Hallo, ich hätte gern Informationen zu' : 'Hello, I would like information about'}: ${title}`);
    content.innerHTML = `
      <div class="modal-img"><img src="${d.img}" alt="${title}"></div>
      <div class="modal-body">
        <h3 id="modalProductTitle">${title}</h3>
        <p>${tr(d.desc)}</p>
        <table class="specs"><tbody>${rows}</tbody></table>
        <div class="modal-actions">
          <button type="button" class="btn btn-dark" data-modal-calc="${d.product}">${tr('modal_calc')}</button>
          <a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_PHONE}?text=${waText}">${tr('modal_wa')}</a>
        </div>
      </div>`;
    content.querySelector('[data-modal-calc]').addEventListener('click', (e) => {
      closeModal();
      selectAndScroll(e.currentTarget.dataset.modalCalc);
    });
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-open-modal]').forEach(el => el.addEventListener('click', () => openModal(el.dataset.openModal)));
  $('#closeProductModal').addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal(); });

  // ---------------------------------------------------
  // Contact form -> WhatsApp
  // ---------------------------------------------------
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const sel = $('#formProductInterest');
    const msg =
      `${tr('form_label_name')}: ${$('#formName').value}\n` +
      `${tr('form_label_phone')}: ${$('#formPhone').value}\n` +
      `${tr('form_label_country')}: ${$('#formCountry').value}\n` +
      `${tr('form_label_interest')}: ${sel.options[sel.selectedIndex].text}\n` +
      `${tr('form_label_msg')}: ${$('#formMessage').value || '-'}`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  // ---------------------------------------------------
  // Mobile menu
  // ---------------------------------------------------
  const toggle = $('#mobileToggle'), nav = $('#navMenu');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  $('#currentYear').textContent = new Date().getFullYear();

  // Initial language
  let saved = 'tr';
  try { saved = localStorage.getItem('meteor_lang') || 'tr'; } catch (e) {}
  setLanguage(t[saved] ? saved : 'tr');
});