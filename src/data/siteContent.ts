export const contactDetails = {
  phoneHref: "tel:+11234567890",
  phoneLabel: "(123) 456-7890",
  email: "info@hayatcarecenter.com",
  address: "123 Care Boulevard, Springfield, IL 62701",
  hours: "Daily tours available from 9:00 AM - 6:00 PM",
  supportLine: "(123) 555-0199",
  supportHref: "tel:+11235550199",
} as const;

export const navGroups = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About The Community",
    href: "/about",
    links: [
      {
        label: "Overview",
        href: "/about",
        description: "Get to know Hayat, our setting, and our approach.",
      },
      {
        label: "Amenities",
        href: "/amenities",
        description: "See the comforts and conveniences available each day.",
      },
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "Hear how residents and families describe the experience.",
      },
      {
        label: "Activities & Events",
        href: "/activities-events",
        description: "Explore social programs, outings, and daily gatherings.",
      },
      {
        label: "Life Enrichment",
        href: "/wellness",
        description: "Discover the wellness and engagement programs at Hayat.",
      },
      {
        label: "Dining Experience",
        href: "/dining",
        description: "Learn how meals, hospitality, and nutrition are handled.",
      },
    ],
  },
  {
    label: "Care Options",
    href: "/services",
    links: [
      {
        label: "Assisted Support",
        href: "/services",
        description: "Personalized care, daily support, and wellness oversight.",
      },
      {
        label: "Move-In Process",
        href: "/enrollment",
        description: "Review the consultation, assessment, and transition steps.",
      },
    ],
  },
  {
    label: "See Our Community",
    href: "/floor-plans",
    links: [
      {
        label: "Floor Plans",
        href: "/floor-plans",
        description: "Browse suite layouts and compare available footprints.",
      },
      {
        label: "Contact Us",
        href: "/contact",
        description: "Schedule a tour or request a callback from our team.",
      },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
  },
] as const;

export const footerLinkGroups = [
  {
    title: "About The Community",
    links: [
      { label: "Overview", href: "/about" },
      { label: "Amenities", href: "/amenities" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Activities & Events", href: "/activities-events" },
      { label: "Life Enrichment", href: "/wellness" },
      { label: "Dining Experience", href: "/dining" },
    ],
  },
  {
    title: "Care Options",
    links: [
      { label: "Assisted Support", href: "/services" },
      { label: "Move-In Process", href: "/enrollment" },
      { label: "Floor Plans", href: "/floor-plans" },
      { label: "FAQ", href: "/faq" },
    ],
  },
] as const;

export const communityStats = [
  { value: "24/7", label: "Team presence and family communication" },
  { value: "3", label: "Distinct suite styles to compare" },
  { value: "Daily", label: "Programs, dining, and wellness routines" },
  { value: "1:1", label: "Care planning tailored to each resident" },
] as const;

export const homeQuickLinks = [
  {
    title: "Amenities",
    href: "/amenities",
    description: "Warm gathering spaces, concierge-style support, and everyday comforts.",
  },
  {
    title: "Activities & Events",
    href: "/activities-events",
    description: "A calendar built around movement, connection, and meaningful routines.",
  },
  {
    title: "Dining Experience",
    href: "/dining",
    description: "Hospitality-led meals with flexible options and thoughtful nutrition.",
  },
  {
    title: "Assisted Support",
    href: "/services",
    description: "Care that balances independence with practical help and oversight.",
  },
  {
    title: "Floor Plans",
    href: "/floor-plans",
    description: "Studio, one-bedroom, and companion-style layouts to review.",
  },
  {
    title: "Schedule A Tour",
    href: "/contact",
    description: "Talk with our team and plan a visit that fits your family.",
  },
] as const;

export const homeFeatureCards = [
  {
    title: "Hospitality-Led Living",
    text: "Residents step into a calm, well-appointed setting where service, comfort, and daily rhythms feel intentional.",
  },
  {
    title: "Personalized Assistance",
    text: "Support plans are built around health routines, personal preferences, and the level of help each resident wants.",
  },
  {
    title: "Connection Every Day",
    text: "Meals, social gatherings, enrichment programs, and shared spaces encourage genuine community life.",
  },
] as const;

export const trustPoints = [
  {
    title: "Thoughtfully Designed Community Spaces",
    text: "Lounges, dining rooms, quiet corners, and welcoming outdoor areas make it easier to relax and connect.",
  },
  {
    title: "Care With Clear Communication",
    text: "Families receive practical updates and direct access to a team that understands the value of clarity.",
  },
  {
    title: "Wellness Without A Clinical Feel",
    text: "Residents receive support and oversight in an environment designed to feel bright, social, and uplifting.",
  },
  {
    title: "Programs That Give Shape To The Day",
    text: "Movement, creative activities, conversation, and dining create a steady routine residents can look forward to.",
  },
] as const;

export const amenities = [
  {
    title: "Welcoming Great Room",
    description: "A central gathering area for social connection, casual conversation, and community events.",
  },
  {
    title: "Full-Service Dining Room",
    description: "Restaurant-style dining that brings residents together for chef-led meals and everyday hospitality.",
  },
  {
    title: "Quiet Library & Reading Nook",
    description: "Comfortable places to unwind, reflect, or enjoy time with visiting family members.",
  },
  {
    title: "Beauty & Grooming Space",
    description: "On-site personal care touches that help residents feel polished, comfortable, and confident.",
  },
  {
    title: "Fitness & Wellness Studio",
    description: "A flexible space for movement classes, balance work, and wellness-focused programming.",
  },
  {
    title: "Courtyard & Walking Paths",
    description: "Outdoor areas that encourage fresh air, gentle movement, and a peaceful daily routine.",
  },
  {
    title: "Housekeeping & Laundry Support",
    description: "Practical services that reduce daily burden and let residents focus on enjoying the community.",
  },
  {
    title: "Scheduled Transportation",
    description: "Transportation coordination for appointments, errands, and planned community outings.",
  },
] as const;

export const activityCategories = [
  {
    title: "Social Gatherings",
    text: "Coffee meetups, conversation circles, game afternoons, and hosted celebrations keep the calendar lively.",
  },
  {
    title: "Creative Programs",
    text: "Art, music, storytelling, and guided projects invite residents to stay curious and expressive.",
  },
  {
    title: "Movement & Balance",
    text: "Chair exercise, guided stretching, walking groups, and strength-building routines support confidence.",
  },
  {
    title: "Spiritual & Reflective Moments",
    text: "Residents can join devotionals, quiet reflection, and purpose-centered gatherings throughout the week.",
  },
  {
    title: "Seasonal Events",
    text: "Family socials, holiday celebrations, themed lunches, and visiting performers keep each month fresh.",
  },
  {
    title: "Community Outings",
    text: "Organized trips and local experiences give residents variety while preserving comfort and routine.",
  },
] as const;

export const wellnessPillars = [
  {
    title: "Personal Wellness Planning",
    description: "Each resident receives support that reflects mobility, medications, routines, and personal goals.",
  },
  {
    title: "Daily Living Support",
    description: "Residents can receive help with grooming, dressing, reminders, and other everyday tasks as needed.",
  },
  {
    title: "Strength, Balance & Mobility",
    description: "Movement programming focuses on confidence, safety, and staying active in a comfortable way.",
  },
  {
    title: "Cognitive Engagement",
    description: "Games, guided discussion, memory prompts, and structured activities help keep the mind active.",
  },
  {
    title: "Health Oversight",
    description: "The team monitors changing needs and coordinates with families so support remains consistent.",
  },
  {
    title: "Purposeful Routine",
    description: "A stable rhythm of care, meals, events, and rest helps residents feel grounded and secure.",
  },
] as const;

export const diningFeatures = [
  {
    title: "Chef-Guided Menus",
    text: "Meals are planned to feel familiar, nourishing, and enjoyable while still allowing variety.",
  },
  {
    title: "Flexible Dining Styles",
    text: "Residents can enjoy shared dining experiences, lighter options, and snacks throughout the day.",
  },
  {
    title: "Nutrition With Hospitality",
    text: "Dietary needs are handled with care so residents feel supported without sacrificing enjoyment.",
  },
  {
    title: "Celebration Meals",
    text: "Seasonal events, family meals, and themed dining moments add warmth and occasion to the calendar.",
  },
] as const;

export const services = [
  {
    title: "Personal Care Assistance",
    description: "Support with bathing, dressing, grooming, and other daily tasks is delivered with respect and consistency.",
    icon: "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 1 1 16 0",
  },
  {
    title: "Medication & Wellness Support",
    description: "Residents benefit from reminders, observation, and communication that keeps routines on track.",
    icon: "M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Zm0-10V7m-2 2h4",
  },
  {
    title: "Housekeeping Coordination",
    description: "Clean, orderly living spaces and practical day-to-day support help reduce stress for residents and families.",
    icon: "M3 4h18M8 4v16m8-16v16M4 9h4m8 0h4M4 15h4m8 0h4",
  },
  {
    title: "Dining & Nutrition",
    description: "Meals, snacks, and hydration are woven into the day with attention to comfort and individual needs.",
    icon: "M4 6h16M7 3v6m10-6v6M5 11h14v8H5z",
  },
  {
    title: "Transportation Planning",
    description: "Scheduled transportation and appointment coordination make daily logistics easier to manage.",
    icon: "M8 17h8M7 7h10l2 6H5l2-6Zm1 10a1 1 0 1 0 0 .01M16 17a1 1 0 1 0 0 .01",
  },
  {
    title: "Family Partnership",
    description: "The Hayat team keeps families informed, involved, and confident in the support being provided.",
    icon: "M12 21c-4.42 0-8-3.58-8-8S7.58 5 12 5s8 3.58 8 8-3.58 8-8 8Zm-1-12v4l3 2",
  },
] as const;

export const livingOptionBenefits = [
  {
    title: "Comprehensive Support",
    text: "Residents receive practical help with daily living while preserving autonomy wherever possible.",
  },
  {
    title: "Inclusive Lifestyle Services",
    text: "Dining, programming, transportation, and hospitality services are built into the everyday experience.",
  },
  {
    title: "Experienced Wellness Team",
    text: "Families have peace of mind knowing resident needs are being observed and addressed consistently.",
  },
  {
    title: "Built-In Community Connection",
    text: "Residents benefit from shared experiences, welcoming spaces, and more chances for meaningful interaction.",
  },
  {
    title: "Independence With Backup",
    text: "Support is present when needed, allowing residents to stay confident and involved in their own routines.",
  },
] as const;

export const processSteps = [
  {
    step: "Step 1",
    title: "Schedule A Tour",
    detail: "Meet the community, ask questions, and see the suites, dining spaces, and daily lifestyle firsthand.",
  },
  {
    step: "Step 2",
    title: "Complete A Care Consultation",
    detail: "We review preferences, health routines, support needs, and the kind of living arrangement that fits best.",
  },
  {
    step: "Step 3",
    title: "Plan A Smooth Transition",
    detail: "Our team coordinates move-in details, orientation, and the first weeks of community life with care.",
  },
] as const;

export const coverageOptions = [
  "Private-pay guidance",
  "Move-in planning support",
  "Family consultation",
  "Personalized service review",
] as const;

export const floorPlans = [
  {
    title: "Willow Suite",
    layout: "Suite | One Bath",
    size: "340 sq. ft.",
    description: "A streamlined studio option designed for comfort, ease, and low-maintenance living.",
    features: ["Open sleeping area", "Accessible bath", "Ideal for simplified routines"],
  },
  {
    title: "Juniper One Bedroom",
    layout: "One Bed | One Bath",
    size: "485 sq. ft.",
    description: "A balanced layout with more separation between living and resting space for a home-like feel.",
    features: ["Dedicated bedroom", "Comfortable sitting area", "Great fit for quiet daily routines"],
  },
  {
    title: "Summit Companion",
    layout: "Two Bed | One Bath",
    size: "720 sq. ft.",
    description: "A larger shared layout for residents who value extra room, flexibility, or companion living.",
    features: ["Two sleeping areas", "Expanded living space", "Designed for flexibility"],
  },
] as const;

export const testimonials = [
  {
    quote: "The community feels calm, well cared for, and truly welcoming. My father settled in faster than we expected.",
    name: "Fatima A.",
    role: "Daughter of Resident",
  },
  {
    quote: "What stood out to us was the balance between support and independence. The team is attentive without making it feel clinical.",
    name: "Michael R.",
    role: "Family Caregiver",
  },
  {
    quote: "From the meals to the activities, everything gives the day structure. My mother looks forward to being involved again.",
    name: "Sara K.",
    role: "Resident Family Member",
  },
  {
    quote: "They made the transition easier by communicating clearly and handling the practical details with real patience.",
    name: "Daniel L.",
    role: "Son of Resident",
  },
  {
    quote: "The staff know residents personally, and that shows in how they greet people, redirect gently, and keep families updated.",
    name: "Nadia H.",
    role: "Family Guardian",
  },
  {
    quote: "I like that there is always something happening, but I can also find a quiet place when I want one.",
    name: "Resident Testimonial",
    role: "Community Resident",
  },
] as const;

export const faqs = [
  {
    q: "Who is the right fit for Hayat Care Center?",
    a: "Hayat is designed for older adults who would benefit from a supportive community setting, daily hospitality services, and practical assistance with routines or wellness oversight.",
  },
  {
    q: "What support is available?",
    a: "Residents can receive help with daily living tasks, reminders, mobility support, dining, housekeeping coordination, transportation planning, and ongoing wellness communication.",
  },
  {
    q: "Can families tour before making a decision?",
    a: "Yes. We encourage families to visit, see the community atmosphere in person, and speak directly with the Hayat team before moving forward.",
  },
  {
    q: "Are there different suite layouts?",
    a: "Yes. We offer multiple suite styles so families can compare space, routine, and budget preferences before making a selection.",
  },
  {
    q: "How do you help with the move-in process?",
    a: "We walk families through the tour, consultation, paperwork, care planning, and transition timeline so move-in feels organized rather than overwhelming.",
  },
  {
    q: "What makes the community feel active instead of institutional?",
    a: "Hayat emphasizes shared dining, thoughtful amenities, a full activity calendar, wellness-led routines, and a hospitality-first environment that keeps daily life engaging.",
  },
] as const;
