const number = '+44 7933 512 287'
const whatsapp = `https://wa.me/${number.replace(/\s+/g, '')}?text=Hello%2C%20I%27m%20interested%20in%20your%20mezzanine%20floor%20services`

export const logo = 'https://res.cloudinary.com/dnph27ksd/image/upload/v1757519986/new_lgo_u9y5kl.png'

export const slugify = (s) =>
  s.toLowerCase().trim().replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export const services = [
  {
    title: 'Mezzanine Floors',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997848/20250730_163525_teowmx.jpg',
    alt: 'Mezzanine Floor Design and Installation',
    description:
      'Design, fabricate, and install single or multi-tier mezzanine floors to unlock warehouse and retail space. CE/UKCA marked steel with full calculations.',
    link: 'services/mezzanine-floors',
    pageData: {
      title: 'Mezzanine Floor Design & Installation',
      description:
        'Turn unused headroom into productive space. We deliver engineered, CE/UKCA marked mezzanine floors with full drawings, calcs, and building control support.',
      keywords: [
        'mezzanine floors',
        'mezzanine installers',
        'warehouse mezzanine',
        'retail mezzanine',
        'UKCA mezzanine',
        'Manchester mezzanine floors'
      ],
      features: [
        '✔ Single & multi-tier systems',
        '✔ CE/UKCA marked structural steel',
        '✔ Full drawings, calcs & RAMS',
        '✔ Fast turnaround, nationwide install'
      ],
      sections: [
        {
          title: 'Plan. Engineer. Install.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997848/20250730_163525_teowmx.jpg',
          description:
            'We handle survey, design, fabrication, and installation. Load-bearing columns, beams, and decking specified to your usage and local building control requirements.'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997758/20231222_072344_xgif2l.jpg',
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997754/20231112_140813_ilwvnc.jpg',
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997562/20201030_132648_i3jpvf.jpg'
      ],
      faqs: [
        { q: 'How long does a typical install take?', a: 'Most single-tier systems install in 2–5 days, depending on size and access.' },
        { q: 'Do you provide calculations?', a: 'Yes. Structural calcs and GA drawings are included for building control approval.' }
      ]
    }
  },
  {
    title: 'Staircases, Handrails & Pallet Gates',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997845/20250723_091140_mngprj.jpg',
    alt: 'Mezzanine Access Staircases and Safety',
    description:
      'BS-compliant staircases, mid-landings, handrails, toe-boards, and pallet safety gates tailored to your mezzanine layout.',
    link: 'services/staircases-and-gates',
    pageData: {
      title: 'Mezzanine Staircases & Safety Edge Protection',
      description:
        'Access that meets regs: general access and escape staircases, handrails, toe-boards, and pallet gates to keep your team safe.',
      keywords: [
        'mezzanine staircases',
        'pallet gates',
        'mezzanine handrails',
        'edge protection',
        'BS 5395 stairs'
      ],
      features: [
        '✔ General & fire escape stairs',
        '✔ Swing & up-and-over pallet gates',
        '✔ Handrails, mid-rails, toe-boards',
        '✔ Bespoke platforms & catwalks'
      ],
      sections: [
        {
          title: 'Safe. Compliant. Built to Last.',
          description:
            'We fabricate stair flights, landings, and safety systems to suit your deck height and clearances, finished in robust industrial coatings.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997845/20250723_091140_mngprj.jpg'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997836/20250702_071233_ggvyat.jpg',
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997841/20250723_090926_jbkaib.jpg'
      ],
      faqs: [
        { q: 'Can you match our brand colours?', a: 'Yes—powder coat or wet paint to your RAL.' },
        { q: 'Do pallet gates fit standard pallets?', a: 'We size gates to your pallet and handling equipment.' }
      ]
    }
  },
  {
    title: 'Fire Protection & Building Control',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997566/20210430_115018_hcize0.jpg',
    alt: 'Mezzanine Fire Rating and Building Regulations',
    description:
      'Fire rating packages: column encasements, bulkheads, suspended ceilings, and compartmentation with documentation for approval.',
    link: 'services/fire-protection',
    pageData: {
      title: 'Mezzanine Fire Rating & Building Regs Support',
      description:
        'From strategy to sign-off: we design and install fire protection to meet building control and insurer requirements.',
      keywords: [
        'mezzanine fire protection',
        'mezzanine building regs',
        'fire rating mezzanine',
        'building control approval'
      ],
      features: [
        '✔ Column & beam encasement',
        '✔ Bulkheads & suspended ceilings',
        '✔ Fire stopping & signage',
        '✔ O&M manuals and certs'
      ],
      sections: [
        {
          title: 'Approved Details, Clean Finishes',
          description:
            'We coordinate fire protection with lighting, sprinklers, and HVAC so your mezzanine remains practical and easy to maintain.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997566/20210430_115018_hcize0.jpg'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997758/20231222_072344_xgif2l.jpg'
      ],
      faqs: [
        { q: 'Do all mezzanines need fire rating?', a: 'It depends on usage, size, and occupancy—we advise after survey.' },
        { q: 'Do you liaise with building control?', a: 'Yes, we provide drawings and attend as needed.' }
      ]
    }
  },
  {
    title: 'Decking, Racking & Suspended Platforms',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997667/20230602_085528_hboh7b.jpg',
    alt: 'Mezzanine Decking and Racking Integration',
    description:
      'Particle board, durbar and open-mesh decking options with racking tie-ins, conveyor openings, and service penetrations.',
    link: 'services/decking-and-racking',
    pageData: {
      title: 'Decking Options & Racking Integration',
      description:
        'Specify the right deck for the job—P6/P7 boards, steel durbar, or open mesh—plus racking interfaces and cut-outs for conveyors and M&E.',
      keywords: [
        'mezzanine decking',
        'open mesh decking',
        'durbar plate',
        'racking integration',
        'conveyor openings'
      ],
      features: [
        '✔ P6/P7, durbar, open mesh',
        '✔ Racking tie-ins & safety netting',
        '✔ Trap doors & chutes',
        '✔ Service penetrations neatly finished'
      ],
      sections: [
        {
          title: 'Built Around Your Workflow',
          description:
            'We coordinate with your racking supplier and M&E to keep walkways clear and operations smooth.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997667/20230602_085528_hboh7b.jpg'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997827/20250321_090405_jnacbk.jpg',
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997841/20250723_090926_jbkaib.jpg'
      ],
      faqs: [
        { q: 'What’s the standard UDL?', a: 'Commonly 3.5–7.5 kN/m²—final spec confirmed by structural calcs.' },
        { q: 'Can you add anti-slip?', a: 'Yes, via board spec or applied finishes.' }
      ]
    }
  },
  {
    title: 'Survey, Load Calcs & Project Management',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997836/20250702_071233_ggvyat.jpg',
    alt: 'Mezzanine Site Survey and Calculations',
    description:
      'End-to-end delivery: measured survey, structural calculations, method statements, and on-site management to programme.',
    link: 'services/survey-and-calcs',
    pageData: {
      title: 'Measured Surveys, Structural Calculations & RAMS',
      description:
        'Accurate surveys and calcs ensure a right-first-time build. We handle RAMS, lift plans, and coordination with other trades.',
      keywords: [
        'mezzanine survey',
        'mezzanine calculations',
        'mezzanine project management',
        'RAMS',
        'lift plans'
      ],
      features: [
        '✔ Detailed measured surveys',
        '✔ SE-signed calculations',
        '✔ RAMS & lift planning',
        '✔ Programme-driven installs'
      ],
      sections: [
        {
          title: 'Clarity from Day One',
          description:
            'You’ll get a clear programme, delivery method, and communication channel so your team always knows what’s next.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997836/20250702_071233_ggvyat.jpg'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997845/20250723_091140_mngprj.jpg'
      ],
      faqs: [
        { q: 'Can you work out of hours?', a: 'Yes—night or weekend programmes available to minimise disruption.' },
        { q: 'Do you provide as-built drawings?', a: 'Yes, issued on completion with O&M documentation.' }
      ]
    }
  },
  {
    title: 'Repairs, Moves & Extensions',
    image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997754/20231112_140813_ilwvnc.jpg',
    alt: 'Mezzanine Repairs and Extensions',
    description:
      'Extend capacity, relocate existing systems, or repair damaged members with certified welding and new calcs.',
    link: 'services/repairs-and-extensions',
    pageData: {
      title: 'Mezzanine Alterations, Relocations & Repairs',
      description:
        'We can extend, relocate, or repair mezzanine structures—re-certified with updated drawings and calculations.',
      keywords: [
        'mezzanine extension',
        'mezzanine relocation',
        'mezzanine repair',
        'structural welding UKCA'
      ],
      features: [
        '✔ Structural inspections',
        '✔ Certified repairs & reinforcements',
        '✔ Re-certification & documentation',
        '✔ De-install and re-install'
      ],
      sections: [
        {
          title: 'Make Your Space Work Harder',
          description:
            'Whether you’re growing or reshuffling, we’ll adapt your platform with minimal downtime.',
          image: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997754/20231112_140813_ilwvnc.jpg'
        }
      ],
      galleryImages: [
        'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997562/20201030_132648_i3jpvf.jpg'
      ],
      faqs: [
        { q: 'Can you move a third-party mezzanine?', a: 'Yes—following survey and verification of original spec.' },
        { q: 'Do you provide new calcs for changes?', a: 'Absolutely—updated calcs and drawings are included.' }
      ]
    }
  }
]

export const expertise = [
  {
    title: 'Structural Engineering',
    img: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997562/20201030_132648_i3jpvf.jpg',
    description: 'SE-signed calculations, column layouts, and beam sizing optimised for your loads and workflows.'
  },
  {
    title: 'Regulatory Compliance',
    img: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997758/20231222_072344_xgif2l.jpg',
    description: 'Building control liaison, fire-rating packages, and documentation through to sign-off.'
  },
  {
    title: 'Fast Programmes',
    img: 'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997667/20230602_085528_hboh7b.jpg',
    description: 'Short lead times with in-house fabrication and tightly managed site schedules.'
  }
]

export const galleryImages = [
  'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997848/20250730_163525_teowmx.jpg',
  'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997758/20231222_072344_xgif2l.jpg',
  'https://res.cloudinary.com/dnph27ksd/image/upload/v1756997754/20231112_140813_ilwvnc.jpg'
]

export const data = {
  title: ' Mezzanine Floors',
  titleAlt: ['Mezzanine', 'floors'],
  slogan: 'Create Space Without Moving.',
  slogan2: 'Engineered Mezzanines • Fast Turnaround • Building Control Ready.',
  number,
  whatsapp,
  companySlogan: 'Design • Fabricate • Install • Certify',
  companyName: 'Mezzanine Solutions Ltd',
  companyAddress: 'Unit 12, Industrial Estate, Manchester, MXX XXX, UK',
  companyEmail: 'info@mezzaninesolutions.co.uk',
  openingDays: [
    { day: 'Monday - Friday', open: '08:30', close: '16:30' },
    { day: 'Saturday', open: '08:00', close: '12:00' }
  ],
  socials: [
    { name: 'Facebook', url: 'https://facebook.com/metalworksolutions' },
    { name: 'Instagram', url: 'https://instagram.com/metalworksolutions' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/metalworksolutions' }
  ]
}

export const navLinks = [
  { label: 'HOME', href: '/#' },
  {
    label: 'SERVICES',
    isDropdown: true,
    subItems: services.map(s => ({ label: s.title, href: `/services/${slugify(s.title)}` }))
  },
  { label: 'ABOUT US', href: '/#about' },
  { label: 'GALLERY', href: '/#gallery' },
  { label: 'CONTACT US', href: '/quote' }
]
