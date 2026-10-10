/**
 * MISTRRY HOME SOLUTION - Enterprise Admin Dashboard Engine
 * Strict 4-Color Palette: Teal (#0F766E), Lime (#84CC16), Sage (#F7F8F5), Dark (#17211F)
 * Fully compliant with Frontend-Only Admin Operations
 */

// ============================================================================
// Master Admin Data Model
// ============================================================================
window.AdminData = {
  stats: {
    totalBookings: '1,248',
    todayBookings: '42',
    pendingBookings: '18',
    completedBookings: '1,120',
    cancelledBookings: '68',
    totalCustomers: '48,290',
    activePros: '1,842',
    inactivePros: '86',
    pendingVerification: '14',
    pendingQuotations: '23',
    revisitBookings: '15',
    visitChargeRate: '₹149',
    visitChargeTotal: '₹1,85,952',
    successfulPayments: '1,220',
    pendingPayments: '28',
    failedPayments: '12',
    refundedPayments: '12',
    refundTotal: '₹18,488'
  },

  // 9 Client-Approved Categories
  categories: [
    { id: 'carpenter', name: 'Carpenter', slug: 'carpenter', icon: 'bi-hammer', startingPrice: '₹499', serviceCount: 22, providerCount: 168, active: true, desc: 'Custom furniture, door/window fitting, lock replacement, and bespoke teak woodwork.' },
    { id: 'electrician', name: 'Electrician', slug: 'electrician', icon: 'bi-lightning-charge', startingPrice: '₹349', serviceCount: 31, providerCount: 240, active: true, desc: 'Certified electrical wiring, short-circuit diagnosis, sub-meter fitment, and ambient lights.' },
    { id: 'constructions', name: 'Constructions', slug: 'constructions', icon: 'bi-bricks', startingPrice: '₹4,999', serviceCount: 18, providerCount: 92, active: true, desc: 'RCC structural framework, brickwork, foundation extensions, and architectural masonry.' },
    { id: 'plumber', name: 'Plumber', slug: 'plumber', icon: 'bi-droplet-half', startingPrice: '₹399', serviceCount: 29, providerCount: 195, active: true, desc: 'Leak detection, pipeline hydro-jetting, sanitary fittings, and geyser/tank plumbing.' },
    { id: 'renovation', name: 'Renovation', slug: 'renovation', icon: 'bi-house-gear', startingPrice: '₹2,499', serviceCount: 38, providerCount: 145, active: true, desc: 'Turnkey modular kitchen overhaul, bathroom waterproofing, tile laying, and luxury refits.' },
    { id: 'ac-repair', name: 'AC Repair', slug: 'ac-repair', icon: 'bi-snow', startingPrice: '₹599', serviceCount: 26, providerCount: 210, active: true, desc: 'Split/window AC jet foam servicing, refrigerant gas top-up, PCB diagnostic, and copper piping.' },
    { id: 'ro-geyser', name: 'RO Geyser', slug: 'ro-geyser', icon: 'bi-water', startingPrice: '₹449', serviceCount: 19, providerCount: 112, active: true, desc: 'Water purifier membrane replacement, UV lamp renewal, instant geyser coil repair, and descaling.' },
    { id: 'washing-machine', name: 'Washing Machine', slug: 'washing-machine', icon: 'bi-gear-wide-connected', startingPrice: '₹499', serviceCount: 15, providerCount: 98, active: true, desc: 'Front/top load motor troubleshooting, drum bearing change, drain pump fixes, and error codes.' }
  ],

  professionals: [
    {
      id: 'pro-1',
      name: 'Vikramaditya Rao',
      businessName: 'Vikram Electrical Solutions',
      phone: '+91 98765 11223',
      email: 'vikram.pro@mistrry.in',
      categories: ['Electrician'],
      experience: '12 Years',
      serviceAreas: ['Bodakdev', 'Satellite', 'Vastrapur', 'SG Highway'],
      rating: 4.95,
      jobs: 480,
      verificationStatus: 'Verified',
      accountStatus: 'Active',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'EL-GUJ-99214A',
      aadhaarVerified: true,
      policeClearance: true,
      upcomingBookings: 3
    },
    {
      id: 'pro-2',
      name: 'Arun & Devika Mehta',
      businessName: 'Apex Craft Renovations',
      phone: '+91 98222 33445',
      email: 'apex.craft@mistrry.in',
      categories: ['Renovation', 'Carpenter'],
      experience: '15 Years',
      serviceAreas: ['Sindhu Bhavan', 'Thaltej', 'South Bopal', 'Ambli'],
      rating: 4.98,
      jobs: 210,
      verificationStatus: 'Verified',
      accountStatus: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'RN-GUJ-44120B',
      aadhaarVerified: true,
      policeClearance: true,
      upcomingBookings: 2
    },
    {
      id: 'pro-3',
      name: 'Rameshwar Patil',
      businessName: 'Deccan Hydro Plumbers',
      phone: '+91 97333 44556',
      email: 'deccan.hydro@mistrry.in',
      categories: ['Plumber', 'RO Geyser'],
      experience: '8 Years',
      serviceAreas: ['Prahlad Nagar', 'Bodakdev', 'Paldi', 'Navrangpura'],
      rating: 4.88,
      jobs: 65,
      verificationStatus: 'Pending Audit',
      accountStatus: 'Inactive',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'PL-MUM-88123C',
      aadhaarVerified: true,
      policeClearance: false,
      upcomingBookings: 0
    },
    {
      id: 'pro-4',
      name: 'Shakti Singh Rathore',
      businessName: 'Shakti Structural Engineers',
      phone: '+91 99111 22334',
      email: 'shakti.civil@mistrry.in',
      categories: ['Constructions'],
      experience: '18 Years',
      serviceAreas: ['South Bopal', 'Shela', 'Gota', 'Sanand Road'],
      rating: 4.94,
      jobs: 110,
      verificationStatus: 'Pending Audit',
      accountStatus: 'Inactive',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'CN-ENG-11029D',
      aadhaarVerified: true,
      policeClearance: true,
      upcomingBookings: 0
    },
    {
      id: 'pro-5',
      name: 'Manish Panchal',
      businessName: 'Royal Woodcrafts Guild',
      phone: '+91 98444 55667',
      email: 'royal.wood@mistrry.in',
      categories: ['Carpenter'],
      experience: '14 Years',
      serviceAreas: ['Navrangpura', 'Vastrapur', 'Naranpura'],
      rating: 4.92,
      jobs: 175,
      verificationStatus: 'Verified',
      accountStatus: 'Active',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'CP-GUJ-77192E',
      aadhaarVerified: true,
      policeClearance: true,
      upcomingBookings: 1
    },
    {
      id: 'pro-6',
      name: 'Tanmay Joshi',
      businessName: 'CoolBreeze AirCare Experts',
      phone: '+91 97555 66778',
      email: 'coolbreeze@mistrry.in',
      categories: ['AC Repair', 'Washing Machine'],
      experience: '9 Years',
      serviceAreas: ['Bodakdev', 'Satellite', 'Gota', 'Science City'],
      rating: 4.91,
      jobs: 320,
      verificationStatus: 'Verified',
      accountStatus: 'Suspended',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
      tradeLicense: 'AC-GUJ-55019F',
      aadhaarVerified: true,
      policeClearance: true,
      upcomingBookings: 0
    }
  ],

  bookings: [
    {
      id: 'BK-98421',
      customerName: 'Priyanka Nambiar',
      customerPhone: '+91 98765 43210',
      customerEmail: 'priyanka.n@example.com',
      customerAddress: 'Flat 402, Goyal Intercity, Drive-In Road, Bodakdev, Ahmedabad',
      serviceTitle: 'Full Home Electrical Safety Audit & Rewiring',
      category: 'Electrician',
      assignedProId: 'pro-1',
      assignedProName: 'Vikram Electrical Solutions',
      date: 'Oct 14, 2026',
      timeSlot: '10:00 AM - 12:30 PM',
      status: 'In Progress',
      visitCharge: 149,
      visitChargeStatus: 'Paid via UPI',
      visitChargeTxn: 'TXN-VIS-101',
      quotationRef: 'QT-5011',
      quotationAmount: 1499,
      finalAmount: 1499,
      paymentStatus: 'Advance Paid',
      isRevisit: false,
      history: [
        { time: 'Oct 09, 2026 09:30 AM', event: 'Booking placed by customer. Inspection visit fee ₹149 charged.', actor: 'Customer' },
        { time: 'Oct 09, 2026 10:15 AM', event: 'Assigned to Vikram Electrical Solutions.', actor: 'System' },
        { time: 'Oct 14, 2026 09:45 AM', event: 'Professional marked en-route.', actor: 'Provider' }
      ]
    },
    {
      id: 'BK-98305',
      customerName: 'Karan Mehra',
      customerPhone: '+91 98234 56789',
      customerEmail: 'karan.mehra@example.com',
      customerAddress: 'Villa 18, Sun City, South Bopal, Ahmedabad',
      serviceTitle: 'Modern Modular Kitchen Renovation & Island Fit',
      category: 'Renovation',
      assignedProId: 'pro-2',
      assignedProName: 'Apex Craft Renovations',
      date: 'Oct 18, 2026',
      timeSlot: '09:00 AM onwards',
      status: 'Accepted',
      visitCharge: 149,
      visitChargeStatus: 'Paid via NetBanking',
      visitChargeTxn: 'TXN-VIS-102',
      quotationRef: 'QT-5012',
      quotationAmount: 49999,
      finalAmount: 49999,
      paymentStatus: '₹15,000 Advance Escrow',
      isRevisit: false,
      history: [
        { time: 'Oct 07, 2026 02:20 PM', event: 'Inspection booked. Visit fee ₹149 paid.', actor: 'Customer' },
        { time: 'Oct 08, 2026 11:00 AM', event: 'Site visit completed. Quotation QT-5012 submitted for ₹49,999.', actor: 'Apex Craft' },
        { time: 'Oct 08, 2026 04:30 PM', event: 'Customer accepted quotation and deposited ₹15,000 into escrow.', actor: 'Customer' }
      ]
    },
    {
      id: 'BK-97110',
      customerName: 'Sneha Mukherjee',
      customerPhone: '+91 98901 23456',
      customerEmail: 'sneha.m@example.com',
      customerAddress: 'Flat 204, Shivalik Highstreet, Prahlad Nagar, Ahmedabad',
      serviceTitle: 'High-Pressure Hydro-Jet Drain Cleaning',
      category: 'Plumber',
      assignedProId: 'pro-3',
      assignedProName: 'Deccan Hydro Plumbers',
      date: 'Sep 28, 2026',
      timeSlot: '02:00 PM - 03:30 PM',
      status: 'Completed',
      visitCharge: 149,
      visitChargeStatus: 'Paid via Card',
      visitChargeTxn: 'TXN-VIS-103',
      quotationRef: 'QT-5009',
      quotationAmount: 1899,
      finalAmount: 1899,
      paymentStatus: 'Paid Full',
      isRevisit: false,
      history: [
        { time: 'Sep 27, 2026 04:00 PM', event: 'Inspection booked with ₹149 visit fee.', actor: 'Customer' },
        { time: 'Sep 28, 2026 02:00 PM', event: 'Work executed and hydro-jetting cleared lines.', actor: 'Deccan Hydro' },
        { time: 'Sep 28, 2026 03:45 PM', event: 'Customer approved completion. Payment ₹1,899 cleared.', actor: 'Customer' }
      ]
    },
    {
      id: 'BK-96540',
      customerName: 'Rohit Kulkarni',
      customerPhone: '+91 98111 44556',
      customerEmail: 'rohit.k@example.com',
      customerAddress: 'B-302, Indraprastha Towers, Satellite, Ahmedabad',
      serviceTitle: 'Inverter AC Jet Foam Cleaning & Cooling Gas Top-up',
      category: 'AC Repair',
      assignedProId: 'pro-6',
      assignedProName: 'CoolBreeze AirCare Experts',
      date: 'Oct 05, 2026',
      timeSlot: '11:00 AM - 01:00 PM',
      status: 'Cancelled',
      visitCharge: 149,
      visitChargeStatus: 'Paid via UPI',
      visitChargeTxn: 'TXN-VIS-104',
      quotationRef: null,
      quotationAmount: 0,
      finalAmount: 0,
      paymentStatus: 'Refund Pending Review',
      isRevisit: false,
      history: [
        { time: 'Oct 04, 2026 10:00 AM', event: 'Inspection booked. Visit fee ₹149 collected.', actor: 'Customer' },
        { time: 'Oct 05, 2026 08:30 AM', event: 'Cancelled by customer: Technician delay exceeded 45 mins.', actor: 'Admin' }
      ]
    },
    {
      id: 'BK-95211',
      customerName: 'Raghavendra Singhal',
      customerPhone: '+91 98111 22334',
      customerEmail: 'raghav.s@example.com',
      customerAddress: 'Bungalow 7, Sindhu Bhavan Road, Ahmedabad',
      serviceTitle: 'Bespoke Solid Teak Dining Table Crafting',
      category: 'Carpenter',
      assignedProId: 'pro-5',
      assignedProName: 'Royal Woodcrafts Guild',
      date: 'Oct 20, 2026',
      timeSlot: '11:00 AM - 01:00 PM',
      status: 'Confirmed',
      visitCharge: 149,
      visitChargeStatus: 'Paid via UPI',
      visitChargeTxn: 'TXN-VIS-105',
      quotationRef: 'QT-5014',
      quotationAmount: 24500,
      finalAmount: 24500,
      paymentStatus: '₹10,000 Advance Paid',
      isRevisit: false,
      history: [
        { time: 'Oct 06, 2026 01:10 PM', event: 'Woodcraft inspection scheduled with ₹149 fee.', actor: 'Customer' },
        { time: 'Oct 07, 2026 05:00 PM', event: 'Material timber assessment quotation QT-5014 confirmed.', actor: 'Royal Woodcraft' }
      ]
    },
    {
      id: 'BK-94109',
      customerName: 'Sneha Mukherjee',
      customerPhone: '+91 98901 23456',
      customerEmail: 'sneha.m@example.com',
      customerAddress: 'Flat 204, Shivalik Highstreet, Prahlad Nagar, Ahmedabad',
      serviceTitle: 'Warranty Re-Check: Minor Pipe Gasket Re-Sealing',
      category: 'Plumber',
      assignedProId: 'pro-3',
      assignedProName: 'Deccan Hydro Plumbers',
      date: 'Oct 16, 2026',
      timeSlot: '03:00 PM - 04:30 PM',
      status: 'Revisit Scheduled',
      visitCharge: 0,
      visitChargeStatus: 'Warranty Free Revisit',
      visitChargeTxn: null,
      quotationRef: null,
      quotationAmount: 0,
      finalAmount: 0,
      paymentStatus: 'Warranty Covered (₹0)',
      isRevisit: true,
      originalBookingId: 'BK-97110',
      revisitId: 'RV-108',
      history: [
        { time: 'Oct 08, 2026 11:30 AM', event: 'Linked Revisit RV-108 generated against original booking BK-97110.', actor: 'Admin' },
        { time: 'Oct 08, 2026 11:35 AM', event: 'Assigned to original technician Rameshwar Patil.', actor: 'Admin' }
      ]
    }
  ],

  quotations: [
    {
      id: 'QT-5011',
      bookingId: 'BK-98421',
      customerName: 'Priyanka Nambiar',
      proName: 'Vikram Electrical Solutions',
      category: 'Electrician',
      inspectionDate: 'Oct 10, 2026',
      labourCharges: 850,
      materialCharges: 450,
      otherCharges: 199,
      totalAmount: 1499,
      status: 'Accepted',
      customerAction: 'Approved by Customer',
      createdAt: 'Oct 10, 2026',
      expiryDate: 'Oct 25, 2026',
      revisionCount: 0,
      revisions: [
        { version: 'v1.0', date: 'Oct 10, 2026', total: 1499, note: 'Initial diagnostic quote with Schneider MCB & earthing wires.' }
      ]
    },
    {
      id: 'QT-5012',
      bookingId: 'BK-98305',
      customerName: 'Karan Mehra',
      proName: 'Apex Craft Renovations',
      category: 'Renovation',
      inspectionDate: 'Oct 08, 2026',
      labourCharges: 18500,
      materialCharges: 29500,
      otherCharges: 1999,
      totalAmount: 49999,
      status: 'Accepted',
      customerAction: 'Approved by Customer',
      createdAt: 'Oct 08, 2026',
      expiryDate: 'Nov 08, 2026',
      revisionCount: 1,
      revisions: [
        { version: 'v1.0', date: 'Oct 08, 2026', total: 54000, note: 'Original quotation with imported granite.' },
        { version: 'v2.0', date: 'Oct 09, 2026', total: 49999, note: 'Revised to quartz countertop upon client request.' }
      ]
    },
    {
      id: 'QT-5013',
      bookingId: 'BK-98112',
      customerName: 'Ananya Sharma',
      proName: 'Shakti Structural Engineers',
      category: 'Constructions',
      inspectionDate: 'Oct 09, 2026',
      labourCharges: 35000,
      materialCharges: 48000,
      otherCharges: 2000,
      totalAmount: 85000,
      status: 'Submitted',
      customerAction: 'Pending Customer Review',
      createdAt: 'Oct 09, 2026',
      expiryDate: 'Oct 24, 2026',
      revisionCount: 0,
      revisions: [
        { version: 'v1.0', date: 'Oct 09, 2026', total: 85000, note: 'RCC reinforcement & AAC masonry extension.' }
      ]
    },
    {
      id: 'QT-5014',
      bookingId: 'BK-95211',
      customerName: 'Raghavendra Singhal',
      proName: 'Royal Woodcrafts Guild',
      category: 'Carpenter',
      inspectionDate: 'Oct 07, 2026',
      labourCharges: 9500,
      materialCharges: 14000,
      otherCharges: 1000,
      totalAmount: 24500,
      status: 'Accepted',
      customerAction: 'Approved by Customer',
      createdAt: 'Oct 07, 2026',
      expiryDate: 'Oct 30, 2026',
      revisionCount: 0,
      revisions: [
        { version: 'v1.0', date: 'Oct 07, 2026', total: 24500, note: 'Seasoned CP teakwood dining construction.' }
      ]
    },
    {
      id: 'QT-5015',
      bookingId: 'BK-97554',
      customerName: 'Dr. Vivek Menon',
      proName: 'Apex Craft Renovations',
      category: 'Renovation',
      inspectionDate: 'Oct 06, 2026',
      labourCharges: 14000,
      materialCharges: 21000,
      otherCharges: 1000,
      totalAmount: 36000,
      status: 'Rejected',
      customerAction: 'Declined by Customer',
      createdAt: 'Oct 06, 2026',
      expiryDate: 'Oct 20, 2026',
      revisionCount: 0,
      revisions: [
        { version: 'v1.0', date: 'Oct 06, 2026', total: 36000, note: 'Bathroom luxury wet spa tiles refit proposal.' }
      ]
    }
  ],

  revisits: [
    {
      id: 'RV-108',
      originalBookingId: 'BK-97110',
      customerName: 'Sneha Mukherjee',
      customerPhone: '+91 98901 23456',
      serviceTitle: 'Drain Hydro-Jetting Follow-up',
      category: 'Plumber',
      proName: 'Deccan Hydro Plumbers',
      scheduledDate: 'Oct 16, 2026',
      scheduledTime: '03:00 PM - 04:30 PM',
      reason: 'Customer reported slight water drip at sink trap joint within 30-day warranty window.',
      status: 'Revisit Scheduled',
      warrantyCovered: true,
      originalDate: 'Sep 28, 2026'
    },
    {
      id: 'RV-107',
      originalBookingId: 'BK-95120',
      customerName: 'Harish Varma',
      customerPhone: '+91 99222 88776',
      serviceTitle: 'Sub-Panel MCB Calibration',
      category: 'Electrician',
      proName: 'Vikram Electrical Solutions',
      scheduledDate: 'Oct 04, 2026',
      scheduledTime: '11:00 AM - 12:30 PM',
      reason: 'Routine post-installation thermal scan audit for EV charger line.',
      status: 'Completed',
      warrantyCovered: true,
      originalDate: 'Sep 20, 2026'
    }
  ],

  payments: [
    // Distinct Records: ₹149 Visit Charge records vs Final Quotation Service Payments
    {
      id: 'TXN-VIS-101',
      bookingId: 'BK-98421',
      customerName: 'Priyanka Nambiar',
      proName: 'Vikram Electrical Solutions',
      chargeType: 'Inspection Visit Charge (₹149)',
      amount: 149,
      method: 'UPI (PhonePe)',
      status: 'Successful',
      date: 'Oct 09, 2026, 09:30 AM',
      gatewayTxnId: 'PAY-UPI-98218902',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-SRV-201',
      bookingId: 'BK-98421',
      customerName: 'Priyanka Nambiar',
      proName: 'Vikram Electrical Solutions',
      chargeType: 'Final Service Quotation Payment',
      amount: 1499,
      method: 'UPI (GPay)',
      status: 'Pending',
      date: 'Oct 14, 2026 (Scheduled)',
      gatewayTxnId: 'PAY-ESC-48190284',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-VIS-102',
      bookingId: 'BK-98305',
      customerName: 'Karan Mehra',
      proName: 'Apex Craft Renovations',
      chargeType: 'Inspection Visit Charge (₹149)',
      amount: 149,
      method: 'NetBanking (HDFC)',
      status: 'Successful',
      date: 'Oct 07, 2026, 02:22 PM',
      gatewayTxnId: 'PAY-NB-77291048',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-SRV-202',
      bookingId: 'BK-98305',
      customerName: 'Karan Mehra',
      proName: 'Apex Craft Renovations',
      chargeType: 'Advance Escrow Milestone',
      amount: 15000,
      method: 'NetBanking (HDFC)',
      status: 'Successful',
      date: 'Oct 08, 2026, 04:35 PM',
      gatewayTxnId: 'PAY-ESC-99281033',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-VIS-103',
      bookingId: 'BK-97110',
      customerName: 'Sneha Mukherjee',
      proName: 'Deccan Hydro Plumbers',
      chargeType: 'Inspection Visit Charge (₹149)',
      amount: 149,
      method: 'Credit Card (ICICI)',
      status: 'Successful',
      date: 'Sep 27, 2026, 04:02 PM',
      gatewayTxnId: 'PAY-CC-66281904',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-SRV-203',
      bookingId: 'BK-97110',
      customerName: 'Sneha Mukherjee',
      proName: 'Deccan Hydro Plumbers',
      chargeType: 'Final Service Quotation Payment',
      amount: 1899,
      method: 'Credit Card (ICICI)',
      status: 'Successful',
      date: 'Sep 28, 2026, 03:50 PM',
      gatewayTxnId: 'PAY-CC-66282019',
      refundStatus: 'None',
      refundRef: null
    },
    {
      id: 'TXN-VIS-104',
      bookingId: 'BK-96540',
      customerName: 'Rohit Kulkarni',
      proName: 'CoolBreeze AirCare Experts',
      chargeType: 'Inspection Visit Charge (₹149)',
      amount: 149,
      method: 'UPI (Paytm)',
      status: 'Refunded',
      date: 'Oct 04, 2026, 10:05 AM',
      gatewayTxnId: 'PAY-UPI-11928374',
      refundStatus: 'Refunded to Source (₹149)',
      refundRef: 'REF-GTW-40192'
    },
    {
      id: 'TXN-VIS-105',
      bookingId: 'BK-95211',
      customerName: 'Raghavendra Singhal',
      proName: 'Royal Woodcrafts Guild',
      chargeType: 'Inspection Visit Charge (₹149)',
      amount: 149,
      method: 'UPI (GPay)',
      status: 'Successful',
      date: 'Oct 06, 2026, 01:15 PM',
      gatewayTxnId: 'PAY-UPI-55291083',
      refundStatus: 'None',
      refundRef: null
    }
  ],

  customers: [
    {
      id: 'cust-1',
      name: 'Priyanka Nambiar',
      email: 'priyanka.n@example.com',
      phone: '+91 98765 43210',
      location: 'Bodakdev, Ahmedabad',
      totalBookings: 3,
      lifetimeSpend: '₹53,397',
      status: 'Active VIP',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      complaintsCount: 0,
      bookings: ['BK-98421', 'BK-95120', 'BK-93201']
    },
    {
      id: 'cust-2',
      name: 'Karan Mehra',
      email: 'karan.mehra@example.com',
      phone: '+91 98234 56789',
      location: 'South Bopal, Ahmedabad',
      totalBookings: 2,
      lifetimeSpend: '₹51,498',
      status: 'Active VIP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      complaintsCount: 0,
      bookings: ['BK-98305', 'BK-94810']
    },
    {
      id: 'cust-3',
      name: 'Sneha Mukherjee',
      email: 'sneha.m@example.com',
      phone: '+91 98901 23456',
      location: 'Prahlad Nagar, Ahmedabad',
      totalBookings: 4,
      lifetimeSpend: '₹14,240',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
      complaintsCount: 1,
      bookings: ['BK-97110', 'BK-94109', 'BK-92001', 'BK-91880']
    },
    {
      id: 'cust-4',
      name: 'Rohit Kulkarni',
      email: 'rohit.k@example.com',
      phone: '+91 98111 44556',
      location: 'Satellite, Ahmedabad',
      totalBookings: 1,
      lifetimeSpend: '₹149',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
      complaintsCount: 1,
      bookings: ['BK-96540']
    },
    {
      id: 'cust-5',
      name: 'Raghavendra Singhal',
      email: 'raghav.s@example.com',
      phone: '+91 98111 22334',
      location: 'Sindhu Bhavan Road, Ahmedabad',
      totalBookings: 2,
      lifetimeSpend: '₹24,649',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      complaintsCount: 0,
      bookings: ['BK-95211', 'BK-93100']
    }
  ],

  complaints: [
    {
      id: 'CMP-401',
      bookingId: 'BK-96540',
      customerName: 'Rohit Kulkarni',
      proName: 'CoolBreeze AirCare Experts',
      issueType: 'Technician Delay & Non-Response',
      date: 'Oct 05, 2026',
      status: 'Resolved',
      notes: 'Customer compensated with priority reschedule credit. Technician reprimanded.'
    },
    {
      id: 'CMP-402',
      bookingId: 'BK-97110',
      customerName: 'Sneha Mukherjee',
      proName: 'Deccan Hydro Plumbers',
      issueType: 'Minor Gasket Drip Post-Service',
      date: 'Oct 08, 2026',
      status: 'In Investigation',
      notes: 'Free warranty revisit RV-108 scheduled for Oct 16 to inspect seal.'
    }
  ]
};

// ============================================================================
// Core Admin Lifecycle Initializer
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAdminCharts();
  initAdminGlobalInteractions();
});

/* --------------------------------------------------------------------------
   Analytics Charts (Strict 4-Color Palette: Teal, Lime, Sage, Dark)
   -------------------------------------------------------------------------- */
function initAdminCharts() {
  const revenueCanvas = document.getElementById('adminRevenueChart');
  if (revenueCanvas && typeof Chart !== 'undefined') {
    new Chart(revenueCanvas, {
      type: 'bar',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Marketplace Volume (₹ Lakhs)',
            data: [48, 62, 75, 94, 112, 148],
            backgroundColor: '#17211F',
            borderRadius: 6
          },
          {
            label: 'Inspection Fees (₹149 Vol)',
            data: [1.8, 2.4, 3.1, 4.2, 5.8, 7.6],
            backgroundColor: '#84CC16',
            borderRadius: 6
          },
          {
            label: 'Platform Net Commission (15%)',
            data: [7.2, 9.3, 11.2, 14.1, 16.8, 22.2],
            backgroundColor: '#0F766E',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { 
            position: 'top', 
            labels: { 
              boxWidth: 12, 
              font: { family: 'Plus Jakarta Sans', weight: '600' },
              color: '#17211F'
            } 
          }
        },
        scales: {
          y: { 
            grid: { color: '#E2E5DF' }, 
            ticks: { 
              color: '#71807D',
              callback: (v) => '₹' + v + 'L' 
            } 
          },
          x: { 
            grid: { display: false },
            ticks: { color: '#71807D' }
          }
        }
      }
    });
  }

  const categoryCanvas = document.getElementById('adminCategoryChart');
  if (categoryCanvas && typeof Chart !== 'undefined') {
    new Chart(categoryCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Electrician', 'Renovation', 'Plumber', 'Carpenter', 'AC Repair', 'Constructions', 'Others'],
        datasets: [{
          data: [28, 24, 18, 14, 8, 5, 3],
          backgroundColor: ['#0F766E', '#84CC16', '#17211F', '#115E59', '#65A30D', '#365314', '#9CA3AF'],
          borderWidth: 2,
          borderColor: '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { 
            position: 'bottom', 
            labels: { 
              boxWidth: 10, 
              font: { family: 'Plus Jakarta Sans', size: 11 },
              color: '#4A5855'
            } 
          }
        },
        cutout: '70%'
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Global Admin Interactive Handlers
   -------------------------------------------------------------------------- */
function initAdminGlobalInteractions() {
  document.addEventListener('click', (e) => {
    // 1. Approve Provider Verification
    const approveProBtn = e.target.closest('.btn-admin-approve-pro');
    if (approveProBtn) {
      const row = approveProBtn.closest('tr') || approveProBtn.closest('.pending-card');
      if (row) {
        const badge = row.querySelector('.status-badge');
        if (badge) {
          badge.className = 'badge-custom badge-custom-verified status-badge';
          badge.innerHTML = '<i class="bi bi-patch-check-fill"></i> Verified';
        }
        approveProBtn.remove();
      }
      if (window.showToast) {
        window.showToast('✅ Provider verified & active in marketplace.', 'success', 'bi-shield-check');
      }
    }

    // 2. Reject Provider Verification
    const rejectProBtn = e.target.closest('.btn-admin-reject-pro');
    if (rejectProBtn) {
      const row = rejectProBtn.closest('tr') || rejectProBtn.closest('.pending-card');
      if (row) {
        row.style.opacity = '0.45';
      }
      if (window.showToast) {
        window.showToast('Provider application marked as rejected.', 'danger', 'bi-x-circle');
      }
    }

    // 3. Moderate / Flag Review
    const moderateReviewBtn = e.target.closest('.btn-admin-moderate');
    if (moderateReviewBtn) {
      const row = moderateReviewBtn.closest('tr');
      if (row) {
        const badge = row.querySelector('.badge-custom');
        if (badge) {
          badge.className = 'badge-custom badge-custom-neutral';
          badge.innerHTML = '<i class="bi bi-flag-fill"></i> Flagged for Audit';
        }
      }
      if (window.showToast) {
        window.showToast('Review flagged for content compliance audit.', 'info', 'bi-flag');
      }
    }

    // 4. Dispute Escrow Refund
    const disputeRefundBtn = e.target.closest('.btn-admin-refund');
    if (disputeRefundBtn) {
      if (window.showToast) {
        window.showToast('💸 Refund review triggered. Bank gateway settlement queued via Escrow.', 'success', 'bi-cash-coin');
      }
    }
  });
}

// ============================================================================
// Page 4: Booking Management Operations
// ============================================================================
window.openBookingDetailsModal = function(bookingId) {
  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (!bk) return;

  const modalEl = document.getElementById('bookingDetailsModal');
  if (!modalEl) return;

  document.getElementById('modalBkId').textContent = '#' + bk.id;
  document.getElementById('modalBkCustomer').textContent = bk.customerName;
  document.getElementById('modalBkPhone').textContent = bk.customerPhone;
  document.getElementById('modalBkEmail').textContent = bk.customerEmail;
  document.getElementById('modalBkAddress').textContent = bk.customerAddress;
  document.getElementById('modalBkService').textContent = bk.serviceTitle;
  document.getElementById('modalBkCategory').textContent = bk.category;
  document.getElementById('modalBkPro').textContent = bk.assignedProName || 'Unassigned';
  document.getElementById('modalBkSchedule').textContent = `${bk.date} (${bk.timeSlot})`;
  document.getElementById('modalBkStatus').innerHTML = getBookingStatusBadge(bk.status);
  document.getElementById('modalBkVisitCharge').textContent = `₹${bk.visitCharge} (${bk.visitChargeStatus})`;
  document.getElementById('modalBkQuotation').textContent = bk.quotationRef ? `${bk.quotationRef} (₹${bk.quotationAmount})` : 'Pending Inspection';
  document.getElementById('modalBkPaymentStatus').textContent = bk.paymentStatus;

  // History timeline
  const timelineEl = document.getElementById('modalBkTimeline');
  if (timelineEl) {
    timelineEl.innerHTML = bk.history.map(h => `
      <div class="d-flex gap-3 mb-2">
        <div class="text-lime-custom fs-5"><i class="bi bi-check-circle-fill"></i></div>
        <div>
          <div class="font-weight-bold small text-dark">${h.event}</div>
          <div class="text-muted" style="font-size: 11px;">${h.time} • By ${h.actor}</div>
        </div>
      </div>
    `).join('');
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.openAssignProModal = function(bookingId) {
  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (!bk) return;

  const modalEl = document.getElementById('assignProModal');
  if (!modalEl) return;

  document.getElementById('assignBkId').textContent = '#' + bk.id;
  document.getElementById('assignCurrentPro').textContent = bk.assignedProName || 'None (Unassigned)';
  document.getElementById('assignCategory').textContent = bk.category;
  
  // Populate matching pros
  const selectEl = document.getElementById('assignProSelect');
  if (selectEl) {
    selectEl.innerHTML = window.AdminData.professionals
      .filter(p => p.accountStatus === 'Active')
      .map(p => `
        <option value="${p.id}" ${p.id === bk.assignedProId ? 'selected' : ''}>
          ${p.businessName} (${p.categories.join(', ')} • Rating: ${p.rating}★ • ${p.serviceAreas[0]})
        </option>
      `).join('');
  }

  modalEl.setAttribute('data-target-booking-id', bookingId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmAssignPro = function() {
  const modalEl = document.getElementById('assignProModal');
  const bookingId = modalEl.getAttribute('data-target-booking-id');
  const selectEl = document.getElementById('assignProSelect');
  const reasonEl = document.getElementById('assignReasonInput');

  if (!bookingId || !selectEl) return;

  const proId = selectEl.value;
  const reason = reasonEl ? reasonEl.value.trim() : '';
  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  const pro = window.AdminData.professionals.find(p => p.id === proId);

  if (bk && pro) {
    bk.assignedProId = pro.id;
    bk.assignedProName = pro.businessName;
    bk.history.push({
      time: 'Just now',
      event: `Professional transferred/assigned to ${pro.businessName}. Reason: ${reason || 'Admin assignment'}`,
      actor: 'Admin'
    });

    // Update row in DOM
    const row = document.getElementById(`bk-row-${bk.id}`);
    if (row) {
      const proCell = row.querySelector('.bk-pro-cell');
      if (proCell) proCell.textContent = pro.businessName;
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`✅ Professional ${pro.businessName} successfully assigned to #${bk.id}! (Saved in live session state)`, 'success');
  }
};

window.openRescheduleModal = function(bookingId) {
  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (!bk) return;

  const modalEl = document.getElementById('rescheduleModal');
  if (!modalEl) return;

  document.getElementById('rescheduleBkId').textContent = '#' + bk.id;
  document.getElementById('rescheduleOldDate').textContent = `${bk.date} (${bk.timeSlot})`;
  
  modalEl.setAttribute('data-target-booking-id', bookingId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmReschedule = function() {
  const modalEl = document.getElementById('rescheduleModal');
  const bookingId = modalEl.getAttribute('data-target-booking-id');
  const newDate = document.getElementById('rescheduleNewDate').value;
  const newTime = document.getElementById('rescheduleNewTime').value;
  const reason = document.getElementById('rescheduleReason').value.trim();

  if (!newDate || !newTime) {
    alert('Please choose both a new date and time slot.');
    return;
  }

  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (bk) {
    const oldSchedule = `${bk.date} (${bk.timeSlot})`;
    bk.date = newDate;
    bk.timeSlot = newTime;
    bk.status = 'Rescheduled';
    bk.history.push({
      time: 'Just now',
      event: `Booking rescheduled from ${oldSchedule} to ${newDate} (${newTime}). Reason: ${reason || 'Customer request'}`,
      actor: 'Admin'
    });

    const row = document.getElementById(`bk-row-${bk.id}`);
    if (row) {
      const dateCell = row.querySelector('.bk-date-cell');
      if (dateCell) dateCell.textContent = `${newDate} • ${newTime}`;
      const statusCell = row.querySelector('.bk-status-cell');
      if (statusCell) statusCell.innerHTML = getBookingStatusBadge('Rescheduled');
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`📅 Booking #${bk.id} rescheduled to ${newDate}. Customer notified.`, 'success');
  }
};

window.openCancelModal = function(bookingId) {
  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (!bk) return;

  const modalEl = document.getElementById('cancelModal');
  if (!modalEl) return;

  document.getElementById('cancelBkId').textContent = '#' + bk.id;
  document.getElementById('cancelCustomer').textContent = bk.customerName;
  document.getElementById('cancelPaymentStatus').textContent = bk.paymentStatus;
  
  modalEl.setAttribute('data-target-booking-id', bookingId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmCancellation = function() {
  const modalEl = document.getElementById('cancelModal');
  const bookingId = modalEl.getAttribute('data-target-booking-id');
  const reason = document.getElementById('cancelReason').value.trim();

  if (!reason) {
    alert('Please enter a cancellation reason.');
    return;
  }

  const bk = window.AdminData.bookings.find(b => b.id === bookingId);
  if (bk) {
    bk.status = 'Cancelled';
    bk.history.push({
      time: 'Just now',
      event: `Booking cancelled by Admin. Reason: ${reason}. Payment refund status preserved separately.`,
      actor: 'Admin'
    });

    const row = document.getElementById(`bk-row-${bk.id}`);
    if (row) {
      const statusCell = row.querySelector('.bk-status-cell');
      if (statusCell) statusCell.innerHTML = getBookingStatusBadge('Cancelled');
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`⚠️ Booking #${bk.id} cancelled. Please review refund disposition in Payments & Refunds.`, 'warning');
  }
};

function getBookingStatusBadge(status) {
  switch (status) {
    case 'Pending':
      return '<span class="badge-custom badge-custom-lime"><i class="bi bi-clock"></i> Pending</span>';
    case 'Accepted':
      return '<span class="badge-custom badge-custom-verified"><i class="bi bi-check2"></i> Accepted</span>';
    case 'Confirmed':
      return '<span class="badge-custom badge-custom-verified"><i class="bi bi-shield-check"></i> Confirmed</span>';
    case 'In Progress':
      return '<span class="badge-custom badge-custom-teal"><i class="bi bi-arrow-repeat"></i> In Progress</span>';
    case 'Completed':
      return '<span class="badge-custom badge-custom-verified"><i class="bi bi-patch-check-fill"></i> Completed</span>';
    case 'Cancelled':
      return '<span class="badge-custom badge-custom-dark"><i class="bi bi-x-circle"></i> Cancelled</span>';
    case 'Rescheduled':
      return '<span class="badge-custom badge-custom-neutral"><i class="bi bi-calendar-event"></i> Rescheduled</span>';
    case 'Revisit Scheduled':
      return '<span class="badge-custom badge-custom-lime"><i class="bi bi-arrow-counterclockwise"></i> Revisit Scheduled</span>';
    default:
      return `<span class="badge-custom badge-custom-neutral">${status}</span>`;
  }
}

// ============================================================================
// Page 5: Professional Management Operations
// ============================================================================
window.openProDossierModal = function(proId) {
  const pro = window.AdminData.professionals.find(p => p.id === proId);
  if (!pro) return;

  const modalEl = document.getElementById('proDossierModal');
  if (!modalEl) return;

  document.getElementById('dossierName').textContent = pro.businessName;
  document.getElementById('dossierOwner').textContent = pro.name;
  document.getElementById('dossierPhone').textContent = pro.phone;
  document.getElementById('dossierEmail').textContent = pro.email;
  document.getElementById('dossierCategories').textContent = pro.categories.join(', ');
  document.getElementById('dossierExp').textContent = pro.experience;
  document.getElementById('dossierAreas').textContent = pro.serviceAreas.join(', ');
  document.getElementById('dossierLicense').textContent = pro.tradeLicense;
  document.getElementById('dossierRating').textContent = `${pro.rating} ★ (${pro.jobs} Jobs)`;
  document.getElementById('dossierAadhaar').innerHTML = pro.aadhaarVerified ? '<span class="text-lime-custom font-weight-bold">✓ Verified UIDAI</span>' : '<span class="text-danger">Pending</span>';
  document.getElementById('dossierPolice').innerHTML = pro.policeClearance ? '<span class="text-lime-custom font-weight-bold">✓ Cleared</span>' : '<span class="text-danger">Pending Clearance</span>';

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.openProStatusModal = function(proId) {
  const pro = window.AdminData.professionals.find(p => p.id === proId);
  if (!pro) return;

  const modalEl = document.getElementById('proStatusModal');
  if (!modalEl) return;

  document.getElementById('statusProName').textContent = pro.businessName;
  document.getElementById('statusCurrentStatus').textContent = pro.accountStatus;
  document.getElementById('statusUpcomingBookings').textContent = pro.upcomingBookings;
  document.getElementById('newStatusSelect').value = pro.accountStatus;

  modalEl.setAttribute('data-target-pro-id', proId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmProStatusChange = function() {
  const modalEl = document.getElementById('proStatusModal');
  const proId = modalEl.getAttribute('data-target-pro-id');
  const newStatus = document.getElementById('newStatusSelect').value;
  const reason = document.getElementById('statusReasonInput').value.trim();

  const pro = window.AdminData.professionals.find(p => p.id === proId);
  if (pro) {
    pro.accountStatus = newStatus;

    const row = document.getElementById(`pro-row-${pro.id}`);
    if (row) {
      const badge = row.querySelector('.pro-status-badge');
      if (badge) {
        if (newStatus === 'Active') {
          badge.className = 'badge-custom badge-custom-verified pro-status-badge';
          badge.innerHTML = '<i class="bi bi-check-circle-fill"></i> Active';
        } else if (newStatus === 'Suspended') {
          badge.className = 'badge-custom badge-custom-dark pro-status-badge';
          badge.innerHTML = '<i class="bi bi-slash-circle-fill"></i> Suspended';
        } else {
          badge.className = 'badge-custom badge-custom-neutral pro-status-badge';
          badge.innerHTML = '<i class="bi bi-pause-circle"></i> Inactive';
        }
      }
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`Professional account status updated to: ${newStatus}. Historical data preserved. Reason: ${reason || 'Admin review'}`, 'info');
  }
};

// ============================================================================
// Page 6: Service Category Operations
// ============================================================================
window.openEditCategoryModal = function(catId) {
  const cat = window.AdminData.categories.find(c => c.id === catId);
  if (!cat) return;

  const modalEl = document.getElementById('editCategoryModal');
  if (!modalEl) return;

  document.getElementById('editCatName').value = cat.name;
  document.getElementById('editCatDesc').value = cat.desc;
  document.getElementById('editCatActive').checked = cat.active;

  modalEl.setAttribute('data-target-cat-id', catId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmCategoryEdit = function() {
  const modalEl = document.getElementById('editCategoryModal');
  const catId = modalEl.getAttribute('data-target-cat-id');
  const cat = window.AdminData.categories.find(c => c.id === catId);

  if (cat) {
    cat.desc = document.getElementById('editCatDesc').value;
    cat.active = document.getElementById('editCatActive').checked;

    const row = document.getElementById(`cat-row-${cat.id}`);
    if (row) {
      const badge = row.querySelector('.cat-status-badge');
      if (badge) {
        badge.className = cat.active ? 'badge-custom badge-custom-verified cat-status-badge' : 'badge-custom badge-custom-neutral cat-status-badge';
        badge.textContent = cat.active ? 'Active' : 'Inactive';
      }
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`✅ Category ${cat.name} configuration updated successfully.`, 'success');
  }
};

// ============================================================================
// Page 8: Quotation Management Operations
// ============================================================================
window.openQuotationModal = function(quoteId) {
  const qt = window.AdminData.quotations.find(q => q.id === quoteId);
  if (!qt) return;

  const modalEl = document.getElementById('quotationDetailsModal');
  if (!modalEl) return;

  document.getElementById('modalQtId').textContent = '#' + qt.id;
  document.getElementById('modalQtBooking').textContent = '#' + qt.bookingId;
  document.getElementById('modalQtCustomer').textContent = qt.customerName;
  document.getElementById('modalQtPro').textContent = qt.proName;
  document.getElementById('modalQtCategory').textContent = qt.category;
  document.getElementById('modalQtLabour').textContent = '₹' + qt.labourCharges.toLocaleString();
  document.getElementById('modalQtMaterials').textContent = '₹' + qt.materialCharges.toLocaleString();
  document.getElementById('modalQtOther').textContent = '₹' + qt.otherCharges.toLocaleString();
  document.getElementById('modalQtTotal').textContent = '₹' + qt.totalAmount.toLocaleString();
  document.getElementById('modalQtStatus').textContent = `${qt.status} • ${qt.customerAction}`;
  document.getElementById('modalQtCreated').textContent = qt.createdAt;
  document.getElementById('modalQtExpiry').textContent = qt.expiryDate;

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.openQuotationRevisionModal = function(quoteId) {
  const qt = window.AdminData.quotations.find(q => q.id === quoteId);
  if (!qt) return;

  const modalEl = document.getElementById('quotationRevisionModal');
  if (!modalEl) return;

  document.getElementById('revQtId').textContent = '#' + qt.id;
  const historyList = document.getElementById('revQtHistory');
  if (historyList) {
    historyList.innerHTML = qt.revisions.map(r => `
      <div class="p-3 border rounded-3 mb-2 bg-light">
        <div class="d-flex justify-content-between font-weight-bold text-dark small mb-1">
          <span>Revision ${r.version}</span>
          <span class="text-lime-custom">₹${r.total.toLocaleString()}</span>
        </div>
        <div class="text-muted small">${r.note}</div>
        <div class="text-muted" style="font-size: 11px;">Timestamp: ${r.date}</div>
      </div>
    `).join('');
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

// ============================================================================
// Page 9: Revisit Management Operations
// ============================================================================
window.openCreateRevisitModal = function() {
  const modalEl = document.getElementById('createRevisitModal');
  if (!modalEl) return;

  // Populate eligible completed bookings
  const selectEl = document.getElementById('revisitBookingSelect');
  if (selectEl) {
    selectEl.innerHTML = window.AdminData.bookings
      .filter(b => b.status === 'Completed' || b.status === 'Accepted' || b.status === 'In Progress')
      .map(b => `<option value="${b.id}">#${b.id} - ${b.customerName} (${b.serviceTitle})</option>`)
      .join('');
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmCreateRevisit = function() {
  const modalEl = document.getElementById('createRevisitModal');
  const bkId = document.getElementById('revisitBookingSelect').value;
  const revDate = document.getElementById('revisitDate').value;
  const revTime = document.getElementById('revisitTime').value;
  const reason = document.getElementById('revisitReason').value.trim();

  if (!revDate || !revTime || !reason) {
    alert('Please fill in revisit date, time slot, and reason.');
    return;
  }

  const origBk = window.AdminData.bookings.find(b => b.id === bkId);
  if (!origBk) return;

  const newRevisitId = 'RV-' + (108 + window.AdminData.revisits.length);
  const newRevisit = {
    id: newRevisitId,
    originalBookingId: origBk.id,
    customerName: origBk.customerName,
    customerPhone: origBk.customerPhone,
    serviceTitle: `Revisit: ${origBk.serviceTitle}`,
    category: origBk.category,
    proName: origBk.assignedProName,
    scheduledDate: revDate,
    scheduledTime: revTime,
    reason: reason,
    status: 'Revisit Scheduled',
    warrantyCovered: true,
    originalDate: origBk.date
  };

  window.AdminData.revisits.unshift(newRevisit);

  bootstrap.Modal.getInstance(modalEl).hide();
  window.showToast(`🔁 Revisit #${newRevisitId} successfully created & linked to #${origBk.id}!`, 'success');
  setTimeout(() => window.location.reload(), 1200);
};

// ============================================================================
// Page 10: Payment Receipt View
// ============================================================================
window.openPaymentReceiptModal = function(txnId) {
  const txn = window.AdminData.payments.find(p => p.id === txnId);
  if (!txn) return;

  const modalEl = document.getElementById('paymentReceiptModal');
  if (!modalEl) return;

  document.getElementById('modalTxnId').textContent = txn.id;
  document.getElementById('modalTxnBooking').textContent = '#' + txn.bookingId;
  document.getElementById('modalTxnCustomer').textContent = txn.customerName;
  document.getElementById('modalTxnPro').textContent = txn.proName;
  document.getElementById('modalTxnType').textContent = txn.chargeType;
  document.getElementById('modalTxnAmount').textContent = '₹' + txn.amount.toLocaleString();
  document.getElementById('modalTxnMethod').textContent = txn.method;
  document.getElementById('modalTxnStatus').textContent = txn.status;
  document.getElementById('modalTxnGateway').textContent = txn.gatewayTxnId || 'N/A';
  document.getElementById('modalTxnDate').textContent = txn.date;
  document.getElementById('modalTxnRefund').textContent = txn.refundStatus;

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

// ============================================================================
// Page 11: Customer Management Operations
// ============================================================================
window.openCustomerDetailsModal = function(custId) {
  const cust = window.AdminData.customers.find(c => c.id === custId);
  if (!cust) return;

  const modalEl = document.getElementById('customerDetailsModal');
  if (!modalEl) return;

  document.getElementById('modalCustName').textContent = cust.name;
  document.getElementById('modalCustPhone').textContent = cust.phone;
  document.getElementById('modalCustEmail').textContent = cust.email;
  document.getElementById('modalCustLocation').textContent = cust.location;
  document.getElementById('modalCustSpend').textContent = cust.lifetimeSpend;
  document.getElementById('modalCustBookingsCount').textContent = `${cust.totalBookings} Total Bookings`;
  document.getElementById('modalCustBookingsList').innerHTML = cust.bookings.map(b => `<span class="badge bg-light text-dark border me-1">#${b}</span>`).join('');

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.openCustomerStatusModal = function(custId) {
  const cust = window.AdminData.customers.find(c => c.id === custId);
  if (!cust) return;

  const modalEl = document.getElementById('customerStatusModal');
  if (!modalEl) return;

  document.getElementById('statusCustName').textContent = cust.name;
  document.getElementById('statusCustCurrent').textContent = cust.status;
  document.getElementById('custNewStatusSelect').value = cust.status.includes('Active') ? 'Active' : 'Suspended';

  modalEl.setAttribute('data-target-cust-id', custId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmCustomerStatusChange = function() {
  const modalEl = document.getElementById('customerStatusModal');
  const custId = modalEl.getAttribute('data-target-cust-id');
  const newStatus = document.getElementById('custNewStatusSelect').value;
  const reason = document.getElementById('custStatusReason').value.trim();

  const cust = window.AdminData.customers.find(c => c.id === custId);
  if (cust) {
    cust.status = newStatus;
    const row = document.getElementById(`cust-row-${cust.id}`);
    if (row) {
      const badge = row.querySelector('.cust-status-badge');
      if (badge) {
        badge.className = newStatus === 'Active' ? 'badge-custom badge-custom-verified cust-status-badge' : 'badge-custom badge-custom-neutral cust-status-badge';
        badge.textContent = newStatus;
      }
    }

    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`Customer account status updated to: ${newStatus}. Reason: ${reason || 'Admin action'}`, 'info');
  }
};

// ============================================================================
// Page 12: Complaints Resolution Note Modal
// ============================================================================
window.openComplaintModal = function(cmpId) {
  const cmp = window.AdminData.complaints.find(c => c.id === cmpId);
  if (!cmp) return;

  const modalEl = document.getElementById('complaintModal');
  if (!modalEl) return;

  document.getElementById('modalCmpId').textContent = '#' + cmp.id;
  document.getElementById('modalCmpBooking').textContent = '#' + cmp.bookingId;
  document.getElementById('modalCmpCustomer').textContent = cmp.customerName;
  document.getElementById('modalCmpPro').textContent = cmp.proName;
  document.getElementById('modalCmpType').textContent = cmp.issueType;
  document.getElementById('modalCmpDate').textContent = cmp.date;
  document.getElementById('modalCmpStatus').textContent = cmp.status;
  document.getElementById('modalCmpNotes').value = cmp.notes;

  modalEl.setAttribute('data-target-cmp-id', cmpId);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.confirmComplaintUpdate = function() {
  const modalEl = document.getElementById('complaintModal');
  const cmpId = modalEl.getAttribute('data-target-cmp-id');
  const cmp = window.AdminData.complaints.find(c => c.id === cmpId);

  if (cmp) {
    cmp.notes = document.getElementById('modalCmpNotes').value;
    bootstrap.Modal.getInstance(modalEl).hide();
    window.showToast(`✅ Resolution notes updated for complaint #${cmp.id}.`, 'success');
  }
};
