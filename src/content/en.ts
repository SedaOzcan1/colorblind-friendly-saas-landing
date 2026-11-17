import type { Dictionary } from './tr';

/**
 * English dictionary. Must satisfy the same Dictionary type as tr.ts;
 * a missing string fails the build. "Test" is a fictional brand.
 */
export const en: Dictionary = {
  meta: {
    title: 'Test — Test every idea. Scale what’s proven.',
    description:
      'Test helps product teams validate ideas with experiments: A/B tests, feature flags and real-time statistics in one place. Try it free for 14 days.',
    keywords: [
      'A/B testing',
      'feature flags',
      'experimentation platform',
      'product analytics',
      'SaaS',
    ],
    ogLocale: 'en_US',
    og: { title: 'Test every idea.', tagline: 'A/B tests · feature flags · statistics' },
  },

  common: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
    logoLabel: 'Test, go to top of page',
    close: 'Close',
    fictionalNote: 'fictional',
  },

  header: {
    mainNav: 'Main menu',
    mobileNav: 'Mobile menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    explore: 'Explore',
    cta: 'Request a demo',
    pricing: 'Pricing',
    switchLanguage: { label: 'TR', name: 'Türkçe' },
    themeSwitcher: {
      legend: 'Display mode',
      normal: 'Light',
      dark: 'Dark',
      colorSafe: 'Colorblind-friendly',
    },
    navLinks: [
      {
        href: '#features',
        label: 'Features',
        description: 'Tests, flags and real-time statistics',
      },
      { href: '#product', label: 'Product tour', description: 'The four steps of an experiment' },
      {
        href: '#how-it-works',
        label: 'How it works',
        description: 'From hypothesis to release, measured',
      },
      { href: '#scenarios', label: 'Case studies', description: 'Real stories from experiments' },
      { href: '#pricing', label: 'Pricing', description: 'Find the right plan for your scale' },
      { href: '#faq', label: 'FAQ', description: 'Clear answers, easy start' },
    ],
    megaMenu: {
      title: 'Take your ideas to the next level.',
      groups: [
        {
          id: 'product',
          label: 'Product',
          links: [
            {
              href: '#features',
              label: 'A/B testing',
              description: 'From two variants to dozens of combinations',
            },
            {
              href: '#features',
              label: 'Feature flags',
              description: 'Turn features on and off without redeploying',
            },
            {
              href: '#product',
              label: 'Product tour',
              description: 'The four steps of an experiment',
            },
          ],
        },
        {
          id: 'solutions',
          label: 'Solutions',
          links: [
            {
              href: '#scenarios',
              label: 'E-commerce teams',
              description: 'From cart to loyalty, measured',
            },
            {
              href: '#scenarios',
              label: 'SaaS and growth teams',
              description: 'Boost activation and subscriptions',
            },
            {
              href: '#pricing',
              label: 'Plans and pricing',
              description: 'Find the right plan for your scale',
            },
          ],
        },
        {
          id: 'resources',
          label: 'Resources',
          links: [
            {
              href: '#how-it-works',
              label: 'How it works',
              description: 'Four steps from hypothesis to release',
            },
            {
              href: '#scenarios',
              label: 'Case studies',
              description: 'Inspiration for your next experiment',
            },
            {
              href: '#faq',
              label: 'Frequently asked questions',
              description: 'Clear answers, easy start',
            },
          ],
        },
      ],
    },
  },

  hero: {
    badge: 'TEST 2.0',
    label: 'Next-generation experiment engine',
    titleStart: 'Every idea,',
    words: ['tested.', 'measured.', 'proven.'],
    titleEnd: 'Scale what’s proven.',
    srTitle: 'Every idea, tested, measured and proven. Scale what’s proven.',
    description:
      'Test brings A/B tests, feature flags and statistics together in one experiment notebook. Ship on evidence, not guesswork.',
    primaryCta: 'Start free trial',
    secondaryCta: 'Take the product tour',
    trust: ['No credit card required', '14 days free', 'GDPR compliant'],
  },

  result: {
    id: 'EXPERIMENT #0412',
    name: 'Checkout page: single-step form',
    completed: 'Completed',
    sample: 12480,
    samplePrefix: 'N = ',
    sampleSuffix: 'participants · 14 days',
    winnerBadge: 'Winner',
    winnerTitle: 'Variant B wins',
    conversion: 'Conversion',
    significance: 'Significance',
    variants: [
      { key: 'A', label: 'Control', rate: 4.12, width: 78 },
      { key: 'B', label: 'Single step', rate: 4.88, width: 92 },
    ],
    lift: 18.4,
    significanceValue: 97,
    sticker: 'p < 0.03',
  },

  trust: {
    title: 'Teams running experiments',
    pause: 'Pause the strip',
    play: 'Play the strip',
    teams: [
      'Kuzey Payments',
      'Pera Studio',
      'Lumen Software',
      'Orbit Fintech',
      'Atlas Games',
      'Mavi Health',
      'Delta Logistics',
      'Fırça Agency',
    ],
  },

  stats: {
    title: 'Measurements · last 30 days',
    items: [
      {
        value: 12480,
        prefix: 'N = ',
        suffix: '',
        decimals: 0,
        label: 'users in experiments this month',
      },
      { value: 97, prefix: '', suffix: '%', decimals: 0, label: 'default significance threshold' },
      {
        value: 18.4,
        prefix: '+',
        suffix: '%',
        decimals: 1,
        label: 'median lift of winning variants',
      },
      { value: 1.2, prefix: '', suffix: ' s', decimals: 1, label: 'feature flag propagation time' },
    ],
  },

  features: {
    label: 'Features',
    title: { before: 'Not guesswork,', em: 'evidence.', after: '' },
    description:
      'From setting up an experiment to shipping the winner, every step lives in the same notebook.',
    items: [
      {
        code: 'F-01',
        title: 'A/B and multivariate tests',
        description:
          'Test two variants or dozens of combinations at once. Traffic split, target metric and stopping rule on a single screen.',
        visual: 'ab',
        layout: 'lg:col-span-7 lg:row-span-2',
      },
      {
        code: 'F-02',
        title: 'Feature flags',
        description:
          'Turn a new feature on, off or roll it out gradually without redeploying code.',
        visual: 'flags',
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-03',
        title: 'Real-time statistics',
        description:
          'Confidence intervals and significance update with every new data point. No premature "winners".',
        visual: 'stats',
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-04',
        title: 'User segments',
        description: 'Limit an experiment by country, device, plan or any audience you define.',
        visual: 'segments',
        layout: 'lg:col-span-5',
      },
      {
        code: 'F-05',
        title: 'Accessible reports',
        description:
          'Charts read through pattern and text, not just color. Results make sense with a screen reader too.',
        visual: 'reports',
        layout: 'lg:col-span-7',
      },
    ],
    visuals: {
      seriesA: 'A — Control',
      seriesB: 'B — Variant',
      dailyConversion: 'Daily conversion · 7 days',
      firstDay: 'Mon',
      lastDay: 'Sun',
      multivariate: 'Multivariate · traffic split',
      on: 'On',
      off: 'Off',
      confidence: 'Confidence interval (95%)',
      liftLabel: '+18.4',
      segments: ['Country: Turkey', 'Device: Mobile', 'Plan: Free', 'New user'],
      addSegment: '+ Add segment',
      reportRows: ['A · 4.12%', 'B · 4.88%'],
      color: 'Color',
      pattern: 'Pattern',
      text: 'Text',
    },
  },

  productTour: {
    label: 'Product tour',
    title: { before: 'The', em: 'life', after: 'of an experiment, in four steps' },
    description:
      'The same experiment notebook from setup to release. Use the arrow keys to move between tabs.',
    tablistLabel: 'Experiment steps',
    tabs: [
      {
        id: 'setup',
        label: 'Set up',
        title: 'Start with a hypothesis, finish with a metric',
        description:
          'Every experiment opens with a hypothesis. Test works out the target metric, the traffic split and the sample size you need.',
        bullets: ['Hypothesis templates', 'Sample size calculator', 'Traffic split control'],
      },
      {
        id: 'live',
        label: 'Watch live',
        title: 'The notebook fills up as data arrives',
        description:
          'Participants, conversion and deviations stream in live. If a metric drops unexpectedly, the experiment stops itself.',
        bullets: ['Real-time participant counter', 'Guardrail metrics', 'Automatic stopping rules'],
      },
      {
        id: 'read',
        label: 'Read results',
        title: 'Statistics picks the winner, not gut feeling',
        description:
          'Confidence interval, significance and expected impact in plain language. The report turns into a shareable link.',
        bullets: ['Confidence interval chart', 'Plain-language summary', 'PDF and CSV export'],
      },
      {
        id: 'release',
        label: 'Release',
        title: 'Scale what’s proven, step by step',
        description:
          'Roll out the winning variant with a feature flag: first 10%, then 50%, then everyone. Rolling back is one click.',
        bullets: ['Gradual rollout plan', 'One-click rollback', 'Change log'],
      },
    ],
    mocks: {
      header: 'EXPERIMENT #0412 · checkout-form',
      seriesA: 'A — Control',
      seriesB: 'B — Variant',
      status: { setup: 'Draft', live: 'Running', read: 'Completed', release: 'Live' },
      hypothesis: 'Hypothesis',
      hypothesisBefore: 'If we reduce checkout to a single step,',
      hypothesisEm: 'completed payments',
      hypothesisAfter: 'will increase.',
      targetMetric: 'Target metric',
      targetMetricValue: 'Checkout conversion',
      stopRule: 'Stopping rule',
      stopRuleValue: '97% significance',
      trafficSplit: 'Traffic split',
      splitA: 'A · 50%',
      splitB: 'B · 50%',
      requiredSample: 'Required sample: N = 11,200 · about 9 days',
      participants: 'Participants',
      participantsValue: 'N = 8,736',
      live: 'Live',
      progress: 'Progress to target',
      progressValue: '78%',
      guardrails: ['Page speed: normal', 'Error rate: normal'],
      rates: ['4.12%', '4.88%'],
      winner: 'Variant B wins',
      summaryBefore: 'B converts',
      summaryLift: '18.4%',
      summaryAfter: 'better than A. Confidence interval +6 to +31, significance 97%.',
      flagOn: 'On',
      gradualRelease: 'Gradual rollout',
      done: 'Done',
      next: 'Up next',
      days: ['Day 1', 'Day 3', 'Day 7'],
      rolloutShares: ['10%', '50%', '100%'],
      rollback: 'Rolling back is one click: turn the flag off.',
    },
  },

  howItWorks: {
    label: 'How it works',
    title: { before: 'From hypothesis to release,', em: 'measured.', after: '' },
    description:
      'Each step builds on the result of the previous one. No decision is made without data.',
    stepPrefix: 'Step',
    steps: [
      {
        code: '01',
        title: 'Hypothesis',
        description:
          'Write a measurable sentence such as "A single-step checkout increases conversion".',
        icon: 'pencil',
      },
      {
        code: '02',
        title: 'Experiment',
        description:
          'Split traffic between variants. Test calculates the sample and duration you need.',
        icon: 'flask',
      },
      {
        code: '03',
        title: 'Result',
        description:
          'Once significance is reached, the winner is reported with its confidence interval.',
        icon: 'chart',
      },
      {
        code: '04',
        title: 'Release',
        description: 'Roll the winner out to everyone gradually with a feature flag.',
        icon: 'flag',
      },
    ],
  },

  integrations: {
    eyebrow: 'Less switching, more experimenting',
    title: { before: 'The tools you love, at the same', em: 'table.', after: '' },
    note: 'Event and segment data syncs both ways',
    tools: ['Shopify', 'Google Analytics', 'Segment', 'Amplitude', 'GitHub', 'Slack'],
  },

  scenarios: {
    label: 'Case studies',
    title: { before: 'Your goal, your', em: 'story.', after: '' },
    description: 'Fictional but realistic experiments: hypothesis, method and measured result.',
    listLabel: 'Experiment case studies',
    itemRole: 'case study',
    hint: 'Swipe or use the arrows',
    previous: 'Previous case study',
    next: 'Next case study',
    items: [
      {
        tag: 'E-commerce · Experiment #0388',
        title: 'From cart to loyalty.',
        description:
          'Two reminder flows for abandoned carts were tested; the winning flow was rolled out to everyone.',
        method: 'A/B test + feature flag',
        metrics: [
          { value: '+24%', label: 'recovered carts' },
          { value: '98%', label: 'significance' },
        ],
      },
      {
        tag: 'SaaS · Experiment #0512',
        title: 'From trial to subscription.',
        description: 'A three-step and a single-step setup wizard were compared with new users.',
        method: 'Multivariate test',
        metrics: [
          { value: '2.1×', label: 'activation' },
          { value: '+17%', label: 'paid subscriptions' },
        ],
      },
      {
        tag: 'Media · Experiment #0640',
        title: 'From reader to subscriber.',
        description:
          'The paywall position was tested only in the mobile segment; desktop was unaffected.',
        method: 'Segmented A/B test',
        metrics: [
          { value: '+31%', label: 'subscription conversion' },
          { value: '96%', label: 'significance' },
        ],
      },
    ],
  },

  pricing: {
    label: 'Pricing',
    title: { before: 'Priced by', em: 'scale,', after: 'not by experiment count' },
    description: 'No hidden fees. Upgrade, downgrade or cancel any time.',
    billingLegend: 'Billing period',
    monthly: 'Monthly',
    yearly: 'Yearly',
    yearlyDiscount: '-20%',
    planLabel: 'PLAN',
    perMonth: '/ mo + VAT',
    foreverFree: 'Free forever',
    billedYearly: 'Billed yearly · save {amount} a year',
    billedMonthly: 'Billed monthly',
    footnote: 'You control your data on every plan. Cancel any time.',
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'For your next idea.',
        monthly: 0,
        yearly: 0,
        cta: 'Start for free',
        features: [
          '10,000 participants a month',
          '3 concurrent experiments',
          'Basic feature flags',
          'Community support',
        ],
        highlighted: false,
        badge: '',
      },
      {
        id: 'growth',
        name: 'Growth',
        description: 'For teams with bigger goals.',
        monthly: 1490,
        yearly: 1190,
        cta: 'Try free for 14 days',
        features: [
          '500,000 participants a month',
          'Unlimited experiments and flags',
          'Multivariate tests',
          'User segments',
          'Priority support',
        ],
        highlighted: true,
        badge: 'Most popular',
      },
      {
        id: 'scale',
        name: 'Scale',
        description: 'For those going further together.',
        monthly: 4490,
        yearly: 3590,
        cta: 'Start with your team',
        features: [
          'Unlimited participants',
          '20 team members',
          'SSO and audit logs',
          'Priority support and custom reports',
        ],
        highlighted: false,
        badge: '',
      },
    ],
  },

  testimonials: {
    label: 'Observations',
    title: { before: 'What did teams', em: 'observe?', after: '' },
    description: 'Note: these quotes and people are fictional, written for a design demo.',
    cardLabel: 'NOTE',
    pause: 'Pause testimonials',
    play: 'Play testimonials',
    items: [
      {
        name: 'Elif Kaya',
        role: 'Product Manager, Lumen Software',
        quote: 'Meetings no longer start with "I think". Everyone quotes an experiment number now.',
      },
      {
        name: 'Mert Aydın',
        role: 'CTO, Kuzey Payments',
        quote:
          'Thanks to feature flags we’re not afraid of Friday releases anymore. Rolling back is one click.',
      },
      {
        name: 'Zeynep Arslan',
        role: 'Design Lead, Pera Studio',
        quote: 'We turn design debates into A/B tests. The user wins, not the loudest opinion.',
      },
      {
        name: 'Can Demir',
        role: 'Growth Lead, Fırça Agency',
        quote: 'The plain-language summary makes sense even to clients who don’t know statistics.',
      },
      {
        name: 'Ayşe Yıldız',
        role: 'Data Analyst, Delta Logistics',
        quote: 'Rules against calling winners too early stopped two bad decisions in advance.',
      },
      {
        name: 'Burak Şahin',
        role: 'Engineering Manager, Orbit Fintech',
        quote: 'The SDK took an afternoon to set up. Flags propagate in under a second.',
      },
      {
        name: 'Selin Çelik',
        role: 'Product Owner, Mavi Health',
        quote: 'With segments we tested the new booking flow on mobile only first.',
      },
      {
        name: 'Emre Koç',
        role: 'Game Designer, Atlas Games',
        quote:
          'Thanks to patterned charts, our colorblind teammate reads the reports with ease too.',
      },
    ],
  },

  faq: {
    label: 'Good to know',
    title: { before: 'Good questions,', em: 'clear answers.', after: '' },
    description:
      'Can’t find what you’re looking for? Write to us; we usually reply within a few hours.',
    items: [
      {
        question: 'How does the free trial work?',
        answer:
          'You get every Growth plan feature free for 14 days, no credit card required. When the trial ends your account moves to the Starter plan; your experiments and results are kept.',
      },
      {
        question: 'How long should an experiment run?',
        answer:
          'Your traffic and the effect you expect decide the duration. Test calculates the sample size you need while you set up the experiment and shows an estimated end date. No winner is declared before significance is reached.',
      },
      {
        question: 'Do feature flags slow down my site?',
        answer:
          'No. Flag rules are served from edge servers and cached in the SDK; decisions are made within milliseconds while the page loads.',
      },
      {
        question: 'What does the colorblind-friendly mode change?',
        answer:
          'The colorblind-friendly mode was designed with colorblind users in mind. When you turn it on from the display mode switcher, the palette switches to colors that are easy to tell apart (blue, orange, yellow), gradients become solid colors and variant B is shown with a hatched pattern in charts. In every mode, states are never conveyed by color alone; they are always labeled with an icon and text.',
      },
      {
        question: 'Where is my data stored?',
        answer:
          'Data is stored in data centers in Turkey and the EU, encrypted in transit and at rest. You can run experiments with anonymous IDs without collecting personal data.',
      },
      {
        question: 'Do you offer discounts for schools and nonprofits?',
        answer:
          'Yes, educational institutions and nonprofits get 50% off the Growth plan. Just write to us through the contact form.',
      },
    ],
  },

  cta: {
    eyebrow: 'EXPERIMENT #02 · Your turn',
    titleBefore: 'Let your next idea be',
    titleEm: 'proven.',
    description:
      'Try the Growth plan free for 14 days. The SDK takes an afternoon to set up, no credit card required.',
    primary: 'Set up your first experiment',
    secondary: 'See plans',
  },

  contact: {
    label: 'Contact',
    title: { before: 'Let’s plan a', em: 'demo', after: 'for your team' },
    description: 'Let’s set up your first experiment together and see how Test fits your product.',
    formLabel: 'FORM · Demo request',
    info: [
      { icon: 'mail', title: 'Email', text: '' },
      { icon: 'clock', title: 'Response time', text: 'About 2 hours on business days' },
      { icon: 'shield', title: 'Privacy', text: 'Your details are only used for your request' },
    ],
    form: {
      ariaLabel: 'Contact form',
      name: 'Full name',
      email: 'Email',
      company: 'Company',
      topic: 'Topic',
      message: 'Your message',
      optional: '(optional)',
      topicPlaceholder: 'Choose a topic',
      topics: {
        demo: 'Demo request',
        pricing: 'Pricing',
        support: 'Technical support',
        other: 'Other',
      },
      honeypot: 'Your website',
      consent: 'I agree to the processing of my personal data in order to respond to my request.',
      submit: 'Send message',
      submitting: 'Sending…',
      errorPrefix: 'Error:',
      successTitle: 'Sent:',
      failureTitle: 'Not sent:',
      fallbackSuccess: 'Your message has been received.',
      fallbackError: 'Your message could not be sent. Please try again.',
      unexpectedError: 'An unexpected error occurred.',
      validation: {
        nameMin: 'Your name must be at least 2 characters.',
        nameMax: 'Your name can be at most 80 characters.',
        email: 'Enter a valid email address.',
        companyMax: 'Company name can be at most 100 characters.',
        topic: 'Choose a topic.',
        messageMin: 'Your message must be at least 20 characters.',
        messageMax: 'Your message can be at most 1000 characters.',
        consent: 'Please give your consent to continue.',
      },
      server: {
        invalidBody: 'Invalid request body.',
        invalidForm: 'The form could not be validated.',
        received: 'Your message has been received.',
        unavailable: 'The server can’t be reached right now. Please try again shortly.',
        thanks: 'Thank you, {name}! We’ve received your message and will get back to you soon.',
      },
    },
  },

  footer: {
    endLabel: 'END OF NOTEBOOK',
    tagline: 'An experimentation platform for product teams. Test every idea, scale what’s proven.',
    socialLabel: 'Social media',
    sendEmail: 'Send an email',
    columns: [
      {
        id: 'product',
        title: 'Product',
        links: [
          { href: '#features', label: 'Features' },
          { href: '#product', label: 'Product tour' },
          { href: '#how-it-works', label: 'How it works' },
        ],
      },
      {
        id: 'explore',
        title: 'Explore',
        links: [
          { href: '#pricing', label: 'Pricing' },
          { href: '#scenarios', label: 'Case studies' },
          { href: '#faq', label: 'FAQ' },
        ],
      },
    ],
    contactTitle: 'Contact',
    requestDemo: 'Request a demo',
    languageTitle: 'Language',
    rights: 'All rights reserved.',
    disclaimer:
      'Test is a fictional brand; this page is a portfolio project. Teams, people, quotes and figures are for illustration only.',
  },
};
