const SCHEDULE = {
  'Pazartesi': [{ name: 'Ardıl Çeviriye Giriş', time: '09:30–13:15', panel: 'davos', color: '#c8f135', icon: '🎙️' }, { name: 'Hukuk Çevirisi', time: '13:30–16:15', panel: 'hukuk', color: '#e8c547', icon: '⚖️' }],
  'Salı': [{ name: 'Çeviri Göstergebilimi II', time: '11:30–14:30', panel: 'gobilim', color: '#a78bfa', icon: '📐' }],
  'Çarşamba': [{ name: 'Çeviride Etik', time: '08:30–11:15', panel: 'etik', color: '#f97316', icon: '⚡' }, { name: 'Türk İşaret Dili', time: '09:30–12:15', panel: 'isaret', color: '#4ade80', icon: '🤟' }, { name: 'Tıbbi Bitki', time: '13:00–14:45', panel: 'tibbi', color: '#fb923c', icon: '🌿' }],
  'Perşembe': [{ name: 'Rusça IV', time: '11:30–14:15', panel: 'rusca4', color: '#38bdf8', icon: '🇷🇺' }, { name: 'Rusça VI', time: '14:30–17:15', panel: 'rusca6', color: '#38bdf8', icon: '🇷🇺' }]
};
const COURSES = [
  { id: 'hukuk', name: 'Hukuk Çevirisi', icon: '⚖️', color: '#e8c547', desc: 'Deborah Cao · AB Mevzuatı Çeviri Rehberi', day: 'Pazartesi', time: '13:30–16:15', available: true },
  { id: 'davos', name: 'Ardıl Çeviriye Giriş', icon: '🎙️', color: '#c8f135', desc: 'Davos 2026 · WEF terminoloji ve pratik', day: 'Pazartesi', time: '09:30–13:15', available: true },
  { id: 'gobilim', name: 'Çeviri Göstergebilimi II', icon: '📐', color: '#a78bfa', desc: 'Göstergebilim · Öztürk Kasar modeli', day: 'Salı', time: '11:30–14:30', available: false },
  { id: 'rusca6', name: 'Rusça VI', icon: '🇷🇺', color: '#38bdf8', desc: 'İleri düzey Rusça terminoloji', day: 'Perşembe', time: '14:30–17:15', available: false },
  { id: 'etik', name: 'Çeviride Etik', icon: '⚡', color: '#f97316', desc: 'Mesleki sorumluluklar · Etik ilkeler', day: 'Çarşamba', time: '08:30–11:15', available: false },
  { id: 'isaret', name: 'Türk İşaret Dili', icon: '🤟', color: '#4ade80', desc: 'TİD terminoloji ve görseller', day: 'Çarşamba', time: '09:30–12:15', available: false },
  { id: 'tibbi', name: 'Tıbbi Bitki (Seçmeli)', icon: '🌿', color: '#fb923c', desc: 'Tıbbi terminoloji · Bitki sözlüğü', day: 'Çarşamba', time: '13:00–14:45', available: false },
  { id: 'rusca4', name: 'Rusça IV', icon: '🇷🇺', color: '#38bdf8', desc: 'Orta ileri Rusça terminoloji', day: 'Perşembe', time: '11:30–14:15', available: false },
];

const hCards = [
  { q: "Legal translation nedir?", a: "Hukuk diliyle ilgili metinleri kaynak dilden (SL) hedef dile (TL) aktarma. Teknik çevirinin alt dalıdır.", topic: "Temel Tanım" },
  { q: "Hukuki çeviri hangi 4 kritere göre sınıflandırılır?", a: "1) Konu maddesine 2) Kaynak metnin statüsüne 3) Metnin işlevine 4) Hedef metnin amacına göre", topic: "Sınıflandırma" },
  { q: "SHALL — kanun dilinde ne anlama gelir?", a: "Zorunluluk yükler: 'bir eylem yapmak zorundadır'", topic: "İllokütif Güç" },
  { q: "MAY — kanun dilinde ne anlama gelir?", a: "Hak / yetki / güç tanır: 'yapabilir'", topic: "İllokütif Güç" },
  { q: "Hukuki çevirinin üç zorluk kaynağı?", a: "1) Hukuk sistemleri farklılıkları 2) Dilsel ve terminolojik farklılıklar 3) Kültürel farklılıklar", topic: "Zorluk Kaynakları" },
  { q: "Eşit özgünlük ilkesi nedir?", a: "Uluslararası antlaşmaların tüm resmi dil versiyonları — çeviri olsa bile — eşit hukuki güce sahiptir.", topic: "Uluslararası Hukuk" },
  { q: "Regulation (Tüzük) neden direktiften farklıdır?", a: "Tüzük tüm üye devletlerde doğrudan bağlayıcı. Direktif ise ulusal hukuka aktarılmalıdır.", topic: "AB Düzenleme Türleri" },
  { q: "European Council'ın Türkçe karşılığı?", a: "AB Zirvesi — Council of Europe (Avrupa Konseyi) ile karıştırılmamalı!", topic: "Karıştırılan Terimler" },
  { q: "'Having regard to the Treaty on the Functioning of the European Union' — Türkçesi?", a: "Avrupa Birliği'nin İşleyişi Hakkında Antlaşma'yı … göz önünde tutarak,", topic: "Referans Kalıpları" },
  { q: "AB mevzuatı biçimsel çeviride hangi yazı tipi ve punto?", a: "Times New Roman, 12 punto. Yeni Word belgesi olarak hazırlanır.", topic: "Biçimsel Kurallar" },
  { q: "Whereas kalıbının Türkçe karşılığı?", a: "Format 1: 'Aşağıdaki gerekçelerle:' | Format 2: Her gerekçe '…dığından;' ile biter", topic: "Gerekçeler Bölümü" },
  { q: "HAVE ADOPTED THIS REGULATION — Türkçesi?", a: "İŞBU TÜZÜĞÜ KABUL ETMİŞTİR:", topic: "Gerekçe-Madde Bağlantısı" },
  { q: "OJ kısaltması: 1 Şubat 2003 öncesi ve sonrası?", a: "Öncesi: ATRG | Sonrası: ABRG", topic: "Atıf Kuralları" },
  { q: "'By way of derogation from Article …' ifadesinin Türkçesi?", a: "… maddesine istisna olarak,", topic: "Özel İfadeler" },
  { q: "'This Regulation establishes...' çevirisinde ne dikkat edilmeli?", a: "'-mektedir' eki KULLANILMAZ. Doğrusu: 'Bu Tüzük ile … tesis edilir.'", topic: "Zaman Kipleri" },
  { q: "Approximation vs Harmonization of laws farkı?", a: "Approximation = yaklaştırılması | Harmonization = uyumlaştırılması", topic: "Karıştırılan Terimler" },
  { q: "Hukuki dili 'sui generis' yapan nedir?", a: "Evrensel bilgi aktaran diğer teknik çevirilerden farklı; ulusal/kültürel bağlama sıkı bağlıdır.", topic: "Teorik Temel" },
  { q: "Inter alia ne demek?", a: "Diğerlerinin yanı sıra", topic: "Özel İfadeler" },
  { q: "AB mevzuatında başlık sıralaması nasıldır?", a: "Konu (on/concerning) → Tarih → Numara → Kurum adı", topic: "Biçimsel Kurallar" },
  { q: "'Done at Brussels, 12 March 2020.' Türkçesi?", a: "Brüksel'de, 12 Mart 2020 tarihinde düzenlenmiştir.", topic: "İmza Bölümü" }
];
const SESSIONS = [
  { color: '#c8f135', num: 'OTURUM 01', name: 'Geopolitik & Güvenlik', desc: 'Demokrasinin geleceği, NATO, Ukrayna-Rusya, Grönland meselesi.', detail: `<strong>Ana Sorular:</strong><br>"Is Democracy in Trouble?" · "Who Brokers Trust Now?" · "Can Europe Defend Itself?"<br><br><strong>Öne Çıkanlar:</strong> ABD ile NATO müttefikleri arasındaki gerginlik, Grönland tartışmaları ve Ukrayna barış süreci.<br><div class="key-quote">"If you're not at the table, you're on the menu." — Mark Carney</div>` },
  { color: '#38bdf8', num: 'OTURUM 02', name: 'Küresel Ekonomi & Ticaret', desc: 'Gümrük tarifeleri, korumacılık, IMF verileri ve çok kutuplu ekonomik düzen.', detail: `<strong>Ana Soru:</strong> Küresel ekonomiyi parçalamadan ülkeler çıkarlarını nasıl koruyabilir?<br><br><strong>Kristalina Georgieva (IMF):</strong><div class="key-quote">"We are not in Kansas anymore." — Georgieva</div><strong>Dikkat:</strong> "tariffs", "levies", "duties" — hepsi gümrük/vergi ama farklı bağlamlarda.` },
  { color: '#f97316', num: 'OTURUM 03', name: 'Yapay Zeka & Teknoloji', desc: 'AI egemenliği, altyapı sahipliği, Jensen Huang ve dijital bölünme.', detail: `<strong>Öne Çıkan:</strong> Jensen Huang (NVIDIA CEO) — hesaplama altyapısının dönüşümü.<br><br><strong>Dikkat:</strong> "compute" isim olarak da kullanılır → <em>hesaplama kapasitesi/gücü</em>.` },
  { color: '#a78bfa', num: 'OTURUM 04', name: 'Enerji Güvenliği', desc: 'IEA Fatih Birol, nükleer rönesans, yenilenebilir enerji ve enerji trilemması.', detail: `<strong>"Who is Winning on Energy Security?"</strong><br>IEA Direktörü Fatih Birol: Küresel elektrik talebi genel enerji talebinin <strong>2,5 katı</strong> hızla büyüyor.<br><div class="key-quote">"Dispatchable sources" = talebe göre devreye giren kaynaklar.</div>` },
  { color: '#f87171', num: 'OTURUM 05', name: 'Demokrasi & Yönetişim', desc: 'Kutuplaşma, kurumsal güven krizi, sivil toplum ve çok paydaşlı model.', detail: `<strong>Dikkat:</strong> "governance" = yönetişim (sadece hükümet değil!). "government" = hükümet.` },
  { color: '#4ade80', num: 'OTURUM 06', name: 'Kadın Sağlığı & Toplumsal Eşitlik', desc: 'Sağlıkta cinsiyet uçurumu ve ekonomik boyutları.', detail: `Kadınlar, erkeklere kıyasla hayatlarının <strong>%25 daha fazlasını</strong> kötü sağlık koşullarında geçiriyor.<br><br><strong>Dikkat:</strong> "health equity" ≠ "health equality". Equity = hakkaniyetli erişim.` },
  { color: '#fbbf24', num: 'OTURUM 07', name: 'İklim & Sürdürülebilirlik', desc: '"Gezegenin sınırları içinde refah" ve adil enerji geçişi.', detail: `<strong>Dikkat:</strong> "net-zero" çevirirken "sıfır karbon" DEMEYİN → "net sıfır emisyon".` },
  { color: '#e879f9', num: 'OTURUM 08', name: 'Latin Amerika & Güvenlik', desc: 'Narco-terörizm, kurumsal kırılganlık ve Milei\'nin mali reform konuşması.', detail: `<strong>Javier Milei (Arjantin):</strong> Mali disiplin, devlet küçülmesi, hiperenflasyon.<br><div class="key-quote">"The state is not the solution. The state is the problem." — Milei</div>` }
];
const TERMS = [
  { cat: '🔵 Jeopolitik & Dış Politika', color: '#38bdf8', items: [['rules-based international order', 'kurallara dayalı uluslararası düzen', 'En sık geçen ifadelerden'], ['geopolitical fragmentation', 'jeopolitik parçalanma', ''], ['multilateralism', 'çok taraflılık', ''], ['great power rivalry', 'büyük güç rekabeti', ''], ['deterrence', 'caydırıcılık', ''], ['sovereignty', 'egemenlik', ''], ['sanctions', 'yaptırımlar', ''], ['coercion', 'zorlama, baskı', ''], ['bilateral talks', 'ikili görüşmeler', ''], ['strained alliances', 'gergin ittifaklar', ''], ['security guarantees', 'güvenlik güvenceleri', ''], ['annexation', 'ilhak', ''], ['contested norms', 'tartışmalı normlar', ''], ['middle powers', 'orta güçler', ''], ['expansionist overtures', 'yayılmacı girişimler', '']] },
  { cat: '🔴 Ekonomi & Ticaret', color: '#f87171', items: [['tariffs', 'gümrük tarifeleri', 'Toplantının ana kelimesi'], ['trade levies', 'ticaret vergileri/harçları', ''], ['protectionism', 'korumacılık', ''], ['economic nationalism', 'ekonomik milliyetçilik', ''], ['fiscal discipline', 'mali disiplin', 'Milei\'nin ana argümanı'], ['fiscal reform', 'mali reform', ''], ['hyperinflation', 'hiperenflasyon', ''], ['debt restructuring', 'borç yeniden yapılandırması', ''], ['productivity', 'verimlilik / üretkenlik', ''], ['export controls', 'ihracat kısıtlamaları', ''], ['value chains', 'değer zincirleri', ''], ['supply chain', 'tedarik zinciri', ''], ['foreign direct investment (FDI)', 'doğrudan yabancı yatırım (DYY)', ''], ['inclusive growth', 'kapsayıcı büyüme', ''], ['headwinds', 'olumsuz koşullar', 'Ekonomide "engel" anlamında']] },
  { cat: '🟢 Yapay Zeka & Teknoloji', color: '#4ade80', items: [['AI governance', 'yapay zeka yönetişimi', ''], ['AI sovereignty', 'yapay zeka egemenliği', ''], ['generative AI', 'üretici yapay zeka', ''], ['compute power / compute', 'hesaplama gücü / kapasitesi', ''], ['data centres', 'veri merkezleri', ''], ['AI agents', 'yapay zeka ajanları', ''], ['automation', 'otomasyon', ''], ['reskilling / upskilling', 'yeniden beceri kazandırma', ''], ['workforce preparedness', 'işgücü hazırlığı', ''], ['cybersecurity', 'siber güvenlik', ''], ['democratization of AI', 'yapay zekanın demokratikleşmesi', ''], ['digital infrastructure', 'dijital altyapı', ''], ['scalable', 'ölçeklenebilir', '']] },
  { cat: '🟡 Enerji & İklim', color: '#fbbf24', items: [['energy security', 'enerji güvenliği', ''], ['energy trilemma', 'enerji trilemması', 'güvenlik+erişilebilirlik+sürdürülebilirlik'], ['energy transition', 'enerji dönüşümü', ''], ['decarbonization', 'karbonsuzlaştırma', ''], ['nuclear renaissance', 'nükleer rönesans', ''], ['renewables', 'yenilenebilir enerji kaynakları', ''], ['net-zero', 'net sıfır (emisyon)', 'Sıfır karbon DEMEYİN!'], ['just transition', 'adil geçiş', ''], ['planetary boundaries', 'gezegenin ekolojik sınırları', ''], ['dispatchable sources', 'talebe göre devreye giren kaynaklar', ''], ['intermittent renewables', 'aralıklı yenilenebilir kaynaklar', ''], ['critical minerals', 'kritik mineraller', ''], ['rare earths', 'nadir toprak elementleri', '']] },
  { cat: '🟣 Yönetişim & Toplum', color: '#a78bfa', items: [['multistakeholder', 'çok paydaşlı', 'WEF\'in özgün terimi'], ['public-private cooperation', 'kamu-özel sektör işbirliği', ''], ['civil society', 'sivil toplum', ''], ['polarization', 'kutuplaşma', ''], ['social cohesion', 'sosyal uyum', ''], ['trust deficit', 'güven açığı', ''], ['accountability', 'hesap verebilirlik', ''], ['transparency', 'şeffaflık', ''], ['governance', 'yönetişim', 'government ≠ governance!'], ['humanitarian aid', 'insani yardım', ''], ['structural not cyclical', 'yapısal, döngüsel değil', '']] }
];
const PHRASES = [
  { en: '"If we\'re not at the table, we\'re on the menu."', tr: '"Masada olmazsak, menüde oluruz."', ctx: 'Mark Carney (Kanada Başbakanı)' },
  { en: '"A rupture, not a transition."', tr: '"Bu bir geçiş değil, köklü bir kopuş."', ctx: 'Carney — dünya düzeninin değişimini anlatırken' },
  { en: '"We are not in Kansas anymore."', tr: '"Artık eski dünyada değiliz."', ctx: 'Kristalina Georgieva (IMF)' },
  { en: '"Learn to think the unthinkable."', tr: '"Düşünülemezi düşünmeyi öğrenmek."', ctx: 'Georgieva — dışsal şoklara hazırlık' },
  { en: '"Exogenous shocks"', tr: '"Dışsal şoklar"', ctx: 'Dışarıdan gelen öngörülemeyen krizler' },
  { en: '"Structural, not cyclical"', tr: '"Yapısal, döngüsel değil"', ctx: 'Ekonomistlerin çok kullandığı ayrım' },
  { en: '"Echo chamber of consensus"', tr: '"Mutabakat yankı odası"', ctx: 'WEF Başkanı Borge Brende' },
  { en: '"Level playing field"', tr: '"Eşit rekabet ortamı"', ctx: 'Ticaret oturumlarında çok geçer' },
  { en: '"Double down"', tr: '"Kararlılığı artırmak, ısrar etmek"', ctx: 'Bir stratejiye sıkı bağlı kalmak' },
  { en: '"At a pivotal moment"', tr: '"Kritik bir dönüm noktasında"', ctx: 'Neredeyse her Davos konuşmasında' },
  { en: '"Unlock opportunities"', tr: '"Fırsatları açığa çıkarmak"', ctx: 'WEF\'in favori fiili' },
  { en: '"In the wake of"', tr: '"…nin ardından, akabinde"', ctx: 'Nedensellik zinciri kurarken' },
  { en: '"Loomed large"', tr: '"Gölge düşürdü, ağır bastı"', ctx: 'Tehdidin baskın olduğunu ifade eder' },
  { en: '"Fraught moment"', tr: '"Gergin / çalkantılı an"', ctx: '"Fraught" = çok sorun/gerginlik yüklü' },
  { en: '"Bright spots"', tr: '"Parlak noktalar / umut veren alanlar"', ctx: 'Karamsarlık içinde olumlu işaretler' },
  { en: '"Systemic fault lines"', tr: '"Sistemik kırık hatları"', ctx: 'Sistemdeki yapısal zayıflık' },
  { en: '"Geopolitical noise"', tr: '"Jeopolitik gürültü"', ctx: 'Dikkat dağıtıcı jeopolitik gelişmeler' },
  { en: '"To exist is to change."', tr: '"Var olmak değişmektir."', ctx: 'İsviçre Federal Konseyi Başkanı Parmelin' },
  { en: '"A who\'s who"', tr: '"Seçkin isimler topluluğu"', ctx: 'Trump\'ın kullandığı ifade' },
  { en: '"Impartial platform"', tr: '"Tarafsız platform"', ctx: 'WEF\'in kendini tanımlamak için kullandığı ifade' },
];
const FLASHCARDS_D = TERMS.flatMap(cat => cat.items.map(t => ({ en: t[0], tr: t[1], note: t[2] })));
const QUIZ_Q = [
  { q: '"Gümrük tarifeleri" İngilizcede nasıl denir?', opts: ['tariffs', 'levies', 'duties', 'hepsinin hepsi doğru'], ans: 3, exp: 'Tariffs, levies ve duties; hepsi gümrük/vergi anlamında kullanılabilir.' },
  { q: '"Çok taraflılık" terimini bul.', opts: ['multilateralism', 'bilateralism', 'unilateralism', 'multistakeholderism'], ans: 0, exp: '"Multilateralism" = çok taraflılık.' },
  { q: '"Net sıfır" derken neyi kastediyoruz?', opts: ['Hiç emisyon üretmemek', 'Salınan emisyonu telafi ederek sıfırlamak', 'Yenilenebilir enerjiye geçiş', 'Nükleer santral kullanımı'], ans: 1, exp: 'Net-zero: atmosfere salınan karbon miktarını uzaklaştırılan miktarla sıfırlamak.' },
  { q: '"Dispatchable sources" ne demek?', opts: ['İhracat yapılabilen kaynaklar', 'Talebe göre devreye giren kaynaklar', 'Dağıtılabilir doğal kaynaklar', 'Yayılabilir enerji türleri'], ans: 1, exp: 'Nükleer, doğalgaz gibi "istendiğinde açılabilen" enerji kaynakları.' },
  { q: '"Governance" ve "government" arasındaki fark?', opts: ['Aynı anlama gelir', 'Governance = yönetişim (geniş), Government = hükümet', 'Government = yönetişim, Governance = hükümet', 'Governance sadece kurumsal şirketler için'], ans: 1, exp: '"Governance" = daha geniş, kamu-özel-sivil toplumu kapsayan yönetim anlayışı.' },
  { q: 'Georgieva\'nın Davos 2026\'daki en ünlü ifadesi?', opts: ['If you\'re not at the table...', 'We are not in Kansas anymore', 'To exist is to change', 'The state is the problem'], ans: 1, exp: 'Georgieva, Wizard of Oz\'dan alıntıyla konuştu.' },
  { q: '"Just transition" Türkçesi nedir?', opts: ['Adalet geçişi', 'Hızlı geçiş', 'Adil geçiş', 'Doğru geçiş'], ans: 2, exp: '"Just" burada "adil" anlamında.' },
  { q: '"Reskilling" ne demek?', opts: ['Tekrar ölçeklendirmek', 'Yeniden beceri kazandırmak', 'Beceri değerlendirmesi', 'Eğitim bütçesi artırmak'], ans: 1, exp: '"Reskilling" = işgücüne yeni beceriler öğretmek.' },
  { q: '"Headwinds" ekonomi bağlamında ne anlama gelir?', opts: ['Rüzgar enerjisi potansiyeli', 'Olumsuz koşullar / engeller', 'Büyüme hızlanması', 'Döviz kuru dalgalanmaları'], ans: 1, exp: 'Ekonomide: büyümeyi yavaşlatan dış etkenler.' },
  { q: '"Multistakeholder" modeli kimin felsefesidir?', opts: ['IMF', 'NATO', 'WEF (Dünya Ekonomik Forumu)', 'BM Güvenlik Konseyi'], ans: 2, exp: 'WEF\'in kuruluşundan bu yana benimsediği model.' },
  { q: '"Exogenous shock" Türkçesi?', opts: ['İçsel kriz', 'Dışsal şok', 'Ekonomik çöküş', 'Yapısal sorun'], ans: 1, exp: '"Exogenous" = dışarıdan gelen.' },
  { q: '"Level playing field" en iyi nasıl çevrilir?', opts: ['Düz oyun alanı', 'Eşit rekabet ortamı', 'Adil saha', 'Standart koşullar'], ans: 1, exp: 'Spor metaforu: herkesin eşit koşullarda rekabet ettiği alan.' },
];
const PRACTICE = [
  { en: 'Globalization has not failed — it has simply become more complex, more contested, and more consequential than ever before.', tr: 'Küreselleşme başarısız olmadı — sadece her zamankinden daha karmaşık, daha tartışmalı ve daha belirleyici bir hal aldı.' },
  { en: 'Energy security must now be elevated to the same level as national security in every country\'s strategic agenda.', tr: 'Enerji güvenliği, her ülkenin stratejik gündeminde artık ulusal güvenlikle eş düzeye taşınmalıdır.' },
  { en: 'In a world defined by great power rivalry, middle powers that fail to act collectively will find themselves not at the table, but on the menu.', tr: 'Büyük güç rekabetinin şekillendirdiği bu dünyada, birlikte hareket edemeyen orta güçler masada oturanlar arasında değil, menüde yer alan unsurlar arasında kalacak.' },
  { en: 'These disruptions are structural, not cyclical — the world we once knew is not coming back.', tr: 'Bu aksaklıklar döngüsel değil, yapısaldır — bir zamanlar bildiğimiz dünya geri dönmeyecek.' },
  { en: 'We need to deploy innovation at scale, responsibly, and with equity in mind.', tr: 'İnovasyonu ölçekli, sorumlu ve hakkaniyetli bir biçimde hayata geçirmeliyiz.' },
  { en: 'The question is no longer whether artificial intelligence will transform our economies, but whether that transformation will be inclusive or extractive.', tr: 'Artık asıl soru, yapay zekanın ekonomilerimizi dönüştürüp dönüştürmeyeceği değil; bu dönüşümün kapsayıcı mı yoksa dışlayıcı mı olacağıdır.' },
  { en: 'Nuclear power is no longer a fringe option; it is increasingly seen as a cornerstone of any credible net-zero strategy.', tr: 'Nükleer enerji artık marjinal bir seçenek değil; güvenilir herhangi bir net-sıfır stratejisinin temel taşı olarak giderek daha fazla benimsenmektedir.' },
  { en: 'Democracy is not in decline because people have stopped believing in its values; it is under pressure because institutions have failed to deliver on its promises.', tr: 'Demokrasi, insanların değerlerine inanmayı bırakması nedeniyle gerilemiyor; kurumların bu değerlerin vaadini yerine getirememesi yüzünden baskı altında.' },
];
const SPEAKERS = [
  { name: 'Donald Trump', role: 'ABD Başkanı · Açılış konuşmacısı' },
  { name: 'Mark Carney', role: 'Kanada Başbakanı · "At the table" sözü' },
  { name: 'Emmanuel Macron', role: 'Fransa Cumhurbaşkanı · Avrupa savunması' },
  { name: 'Ursula von der Leyen', role: 'AB Komisyonu Başkanı' },
  { name: 'He Lifeng', role: 'Çin Başbakan Yardımcısı · Ticaret' },
  { name: 'Javier Milei', role: 'Arjantin Cumhurbaşkanı · Mali reform' },
  { name: 'Kristalina Georgieva', role: 'IMF Başkanı · "Kansas" sözü' },
  { name: 'Jensen Huang', role: 'NVIDIA CEO · AI & GPU' },
  { name: 'Fatih Birol', role: 'IEA Direktörü · Enerji güvenliği' },
  { name: 'Mark Rutte', role: 'NATO Genel Sekreteri' },
  { name: 'Volodymyr Zelenskyy', role: 'Ukrayna Cumhurbaşkanı' },
  { name: 'Daniel Noboa', role: 'Ekvador Cumhurbaşkanı · Narco-terör' },
  { name: 'Borge Brende', role: 'WEF Başkanı' },
  { name: 'Karin Keller-Sutter', role: 'İsviçre Federal Konseyi Başkanı' },
];
const NUMBERS = [
  { val: '2.5×', label: 'Küresel elektrik talebinin genel enerji talebine kıyasla büyüme hızı (IEA)' },
  { val: '39%', label: 'Yapay zeka nedeniyle geçerliliğini yitirecek mevcut becerilerin oranı' },
  { val: '25%', label: 'Kadınların erkeklere kıyasla daha fazla kötü sağlıkta geçirdikleri yaşam süresi' },
  { val: '$1T+', label: 'Küresel AI altyapı yatırımı beklentisi (2025-2030)' },
  { val: '1.5°C', label: 'Paris Anlaşması sıcaklık hedefi' },
  { val: '56.', label: 'WEF\'nin düzenlediği Yıllık Toplantı sayısı' },
];
const ABBREVS = [
  { short: 'WEF', full: 'World Economic Forum', tr: 'Dünya Ekonomik Forumu' },
  { short: 'IMF', full: 'International Monetary Fund', tr: 'Uluslararası Para Fonu' },
  { short: 'IEA', full: 'International Energy Agency', tr: 'Uluslararası Enerji Ajansı' },
  { short: 'NATO', full: 'North Atlantic Treaty Organisation', tr: 'Kuzey Atlantik Antlaşması Örgütü' },
  { short: 'WTO', full: 'World Trade Organization', tr: 'Dünya Ticaret Örgütü' },
  { short: 'EU', full: 'European Union', tr: 'Avrupa Birliği' },
  { short: 'AI', full: 'Artificial Intelligence', tr: 'Yapay Zeka' },
  { short: 'FDI', full: 'Foreign Direct Investment', tr: 'Doğrudan Yabancı Yatırım' },
  { short: 'GDP', full: 'Gross Domestic Product', tr: 'Gayri Safi Yurt İçi Hasıla (GSYİH)' },
  { short: 'G7/G20', full: 'Group of Seven / Twenty', tr: 'Yediler / Yirmiler Grubu' },
];

// ════════════════════════════════════════════════
// DAVOS RENDER
// ════════════════════════════════════════════════
function dRenderSessions() { const grid = document.getElementById('dSessionGrid'); const tracker = document.getElementById('dSessionTracker'); SESSIONS.forEach((s, i) => { const card = document.createElement('div'); card.className = 'session-card'; card.style.setProperty('--card-color', s.color); card.innerHTML = `<div class="session-num">${s.num}</div><div class="session-name">${s.name}</div><div class="session-desc">${s.desc}</div><div class="session-detail">${s.detail}</div>`; card.onclick = () => { card.classList.toggle('open'); dMarkTracked('sess_' + i); }; grid.appendChild(card); const ti = document.createElement('div'); ti.className = 'dtracker-item' + (dIsTracked('sess_' + i) ? ' checked' : ''); ti.id = 'dti_' + i; ti.innerHTML = `<div class="dtracker-check">✓</div><label>${s.name}</label>`; ti.onclick = () => { dToggleTracked('sess_' + i, 'dti_' + i); }; tracker.appendChild(ti); }); }
function dRenderTerms() { const c = document.getElementById('dTermListContainer'); TERMS.forEach(cat => { const sec = document.createElement('div'); sec.className = 'term-section'; sec.style.setProperty('--cat-color', cat.color); sec.innerHTML = `<div class="term-section-title">${cat.cat}</div>`; const grid = document.createElement('div'); grid.className = 'term-grid'; cat.items.forEach(([en, tr, note]) => { grid.innerHTML += `<div class="term-row"><div class="dterm-en">${en}</div><div class="dterm-tr">${tr}</div><div class="dterm-note">${note}</div></div>`; }); sec.appendChild(grid); c.appendChild(sec); }); }
function dRenderPhrases() { const c = document.getElementById('dPhraseContainer'); PHRASES.forEach(p => { c.innerHTML += `<div class="phrase-card"><div class="phrase-en">${p.en}</div><div class="phrase-tr">${p.tr}</div><div class="phrase-context">📌 ${p.ctx}</div></div>`; }); }
function dRenderPractice() { const c = document.getElementById('dPracticeContainer'); PRACTICE.forEach((p, i) => { const div = document.createElement('div'); div.className = 'practice-card'; div.innerHTML = `<div class="practice-num">CÜMLE ${i + 1} / ${PRACTICE.length}<button class="done-btn" id="ddone_${i}" onclick="dTogglePracticeDone(${i})">✓</button></div><div class="practice-en">${p.en}</div><button class="show-answer-btn" onclick="dShowAnswer(${i})">Türkçeyi Gör ▾</button><div class="practice-tr" id="dptr_${i}">${p.tr}</div>`; c.appendChild(div); }); }
function dShowAnswer(i) { document.getElementById('dptr_' + i).classList.add('visible'); }
function dTogglePracticeDone(i) { document.getElementById('ddone_' + i).classList.toggle('done'); dUpdateProgress(); }
function dRenderSpeakers() { const g = document.getElementById('dSpeakerGrid'); SPEAKERS.forEach(s => { g.innerHTML += `<div class="speaker-card"><div class="speaker-name">${s.name}</div><div class="speaker-role">${s.role}</div></div>`; }); const ng = document.getElementById('dNumberGrid'); NUMBERS.forEach(n => { ng.innerHTML += `<div class="number-card"><div class="number-val">${n.val}</div><div class="number-label">${n.label}</div></div>`; }); const ag = document.getElementById('dAbbrGrid'); ABBREVS.forEach(a => { ag.innerHTML += `<div class="abbr-card"><div class="abbr-short">${a.short}</div><div><div class="abbr-full">${a.full}</div><div class="abbr-tr">${a.tr}</div></div></div>`; }); }

// DAVOS FLASHCARDS
const WOD_LIST = [
  { term: 'Break down', def: '🔤 Phrasal Verb — Çökmek · "The negotiations broke down." → Müzakereler çöktü.', type: 'phrasal' },
  { term: 'Carry out', def: '🔤 Phrasal Verb — Yürütmek · "Carry out the terms of the contract." → Sözleşmeyi uygulamak.', type: 'phrasal' },
  { term: 'Draw up', def: '🔤 Phrasal Verb — Taslak hazırlamak · "Draw up an agreement." → Anlaşma taslağı hazırlamak.', type: 'phrasal' },
  { term: 'Back out', def: '🔤 Phrasal Verb — Caymak · "Back out of a deal." → Anlaşmadan caymak.', type: 'phrasal' },
  { term: 'Set out', def: '🔤 Phrasal Verb — Belirtmek · "Set out the conditions." → Koşulları belirtmek.', type: 'phrasal' },
  { term: 'Come into force', def: '🔤 Phrasal Verb — Yürürlüğe girmek · "The law came into force." → Kanun yürürlüğe girdi.', type: 'phrasal' },
  { term: 'Rule out', def: '🔤 Phrasal Verb — Dışlamak · "Rule out any ambiguity." → Her türlü belirsizliği elemek.', type: 'phrasal' },
  { term: 'Stand by', def: '🔤 Phrasal Verb — Uymak · "Stand by the agreement." → Anlaşmaya uymak.', type: 'phrasal' },
  { term: 'Phase out', def: '🔤 Phrasal Verb — Aşamalı kaldırmak · "Phase out fossil fuels." → Fosil yakıtları kaldırmak.', type: 'phrasal' },
  { term: 'Look into', def: '🔤 Phrasal Verb — İncelemek · "Look into the matter." → Konuyu incelemek.', type: 'phrasal' },
  { term: 'Put forward', def: '🔤 Phrasal Verb — Öne sürmek · "Put forward a proposal." → Teklif sunmak.', type: 'phrasal' },
  { term: 'Call off', def: '🔤 Phrasal Verb — İptal etmek · "Call off the negotiations." → Müzakereleri iptal etmek.', type: 'phrasal' },
  { term: 'Force Majeure', def: '📚 Terminoloji — Mücbir sebep · Tarafların kontrolü dışındaki olağanüstü olaylar.', type: 'term' },
  { term: 'Habeas Corpus', def: '📚 Terminoloji — Kişi özgürlüğü güvencesi · Yasadışı tutukluluğa karşı hukuki ilke.', type: 'term' },
  { term: 'Simultaneous Interpreting', def: '📚 Terminoloji — Simultane çeviri · Konuşmayla eş zamanlı sözlü çeviri.', type: 'term' },
  { term: 'Net-zero Emissions', def: '📚 Terminoloji — Net sıfır emisyon · Atmosfere salınan karbonu dengeleyerek sıfıra indirmek.', type: 'term' },
  { term: 'Due Diligence', def: '📚 Terminoloji — Gerekli özen · İşlem öncesi risklerin kapsamlı araştırılması.', type: 'term' },
  { term: 'Consecutive Interpreting', def: '📚 Terminoloji — Konsekütif çeviri · Konuşmacı duraksadıktan sonra yapılan çeviri.', type: 'term' },
  { term: 'Localization', def: '📚 Terminoloji — Yerelleştirme · İçeriği hedef kitlenin kültürüne uyarlama.', type: 'term' },
  { term: 'Source Text', def: '📚 Terminoloji — Kaynak metin · Çevirinin yapıldığı özgün dildeki metin.', type: 'term' },
  { term: 'Target Text', def: '📚 Terminoloji — Erek metin · Çeviri sonucu elde edilen hedef dildeki metin.', type: 'term' },
  { term: 'Sworn Translation', def: '📚 Terminoloji — Yeminli çeviri · Resmi makamlarca onaylanan hukuki çeviri.', type: 'term' },
  { term: 'Register', def: '📚 Terminoloji — Dil kullanım düzeyi · Bağlama göre değişen resmiyet biçimi.', type: 'term' },
  { term: 'Equivalence', def: '📚 Terminoloji — Eşdeğerlik · Kaynak ve erek metin arasındaki anlam-işlev dengesi.', type: 'term' },
];
function initWordOfDay() {
  const el = document.getElementById('word-of-day-widget');
  if (!el) return;
  const idx = Math.floor(Math.random() * WOD_LIST.length);
  const w = WOD_LIST[idx];
  // Label'ı hemen set et, skeleton bekleme
  const labelEl = document.querySelector('#word-of-day-widget .wod-label');
  if (labelEl) labelEl.textContent = w.type === 'phrasal' ? '🔤 Günün Phrasal Verbi' : '📚 Günün Terimi';
  const termEl = document.getElementById('wod-term');
  const defEl = document.getElementById('wod-def');
  if (termEl) termEl.innerHTML = w.term;
  if (defEl) defEl.innerHTML = w.def;
}

// ── PWA BANNER ──
const SOUND_VIDEOS = {
  rain: 'mPZkdNFkNps',
  forest: 'xNN7iTA57jM',
  wind: 'bGKth93bHUw',
  fire: 'L_LUpnjgPso',
  piano: 'lTRiuFIWV54',
  ocean: 'bn9F19Hi1Lk',
};
const SOUND_MP3 = {
  rain: 'https://cdn.freesound.org/previews/346/346170_5121236-lq.mp3',
  forest: 'https://cdn.freesound.org/previews/416/416079_7037-lq.mp3',
  wind: 'https://cdn.freesound.org/previews/553/553736_6381832-lq.mp3',
  fire: 'https://cdn.freesound.org/previews/349/349813_5121236-lq.mp3',
  piano: 'https://cdn.freesound.org/previews/476/476178_8418129-lq.mp3',
  ocean: 'https://cdn.freesound.org/previews/402/402543_6381832-lq.mp3',
};
const SOUND_ICONS = { rain: '🌧️', forest: '🐦', wind: '💨', fire: '🔥', piano: '🎹', ocean: '🌊' };
const _isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let _ytPlayer = null, _ytReady = false, _ytPendingVideo = null, _currentSound = 'none', _isMuted = false;
let _iosAudio = null;