import type { IconName } from '@/components/ui/icon';

/**
 * Türkçe sözlük: sayfadaki bütün metinler. en.ts aynı tipi (Dictionary)
 * karşılamak zorundadır; eksik metin build'i durdurur.
 * "Test" kurgusal bir markadır; ekipler, kişiler, yorumlar ve rakamlar örnek amaçlıdır.
 *
 * Başlıklar { before, em, after } parçalarıyla yazılır: em, serif italik vurgu kelimesidir.
 * Metinlerdeki {amount}, {name} gibi yer tutucular bileşende doldurulur.
 */

export type FeatureVisualKind = 'ab' | 'flags' | 'stats' | 'segments' | 'reports';
export type ProductTabId = 'setup' | 'live' | 'read' | 'release';
export type MegaGroupId = 'product' | 'solutions' | 'resources';

export const tr = {
  meta: {
    title: 'Test — Her fikri test et. Kanıtlanmışı büyüt.',
    description:
      'Test; A/B testleri, özellik bayrakları ve anlık istatistikle ürün ekiplerinin fikirlerini deneylerle doğrulamasını sağlayan platform. 14 gün ücretsiz deneyin.',
    keywords: [
      'A/B testi',
      'özellik bayrakları',
      'deney platformu',
      'feature flag',
      'ürün analitiği',
      'SaaS',
    ],
    ogLocale: 'tr_TR',
    /* OG görselinin varsayılan yazı tipi ı, ş, ğ harflerini içermeyebilir: bu metinler o harflerden kaçınır */
    og: { title: 'Her fikri test et.', tagline: 'A/B testleri · feature flag · istatistik' },
  },

  common: {
    skipToContent: 'İçeriğe atla',
    backToTop: 'Sayfanın başına dön',
    logoLabel: 'Test, sayfanın başına git',
    close: 'Kapat',
    fictionalNote: 'kurgusal',
  },

  header: {
    mainNav: 'Ana menü',
    mobileNav: 'Mobil menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    explore: 'Keşfedin',
    cta: 'Demo isteyin',
    pricing: 'Fiyatlar',
    switchLanguage: { label: 'EN', name: 'English' },
    themeSwitcher: {
      legend: 'Görünüm modu',
      normal: 'Normal',
      dark: 'Koyu',
      colorSafe: 'Renk körlüğüne uygun',
    },
    /** description: mobil menüde başlığın altında görünen kısa açıklama */
    navLinks: [
      {
        href: '#features',
        label: 'Özellikler',
        description: 'Testler, bayraklar ve anlık istatistik',
      },
      { href: '#product', label: 'Ürün turu', description: 'Bir deneyin dört adımı' },
      { href: '#how-it-works', label: 'Nasıl çalışır', description: 'Hipotezden yayına, ölçerek' },
      { href: '#scenarios', label: 'Senaryolar', description: 'Deneylerin gerçek hikâyeleri' },
      { href: '#pricing', label: 'Fiyatlar', description: 'Ölçeğinize uygun başlangıcı bulun' },
      { href: '#faq', label: 'SSS', description: 'Net yanıtlar, kolay başlangıç' },
    ],
    megaMenu: {
      title: 'Fikirlerinizi bir sonraki seviyeye taşıyın.',
      groups: [
        {
          id: 'product' as MegaGroupId,
          label: 'Ürün',
          links: [
            {
              href: '#features',
              label: 'A/B testleri',
              description: 'İki varyanttan düzinelerce kombinasyona',
            },
            {
              href: '#features',
              label: 'Özellik bayrakları',
              description: 'Kodu yeniden yayınlamadan aç, kapat',
            },
            { href: '#product', label: 'Ürün turu', description: 'Bir deneyin dört adımı' },
          ],
        },
        {
          id: 'solutions' as MegaGroupId,
          label: 'Çözümler',
          links: [
            {
              href: '#scenarios',
              label: 'E-ticaret ekipleri',
              description: 'Sepetten sadakate, ölçerek',
            },
            {
              href: '#scenarios',
              label: 'SaaS ve büyüme ekipleri',
              description: 'Aktivasyonu ve aboneliği güçlendirin',
            },
            {
              href: '#pricing',
              label: 'Planlar ve fiyatlar',
              description: 'Ölçeğinize uygun başlangıcı bulun',
            },
          ],
        },
        {
          id: 'resources' as MegaGroupId,
          label: 'Kaynaklar',
          links: [
            {
              href: '#how-it-works',
              label: 'Nasıl çalışır?',
              description: 'Hipotezden yayına dört adım',
            },
            {
              href: '#scenarios',
              label: 'Deney senaryoları',
              description: 'Bir sonraki deneyinize ilham alın',
            },
            {
              href: '#faq',
              label: 'Sık sorulan sorular',
              description: 'Net yanıtlar, kolay başlangıç',
            },
          ],
        },
      ],
    },
  },

  hero: {
    badge: 'TEST 2.0',
    label: 'Yeni nesil deney motoru',
    titleStart: 'Her fikri',
    words: ['test et.', 'ölç.', 'kanıtla.'],
    titleEnd: 'Kanıtlanmışı büyüt.',
    srTitle: 'Her fikri test et, ölç ve kanıtla. Kanıtlanmışı büyüt.',
    description:
      'Test; A/B testlerini, özellik bayraklarını ve istatistiği tek bir deney defterinde toplar. Tahmin yerine kanıtla yayınlayın.',
    primaryCta: 'Ücretsiz deneyin',
    secondaryCta: 'Ürün turuna bakın',
    trust: ['Kredi kartı gerekmez', '14 gün ücretsiz', 'KVKK uyumlu'],
  },

  /** Hero'daki deney sonuç kartı */
  result: {
    id: 'DENEY #0412',
    name: 'Ödeme sayfası: tek adımlı form',
    completed: 'Tamamlandı',
    sample: 12480,
    samplePrefix: 'N = ',
    sampleSuffix: 'katılımcı · 14 gün',
    winnerBadge: 'Kazanan',
    winnerTitle: 'Varyant B kazandı',
    conversion: 'Dönüşüm',
    significance: 'Anlamlılık',
    variants: [
      { key: 'A', label: 'Kontrol', rate: 4.12, width: 78 },
      { key: 'B', label: 'Tek adım', rate: 4.88, width: 92 },
    ],
    lift: 18.4,
    significanceValue: 97,
    sticker: 'p < 0,03',
  },

  trust: {
    title: 'Deney yapan ekipler',
    pause: 'Şeridi durdur',
    play: 'Şeridi başlat',
    teams: [
      'Kuzey Ödeme',
      'Pera Studio',
      'Lumen Yazılım',
      'Orbit Fintek',
      'Atlas Oyun',
      'Mavi Sağlık',
      'Delta Lojistik',
      'Fırça Ajans',
    ],
  },

  stats: {
    title: 'Ölçümler · son 30 gün',
    items: [
      {
        value: 12480,
        prefix: 'N = ',
        suffix: '',
        decimals: 0,
        label: 'bu ay deneye katılan kullanıcı',
      },
      { value: 97, prefix: '%', suffix: '', decimals: 0, label: 'varsayılan anlamlılık eşiği' },
      {
        value: 18.4,
        prefix: '+%',
        suffix: '',
        decimals: 1,
        label: 'kazanan varyantlarda medyan artış',
      },
      {
        value: 1.2,
        prefix: '',
        suffix: ' sn',
        decimals: 1,
        label: 'bayrak değişikliğinin yayılma süresi',
      },
    ],
  },

  features: {
    label: 'Özellikler',
    title: { before: 'Tahmin değil,', em: 'kanıt.', after: '' },
    description: 'Deney kurmaktan kazananı yayınlamaya kadar her adım aynı defterde.',
    items: [
      {
        code: 'F-01',
        title: 'A/B ve çok değişkenli testler',
        description:
          'İki varyantı ya da düzinelerce kombinasyonu aynı anda deneyin. Trafik dağılımı, hedef metrik ve durdurma kuralı tek ekranda.',
        visual: 'ab' as FeatureVisualKind,
        layout: 'lg:col-span-7 lg:row-span-2',
      },
      {
        code: 'F-02',
        title: 'Özellik bayrakları',
        description: 'Yeni bir özelliği kodu yeniden yayınlamadan aç, kapat ya da kademeli yay.',
        visual: 'flags' as FeatureVisualKind,
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-03',
        title: 'Anlık istatistik',
        description:
          'Güven aralıkları ve anlamlılık her yeni veriyle güncellenir. Erken "kazanan" ilan edilmez.',
        visual: 'stats' as FeatureVisualKind,
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-04',
        title: 'Kullanıcı segmentleri',
        description: 'Deneyi ülke, cihaz, plan ya da kendi tanımladığınız kitleyle sınırlayın.',
        visual: 'segments' as FeatureVisualKind,
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-05',
        title: 'Erişilebilir raporlar',
        description:
          'Grafikler renge ek olarak desen ve metinle okunur. Sonuçlar ekran okuyucuyla da anlaşılır.',
        visual: 'reports' as FeatureVisualKind,
        layout: 'lg:col-span-7',
      },
    ],
    /** Kartlardaki küçük dekoratif görseller */
    visuals: {
      seriesA: 'A — Kontrol',
      seriesB: 'B — Varyant',
      dailyConversion: 'Günlük dönüşüm · 7 gün',
      firstDay: 'Pzt',
      lastDay: 'Paz',
      multivariate: 'Çok değişkenli · trafik dağılımı',
      on: 'Açık',
      off: 'Kapalı',
      confidence: 'Güven aralığı (%95)',
      liftLabel: '+18,4',
      segments: ['Ülke: Türkiye', 'Cihaz: Mobil', 'Plan: Ücretsiz', 'Yeni kullanıcı'],
      addSegment: '+ Segment ekle',
      reportRows: ['A · %4,12', 'B · %4,88'],
      color: 'Renk',
      pattern: 'Desen',
      text: 'Metin',
    },
  },

  productTour: {
    label: 'Ürün turu',
    title: { before: 'Bir deneyin', em: 'ömrü,', after: 'dört adımda' },
    description:
      'Kurulumdan yayına kadar aynı deney defteri. Sekmeler arasında ok tuşlarıyla gezinebilirsiniz.',
    tablistLabel: 'Deney adımları',
    tabs: [
      {
        id: 'setup' as ProductTabId,
        label: 'Deney kur',
        title: 'Hipotezle başlayın, metrikle bitirin',
        description:
          'Her deney bir hipotez cümlesiyle açılır. Hedef metriği, trafik oranını ve gereken örneklem büyüklüğünü Test hesaplar.',
        bullets: ['Hipotez şablonları', 'Örneklem büyüklüğü hesaplayıcı', 'Trafik dağılımı ayarı'],
      },
      {
        id: 'live' as ProductTabId,
        label: 'Canlı izle',
        title: 'Veri geldikçe deney defteri dolar',
        description:
          'Katılımcı sayısı, dönüşüm ve sapmalar canlı akar. Bir metrik beklenmedik şekilde düşerse deney kendini durdurur.',
        bullets: [
          'Gerçek zamanlı katılımcı sayacı',
          'Koruma metrikleri',
          'Otomatik durdurma kuralları',
        ],
      },
      {
        id: 'read' as ProductTabId,
        label: 'Sonucu oku',
        title: 'Kazananı istatistik söyler, sezgi değil',
        description:
          'Güven aralığı, anlamlılık ve beklenen etki sade bir dille yazılır. Rapor paylaşılabilir bir bağlantıya dönüşür.',
        bullets: ['Güven aralığı grafiği', 'Sade dilde özet', 'PDF ve CSV dışa aktarma'],
      },
      {
        id: 'release' as ProductTabId,
        label: 'Yayınla',
        title: 'Kanıtlanmışı adım adım büyütün',
        description:
          'Kazanan varyantı özellik bayrağıyla önce %10, sonra %50, en sonda herkese açın. Geri almak tek tık.',
        bullets: ['Kademeli yayın planı', 'Tek tıkla geri alma', 'Değişiklik kaydı'],
      },
    ],
    /** Sekme panellerindeki dekoratif arayüz maketleri */
    mocks: {
      header: 'DENEY #0412 · ödeme-formu',
      seriesA: 'A — Kontrol',
      seriesB: 'B — Varyant',
      status: { setup: 'Taslak', live: 'Çalışıyor', read: 'Tamamlandı', release: 'Yayında' },
      hypothesis: 'Hipotez',
      hypothesisBefore: 'Ödeme formunu tek adıma indirirsek',
      hypothesisEm: 'tamamlanan ödemeler',
      hypothesisAfter: 'artar.',
      targetMetric: 'Hedef metrik',
      targetMetricValue: 'Ödeme dönüşümü',
      stopRule: 'Durdurma kuralı',
      stopRuleValue: '%97 anlamlılık',
      trafficSplit: 'Trafik dağılımı',
      splitA: 'A · %50',
      splitB: 'B · %50',
      requiredSample: 'Gereken örneklem: N = 11.200 · tahmini 9 gün',
      participants: 'Katılımcı',
      participantsValue: 'N = 8.736',
      live: 'Canlı',
      progress: 'Hedefe ilerleme',
      progressValue: '%78',
      guardrails: ['Sayfa hızı: normal', 'Hata oranı: normal'],
      rates: ['%4,12', '%4,88'],
      winner: 'Varyant B kazandı',
      summaryBefore: 'B, A’dan',
      summaryLift: '%18,4',
      summaryAfter: 'daha iyi dönüştürüyor. Güven aralığı +6 ile +31 arası, anlamlılık %97.',
      flagOn: 'Açık',
      gradualRelease: 'Kademeli yayın',
      done: 'Tamam',
      next: 'Sırada',
      days: ['Gün 1', 'Gün 3', 'Gün 7'],
      rolloutShares: ['%10', '%50', '%100'],
      rollback: 'Geri almak tek tık: bayrağı kapatın.',
    },
  },

  howItWorks: {
    label: 'Nasıl çalışır',
    title: { before: 'Hipotezden yayına,', em: 'ölçerek.', after: '' },
    description: 'Her adım bir öncekinin sonucunu kullanır. Hiçbir karar ölçümsüz verilmez.',
    stepPrefix: 'Adım',
    steps: [
      {
        code: '01',
        title: 'Hipotez',
        description: '"Tek adımlı ödeme formu dönüşümü artırır" gibi ölçülebilir bir cümle yazın.',
        icon: 'pencil' as IconName,
      },
      {
        code: '02',
        title: 'Deney',
        description: 'Trafiği varyantlara bölün. Test gereken örneklemi ve süreyi hesaplar.',
        icon: 'flask' as IconName,
      },
      {
        code: '03',
        title: 'Sonuç',
        description: 'Anlamlılık eşiğine ulaşınca kazanan, güven aralığıyla birlikte raporlanır.',
        icon: 'chart' as IconName,
      },
      {
        code: '04',
        title: 'Yayın',
        description: 'Kazananı özellik bayrağıyla kademeli olarak herkese açın.',
        icon: 'flag' as IconName,
      },
    ],
  },

  integrations: {
    eyebrow: 'Daha az geçiş, daha çok deney',
    title: { before: 'Sevdiğiniz araçlar, aynı', em: 'masada.', after: '' },
    note: 'Olay ve segment verisi iki yönlü eşitlenir',
    tools: ['Shopify', 'Google Analytics', 'Segment', 'Amplitude', 'GitHub', 'Slack'],
  },

  scenarios: {
    label: 'Senaryolar',
    title: { before: 'Sizin hedefiniz, sizin', em: 'hikâyeniz.', after: '' },
    description: 'Kurgusal ama gerçekçi deneyler: hipotez, yöntem ve ölçülen sonuç.',
    listLabel: 'Deney senaryoları',
    itemRole: 'senaryo',
    hint: 'Kaydırın veya oklarla keşfedin',
    previous: 'Önceki senaryo',
    next: 'Sonraki senaryo',
    items: [
      {
        tag: 'E-ticaret · Deney #0388',
        title: 'Sepetten sadakate.',
        description:
          'Terk edilen sepetler için iki farklı hatırlatma akışı denendi; kazanan akış herkese açıldı.',
        method: 'A/B testi + özellik bayrağı',
        metrics: [
          { value: '+%24', label: 'geri kazanılan sepet' },
          { value: '%98', label: 'anlamlılık' },
        ],
      },
      {
        tag: 'SaaS · Deney #0512',
        title: 'Denemeden aboneliğe.',
        description:
          'Kurulum sihirbazının üç adımlı ve tek adımlı sürümü yeni kullanıcılarla karşılaştırıldı.',
        method: 'Çok değişkenli test',
        metrics: [
          { value: '2,1×', label: 'aktivasyon' },
          { value: '+%17', label: 'ücretli abonelik' },
        ],
      },
      {
        tag: 'Medya · Deney #0640',
        title: 'Okuyucudan aboneye.',
        description:
          'Ödeme duvarının konumu yalnızca mobil segmentte denendi; masaüstü etkilenmedi.',
        method: 'Segmentli A/B testi',
        metrics: [
          { value: '+%31', label: 'abonelik dönüşümü' },
          { value: '%96', label: 'anlamlılık' },
        ],
      },
    ],
  },

  pricing: {
    label: 'Fiyatlar',
    title: { before: 'Deney sayısına göre değil,', em: 'ölçeğe', after: 'göre' },
    description: 'Gizli ücret yok. İstediğiniz zaman yükseltin, düşürün ya da iptal edin.',
    billingLegend: 'Faturalandırma dönemi',
    monthly: 'Aylık',
    yearly: 'Yıllık',
    yearlyDiscount: '-%20',
    planLabel: 'PLAN',
    perMonth: '/ ay + KDV',
    foreverFree: 'Sonsuza dek ücretsiz',
    billedYearly: 'Yıllık faturalandırılır · yılda {amount} tasarruf',
    billedMonthly: 'Aylık faturalandırılır',
    footnote: 'Tüm planlarda veri kontrolü sizde. İstediğiniz zaman iptal edin.',
    plans: [
      {
        id: 'starter',
        name: 'Başlangıç',
        description: 'Bir sonraki fikriniz için.',
        monthly: 0,
        yearly: 0,
        cta: 'Ücretsiz başlayın',
        features: [
          'Ayda 10.000 katılımcı',
          '3 eş zamanlı deney',
          'Temel özellik bayrakları',
          'Topluluk desteği',
        ],
        highlighted: false,
        badge: '',
      },
      {
        id: 'growth',
        name: 'Büyüme',
        description: 'Daha büyük hedefleri olan ekipler için.',
        monthly: 1490,
        yearly: 1190,
        cta: '14 gün ücretsiz deneyin',
        features: [
          'Ayda 500.000 katılımcı',
          'Sınırsız deney ve bayrak',
          'Çok değişkenli testler',
          'Kullanıcı segmentleri',
          'Öncelikli destek',
        ],
        highlighted: true,
        badge: 'En çok tercih',
      },
      {
        id: 'scale',
        name: 'Ölçek',
        description: 'Birlikte daha ileri gidenlere.',
        monthly: 4490,
        yearly: 3590,
        cta: 'Ekibinizle başlayın',
        features: [
          'Sınırsız katılımcı',
          '20 ekip üyesi',
          'SSO ve denetim kayıtları',
          'Öncelikli destek ve özel raporlar',
        ],
        highlighted: false,
        badge: '',
      },
    ],
  },

  testimonials: {
    label: 'Gözlemler',
    title: { before: 'Ekipler ne', em: 'gözlemledi?', after: '' },
    description: 'Not: Bu yorumlar ve kişiler kurgusaldır; tasarım demosu için yazılmıştır.',
    cardLabel: 'GÖZLEM',
    pause: 'Yorumları durdur',
    play: 'Yorumları başlat',
    items: [
      {
        name: 'Elif Kaya',
        role: 'Ürün Müdürü, Lumen Yazılım',
        quote:
          'Toplantıda "bence" diye başlayan cümleler bitti. Artık herkes deney numarası veriyor.',
      },
      {
        name: 'Mert Aydın',
        role: 'CTO, Kuzey Ödeme',
        quote:
          'Özellik bayrakları sayesinde cuma akşamı yayınından korkmuyoruz. Geri almak tek tık.',
      },
      {
        name: 'Zeynep Arslan',
        role: 'Tasarım Lideri, Pera Studio',
        quote:
          'Tasarım tartışmalarını A/B testine çeviriyoruz. Kazanan tasarım değil, kullanıcı oluyor.',
      },
      {
        name: 'Can Demir',
        role: 'Büyüme Lideri, Fırça Ajans',
        quote:
          'Sade dildeki sonuç özeti, istatistik bilmeyen müşterilerimize bile anlaşılır geliyor.',
      },
      {
        name: 'Ayşe Yıldız',
        role: 'Veri Analisti, Delta Lojistik',
        quote: 'Erken kazanan ilan etmeyi engelleyen kurallar, iki yanlış kararı önceden durdurdu.',
      },
      {
        name: 'Burak Şahin',
        role: 'Mühendislik Müdürü, Orbit Fintek',
        quote: 'SDK bir öğleden sonra kuruldu. Bayrakların yayılma süresi bir saniyenin altında.',
      },
      {
        name: 'Selin Çelik',
        role: 'Ürün Sahibi, Mavi Sağlık',
        quote: 'Segmentler sayesinde yeni randevu akışını önce yalnızca mobilde denedik.',
      },
      {
        name: 'Emre Koç',
        role: 'Oyun Tasarımcısı, Atlas Oyun',
        quote:
          'Desenli grafikler sayesinde renk körlüğü olan ekip arkadaşımız da raporları rahatça okuyabiliyor.',
      },
    ],
  },

  faq: {
    label: 'Aklınızda kalmasın',
    title: { before: 'İyi sorular,', em: 'net yanıtlar.', after: '' },
    description:
      'Aradığınızı bulamadıysanız bize yazın; genellikle birkaç saat içinde yanıtlıyoruz.',
    items: [
      {
        question: 'Ücretsiz deneme nasıl çalışıyor?',
        answer:
          'Büyüme planının tüm özelliklerini 14 gün boyunca ücretsiz kullanırsınız; kredi kartı istenmez. Süre bitince hesabınız Başlangıç planına geçer, deneyleriniz ve sonuçlarınız silinmez.',
      },
      {
        question: 'Bir deneyin ne kadar sürmesi gerekir?',
        answer:
          'Süreyi trafiğiniz ve beklediğiniz etki belirler. Test, deneyi kurarken gereken örneklem büyüklüğünü hesaplar ve tahmini bitiş tarihini gösterir. Anlamlılık eşiğine ulaşılmadan kazanan ilan edilmez.',
      },
      {
        question: 'Özellik bayrakları sitemi yavaşlatır mı?',
        answer:
          'Hayır. Bayrak kuralları uç sunuculardan dağıtılır ve SDK içinde önbelleğe alınır; karar sayfa yüklenirken milisaniyeler içinde verilir.',
      },
      {
        question: 'Renk körlüğüne uygun mod ne değiştirir?',
        answer:
          'Renk körlüğüne uygun mod, renk körlüğü olan kullanıcılar düşünülerek hazırlandı. Görünüm modu seçicisinden açıldığında palet birbirinden kolayca ayrılan renklere (mavi, turuncu, sarı) geçer, gradyanlar düz renge iner ve grafiklerde B varyantı taralı desenle gösterilir. Durumlar hiçbir modda yalnızca renkle anlatılmaz; her zaman ikon ve metinle de belirtilir.',
      },
      {
        question: 'Verilerim nerede saklanıyor?',
        answer:
          'Veriler Türkiye ve AB’deki veri merkezlerinde, aktarımda ve depolamada şifrelenmiş olarak tutulur. Kişisel veri toplamadan, anonim kimliklerle deney yapabilirsiniz.',
      },
      {
        question: 'Eğitim kurumları ve STK’lar için indirim var mı?',
        answer:
          'Evet, eğitim kurumları ve kâr amacı gütmeyen kuruluşlar için Büyüme planında %50 indirim sunuyoruz. İletişim formundan bize yazmanız yeterli.',
      },
    ],
  },

  cta: {
    eyebrow: 'DENEY #02 · Sizin sıranız',
    titleBefore: 'Bir sonraki fikriniz',
    titleEm: 'kanıtlansın.',
    description:
      '14 gün boyunca Büyüme planını ücretsiz deneyin. SDK kurulumu bir öğleden sonra, kredi kartı gerekmez.',
    primary: 'İlk deneyi kurun',
    secondary: 'Planları görün',
  },

  contact: {
    label: 'İletişim',
    title: { before: 'Ekibinize özel bir', em: 'demo', after: 'planlayalım' },
    description: 'İlk deneyinizi birlikte kuralım; Test’in ürününüze nasıl uyacağını görelim.',
    formLabel: 'FORM · Demo talebi',
    info: [
      { icon: 'mail' as IconName, title: 'E-posta', text: '' },
      { icon: 'clock' as IconName, title: 'Yanıt süresi', text: 'İş günlerinde ortalama 2 saat' },
      {
        icon: 'shield' as IconName,
        title: 'Gizlilik',
        text: 'Bilgileriniz yalnızca talebiniz için kullanılır',
      },
    ],
    form: {
      ariaLabel: 'İletişim formu',
      name: 'Ad soyad',
      email: 'E-posta',
      company: 'Şirket',
      topic: 'Konu',
      message: 'Mesajınız',
      optional: '(isteğe bağlı)',
      topicPlaceholder: 'Bir konu seçin',
      topics: {
        demo: 'Demo talebi',
        pricing: 'Fiyatlandırma',
        support: 'Teknik destek',
        other: 'Diğer',
      },
      honeypot: 'Web siteniz',
      consent: 'Kişisel verilerimin, talebime yanıt verilmesi amacıyla işlenmesini kabul ediyorum.',
      submit: 'Mesajı gönder',
      submitting: 'Gönderiliyor…',
      errorPrefix: 'Hata:',
      successTitle: 'Gönderildi:',
      failureTitle: 'Gönderilemedi:',
      fallbackSuccess: 'Mesajınız alındı.',
      fallbackError: 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
      unexpectedError: 'Beklenmeyen bir hata oluştu.',
      validation: {
        nameMin: 'Adınız en az 2 karakter olmalı.',
        nameMax: 'Adınız en fazla 80 karakter olabilir.',
        email: 'Geçerli bir e-posta adresi girin.',
        companyMax: 'Şirket adı en fazla 100 karakter olabilir.',
        topic: 'Bir konu seçin.',
        messageMin: 'Mesajınız en az 20 karakter olmalı.',
        messageMax: 'Mesajınız en fazla 1000 karakter olabilir.',
        consent: 'Devam etmek için onay vermelisiniz.',
      },
      server: {
        invalidBody: 'Geçersiz istek gövdesi.',
        invalidForm: 'Form doğrulanamadı.',
        received: 'Mesajınız alındı.',
        unavailable: 'Sunucuya şu an ulaşılamıyor. Lütfen biraz sonra tekrar deneyin.',
        thanks: 'Teşekkürler {name}! Mesajınız alındı, en kısa sürede dönüş yapacağız.',
      },
    },
  },

  footer: {
    endLabel: 'DEFTER SONU',
    tagline: 'Ürün ekipleri için deney platformu. Her fikri test et, kanıtlanmışı büyüt.',
    socialLabel: 'Sosyal medya',
    sendEmail: 'E-posta gönderin',
    columns: [
      {
        id: 'product',
        title: 'Ürün',
        links: [
          { href: '#features', label: 'Özellikler' },
          { href: '#product', label: 'Ürün turu' },
          { href: '#how-it-works', label: 'Nasıl çalışır' },
        ],
      },
      {
        id: 'explore',
        title: 'Keşfedin',
        links: [
          { href: '#pricing', label: 'Fiyatlandırma' },
          { href: '#scenarios', label: 'Deney senaryoları' },
          { href: '#faq', label: 'Sık sorulan sorular' },
        ],
      },
    ],
    contactTitle: 'İletişim',
    requestDemo: 'Demo isteyin',
    languageTitle: 'Dil',
    rights: 'Tüm hakları saklıdır.',
    disclaimer:
      'Test kurgusal bir markadır; bu sayfa bir portfolyo çalışmasıdır. Ekipler, kişiler, yorumlar ve rakamlar örnek amaçlıdır.',
  },
};

/** Her dilin karşılaması gereken sözlük tipi */
export type Dictionary = typeof tr;
