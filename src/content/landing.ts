import type { IconName } from '@/components/ui/icon';

/**
 * Sayfadaki tüm metinler burada. "Test" kurgusal bir markadır;
 * ekipler, kişiler, yorumlar ve rakamlar örnek amaçlıdır.
 */

export const siteConfig = {
  name: 'Test',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  title: 'Test — Her fikri test et. Kanıtlanmışı büyüt.',
  description:
    'Test; A/B testleri, özellik bayrakları ve anlık istatistikle ürün ekiplerinin fikirlerini deneylerle doğrulamasını sağlayan platform. 14 gün ücretsiz deneyin.',
  email: 'merhaba@test.example',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};

/** description: mobil menüde başlığın altında görünen kısa açıklama */
export const navLinks = [
  { href: '#features', label: 'Özellikler', description: 'Testler, bayraklar ve anlık istatistik' },
  { href: '#product', label: 'Ürün turu', description: 'Bir deneyin dört adımı' },
  { href: '#how-it-works', label: 'Nasıl çalışır', description: 'Hipotezden yayına, ölçerek' },
  { href: '#scenarios', label: 'Senaryolar', description: 'Deneylerin gerçek hikâyeleri' },
  { href: '#pricing', label: 'Fiyatlar', description: 'Ölçeğinize uygun başlangıcı bulun' },
  { href: '#faq', label: 'SSS', description: 'Net yanıtlar, kolay başlangıç' },
] as const;

/** Masaüstü mega menü (Figma: "Fikirlerinizi bir sonraki seviyeye taşıyın.") */
export const megaMenu = {
  title: 'Fikirlerinizi bir sonraki seviyeye taşıyın.',
  groups: [
    {
      id: 'product',
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
      id: 'solutions',
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
      id: 'resources',
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
} as const;

export type MegaGroupId = (typeof megaMenu.groups)[number]['id'];

export const hero = {
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
};

/** Hero'daki deney sonuç kartı */
export const heroResult = {
  id: 'DENEY #0412',
  name: 'Ödeme sayfası: tek adımlı form',
  sample: 12480,
  variants: [
    { key: 'A', label: 'Kontrol', rate: 4.12, width: 78 },
    { key: 'B', label: 'Tek adım', rate: 4.88, width: 92 },
  ],
  lift: 18.4,
  significance: 97,
};

/** Güven şeridi: kurgusal ekip adları */
export const teams = [
  'Kuzey Ödeme',
  'Pera Studio',
  'Lumen Yazılım',
  'Orbit Fintek',
  'Atlas Oyun',
  'Mavi Sağlık',
  'Delta Lojistik',
  'Fırça Ajans',
];

export const stats = [
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
];

export type FeatureVisualKind = 'ab' | 'flags' | 'stats' | 'segments' | 'reports';

export const features: {
  code: string;
  title: string;
  description: string;
  visual: FeatureVisualKind;
  layout: string;
}[] = [
  {
    code: 'F-01',
    title: 'A/B ve çok değişkenli testler',
    description:
      'İki varyantı ya da düzinelerce kombinasyonu aynı anda deneyin. Trafik dağılımı, hedef metrik ve durdurma kuralı tek ekranda.',
    visual: 'ab',
    layout: 'lg:col-span-7 lg:row-span-2',
  },
  {
    code: 'F-02',
    title: 'Özellik bayrakları',
    description: 'Yeni bir özelliği kodu yeniden yayınlamadan aç, kapat ya da kademeli yay.',
    visual: 'flags',
    layout: 'lg:col-span-5',
  },
  {
    code: 'F-03',
    title: 'Anlık istatistik',
    description:
      'Güven aralıkları ve anlamlılık her yeni veriyle güncellenir. Erken "kazanan" ilan edilmez.',
    visual: 'stats',
    layout: 'lg:col-span-5',
  },
  {
    code: 'F-04',
    title: 'Kullanıcı segmentleri',
    description: 'Deneyi ülke, cihaz, plan ya da kendi tanımladığınız kitleyle sınırlayın.',
    visual: 'segments',
    layout: 'lg:col-span-5',
  },
  {
    code: 'F-05',
    title: 'Erişilebilir raporlar',
    description:
      'Grafikler renge ek olarak desen ve metinle okunur. Sonuçlar ekran okuyucuyla da anlaşılır.',
    visual: 'reports',
    layout: 'lg:col-span-7',
  },
];

export const productTabs = [
  {
    id: 'setup',
    label: 'Deney kur',
    title: 'Hipotezle başlayın, metrikle bitirin',
    description:
      'Her deney bir hipotez cümlesiyle açılır. Hedef metriği, trafik oranını ve gereken örneklem büyüklüğünü Test hesaplar.',
    bullets: ['Hipotez şablonları', 'Örneklem büyüklüğü hesaplayıcı', 'Trafik dağılımı ayarı'],
  },
  {
    id: 'live',
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
    id: 'read',
    label: 'Sonucu oku',
    title: 'Kazananı istatistik söyler, sezgi değil',
    description:
      'Güven aralığı, anlamlılık ve beklenen etki sade bir dille yazılır. Rapor paylaşılabilir bir bağlantıya dönüşür.',
    bullets: ['Güven aralığı grafiği', 'Sade dilde özet', 'PDF ve CSV dışa aktarma'],
  },
  {
    id: 'release',
    label: 'Yayınla',
    title: 'Kanıtlanmışı adım adım büyütün',
    description:
      'Kazanan varyantı özellik bayrağıyla önce %10, sonra %50, en sonda herkese açın. Geri almak tek tık.',
    bullets: ['Kademeli yayın planı', 'Tek tıkla geri alma', 'Değişiklik kaydı'],
  },
] as const;

export type ProductTabId = (typeof productTabs)[number]['id'];

export const steps: { code: string; title: string; description: string; icon: IconName }[] = [
  {
    code: '01',
    title: 'Hipotez',
    description: '"Tek adımlı ödeme formu dönüşümü artırır" gibi ölçülebilir bir cümle yazın.',
    icon: 'pencil',
  },
  {
    code: '02',
    title: 'Deney',
    description: 'Trafiği varyantlara bölün. Test gereken örneklemi ve süreyi hesaplar.',
    icon: 'flask',
  },
  {
    code: '03',
    title: 'Sonuç',
    description: 'Anlamlılık eşiğine ulaşınca kazanan, güven aralığıyla birlikte raporlanır.',
    icon: 'chart',
  },
  {
    code: '04',
    title: 'Yayın',
    description: 'Kazananı özellik bayrağıyla kademeli olarak herkese açın.',
    icon: 'flag',
  },
];

/** Figma: "Sevdiğiniz araçlar, aynı masada." */
export const integrations = [
  'Shopify',
  'Google Analytics',
  'Segment',
  'Amplitude',
  'GitHub',
  'Slack',
];

/** Figma: "Sizin hedefiniz, sizin hikâyeniz." Kurgusal deney senaryoları */
export const scenarios = [
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
    description: 'Ödeme duvarının konumu yalnızca mobil segmentte denendi; masaüstü etkilenmedi.',
    method: 'Segmentli A/B testi',
    metrics: [
      { value: '+%31', label: 'abonelik dönüşümü' },
      { value: '%96', label: 'anlamlılık' },
    ],
  },
];

export const plans = [
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
  },
] satisfies {
  id: string;
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  cta: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}[];

export const testimonials = [
  {
    name: 'Elif Kaya',
    role: 'Ürün Müdürü, Lumen Yazılım',
    quote: 'Toplantıda "bence" diye başlayan cümleler bitti. Artık herkes deney numarası veriyor.',
  },
  {
    name: 'Mert Aydın',
    role: 'CTO, Kuzey Ödeme',
    quote: 'Özellik bayrakları sayesinde cuma akşamı yayınından korkmuyoruz. Geri almak tek tık.',
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
    quote: 'Sade dildeki sonuç özeti, istatistik bilmeyen müşterilerimize bile anlaşılır geliyor.',
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
];

export const faqs = [
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
];
