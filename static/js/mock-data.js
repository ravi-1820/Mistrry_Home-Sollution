/**
 * HOMESERV - Master Mock Data Repository
 * Realistic, structured sample data for Customer, Provider, and Admin platforms.
 */

const MockData = {
  categories: [
    {
      id: 'construction',
      name: 'Construction',
      slug: 'construction',
      icon: 'bi-bricks',
      desc: 'Architectural planning, structural masonry, foundation work, and structural additions.',
      startingPrice: '₹4,999',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=800&q=80',
      serviceCount: 24,
      providerCount: 48
    },
    {
      id: 'renovation',
      name: 'Home Renovation',
      slug: 'home-renovation',
      icon: 'bi-house-gear',
      desc: 'Full modular kitchens, luxury bathroom refits, living room makeovers, and premium painting.',
      startingPrice: '₹2,499',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      serviceCount: 38,
      providerCount: 65
    },
    {
      id: 'furniture',
      name: 'Custom Furniture',
      slug: 'furniture',
      icon: 'bi-lamp',
      desc: 'Bespoke carpentry, teak wardrobes, upholstered sofas, and custom modular woodwork.',
      startingPrice: '₹1,299',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      serviceCount: 19,
      providerCount: 32
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      slug: 'plumbing',
      icon: 'bi-droplet-half',
      desc: 'High-pressure line repairs, sanitary fixtures, water heater setup, and drainage overhauls.',
      startingPrice: '₹499',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      serviceCount: 29,
      providerCount: 54
    },
    {
      id: 'electrical',
      name: 'Electrical & Lighting',
      slug: 'electrical',
      icon: 'bi-lightning-charge',
      desc: 'Certified wiring, smart home automation, panel upgrades, and designer ambient lighting.',
      startingPrice: '₹599',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      serviceCount: 31,
      providerCount: 62
    }
  ],

  services: [
    {
      id: 'serv-101',
      title: 'Full Home Electrical Safety Audit & Rewiring',
      category: 'electrical',
      categoryName: 'Electrical & Lighting',
      price: 1499,
      priceFormatted: '₹1,499',
      duration: '3 - 4 Hours',
      rating: 4.94,
      reviewsCount: 312,
      location: 'Ahmedabad / Bodakdev & Satellite',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Comprehensive electrical diagnostics using thermal imaging and load sensors. Includes complete circuit breaker testing, earthing measurement, and preventative replacement of worn cabling.',
      providerId: 'pro-1',
      providerName: 'Vikram Electrical Solutions',
      providerRating: 4.95,
      providerJobs: 480,
      verified: true,
      popular: true,
      included: [
        'Complete MCB and DB board thermal scan',
        'Earthing resistance testing with digital meter',
        'Load check across all heavy appliances (AC, Geyser, Oven)',
        'Detailed safety compliance certification report',
        'Minor wire insulation repairs up to 5 points'
      ],
      notIncluded: [
        'Cost of replacement circuit breakers or high-amp switches',
        'Concealed wall chiseling for new power points',
        'Main meter replacement handled by local electricity board'
      ],
      faqs: [
        { q: 'How often should a home electrical audit be performed?', a: 'We recommend a comprehensive audit every 2 to 3 years, or immediately before purchasing a resale property.' },
        { q: 'Are your electricians certified and background checked?', a: 'Yes, all Mistrry Home Solution electrical contractors hold Class-A certified licenses and have passed thorough police background verification.' }
      ]
    },
    {
      id: 'serv-102',
      title: 'Modern Modular Kitchen Renovation & Island Fit',
      category: 'renovation',
      categoryName: 'Home Renovation',
      price: 49999,
      priceFormatted: '₹49,999',
      duration: '5 - 7 Days',
      rating: 4.98,
      reviewsCount: 184,
      location: 'Ahmedabad / Sindhu Bhavan Road & Thaltej',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Turnkey German-standard modular kitchen transformation with soft-close Blum hinges, quartz countertops, concealed LED task lighting, and custom chimney integration.',
      providerId: 'pro-2',
      providerName: 'Apex Craft Renovations',
      providerRating: 4.98,
      providerJobs: 210,
      verified: true,
      popular: true,
      included: [
        '3D photorealistic design visualization',
        'BWP Marine Grade Plywood structure',
        'Soft-close telescopic channels and tandem boxes',
        'Countertop granite/quartz precision cutting & installation',
        'Plumbing line alignment and sink installation'
      ],
      notIncluded: [
        'Kitchen appliances (Chimney, Hob, Microwave) unless purchased via package',
        'Civil tile demolition outside the designated splashback zone'
      ]
    },
    {
      id: 'serv-103',
      title: 'Bespoke Solid Teak Dining Table & Chairs Set',
      category: 'furniture',
      categoryName: 'Custom Furniture',
      price: 24500,
      priceFormatted: '₹24,500',
      duration: '4 - 6 Days',
      rating: 4.91,
      reviewsCount: 96,
      location: 'Ahmedabad / Vastrapur & Navrangpura',
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted seasoned Burma/CP Teak 6-seater dining set with premium matte polyurethane lacquer finish, ergonomic contoured backrests, and custom stain matching.',
      providerId: 'pro-3',
      providerName: 'Artisan Woodcraft Guild',
      providerRating: 4.92,
      providerJobs: 145,
      verified: true,
      popular: true,
      included: [
        '100% Grade-A Seasoned Teak wood',
        'High-density PU foam cushioning with stain-resistant fabric',
        '5-Year structural craftsmanship warranty',
        'On-site delivery and professional unboxing'
      ],
      notIncluded: [
        'Tempered glass top plate (available as add-on)'
      ]
    },
    {
      id: 'serv-104',
      title: 'High-Pressure Hydro-Jet Drain Cleaning & Camera Inspection',
      category: 'plumbing',
      categoryName: 'Plumbing',
      price: 1899,
      priceFormatted: '₹1,899',
      duration: '2 Hours',
      rating: 4.88,
      reviewsCount: 420,
      location: 'Ahmedabad / Prahlad Nagar & SG Highway',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      description: 'CCTV endoscope pipe inspection paired with 3000-PSI hydro jetting to eliminate stubborn scale, grease build-up, and tree root ingress without tearing down floor tiles.',
      providerId: 'pro-4',
      providerName: 'AquaFlow Master Plumbers',
      providerRating: 4.89,
      providerJobs: 650,
      verified: true,
      popular: true,
      included: [
        'High-definition endoscopic camera recording',
        'Hydro-jetting up to 25 meters of pipeline',
        'Non-corrosive enzymatic odor neutralizer treatment',
        '30-day no-clog guarantee'
      ],
      notIncluded: [
        'Underground structural pipe sleeve repair if cracks detected'
      ]
    },
    {
      id: 'serv-105',
      title: 'Residential Structural RCC Framing & Masonry Extension',
      category: 'construction',
      categoryName: 'Construction',
      price: 85000,
      priceFormatted: '₹85,000',
      duration: '15 - 20 Days',
      rating: 4.96,
      reviewsCount: 78,
      location: 'Ahmedabad / South Bopal & Shela',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered room additions, rooftop terrace pergolas, and heavy-duty reinforced concrete framework managed by certified structural engineers.',
      providerId: 'pro-5',
      providerName: 'Terraform Infra Projects',
      providerRating: 4.96,
      providerJobs: 120,
      verified: true,
      popular: true,
      included: [
        'Structural engineer drawing and load-bearing signoff',
        'Fe550 TMT Steel reinforcement & M25 Ready-Mix concrete',
        'Autoclaved Aerated Concrete (AAC) blocks masonry',
        'Continuous curing monitoring and quality testing'
      ],
      notIncluded: [
        'Municipal authority plan sanction fees'
      ]
    },
    {
      id: 'serv-106',
      title: 'Luxury Bathroom Spa Refit & Waterproofing',
      category: 'renovation',
      categoryName: 'Home Renovation',
      price: 32000,
      priceFormatted: '₹32,000',
      duration: '4 - 5 Days',
      rating: 4.93,
      reviewsCount: 156,
      location: 'Ahmedabad / Science City & Gota',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
      description: 'Convert standard washrooms into 5-star hotel style sanctuary with concealed Grohe/Kohler divertor valves, seamless glass enclosures, and 3-coat polymer waterproofing.',
      providerId: 'pro-2',
      providerName: 'Apex Craft Renovations',
      providerRating: 4.98,
      providerJobs: 210,
      verified: true,
      popular: false,
      included: [
        'Complete demolition of old sanitary ware and wall tiles',
        'Double-layer fiber mesh waterproofing with 7-year guarantee',
        'Large-format Italian porcelain tile laying',
        'Concealed flush tank and rain shower plumbing'
      ],
      notIncluded: [
        'Glass shower partition hardware if custom etched'
      ]
    },
    {
      id: 'serv-107',
      title: 'Inverter AC Jet Foam Cleaning & Cooling Gas Top-up',
      category: 'ac-repair',
      categoryName: 'AC Repair',
      price: 899,
      priceFormatted: '₹899',
      duration: '1 - 2 Hours',
      rating: 4.95,
      reviewsCount: 248,
      location: 'Ahmedabad / Bodakdev & Prahlad Nagar',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
      description: 'High-pressure foam jet wash of indoor cooling coil, blower fan, outdoor condenser fin descaling, and eco-friendly R32/R410A refrigerant pressure calibration.',
      providerId: 'pro-1',
      providerName: 'CoolBreeze AirCare Experts',
      providerRating: 4.96,
      providerJobs: 340,
      verified: true,
      popular: true,
      included: [
        'Indoor unit deep jet foam wash with protective catch-jacket',
        'Outdoor condenser unit power jet spray and leaf clearance',
        'Air intake grill, filter, and drain tray disinfection',
        'Ampere load & cooling grill temperature test'
      ],
      notIncluded: [
        'Major compressor winding replacement'
      ]
    },
    {
      id: 'serv-108',
      title: 'Split AC Precision Installation & Core Copper Piping',
      category: 'ac-repair',
      categoryName: 'AC Repair',
      price: 1499,
      priceFormatted: '₹1,499',
      duration: '2 - 3 Hours',
      rating: 4.91,
      reviewsCount: 164,
      location: 'Ahmedabad / Thaltej & Satellite',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Professional vibration-free split AC mounting with diamond-core hole drilling, vacuum leak testing, and heavy-duty GI powder-coated outdoor wall brackets.',
      providerId: 'pro-1',
      providerName: 'CoolBreeze AirCare Experts',
      providerRating: 4.96,
      providerJobs: 340,
      verified: true,
      popular: false,
      included: [
        'Indoor backplate laser alignment and vibration-free wall anchoring',
        'Vacuum pump nitrogen pressure leak check',
        'Outdoor heavy GI stand assembly and fixing',
        'Drain pipe alignment with anti-siphon slope'
      ],
      notIncluded: [
        'Extra copper piping beyond standard manufacturer pack'
      ]
    },
    {
      id: 'serv-109',
      title: 'Master Carpenter Woodwork, Hinges & Sliding Wardrobe Repair',
      category: 'carpenter',
      categoryName: 'Carpenter',
      price: 499,
      priceFormatted: '₹499',
      duration: '1 - 2 Hours',
      rating: 4.89,
      reviewsCount: 310,
      location: 'Ahmedabad / Vastrapur & Navrangpura',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      description: 'Same-day carpenter dispatch for squeaky doors, hydraulic bed lift replacement, broken modular kitchen drawers, and antique wood polishing.',
      providerId: 'pro-3',
      providerName: 'Artisan Woodcraft Guild',
      providerRating: 4.92,
      providerJobs: 145,
      verified: true,
      popular: true,
      included: [
        'Complete inspection of hinges, channels, and locks',
        'Precision alignment of sagging shutters and doors',
        'Minor screw tightening and lubrication of sliding tracks',
        'Wood glue re-bonding of loose laminate edges'
      ],
      notIncluded: [
        'New hardware and lock set purchase cost'
      ]
    },
    {
      id: 'serv-110',
      title: 'Emergency Tap Leakage, Diverter Repair & Pipe Fitting',
      category: 'plumber',
      categoryName: 'Plumber',
      price: 399,
      priceFormatted: '₹399',
      duration: '1 Hour',
      rating: 4.92,
      reviewsCount: 520,
      location: 'Ahmedabad / Bodakdev & Satellite',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      description: 'Rapid 30-min arrival for burst CPVC pipes, dripping Jaquar/Kohler mixer taps, flush cistern leaks, and low water pressure issues.',
      providerId: 'pro-4',
      providerName: 'AquaFlow Master Plumbers',
      providerRating: 4.89,
      providerJobs: 650,
      verified: true,
      popular: true,
      included: [
        'Washer, ceramic spindle, and cartridge replacement',
        'Pressure testing across inlet valves',
        'Teflon sealing of all threaded joints',
        '30-day leak-free assurance'
      ],
      notIncluded: [
        'Concealed pipeline demolition beyond tap point'
      ]
    },
    {
      id: 'serv-111',
      title: 'Short Circuit Tripping Diagnosis & Inverter Home Wiring',
      category: 'electrician',
      categoryName: 'Electrician',
      price: 499,
      priceFormatted: '₹499',
      duration: '1 - 2 Hours',
      rating: 4.97,
      reviewsCount: 390,
      location: 'Ahmedabad / South Bopal & SG Highway',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      description: 'Emergency master electrician dispatch to isolate persistent MCB tripping, neutral fault tracing, inverter backup rewiring, and appliance socket fixes.',
      providerId: 'pro-1',
      providerName: 'Vikram Electrical Solutions',
      providerRating: 4.95,
      providerJobs: 480,
      verified: true,
      popular: true,
      included: [
        'Digital multimeter diagnostic across all sub-circuits',
        'Fault isolation to specific phase or load source',
        'Safe wire insulation splicing and terminal tightening',
        'Earthing continuity verification'
      ],
      notIncluded: [
        'Cost of replacement Schneider/Havells MCB switch'
      ]
    }
  ],

  featuredPros: [
    {
      id: 'pro-1',
      name: 'Vikram Electrical Solutions',
      contactPerson: 'Vikramaditya Rao',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      specialty: 'Master Electrician & Automation',
      rating: 4.95,
      reviewsCount: 384,
      experience: '14+ Yrs',
      jobsCompleted: 480,
      location: 'Bodakdev, Ahmedabad',
      startingPrice: '₹599/hr',
      verified: true,
      joined: 'Feb 2021',
      badges: ['Top Rated', 'Fast Responder', 'Background Verified'],
      bio: 'Licensed Class-A electrical engineering contractor specializing in smart home automation, solar inverter setups, and heavy industrial load compliance for residential estates.',
      portfolio: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'pro-2',
      name: 'Apex Craft Renovations',
      contactPerson: 'Arun & Devika Mehta',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      specialty: 'Architectural Interiors & Remodeling',
      rating: 4.98,
      reviewsCount: 210,
      experience: '11+ Yrs',
      jobsCompleted: 210,
      location: 'Sindhu Bhavan Road, Ahmedabad',
      startingPrice: '₹2,500/visit',
      verified: true,
      joined: 'May 2022',
      badges: ['Elite Designer', '5-Star Quality', 'Insurance Protected'],
      bio: 'Award-winning architectural interior design and turnkey renovation firm. We execute luxury living rooms, open kitchens, and spa-inspired bathrooms with German precision.',
      portfolio: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'pro-3',
      name: 'Artisan Woodcraft Guild',
      contactPerson: 'Gurpreet Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      specialty: 'Bespoke Teak & Modular Carpentry',
      rating: 4.92,
      reviewsCount: 145,
      experience: '18+ Yrs',
      jobsCompleted: 340,
      location: 'Prahlad Nagar, Ahmedabad',
      startingPrice: '₹1,200/consult',
      verified: true,
      joined: 'Aug 2020',
      badges: ['Master Carpenter', 'Handmade Specialist'],
      bio: 'Third-generation woodworkers crafting timeless dining sets, fluted TV consoles, walk-in closets, and acoustically treated timber ceiling paneling.',
      portfolio: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80'
      ]
    },
    {
      id: 'pro-4',
      name: 'AquaFlow Master Plumbers',
      contactPerson: 'Suresh Kumar',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      specialty: 'Hydraulic Sanitary & Leak Diagnostics',
      rating: 4.89,
      reviewsCount: 650,
      experience: '9+ Yrs',
      jobsCompleted: 820,
      location: 'Satellite, Ahmedabad',
      startingPrice: '₹499/visit',
      verified: true,
      joined: 'Jan 2023',
      badges: ['Quick Dispatch', 'Top Speed', 'Warranty Guaranteed'],
      bio: 'Equipped with digital sonic leak detectors and industrial hydro-jetting rigs. We resolve emergency sewer blocks and concealed slab leakages with zero demolition.',
      portfolio: [
        'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
      ]
    }
  ],

  customerBookings: [
    {
      id: 'BK-98421',
      serviceId: 'serv-101',
      serviceTitle: 'Full Home Electrical Safety Audit & Rewiring',
      category: 'Electrical & Lighting',
      providerName: 'Vikram Electrical Solutions',
      providerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      date: 'Tomorrow, Oct 6, 2026',
      timeSlot: '10:00 AM - 12:30 PM',
      address: 'Flat 402, Goyal Intercity, Drive-In Road, Bodakdev, Ahmedabad',
      status: 'On the way', // Requested, Accepted, On the way, Started, Completed, Cancelled
      statusCode: 3, // 1 to 5 for progress bar
      amount: '₹1,499',
      paymentStatus: 'Paid via UPI',
      otp: '4821',
      notes: 'Please check the circuit breaker tripping near kitchen dishwasher.'
    },
    {
      id: 'BK-98305',
      serviceId: 'serv-102',
      serviceTitle: 'Modern Modular Kitchen Renovation & Island Fit',
      category: 'Home Renovation',
      providerName: 'Apex Craft Renovations',
      providerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      date: 'Oct 12 - Oct 18, 2026',
      timeSlot: '09:00 AM onwards',
      address: 'Villa 18, Sun City, South Bopal, Ahmedabad',
      status: 'Accepted',
      statusCode: 2,
      amount: '₹49,999',
      paymentStatus: '₹15,000 Advance Paid',
      otp: '7729',
      notes: 'Design blueprint approved on 3D viewer.'
    },
    {
      id: 'BK-97110',
      serviceId: 'serv-104',
      serviceTitle: 'High-Pressure Hydro-Jet Drain Cleaning',
      category: 'Plumbing',
      providerName: 'AquaFlow Master Plumbers',
      providerAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
      date: 'Sep 28, 2026',
      timeSlot: '02:00 PM - 03:30 PM',
      address: 'Flat 402, Goyal Intercity, Drive-In Road, Bodakdev, Ahmedabad',
      status: 'Completed',
      statusCode: 5,
      amount: '₹1,899',
      paymentStatus: 'Paid Online',
      ratingGiven: 5,
      reviewText: 'Super fast service! Cleaned the stubborn main drain in under an hour.'
    }
  ],

  providerIncomingRequests: [
    {
      id: 'REQ-4019',
      customerName: 'Ananya Sharma',
      customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      serviceTitle: 'Sub-Panel MCB Upgrade & Heavy Load Balancing',
      location: 'Bodakdev, Ahmedabad',
      distance: '2.4 km away',
      preferredDate: 'Today, Oct 5, 2026',
      preferredTime: '04:30 PM',
      budget: '₹2,200',
      status: 'Pending',
      details: 'Tripping MCB whenever EV charger is plugged in. Need 40A double-pole isolator installed.'
    },
    {
      id: 'REQ-4020',
      customerName: 'Rohit Kulkarni',
      customerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      serviceTitle: 'Smart Ambient Living Room LED Profile Lighting',
      location: 'Satellite, Ahmedabad',
      distance: '1.8 km away',
      preferredDate: 'Tomorrow, Oct 6, 2026',
      preferredTime: '11:00 AM',
      budget: '₹4,500',
      status: 'Pending',
      details: 'False ceiling cove light strip replacement with Zigbee smart tunable white strips.'
    }
  ],

  adminStats: {
    totalUsers: '48,290',
    usersGrowth: '+14.2%',
    activeProviders: '1,842',
    providersGrowth: '+8.6%',
    totalBookings: '124,800',
    bookingsGrowth: '+22.5%',
    grossRevenue: '₹4.82 Cr',
    revenueGrowth: '+18.4%',
    pendingVerifications: 14,
    openDisputes: 3
  },

  testimonials: [
    {
      quote: "Mistrry Home Solution handled our entire 3BHK electrical renovation and custom modular kitchen overhaul with remarkable finesse. The quality of verified pros and transparent billing is unrivaled.",
      name: "Priyanka Nambiar",
      role: "Architectural Consultant",
      location: "Bodakdev, Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      service: "Kitchen Renovation & Electrical Audit",
      rating: 5
    },
    {
      quote: "Finding genuine carpenters who understand seasoned teak wood was almost impossible until I booked through Mistrry Home Solution. The dining table they crafted is an absolute heirloom piece.",
      name: "Raghavendra Singhal",
      role: "Art Gallery Director",
      location: "Sindhu Bhavan Road, Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      service: "Bespoke Teak Furniture",
      rating: 5
    },
    {
      quote: "Hydro-jet drain cleaning saved us from tearing apart our bathroom floor tiles. The plumber arrived with high-tech camera gear in 30 minutes. Absolutely five-star service.",
      name: "Sneha Mukherjee",
      role: "Creative Producer",
      location: "Prahlad Nagar, Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      service: "Emergency Plumbing & Jetting",
      rating: 5
    }
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Modern Minimalist Modular Kitchen & Calacatta Island',
      category: 'renovation',
      categoryName: 'Home Renovation',
      client: 'Sunil & Meera Kapoor',
      location: 'Bodakdev, Ahmedabad',
      duration: '7 Days',
      budget: '₹2,45,000',
      budgetRaw: 245000,
      verifiedPro: {
        name: 'Apex Craft Renovations',
        rating: 4.98,
        badge: 'Guild Flagship',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Blum Servo-Drive', 'Calacatta Quartz', 'Bespoke Island', 'LED Profile Coves'],
      description: 'Complete overhaul of an outdated 180 sq.ft kitchen into an open-concept architectural centerpiece featuring anti-fingerprint acrylic cabinetry and integrated breakfast bar.',
      challenge: 'Low ceiling clearance and concealed plumbing pipes required precision 3D CAD modeling to maximize storage without structural drilling.',
      solution: 'Custom engineered high-density moisture-resistant (HDMR) carcass with Blum soft-close fittings and concealed Bosch chimney ducting.',
      warranty: '5-Year Structural & Hardware Warranty',
      featured: true,
      completionDate: 'Sep 2026'
    },
    {
      id: 'proj-2',
      title: 'Italian Travertine Spa Bathroom Transformation',
      category: 'renovation',
      categoryName: 'Home Renovation',
      client: 'Dr. Vivek Menon',
      location: 'Sindhu Bhavan Road, Ahmedabad',
      duration: '5 Days',
      budget: '₹1,65,000',
      budgetRaw: 165000,
      verifiedPro: {
        name: 'Terraform Infra Masters',
        rating: 4.96,
        badge: 'Sanitary Specialist',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Grohe Concealed Valves', 'Italian Travertine', 'Frameless Glass', 'Heated Towel Rail'],
      description: 'Transformed a congested 65 sq.ft bathroom into a luxury resort-grade wet spa with floor-to-ceiling porcelain slabs and linear concealed drain trenches.',
      challenge: 'Chronic seepage in the subfloor had previously ruined the adjacent bedroom drywall.',
      solution: 'Applied dual-layer polymer elastomeric waterproofing membrane before laser-level tile laying with epoxy grouting.',
      warranty: '10-Year Seepage-Free Guarantee',
      featured: true,
      completionDate: 'Aug 2026'
    },
    {
      id: 'proj-3',
      title: 'Smart Home Automation & Thermal DB Board Upgrade',
      category: 'electrical',
      categoryName: 'Electrical & Lighting',
      client: 'Rohan Deshmukh',
      location: 'Satellite, Ahmedabad',
      duration: '2 Days',
      budget: '₹68,000',
      budgetRaw: 68000,
      verifiedPro: {
        name: 'Vikram Electrical Solutions',
        rating: 4.95,
        badge: 'Master Electrician',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Schneider Acti9 MCB', 'Zigbee Hub', 'Infrared Thermography', 'Surge Arrester'],
      description: 'Complete panel rewiring, smart dual-zone energy metering, and home automation integration for a 4BHK duplex experiencing frequent overloads.',
      challenge: 'Unbalanced electrical load from 3 air conditioners and EV fast charger causing frequent tripping.',
      solution: 'Replaced outdated fuse box with Schneider Type-2 surge protected 3-phase DB board and balanced current across all phases.',
      warranty: '3-Year Comprehensive On-Site Warranty',
      featured: true,
      completionDate: 'Sep 2026'
    },
    {
      id: 'proj-4',
      title: 'Bespoke Seasoned Teak Dining Table & Fluted Credenza',
      category: 'furniture',
      categoryName: 'Custom Furniture',
      client: 'Nalini Sengupta',
      location: 'Prahlad Nagar, Ahmedabad',
      duration: '10 Days',
      budget: '₹1,18,000',
      budgetRaw: 118000,
      verifiedPro: {
        name: 'Artisan Woodcraft Guild',
        rating: 4.93,
        badge: 'Woodcraft Guild Master',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['CP Teak Wood', 'Natural Matt PU', 'Mortise & Tenon', 'Fluted Acoustic Panelling'],
      description: 'Handcrafted 8-seater dining suite made from 45-year seasoned Central Province teak wood with natural polyurethane matte finish and brass inlays.',
      challenge: 'Client wanted live-edge organic grain aesthetics while ensuring strict resistance against hot utensils and humidity warping.',
      solution: 'Kiln-dried lumber with moisture content below 9%, joined using traditional floating tenon joinery for generational durability.',
      warranty: '10-Year Anti-Termite & Structural Guarantee',
      featured: false,
      completionDate: 'Jul 2026'
    },
    {
      id: 'proj-5',
      title: 'CCTV Endoscopic Drain Jetting & Concealed Leak Repair',
      category: 'plumbing',
      categoryName: 'Plumbing',
      client: 'Aditya & Tanvi Singhania',
      location: 'Vastrapur, Ahmedabad',
      duration: '1 Day (Emergency)',
      budget: '₹28,500',
      budgetRaw: 28500,
      verifiedPro: {
        name: 'AquaFlow Engineering Pros',
        rating: 4.91,
        badge: 'Certified Hydro Master',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['4000 PSI Jetting', 'CCTV Endoscopy', 'No-Dig Trenchless', 'Cast Iron Relining'],
      description: 'High-pressure 4000 PSI rotary hydro-jetting to clear stubborn calcium scale and tree root ingress in a 40-meter underground sewer trunk line.',
      challenge: 'Previous plumbers recommended tearing down the Italian driveway pavement to locate the blockage.',
      solution: 'Deployed 1080p optical inspection camera probe to locate the precise root intrusion point and obliterated it with high-pressure rotary nozzles in 2 hours.',
      warranty: '2-Year Clog-Free Warranty',
      featured: false,
      completionDate: 'Sep 2026'
    },
    {
      id: 'proj-6',
      title: 'Architectural Terrace Villa Extension & RCC Framing',
      category: 'construction',
      categoryName: 'Construction',
      client: 'Harish & Geeta Varma',
      location: 'South Bopal, Ahmedabad',
      duration: '21 Days',
      budget: '₹5,40,000',
      budgetRaw: 540000,
      verifiedPro: {
        name: 'PrimeStructural Civil Works',
        rating: 4.97,
        badge: 'Structural Engineer',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Fe550D TMT Steel', 'M25 Ready-Mix', 'Weatherproof Membrane', 'Structural Engineering'],
      description: 'Constructed an open glass atrium studio and terrace lounge over an existing 2-story villa with reinforced beam ties and high-grade thermal AAC blocks.',
      challenge: 'Ensuring structural load compliance on 15-year old foundation without exceeding terrace dead-weight limits.',
      solution: 'Structural engineer conducted core compressive strength tests and designed lightweight steel-composite RCC framework.',
      warranty: '15-Year Structural Integrity Warranty',
      featured: true,
      completionDate: 'Jun 2026'
    },
    {
      id: 'proj-7',
      title: 'Floor-to-Ceiling Smoked Glass Teak Wardrobe Suite',
      category: 'furniture',
      categoryName: 'Custom Furniture',
      client: 'Arjun & Karishma Malik',
      location: 'Navrangpura, Ahmedabad',
      duration: '8 Days',
      budget: '₹1,95,000',
      budgetRaw: 195000,
      verifiedPro: {
        name: 'Artisan Woodcraft Guild',
        rating: 4.93,
        badge: 'Woodcraft Guild Master',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Smoked Fluted Glass', 'Motion Sensor LED', 'Velvet Jewelry Drawers', 'Anodized Black Aluminum'],
      description: 'Custom 12-foot master bedroom wardrobe suite with integrated automatic perimeter warm lighting and soft-close pull-out organizers.',
      challenge: 'Irregular wall angles and concealed electrical conduit required millimetric site measurements.',
      solution: 'Laser-leveled aluminum profiles with bespoke CNC carcass cuts for flawless floor-to-ceiling flush alignment.',
      warranty: '5-Year Complete Warranty',
      featured: false,
      completionDate: 'May 2026'
    },
    {
      id: 'proj-8',
      title: 'Architectural Ambient Lighting & Living Room Automation',
      category: 'electrical',
      categoryName: 'Electrical & Lighting',
      client: 'Kavita Nair',
      location: 'SG Highway, Ahmedabad',
      duration: '3 Days',
      budget: '₹84,000',
      budgetRaw: 84000,
      verifiedPro: {
        name: 'Vikram Electrical Solutions',
        rating: 4.95,
        badge: 'Master Electrician',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
      },
      imageAfter: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      imageBefore: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['DALI Dimmable', 'Curved LED Channels', 'Scene Presets', 'Smart App Control'],
      description: 'Installation of seamless magnetic track lighting, concealed warm perimeter light coves, and wireless 4-scene wall touch controllers.',
      challenge: 'Client wanted zero surface conduits and seamless wireless dimming without flickering.',
      solution: 'Fitted ripple-free constant current LED drivers with 2.4GHz RF and Zigbee 3.0 automation gateway.',
      warranty: '3-Year Luminaire Replacement Warranty',
      featured: false,
      completionDate: 'Aug 2026'
    }
  ]
};

// Expose globally for vanilla JS access
window.MockData = MockData;
