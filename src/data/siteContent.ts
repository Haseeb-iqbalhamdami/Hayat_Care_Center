export const contactDetails = {
  phoneHref: "tel:+17196786228",
  phoneLabel: "+1 (719) 678-6228",
  email: "info@hayatcarecenter.org",
  websiteHref: "https://hayatcarecenter.org",
  websiteLabel: "Hayatcarecenter.org",
  address: "2030 Jet Wing Dr, Colorado Springs, CO 80916",
  hours: "Daily tours available from 9:00 AM - 6:00 PM",
  supportLine: "+1 (719) 678-6228",
  supportHref: "tel:+17196786228",
} as const;

export const navGroups = [
  {
    label: "Community",
    href: "/about",
    links: [
      { label: "About Us", href: "/about", description: "Get to know Hayat, our setting, and our approach." },
      { label: "Our Facility", href: "/community/our-facility", description: "See the spaces, upgrades, and design that shape daily life." },
      { label: "Testimonials", href: "/testimonials", description: "Hear how participants and families describe the experience." },
    ],
  },
  {
    label: "Amenities & Services",
    href: "/amenities",
    links: [
      { label: "Benefits", href: "/benefits", description: "Meals, wellness, activities, and everything included." },
      { label: "Amenities", href: "/amenities", description: "Comforts and conveniences available each day." },
      { label: "Activities & Events", href: "/activities-events", description: "Social programs, outings, and daily gatherings." },
      { label: "Life Enrichment", href: "/wellness", description: "Wellness and engagement programs at Hayat." },
      { label: "Dining Experience", href: "/dining", description: "Meals, hospitality, and nutrition handled with care." },
      { label: "Weekly Meal Plan", href: "/meal-plan", description: "Seven day menu with breakfast lunch dinner and ingredients." },
    ],
  },
  {
    label: "Living Options",
    href: "/adult-care-center",
    links: [
      {
        label: "Adult Care Center",
        href: "/adult-care-center",
        description: "Structured daytime care with social engagement meals and supervision.",
      },
      {
        label: "Home Care Agency",
        href: "/home-care-agency",
        description: "Personalized in home support for routines personal care and companionship.",
      },
      {
        label: "Non-Medical Transportation",
        href: "/non-medical-transportation",
        description: "Scheduled rides for appointments errands and community visits.",
      },
    ],
  },
  {
    label: "Gallery & Floor Plans",
    href: "/floor-plans",
    links: [
      { label: "Floor Plans", href: "/floor-plans", description: "Browse suite layouts and compare footprints." },
      { label: "Photos", href: "/gallery/photos", description: "View our community spaces, suites, and grounds." },
      { label: "Videos", href: "/gallery/videos", description: "Watch walkthrough tours and community highlights." },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blog",
    links: [
      { label: "Blog", href: "/resources/blog", description: "Articles on senior wellness, lifestyle, and community." },
      { label: "Senior Living Guide", href: "/resources/senior-living-guide", description: "Helpful information for families exploring options." },
      { label: "FAQ", href: "/faq", description: "Common questions answered clearly." },
    ],
  },
  {
    label: "Contact & Careers",
    href: "/contact",
    links: [
      { label: "Contact Us", href: "/contact", description: "Schedule a tour or request a callback." },
      { label: "Careers", href: "/careers", description: "Join the Hayat Care Centers team." },
    ],
  },
] as const;

export const footerLinkGroups = [
  {
    title: "Community",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Facility", href: "/community/our-facility" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Benefits", href: "/benefits" },
      { label: "Amenities", href: "/amenities" },
      { label: "Activities & Events", href: "/activities-events" },
      { label: "Life Enrichment", href: "/wellness" },
      { label: "Dining Experience", href: "/dining" },
      { label: "Weekly Meal Plan", href: "/meal-plan" },
    ],
  },
  {
    title: "Living & Gallery",
    links: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Non-Medical Transportation", href: "/non-medical-transportation" },
      { label: "Floor Plans", href: "/floor-plans" },
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/gallery/videos" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Senior Living Guide", href: "/resources/senior-living-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
] as const;

export const communityStats = [
  { value: "2", label: "Care paths: Adult Care Center & Home Care Agency" },
  { value: "24/7", label: "Responsive coordination and family updates" },
  { value: "Daily", label: "Structured days at the center—or flexible visits at home" },
  { value: "1:1", label: "Plans built around preferences, safety, and dignity" },
] as const;

export const adultCareCenterSummary = {
  eyebrow: "Adult care center",
  title: "Daytime support that feels social, steady, and dignified",
  body:
    "Hayat's adult care center is designed for young adults through older adults who benefit from supervised daytime engagement—meaningful activities, nourishing meals, and a calm rhythm—while family caregivers work or recharge. It is a community setting with attentive staff, clear communication, and a focus on comfort rather than a clinical feel.",
  bullets: [
    "Structured programming: movement, creativity, conversation, and rest built into the day",
    "Supervision and assistance with personal care needs as part of the plan",
    "Family partnership with practical updates and predictable routines",
  ],
} as const;

export const homeCareAgencySummary = {
  eyebrow: "Home care agency",
  title: "The help you need at home—personal care, companionship, and peace of mind",
  body:
    "When staying home is the goal, Hayat's home care agency brings reliable caregivers for personal care, medication reminders, meal support, light housekeeping, transportation, and friendly companionship. Care plans are written around your schedule, your priorities, and what 'independence with backup' should look like for your household.",
  bullets: [
    "Flexible scheduling—from a few hours a week to more comprehensive coverage",
    "Skilled and non-skilled staff options available based on the care plan",
    "Consistent staffing orientation so visits feel familiar, not fragmented",
    "Transparent communication with family members and care partners",
  ],
} as const;

/** Homepage: deeper comparison of the three service lines */
export const homeVerticalsDeepDive = {
  eyebrow: "Our verticals",
  title: "Three ways we serve—same standards, different settings",
  intro:
    "Hayat is built around three complementary verticals: daytime community care, private-duty home support, and non-medical transportation. Families often start with one and add others when schedules, health, or travel needs change. Below is how each vertical works day to day, and who it tends to fit best.",
  adult: {
    name: "Adult care center",
    tagline: "Structured daytime community care",
    fitFor:
      "Young adults through older adults who thrive with routine, social connection, and on-site support during the day—while still sleeping at home with family at night.",
    details: [
      "Arrival, welcome, and a predictable rhythm: meals, activities, rest, and personal care as outlined in the individual plan.",
      "On-site team for oversight, engagement, and gentle redirection when memory or mobility need extra attention.",
      "Family caregivers gain reliable daytime coverage so they can work, rest, or handle errands knowing their loved one is in a staffed environment.",
    ],
    outcomes: ["Supervised social setting", "Nutrition & hydration built into the day", "Transparent handoffs at pickup"],
  },
  home: {
    name: "Home care agency",
    tagline: "Private-duty care in the home you love",
    fitFor:
      "Individuals who want to remain at home with help for bathing, dressing, errands, companionship, or post-hospital recovery—on a schedule that matches your household.",
    details: [
      "Care plans spell out tasks, frequency, and goals; supervisors check in so quality stays consistent visit to visit.",
      "Skilled and non-skilled staff options are matched to the level of support needed at home.",
      "We prioritize caregiver continuity so clients see familiar faces, and we communicate early when a change is unavoidable.",
      "Home care can stand alone or pair with the center—for example, evenings and weekends at home after weekday programming.",
    ],
    outcomes: [
      "Flexible hours",
      "Skilled and non-skilled staff options",
      "Privacy and familiarity of home",
      "Caregiver notes families can review",
    ],
  },
  transport: {
    name: "Non-medical transportation",
    tagline: "Dependable rides for life outside the home",
    fitFor:
      "Clients from young adulthood through older adulthood who need safe, scheduled transportation to appointments, errands, or social visits—not emergency medical transport, but the everyday trips that keep independence possible.",
    details: [
      "Door-through-door or curb-to-curb options depending on mobility; drivers oriented to patience, pacing, and clear communication.",
      "Coordination with the center or home care team so pickup windows align with programming or visit schedules.",
      "Advance booking preferred; same-day requests handled when capacity allows.",
    ],
    outcomes: ["Predictable scheduling", "Trained, vetted drivers", "Works alongside center & home care plans"],
  },
} as const;

export const nonMedicalTransportationSummary = {
  eyebrow: "Non-medical transportation",
  title: "Rides that respect your time, mobility, and dignity",
  body:
    "Our non-medical transportation service helps clients get to medical appointments, therapy, the adult day center, and community events—without treating you like a number on a route. It is not ambulance or emergency care; it is reliable, courteous transport when driving yourself is no longer the best option.",
  bullets: [
    "Scheduled pickups aligned with your care plan and family preferences",
    "Vehicles and assistance levels matched to walkers, wheelchairs, or step-free needs when arranged in advance",
    "Clear communication if a delay happens—we call families, not the other way around",
  ],
} as const;

/** Single campus / location — paired with `contactDetails.address` on the homepage */
export const hayatPrimaryLocation = {
  name: "Main campus — Adult care center",
  area: "Colorado Springs, CO",
  lines: [
    "Daytime programming, dining, activities, and supervised support—all from one welcoming building.",
    "Home care coordination and non-medical transportation are arranged through the same team, so families hear one clear plan.",
    "Tours and consults by appointment; we return calls the same day when you have an urgent question.",
  ],
  ctaLabel: "Plan a tour",
  href: "/contact",
} as const;

export const hayatLocationSectionIntro =
  "Hayat operates from one main campus in Colorado Springs. Whether you need the adult care center, help at home, or ride coordination, you start here—same address, same people who know your name.";

/** Long-form testimonial blocks for the homepage */
export const homeTestimonialStories = [
  {
    quote:
      "The community feels calm, well cared for, and truly welcoming. Our loved one settled in faster than we expected.",
    story:
      "We toured three places. Hayat was the only one where staff greeted people by name and the activity board looked like real life—not a brochure. Six weeks in, our loved one is eating better and actually jokes with the dining team. The front desk texts us a quick update when something changes; that alone lowered our stress.",
    name: "Fatima A.",
    role: "Family care partner",
  },
  {
    quote:
      "What stood out was the balance between support and independence. Attentive without feeling clinical.",
    story:
      "Our family member did not want to feel managed. The team figured out how much help would be accepted and built from there. When the week got rough, they adjusted without making it a big production. We finally sleep through the night again.",
    name: "Michael R.",
    role: "Family caregiver",
  },
  {
    quote:
      "From meals to activities, the day has structure again. Our loved one looks forward to going.",
    story:
      "Isolation was eating away at daily mood. Having lunch with other people and a reason to get dressed has been as important as any medication change. Staff noticed when participation was quieter than usual and called us—we caught a health concern early.",
    name: "Sara K.",
    role: "Care partner",
  },
  {
    quote:
      "Home care from Hayat helped our household keep support at home—with real backup we could trust.",
    story:
      "We started with mornings and weekends, then added overnights after a fall scare. The coordinators explained every change in writing. When one aide was out sick, they did not leave us hanging; we always knew who was coming through the door.",
    name: "Daniel L.",
    role: "Home care family contact",
  },
  {
    quote:
      "Staff know young adults through older adults personally—that shows in greetings, gentle redirection, and family updates.",
    story:
      "As guardian, I need documentation and clarity. Hayat's notes are specific enough for court updates but still read human. I have fired agencies that treated us like a ticket number; here we feel partnered.",
    name: "Nadia H.",
    role: "Family guardian",
  },
  {
    quote:
      "There is always something happening—but I can still find quiet when I want it.",
    story:
      "I was afraid a center would be loud and chaotic. Hayat has busy hours and calm corners. I pick my level of social time. My family stops worrying because they know I am not home alone all day.",
    name: "Eleanor T.",
    role: "Adult care center participant",
  },
] as const;

export const homeQuickLinks = [
  {
    title: "Adult care center",
    href: "/#adult-day-center",
    description: "Daytime community care, activities, meals, and supervised support on the homepage overview.",
  },
  {
    title: "Home care agency",
    href: "/#home-care-agency",
    description: "Trusted caregivers at home for personal care, companionship, and daily routines.",
  },
  {
    title: "Non-medical transportation",
    href: "/#non-medical-transportation",
    description: "Scheduled rides for appointments and errands—not emergency medical transport.",
  },
  {
    title: "Amenities",
    href: "/amenities",
    description: "Shared spaces, dining, and everyday comforts that shape life at Hayat.",
  },
  {
    title: "Activities & events",
    href: "/activities-events",
    description: "Programs that add structure, joy, and social connection to the week.",
  },
  {
    title: "Center program page",
    href: "/adult-care-center",
    description: "Deeper look at daytime support, staffing, and what families can expect.",
  },
  {
    title: "Schedule a consult",
    href: "/contact",
    description: "Plan a tour, request an in-home assessment, or ask a question—we respond quickly.",
  },
] as const;

/** Short line under "Where to next" on the homepage. */
export const homeQuickPathsIntro =
  "Jump to a section of the site or open a full page—each path is written for families comparing options.";

export const homeFeatureCards = [
  {
    title: "Three ways to receive care",
    text: "Daytime care at the center, private-duty support at home, and non-medical transportation when you need dependable rides—use one or combine them as life changes.",
  },
  {
    title: "Plans that respect independence",
    text: "We match services to ability, preference, and family goals—never a one-size template.",
  },
  {
    title: "Warmth you can feel",
    text: "Hayat blends professional standards with hospitality: clear communication, dignified assistance, and reliable follow-through.",
  },
] as const;

export const trustPoints = [
  {
    title: "Center life with hospitality in mind",
    text: "Shared dining, comfortable lounges, and outdoor areas make the adult care center feel like a community—not an institution.",
  },
  {
    title: "Home care with consistency",
    text: "Predictable visits, respectful boundaries, and caregivers who understand your routines reduce stress for everyone at home.",
  },
  {
    title: "Families stay in the loop",
    text: "Practical updates, responsive coordination, and honest guidance when needs evolve.",
  },
  {
    title: "Safety and dignity together",
    text: "We plan for fall risk, medication routines, nutrition, and mobility—without sacrificing respect or autonomy.",
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
    title: "Personal care & grooming",
    description:
      "Respectful help with bathing, dressing, toileting, and grooming—at the center during the day or in the privacy of home.",
    icon: "M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 1 1 16 0",
  },
  {
    title: "Medication reminders & wellness cues",
    description:
      "Structured prompts, observation, and family communication so routines stay steady and changes are noticed early.",
    icon: "M12 21s-6-4.35-6-9a6 6 0 0 1 12 0c0 4.65-6 9-6 9Zm0-10V7m-2 2h4",
  },
  {
    title: "Meals, hydration & nutrition support",
    description:
      "Hospitality-style dining at the center, or meal preparation and encouragement at home—always aligned with dietary needs.",
    icon: "M4 6h16M7 3v6m10-6v6M5 11h14v8H5z",
  },
  {
    title: "Companionship & engagement",
    description:
      "Friendly conversation, purposeful activities, and gentle motivation so days feel connected—not isolated.",
    icon: "M12 21c-4.42 0-8-3.58-8-8S7.58 5 12 5s8 3.58 8 8-3.58 8-8 8Zm-1-12v4l3 2",
  },
  {
    title: "Light housekeeping & homemaking",
    description:
      "Tidying, laundry help, and organization so energy goes toward health, rest, and time with loved ones.",
    icon: "M3 4h18M8 4v16m8-16v16M4 9h4m8 0h4M4 15h4m8 0h4",
  },
  {
    title: "Transportation & errands",
    description:
      "Escorts to appointments, pharmacy stops, and essential outings—planned with safety and pacing in mind.",
    icon: "M8 17h8M7 7h10l2 6H5l2-6Zm1 10a1 1 0 1 0 0 .01M16 17a1 1 0 1 0 0 .01",
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
    quote: "The community feels calm, well cared for, and truly welcoming. Our loved one settled in faster than we expected.",
    name: "Fatima A.",
    role: "Family Care Partner",
  },
  {
    quote: "What stood out to us was the balance between support and independence for young adults through older adults. The team is attentive without making it feel clinical.",
    name: "Michael R.",
    role: "Family Caregiver",
  },
  {
    quote: "From the meals to the activities, everything gives the day structure. Our loved one looks forward to being involved again.",
    name: "Sara K.",
    role: "Participant Family Contact",
  },
  {
    quote: "They made the transition easier by communicating clearly and handling the practical details with real patience.",
    name: "Daniel L.",
    role: "Home Care Family Contact",
  },
  {
    quote: "The staff know adult participants personally, and that shows in how they greet people, redirect gently, and keep families updated.",
    name: "Nadia H.",
    role: "Family Guardian",
  },
  {
    quote: "I like that there is always something happening, but I can also find a quiet place when I want one.",
    name: "Participant Testimonial",
    role: "Community Participant",
  },
] as const;

export const facilitySpaces = [
  {
    title: "Welcome Lobby & Reception",
    description: "A bright, open entry area with comfortable seating, natural light, and a warm tone that sets the standard for the rest of the community.",
  },
  {
    title: "Great Room & Social Lounge",
    description: "A versatile gathering space used for events, casual conversations, family visits, and community celebrations throughout the week.",
  },
  {
    title: "Full-Service Dining Hall",
    description: "A restaurant-style dining room where residents enjoy chef-prepared meals in a relaxed, social atmosphere with table service.",
  },
  {
    title: "Activity & Enrichment Room",
    description: "A dedicated space for creative workshops, game sessions, guided programs, and group activities that keep the calendar full.",
  },
  {
    title: "Library & Quiet Retreat",
    description: "A peaceful reading nook with books, comfortable chairs, and a calm atmosphere for residents who enjoy downtime.",
  },
  {
    title: "Fitness & Wellness Studio",
    description: "An accessible fitness area designed for balance classes, chair exercises, stretching sessions, and wellness-focused routines.",
  },
  {
    title: "Courtyard & Garden Paths",
    description: "Landscaped outdoor areas with shaded seating, walking paths, and garden views that encourage fresh air and gentle movement.",
  },
  {
    title: "Beauty & Grooming Salon",
    description: "An on-site salon where residents can enjoy haircuts, styling, and personal care services in a comfortable setting.",
  },
] as const;

/**
 * HAYAT CARE CENTERS — 25 SEO-OPTIMIZED BLOG POSTS
 * Replace or merge with your existing blogPosts array in constants.ts
 *
 * SEO strategy applied:
 *  - Each post targets a unique long-tail keyword cluster
 *  - No keyword stuffing — primary keyword appears naturally ~4-6x per post
 *  - Internal links embedded in relatedLinks[] for sidebar/footer "Related reading"
 *  - Titles follow [Primary Keyword] In Colorado Springs: [Value Proposition] pattern
 *  - Excerpts written as meta descriptions (under 160 chars)
 *  - Action steps double as FAQ schema candidates
 */

export const blogPosts = [

  // ─────────────────────────────────────────────
  // POST 1 — Adult Day Care Complete Guide
  // Primary KW: adult day care Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "adult-day-care-colorado-springs-guide",
    title: "Adult Day Care In Colorado Springs: Complete Guide For Families In 2026",
    excerpt:
      "Everything families need to know about adult day care in Colorado Springs — who it serves, what a typical day looks like, costs, and how to choose the right program.",
    readTime: "8 min",
    date: "April 29, 2026",
    category: "Senior Living",
    author: "Hayat Care Team",
    image: "/images/usedimages/adultcare.png",
    imageAlt: "Adult day care program in Colorado Springs with seniors engaged in activities",
    highlights: [
      "Who benefits most from adult day care in Colorado Springs",
      "What a structured day at a care center actually looks like",
      "How to compare programs before making a decision",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Benefits", href: "/benefits" },
      { label: "Schedule A Tour", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
    detail: {
      overview:
        "Adult day care in Colorado Springs gives families a supervised, structured daytime option for aging parents, adults with disabilities, or loved ones recovering from an illness — without requiring a full-time move into a residential facility. Programs like Hayat's adult care center offer meals, activities, personal care assistance, and consistent social engagement during the day, while participants return home to family each evening. This guide covers who benefits, what to expect, and how to evaluate a program before enrolling.",
      sections: [
        {
          title: "Who adult day care is designed for",
          content:
            "Adult day care serves a wide range: older adults who need supervision and social engagement, younger adults with physical or cognitive disabilities, individuals managing early-to-mid-stage dementia, and anyone whose family caregiver works during the day. In Colorado Springs, programs typically serve participants from their twenties through their nineties. The common thread is that participants benefit from a safe, staffed environment during daytime hours — not because they need around-the-clock residential care, but because being home alone is no longer the safest or most fulfilling option.",
        },
        {
          title: "What a typical day at an adult care center looks like",
          content:
            "A well-run adult day program in Colorado Springs follows a predictable rhythm that creates emotional security for participants. Morning usually begins with a welcome routine, light stretching or movement, and breakfast or a morning snack. Mid-morning programming might include creative workshops, cognitive games, or group conversation. After a full lunch with the group, afternoons rotate between quieter activities — reading, music, gentle crafts — and more social programs like seasonal celebrations or guest speakers. Families can expect a structured handoff at pickup with updates on how the day went. That consistency is what separates a quality program from one that simply provides supervision.",
        },
        {
          title: "Key things to evaluate before choosing a program",
          content:
            "Not all adult day care programs in Colorado Springs operate at the same standard. When comparing options, look at staff-to-participant ratios during peak hours, whether care plans are written and updated regularly, how the team communicates with families when something changes, and what the physical environment actually feels like during an active program day — not just during a scheduled tour. Ask whether transportation is available, how dietary needs are handled at mealtimes, and whether the activity calendar matches the interests and ability levels of your loved one. Hayat's adult care center encourages families to visit during a live program session before enrolling.",
        },
        {
          title: "How adult day care fits into a broader care plan",
          content:
            "For many Colorado Springs families, adult day care is the first formal care service they use — and the one that makes every other part of life more manageable. A working caregiver who places a parent in a day program gains reliable weekday coverage, which often delays or prevents the need for residential placement. Adult day care can also run alongside home care services: a participant might attend the center three weekdays and receive in-home support on the other days or evenings. Hayat coordinates both verticals so families hear one consistent plan rather than managing two separate agencies.",
        },
      ],
      actionSteps: [
        "Visit at least two programs during an active session, not a quiet period",
        "Ask for a written sample schedule before enrolling",
        "Confirm how the team handles medical or behavioral changes during the day",
        "Review the meal menu and check that dietary needs can be accommodated",
        "Ask whether transportation to and from the center is available",
        "Request references from families of current participants",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 2 — Does Medicare Cover Adult Day Care
  // Primary KW: does Medicare cover adult day care
  // ─────────────────────────────────────────────
  {
    slug: "medicare-adult-day-care-coverage-colorado-springs",
    title: "Does Medicare Cover Adult Day Care In Colorado Springs? What Families Must Know",
    excerpt:
      "Medicare coverage for adult day care in Colorado Springs is limited but options exist. Learn what Medicare pays for, what it doesn't, and how Colorado families can fill the gap.",
    readTime: "6 min",
    date: "April 28, 2026",
    category: "Financial Planning",
    author: "Hayat Care Team",
    image: "/images/home/hero-community-care.jpg",
    imageAlt: "Families reviewing Medicare coverage options for adult day care in Colorado Springs",
    highlights: [
      "What original Medicare does and does not cover for day programs",
      "How Medicaid waivers and other funding sources fill the gap",
      "Questions to ask a benefits counselor before enrolling",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Cost is the first question most Colorado Springs families ask when exploring adult day care, and Medicare is usually the first place they look. The short answer is that original Medicare (Parts A and B) does not cover standard adult day care programs. However, there are several other coverage paths — including Medicaid waivers, Medicare Advantage plans, Veterans benefits, and long-term care insurance — that can significantly reduce out-of-pocket costs. Understanding the difference helps families plan ahead rather than discover gaps after enrollment.",
      sections: [
        {
          title: "What original Medicare covers and what it doesn't",
          content:
            "Original Medicare covers medically necessary services: hospital stays, physician visits, skilled nursing after a qualifying hospital admission, and some home health services ordered by a doctor. Standard adult day care — even at a high-quality center in Colorado Springs — is considered a custodial or social service, not a medical one, so Medicare Part A and Part B do not pay for it. The exception is if a day program includes specific Medicare-covered services like physical therapy or skilled nursing, which may be billed separately. Families relying solely on original Medicare will need to budget for day care costs as a private expense or find an alternative funding source.",
        },
        {
          title: "Medicare Advantage plans and adult day care",
          content:
            "Medicare Advantage (Part C) plans are sold by private insurers and are required to cover everything original Medicare covers — but many also include supplemental benefits that original Medicare does not. Some Medicare Advantage plans available in Colorado Springs cover adult day care partially or in full as a supplemental benefit. Coverage varies widely by plan and insurer, so families should call the member services number on the back of the insurance card and ask specifically whether adult day care or adult day health programs are covered benefits for the current plan year. Open enrollment runs from October 15 to December 7 each year if a plan change is needed.",
        },
        {
          title: "Colorado Medicaid waivers and other funding options",
          content:
            "For families who qualify based on income and functional need, Colorado's Medicaid Home and Community Based Services waivers are the most significant source of adult day care funding in the state. The HCBS-EBD (Elderly, Blind, and Disabled) waiver and the HCBS-DD (Developmental Disabilities) waiver both include adult day services as a covered benefit. Applications go through the Colorado Department of Health Care Policy and Financing. Separately, Veterans who receive VA benefits may access adult day care through the VA's Medical Foster Home or Community Adult Day Health Care programs. Long-term care insurance policies vary widely — review the policy's definition of covered services carefully before assuming day care is included.",
        },
        {
          title: "Private pay and how programs price their services",
          content:
            "Most adult day care programs in Colorado Springs that do not have Medicaid contracts operate on a private-pay basis with daily or half-day rates. Costs typically range from $70 to $120 per day depending on the level of care and services included. Some programs offer sliding-scale fees or financial assistance for families who do not qualify for Medicaid but cannot afford full private-pay rates. When touring a program, always ask for a written fee schedule and a clear explanation of what is included in the base rate versus what is billed additionally.",
        },
      ],
      actionSteps: [
        "Call your Medicare Advantage plan directly to ask about adult day care benefits",
        "Contact Colorado HCPF to ask about Medicaid waiver eligibility for your family member",
        "Request a written fee schedule from any program you are considering",
        "Check Veterans benefits eligibility if your loved one served in the military",
        "Review any long-term care insurance policy for the definition of covered services",
        "Ask the care center whether they accept any insurance or waiver programs directly",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 3 — Non-Medical Transportation
  // Primary KW: non-medical transportation Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "non-medical-transportation-seniors-colorado-springs",
    title: "Non-Medical Transportation For Seniors In Colorado Springs: Complete Overview",
    excerpt:
      "Non-medical transportation in Colorado Springs helps seniors get to appointments, errands, and social visits safely. Learn what it covers, who provides it, and how to book rides.",
    readTime: "5 min",
    date: "April 27, 2026",
    category: "Transportation",
    author: "Hayat Care Team",
    image: "/images/usedimages/transportation.png",
    imageAlt: "Senior being assisted into a non-medical transport vehicle in Colorado Springs",
    highlights: [
      "Difference between non-medical and emergency medical transport",
      "Types of trips covered and how scheduling works",
      "What to look for when choosing a provider",
    ],
    relatedLinks: [
      { label: "Non-Medical Transportation", href: "/non-medical-transportation" },
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Non-medical transportation for seniors in Colorado Springs fills a specific gap: the everyday rides that keep life running — doctor appointments, therapy sessions, pharmacy pickups, grocery runs, trips to the adult day care center, and social visits — for individuals who can no longer drive safely or reliably. It is not emergency medical transport or ambulance service. It is scheduled, courteous, assistance-level transport operated by trained drivers who understand the pacing, mobility, and communication needs of older adults and adults with disabilities.",
      sections: [
        {
          title: "What non-medical transportation covers",
          content:
            "Non-medical transportation covers any trip that does not require a paramedic or medical monitoring during the ride. Common uses in Colorado Springs include rides to primary care and specialist appointments, physical therapy and rehabilitation sessions, dialysis (scheduled routine visits), the adult day care center, pharmacy and grocery errands, hair and grooming appointments, religious services, and family visits. The defining feature is that the passenger is medically stable during the trip — they simply need assistance getting there safely, on time, and without stress on a family member who may have work or other obligations.",
        },
        {
          title: "How it differs from rideshare and standard taxi services",
          content:
            "Standard rideshare apps like Uber or Lyft are designed for independent passengers who can manage their own boarding, communicate easily with a driver, and handle unexpected changes in pickup times. Senior non-medical transportation providers in Colorado Springs are trained specifically for passengers with mobility limitations, cognitive considerations, or equipment like walkers and wheelchairs. Drivers are typically vetted, trained in passenger assistance techniques, and oriented to the patience and pacing the ride requires. They confirm pickups in advance, wait when appointments run long, and communicate directly with family members if something changes — none of which a standard rideshare driver is expected to do.",
        },
        {
          title: "How scheduling and coordination work at Hayat",
          content:
            "Hayat's non-medical transportation service in Colorado Springs is coordinated alongside its adult care center and home care programs, which means pickup windows are already aligned with programming schedules when a participant attends the center. For standalone transport bookings, advance scheduling is preferred — typically 24 to 48 hours — though same-day requests are accommodated when capacity allows. Families receive confirmation of pickup times and a direct contact if a delay occurs. Vehicles and assistance levels are matched to the passenger's mobility needs, including accommodations for walkers and wheelchairs when arranged in advance.",
        },
        {
          title: "What to ask any non-medical transport provider before booking",
          content:
            "Before committing to a non-medical transportation provider in Colorado Springs, families should ask whether drivers are trained in passenger assistance and what that training involves, how the company handles situations where a passenger refuses to leave an appointment or becomes confused, whether vehicles are equipped and insured for passengers with mobility equipment, how family members receive communication during the trip, and what the cancellation and rescheduling policy is. A provider who cannot answer these questions clearly is likely not operating at the standard a vulnerable passenger deserves.",
        },
      ],
      actionSteps: [
        "List all recurring trips your loved one currently needs — appointments, errands, social visits",
        "Ask any provider specifically about wheelchair and walker accommodation before booking",
        "Confirm in advance how the driver will handle appointment overruns or delays",
        "Request that the provider communicate directly with a family contact on each trip",
        "Ask whether transport can be coordinated with adult day care attendance for one pickup window",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 4 — 5 Signs Parent Needs Adult Day Care
  // Primary KW: signs your parent needs adult day care
  // ─────────────────────────────────────────────
  {
    slug: "signs-parent-needs-adult-day-care",
    title: "5 Signs Your Parent Needs Adult Day Care In Colorado Springs",
    excerpt:
      "Not sure if adult day care is the right step? These five signs tell Colorado Springs families it may be time to explore a structured daytime program for an aging parent.",
    readTime: "5 min",
    date: "April 26, 2026",
    category: "Family Guide",
    author: "Hayat Care Team",
    image: "/images/home/gallery-compassionate-care.jpg",
    imageAlt: "Family caregiver recognizing signs a parent needs adult day care in Colorado Springs",
    highlights: [
      "Behavioral and safety signs to watch for at home",
      "How to bring up the conversation with a resistant parent",
      "What the transition into a day program typically looks like",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Schedule A Tour", href: "/contact" },
      { label: "Benefits", href: "/benefits" },
      { label: "Testimonials", href: "/testimonials" },
    ],
    detail: {
      overview:
        "Most families in Colorado Springs do not go looking for adult day care until a specific moment forces the conversation — a fall, a missed medication, a neighbor calling because something seemed off. But waiting for a crisis is one of the costliest mistakes caregiving families make. Recognizing the earlier, quieter signs that a parent or loved one needs structured daytime support can prevent a crisis, preserve independence longer, and make the transition into a program far smoother for everyone involved.",
      sections: [
        {
          title: "Sign 1: Increasing isolation and withdrawal from daily life",
          content:
            "When an older adult who used to enjoy social contact starts avoiding conversation, stops leaving the house for days at a time, loses interest in hobbies, or spends most of the day sleeping or watching television, isolation has often already become a pattern rather than a temporary phase. Prolonged social isolation accelerates cognitive decline and worsens depression in seniors at a measurable rate. An adult day care program in Colorado Springs provides daily structured social engagement — meals with others, group activities, conversation — that simply cannot be replicated by a family member checking in for a few hours.",
        },
        {
          title: "Sign 2: Safety concerns when left alone",
          content:
            "Safety concerns take many forms: leaving the stove on, forgetting to lock the door, wandering outside without appropriate clothing, missing medications, or not eating or drinking consistently during the day. Any single incident can feel like a one-off, but a pattern of these events is a strong signal that being home alone is no longer appropriate. Adult day care in Colorado Springs provides on-site supervision during daytime hours, which addresses the window when most incidents occur and when working family members cannot be present.",
        },
        {
          title: "Sign 3: Your own energy as a caregiver is running low",
          content:
            "Caregiver fatigue is a sign that your loved one needs more support — not a sign that you are failing. When you find yourself skipping your own medical appointments, losing sleep, cancelling plans with friends, or feeling resentful of the caregiving role, the current arrangement is not sustainable. Adult day care in Colorado Springs gives family caregivers reliable weekday coverage so they can work, rest, handle their own needs, and return to caregiving in the evenings with more patience and energy. Sustainable caregiving always requires a sustainable caregiver.",
        },
        {
          title: "Sign 4: Cognitive changes that make unstructured time unsafe or distressing",
          content:
            "Early-to-mid-stage dementia, memory lapses, increasing confusion in the afternoon or evening (often called sundowning), or trouble following conversations and instructions all indicate that unstructured time at home can become disorienting and distressing. A well-run adult day care program uses a predictable daily rhythm that actually reduces confusion for participants with cognitive changes. Familiar faces, consistent mealtimes, and structured activities provide a framework that keeps participants calm and engaged in ways that an empty house cannot.",
        },
        {
          title: "Sign 5: A recent hospitalization, fall, or health change",
          content:
            "After a hospital stay, a significant fall, or a new diagnosis, a loved one's care needs often shift faster than a family's current plan can accommodate. This transition period — when someone is more fragile, more confused, or less physically capable than before — is exactly when structured daytime support prevents a second hospitalization. An adult day care center in Colorado Springs can step in as temporary or ongoing support while a family recalibrates a longer-term plan, and it can do so without requiring the emotional and financial commitment of residential placement.",
        },
      ],
      actionSteps: [
        "Write down specific incidents from the past 30 days that concerned you",
        "Ask your loved one's physician for a functional assessment if you are unsure of current ability level",
        "Schedule a tour of an adult day care center before making any decision",
        "Have the conversation with your loved one framed around social connection, not supervision",
        "Give a new program at least three to four weeks before evaluating whether it is working",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 5 — Respite Care Guide
  // Primary KW: respite care Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "respite-care-colorado-springs-guide",
    title: "Respite Care In Colorado Springs: What It Is And Why Every Caregiver Needs It",
    excerpt:
      "Respite care in Colorado Springs gives family caregivers a planned break while a loved one receives quality supervision. Learn how it works, what it costs, and where to find it.",
    readTime: "6 min",
    date: "April 25, 2026",
    category: "Caregiver Health",
    author: "Hayat Care Team",
    image: "/images/home/gallery-comfortable-lounge.jpg",
    imageAlt: "Family caregiver taking a needed break while loved one receives respite care in Colorado Springs",
    highlights: [
      "What respite care is and the different types available",
      "How adult day care functions as flexible respite in Colorado Springs",
      "Financial assistance options for respite services",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Benefits", href: "/benefits" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Respite care is any supervised care arrangement that gives a primary family caregiver a temporary, planned break. In Colorado Springs, respite can take several forms — adult day programs, in-home respite visits, short-term residential stays, or overnight care — and it exists for one fundamental reason: long-term family caregiving is not sustainable without recovery time built in. Families who use respite services regularly report lower rates of burnout, fewer caregiver health crises, and — crucially — longer periods of successful home-based care for their loved one before residential placement becomes necessary.",
      sections: [
        {
          title: "The three most common types of respite care",
          content:
            "In-home respite brings a trained caregiver to the family home so the primary caregiver can step away for a few hours without moving the care recipient. Adult day programs in Colorado Springs function as structured daily respite — a participant attends five days a week, and the family caregiver has reliable daytime hours back. Short-term residential respite places a loved one in a care facility for a defined period — typically a few days to a few weeks — while a caregiver travels, recovers from illness, or simply resets. Each type serves a different caregiving situation, and many families use a combination over time.",
        },
        {
          title: "How adult day care functions as daily respite in Colorado Springs",
          content:
            "For families managing caregiving alongside a full-time job or other responsibilities, adult day care is the most practical and cost-effective form of respite available in Colorado Springs. Rather than a one-time break, a day program provides structured weekday coverage on a consistent schedule. Caregivers know exactly when their loved one is supervised, engaged, and cared for — which allows them to focus on work, handle personal needs, or simply sleep. Hayat's adult care center coordinates directly with families so the handoff at morning drop-off and afternoon pickup is smooth and communication is consistent.",
        },
        {
          title: "Financial help for respite care in Colorado",
          content:
            "The cost of respite care in Colorado Springs is often less than families expect, especially when funding assistance is available. Colorado's HCBS Medicaid waivers cover respite services for eligible participants. The National Lifespan Respite Network maintains a Colorado-specific resource list for families who do not qualify for Medicaid. The Eldercare Locator (a federal service) can connect Colorado Springs families to local respite funding and programs. Some Veterans' families access respite through the VA Caregiver Support Program. Adult day care specifically is one of the most cost-efficient respite options because the daily rate covers supervision, meals, activities, and personal care assistance — far more than an hourly in-home respite aide.",
        },
        {
          title: "Overcoming guilt about taking a break",
          content:
            "The most common reason caregivers in Colorado Springs delay using respite services is not cost — it is guilt. The belief that a good caregiver should never need a break is both false and harmful. Exhausted caregivers make more errors, are at higher risk for their own health events, and are less emotionally available to the person they are caring for. Using respite consistently is not abandonment. It is maintenance. The caregivers who stay healthy, employed, and emotionally present over years rather than months are the ones who built recovery time into their routine from the beginning.",
        },
      ],
      actionSteps: [
        "Identify one recurring block of time per week that would be your respite window if covered",
        "Contact Colorado HCPF to check Medicaid waiver eligibility for respite services",
        "Tour an adult day care program in Colorado Springs as a respite option before a crisis forces it",
        "Ask your loved one's physician for a referral letter supporting respite care if applying for funding",
        "Plan at least one full weekend of respite per quarter — not just a few hours",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 6 — How To Choose A Home Care Agency
  // Primary KW: home care agency Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "choose-home-care-agency-colorado-springs",
    title: "How To Choose A Home Care Agency In Colorado Springs: 7 Questions To Ask",
    excerpt:
      "Choosing a home care agency in Colorado Springs is one of the most important decisions a family makes. These seven questions help you avoid common mistakes and find the right fit.",
    readTime: "6 min",
    date: "April 24, 2026",
    category: "Home Care",
    author: "Hayat Care Team",
    image: "/images/usedimages/homcare.png",
    imageAlt: "Family reviewing home care agency options in Colorado Springs with a coordinator",
    highlights: [
      "Seven questions that separate quality agencies from average ones",
      "What caregiver vetting and staffing consistency should look like",
      "Red flags to watch for during the intake process",
    ],
    relatedLinks: [
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Benefits", href: "/benefits" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Selecting a home care agency in Colorado Springs involves more than comparing hourly rates. A caregiver will have direct, unsupervised access to your loved one's home, routines, medications, and personal care — which means the agency you choose must demonstrate strong vetting practices, clear communication systems, and genuine accountability when something goes wrong. These seven questions cut through marketing language and get to what actually matters when care is delivered behind a closed door.",
      sections: [
        {
          title: "Questions 1–3: Hiring, vetting, and training",
          content:
            "Question 1 — How do you screen caregivers before placing them? A quality home care agency in Colorado Springs conducts criminal background checks (state and federal), verifies professional certifications where required, checks employment history directly, and screens for any substantiated abuse or neglect reports in the state registry. Question 2 — What training do caregivers complete before their first assignment? Entry-level training should cover personal care, infection control, fall prevention, emergency procedures, and basic dementia awareness at minimum. Question 3 — Are your caregivers employees or independent contractors? Employees give the agency greater oversight and accountability than contractors, and typically receive ongoing supervision and performance reviews.",
        },
        {
          title: "Questions 4–5: Staffing consistency and communication",
          content:
            "Question 4 — How do you handle caregiver callouts and scheduling gaps? Any agency will eventually face a situation where a caregiver cannot make a scheduled visit. The real question is how quickly the agency responds, whether the backup caregiver is already familiar with the client, and how families are notified. Last-minute scrambles and unknown faces at the door are stressful and sometimes unsafe. Question 5 — Who is the family's primary point of contact, and how are updates communicated? Families in Colorado Springs should have a specific coordinator — not a rotating call center — who knows their loved one's care plan, can answer questions directly, and reaches out proactively when something changes rather than waiting to be asked.",
        },
        {
          title: "Questions 6–7: Accountability and care plan management",
          content:
            "Question 6 — How is care documented, and can families review visit notes? Written documentation of each visit, including tasks completed, observations, and any concerns noted, is standard at quality agencies and essential for continuity. Families should be able to access notes easily. Question 7 — How often is the care plan reviewed and updated? Needs change — after a hospitalization, a new diagnosis, or a shift in behavior — and a care plan that was accurate three months ago may not be appropriate today. A proactive agency schedules regular care plan reviews and adjusts staffing accordingly rather than waiting for a family complaint.",
        },
        {
          title: "Red flags to recognize early",
          content:
            "During the intake call or in-home assessment, watch for agencies that cannot clearly answer the vetting and training questions above, that pressure families to sign a long-term contract before a care plan has been written, that quote a single hourly rate without explaining what is included, or that seem unfamiliar with the specific needs of your loved one's condition. An agency that is genuinely prepared to provide quality home care in Colorado Springs will welcome detailed questions — because they have detailed answers.",
        },
      ],
      actionSteps: [
        "Write out your loved one's top five daily care needs before making any calls",
        "Ask every agency all seven questions and compare answers side by side",
        "Request to speak with a family of a current client before signing anything",
        "Ask specifically how the agency handles the first 30 days of a new placement",
        "Confirm in writing what the cancellation and minimum hours policy is",
        "Do not sign a contract at the in-home assessment — take 24 hours to review it",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 7 — Caregiver Burnout Signs
  // Primary KW: caregiver burnout Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "caregiver-burnout-signs-colorado-springs",
    title: "Caregiver Burnout Signs In Colorado Springs: How To Know When You Need Help",
    excerpt:
      "Caregiver burnout in Colorado Springs affects thousands of families silently. Recognize the early signs, understand the risks, and learn what support options are available locally.",
    readTime: "6 min",
    date: "April 23, 2026",
    category: "Caregiver Health",
    author: "Hayat Care Team",
    image: "/images/home/gallery-reception.jpg",
    imageAlt: "Exhausted caregiver experiencing burnout while caring for a senior in Colorado Springs",
    highlights: [
      "Physical and emotional warning signs of caregiver burnout",
      "Why burnout escalates quietly until a crisis",
      "How local support services in Colorado Springs can help",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Respite Care Guide", href: "/resources/blog/respite-care-colorado-springs-guide" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Caregiver burnout is not a character flaw or a sign of insufficient love. It is the predictable result of sustained high-demand caregiving without adequate recovery, support, or rest. In Colorado Springs, an estimated one in five adults provides unpaid care to an aging parent or relative — and a significant percentage of them are doing so while holding jobs, raising children, and managing their own health. Burnout develops slowly, disguises itself as everyday tiredness, and then arrives all at once. Recognizing it early is the difference between a manageable situation and a family crisis.",
      sections: [
        {
          title: "The physical signs that often appear first",
          content:
            "Caregiver burnout typically manifests physically before it becomes emotionally visible. Persistent fatigue that does not resolve after a full night's sleep, frequent headaches or stomach problems, getting sick more often than usual, and neglecting your own medical appointments or prescriptions are all early physical indicators. Many caregivers in Colorado Springs attribute these symptoms to aging or stress without recognizing that their body is signaling a demand that exceeds its recovery capacity. Physical burnout symptoms are not inconveniences to push through — they are the body requesting a structural change in the caregiving arrangement.",
        },
        {
          title: "Emotional and behavioral warning signs",
          content:
            "Emotional burnout signs include withdrawing from friends and social activities you previously enjoyed, feeling resentment toward the person you are caring for (and then guilt about that resentment), crying unexpectedly, losing patience more quickly than usual, feeling like nothing you do makes a difference, and a persistent low-grade hopelessness that no single rest day resolves. Behavioral signs often follow: cancelling plans, declining help when offered, increasing use of alcohol or caffeine to manage energy, and gradually narrowing your life to caregiving almost exclusively. Each of these signs individually is manageable — when several appear together, they form a clear pattern.",
        },
        {
          title: "Why burnout escalates until something breaks",
          content:
            "The reason caregiver burnout so often goes unaddressed until a crisis is that caregivers in Colorado Springs — like caregivers everywhere — measure their threshold against the person they are caring for rather than their own wellbeing. As long as the loved one is safe, the caregiver treats their own deterioration as secondary. But caregiver health events — a caregiver's own hospitalization, an emotional breakdown, an accident caused by exhaustion — are the leading reason family-based care arrangements collapse suddenly and loved ones end up in residential placements that were not planned, not desired, and not prepared for. Supporting the caregiver is not optional; it is what keeps the care arrangement intact.",
        },
        {
          title: "Local support options in Colorado Springs",
          content:
            "Colorado Springs has several practical resources for caregivers showing burnout signs. Hayat's adult care center provides reliable weekday coverage so family caregivers have structured time away from active caregiving. Home care services can handle personal care and overnight support, extending coverage beyond the caregiver's hours. The Pikes Peak Area Council of Governments (PPACG) Area Agency on Aging offers a caregiver support program including counseling referrals and information on local relief resources. The ARCH National Respite Network maintains a state-specific resource guide for Colorado. A caregiver's own physician is also an often-underused resource — a direct conversation about burnout can open access to referrals, accommodations, and support that caregivers do not know to ask for.",
        },
      ],
      actionSteps: [
        "Count how many of the warning signs above apply to your current situation",
        "Schedule a visit with your own physician specifically to discuss caregiver stress",
        "Contact Hayat to schedule a tour of the adult care center as a weekday relief option",
        "Tell one trusted person in your life the honest state of your caregiving situation",
        "Contact the PPACG Area Agency on Aging for a local caregiver needs assessment",
        "Commit to one non-negotiable recovery activity per week — not optional, not skippable",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 8 — When Seniors Should Stop Driving
  // Primary KW: when should seniors stop driving Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "when-seniors-stop-driving-colorado-springs",
    title: "When Seniors Should Stop Driving In Colorado Springs — And What Comes Next",
    excerpt:
      "Knowing when a senior should stop driving in Colorado Springs is hard. This guide covers the signs to watch for, how to have the conversation, and what transportation options replace it.",
    readTime: "7 min",
    date: "April 22, 2026",
    category: "Family Guide",
    author: "Hayat Care Team",
    image: "/images/usedimages/transportation.png",
    imageAlt: "Elderly driver considering when to stop driving in Colorado Springs",
    highlights: [
      "Medical and behavioral signs that driving is becoming unsafe",
      "How to have the driving conversation without damaging trust",
      "Transportation alternatives in Colorado Springs that restore independence",
    ],
    relatedLinks: [
      { label: "Non-Medical Transportation", href: "/non-medical-transportation" },
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "For most older adults in Colorado Springs, driving is not just transportation — it is independence, autonomy, and identity. Which is why the conversation about stopping is one of the most emotionally charged a family can have. But driving cessation at the right time is also one of the most significant safety decisions a family makes, and waiting too long has consequences that go beyond a traffic ticket. This guide covers the signs that indicate driving is becoming unsafe, how to approach the conversation in a way that preserves dignity, and what transportation alternatives in Colorado Springs can realistically replace what a car keys took away.",
      sections: [
        {
          title: "Medical and cognitive signs that driving safety is declining",
          content:
            "Certain conditions directly impair the cognitive and physical functions required for safe driving. These include moderate or advanced dementia or Alzheimer's, Parkinson's disease affecting reaction time or muscle control, vision impairment that cannot be corrected to state driving standards, seizure disorders, significant hearing loss, and medications that cause sedation, confusion, or slowed reaction time. Beyond diagnosed conditions, behavioral signs in Colorado Springs traffic that families should watch for include new dents or scrapes on the vehicle that the driver cannot explain, getting lost on familiar routes, missing stop signs or traffic signals, difficulty with lane changes and merging, and other drivers honking or reacting to unsafe decisions.",
        },
        {
          title: "How to have the driving conversation with dignity intact",
          content:
            "The most important thing families in Colorado Springs can do before the driving conversation is separate the car from the independence it represents. A senior who hears 'you should not drive anymore' often processes it as 'you are losing your freedom.' Reframing the conversation around what replaces driving — reliable rides to every appointment, no parking stress, no winter weather risk — shifts the discussion from loss to logistics. Involving the senior's physician is often more effective than a family-only conversation, because most older adults give more weight to a doctor's recommendation than a family member's concern. The DMV's Colorado driver safety re-evaluation process is another neutral, third-party mechanism that can make the decision feel official rather than arbitrary.",
        },
        {
          title: "Transportation alternatives in Colorado Springs that restore independence",
          content:
            "The gap driving leaves in a senior's life in Colorado Springs is real — but it is fillable. Non-medical transportation services like Hayat's provide scheduled, reliable rides for appointments, errands, and social visits with drivers trained specifically for older adult passengers. Mountain Metropolitan Transit (Mountain Metro) operates fixed routes and a paratransit service (Pikes Peak Area Council of Governments coordinates ACCESS) for eligible passengers who cannot use fixed-route buses. Volunteer driver programs through local nonprofits provide rides for medical appointments at low or no cost. Ride arrangement through home care — having a home care aide accompany a senior to appointments — is another option that adds safety monitoring to the trip itself.",
        },
        {
          title: "Planning the transition before it becomes urgent",
          content:
            "The smoothest driving transitions in Colorado Springs are the ones families planned months before they were necessary. Identifying transportation providers, testing a non-medical transportation service for a few routine trips, and gradually normalizing the idea of rides before driving stops makes the eventual full transition far less disruptive for the senior. Waiting until after an accident, a traffic citation, or a medical event removes the planning period entirely and forces a reactive solution. The time to evaluate transportation options is while the senior is still driving — not the week after the keys come away.",
        },
      ],
      actionSteps: [
        "Ride along as a passenger on a few trips to observe driving safely and without confrontation",
        "Ask the senior's physician to conduct a driving fitness assessment at the next appointment",
        "Research non-medical transportation providers in Colorado Springs before they are urgently needed",
        "Contact Mountain Metro to check eligibility for the ACCESS paratransit program",
        "Test a non-medical transportation ride on a low-stakes trip before it becomes the only option",
        "Have the driving conversation in private, calmly, with a plan already in place — not in reaction to an incident",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 9 — After Hospital Discharge Home Care
  // Primary KW: home care after hospital discharge Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "post-hospital-home-care-colorado-springs",
    title: "After Hospital Discharge In Colorado Springs: Why Home Care Makes Recovery Safer",
    excerpt:
      "Post-hospital recovery at home in Colorado Springs carries real risks without the right support. Learn why home care after discharge reduces readmission and what families need to arrange.",
    readTime: "6 min",
    date: "April 21, 2026",
    category: "Health",
    author: "Hayat Care Team",
    image: "/images/home/gallery-wellness-programs.jpg",
    imageAlt: "Senior recovering at home with home care support after hospital discharge in Colorado Springs",
    highlights: [
      "Why the first 30 days after discharge are the highest-risk period",
      "What home care after hospitalization typically covers",
      "How to arrange support before discharge day arrives",
    ],
    relatedLinks: [
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Non-Medical Transportation", href: "/non-medical-transportation" },
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Contact Us", href: "/contact" },
    ],
    detail: {
      overview:
        "Hospital discharge is not the end of a health event — it is one of the most vulnerable transitions a senior or recovering adult faces. Research consistently shows that the first 30 days after leaving a hospital carry the highest risk of readmission, fall-related injury, medication error, and care gap for older adults. In Colorado Springs, families who arrange home care before discharge day — rather than after — see dramatically better recovery outcomes. This guide explains what makes the post-discharge period so high-risk, what home care covers during recovery, and the steps to arrange it before a family member leaves the hospital.",
      sections: [
        {
          title: "Why the post-discharge window is so high risk",
          content:
            "Hospitals are designed for acute stabilization, not full recovery. A senior discharged from Memorial Hospital or UCHealth in Colorado Springs after a hip replacement, cardiac event, stroke, pneumonia, or fall may be medically stable enough to leave the facility without yet having the physical capacity to manage safely at home alone. During the first 30 days at home, risks include falls during the night when fatigue and mobility limitations combine, medication errors when managing a new or adjusted prescription regimen, dehydration and poor nutrition when preparing meals is physically difficult, and missed follow-up appointments when no transportation is arranged. Each of these risks compounds the others, and any one of them can trigger a readmission.",
        },
        {
          title: "What home care after discharge covers",
          content:
            "Post-hospital home care in Colorado Springs from an agency like Hayat covers the practical daily support that prevents the gaps described above. Personal care assistance — help with bathing, dressing, and grooming — reduces fall risk during the morning routine. Medication reminders at correct times reduce the chance of errors with a new discharge prescription schedule. Meal preparation and nutrition support ensures consistent intake when appetite and energy are low. Light housekeeping and mobility assistance keep pathways clear and safe. Scheduled rides to follow-up appointments eliminate the transportation gap. For families who cannot be present every day, a home care aide also provides daily observation — noticing when something looks wrong before it becomes an emergency.",
        },
        {
          title: "How to arrange home care before discharge day",
          content:
            "The ideal time to contact a home care agency in Colorado Springs is before your loved one is discharged — not after they are home and the gaps become apparent. Hospital social workers and discharge planners can recommend home care agencies and often initiate the referral process during the hospital stay. Families can also contact agencies directly while the hospitalization is ongoing. A good agency will conduct a brief phone intake during the hospital stay and arrange for an in-home assessment either the day of discharge or within 24 hours. The care plan can then begin the first morning the patient is home rather than after a delay that leaves a dangerous gap.",
        },
        {
          title: "When adult day care is the right post-discharge step",
          content:
            "For some Colorado Springs families, post-hospital home care transitions naturally into adult day care attendance as the recovering person regains strength and independence. A senior who needs full-day supervision and social engagement during weekdays — but whose medical needs have stabilized to the point that in-home medical care is no longer required — is often a good candidate for adult day programming alongside limited home care in the evenings. Hayat's two-service model means families can start with home care at discharge, shift to a day program and lighter home support as recovery progresses, all under coordinated communication from one team.",
        },
      ],
      actionSteps: [
        "Ask the hospital social worker to connect you with a home care agency before discharge day",
        "Contact a Colorado Springs home care agency directly during the hospitalization to begin intake",
        "Request a complete written discharge medication list and ensure a caregiver understands each medication",
        "Arrange transportation for every follow-up appointment before leaving the hospital",
        "Walk through the home before the patient returns and remove fall hazards from pathways",
        "Ask the home care agency specifically how they monitor for signs of post-discharge complications",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // POST 10 — Dementia Care Day Program vs Home
  // Primary KW: dementia care Colorado Springs
  // ─────────────────────────────────────────────
  {
    slug: "dementia-care-colorado-springs-day-program-vs-home",
    title: "Dementia Care In Colorado Springs: Adult Day Programs Vs Home Support",
    excerpt:
      "Families managing dementia care in Colorado Springs face a choice between adult day programs and home support. This guide compares both options to help you decide what fits best.",
    readTime: "7 min",
    date: "April 20, 2026",
    category: "Memory Care",
    author: "Hayat Care Team",
    image: "/images/home/gallery-dining-social.jpg",
    imageAlt: "Senior with dementia participating in an adult day program activity in Colorado Springs",
    highlights: [
      "How adult day programs specifically benefit people with dementia",
      "What home care covers for dementia-related daily needs",
      "How to choose based on the stage and behavior patterns of your loved one",
    ],
    relatedLinks: [
      { label: "Adult Care Center", href: "/adult-care-center" },
      { label: "Home Care Agency", href: "/home-care-agency" },
      { label: "Benefits", href: "/benefits" },
      { label: "Schedule A Tour", href: "/contact" },
    ],
    detail: {
      overview:
        "Dementia is the leading reason families in Colorado Springs begin exploring structured care services, and it creates one of the most nuanced decision points: whether an adult day program or home-based support is the right fit for a loved one's current stage and behavioral patterns. Both options have genuine advantages, and for many families the answer evolves — what works at one stage of the disease may not work at another. This guide walks through what each setting offers for someone living with dementia and what factors should guide the decision.",
      sections: [
        {
          title: "Why structured environments often benefit people with early-to-mid dementia",
          content:
            "People in the early to middle stages of Alzheimer's or other dementias often experience what is sometimes called an 'unstructured time problem' — long, undirected hours at home become confusing, agitating, and sometimes unsafe. Adult day programs in Colorado Springs provide the predictable daily rhythm — consistent mealtimes, familiar faces, scheduled activities, and a stable physical environment — that reduces the disorientation associated with dementia. Participants who attend structured day programs regularly often show less afternoon agitation (commonly called sundowning), better sleep at night, and sustained physical function longer than those who remain home without structured daily engagement.",
        },
        {
          title: "What home care specifically covers for dementia-related needs",
          content:
            "Home care for dementia in Colorado Springs focuses on safety, personal care, and behavioral support within the comfort of familiar surroundings. A trained home care aide assists with morning routines — bathing, dressing, grooming — which are often the highest-stress moments of the day for someone with dementia. Medication reminders, meal preparation, gentle redirection when confusion arises, and monitoring for behavioral or physical changes round out the typical scope. Home care is particularly appropriate for individuals in earlier or later dementia stages: earlier, when structure at home is still manageable; later, when leaving the home environment creates significant distress.",
        },
        {
          title: "How to choose between the two based on your loved one's patterns",
          content:
            "The decision between adult day care and home care for dementia in Colorado Springs depends on three key factors. First, how does your loved one respond to new environments and unfamiliar people? Someone who adapts reasonably well and benefits from social contact is often a stronger candidate for a day program. Someone who becomes highly distressed in new settings may do better with familiar home-based support, at least initially. Second, what are the behaviors that concern you most? Safety at home alone, poor nutrition, isolation, and wandering are often better addressed by a supervised day program. Behavioral resistance to personal care is sometimes better managed by a skilled home care aide in a private home setting. Third, what are the caregiver's working hours and schedule? Day programs and home care can be combined — many Colorado Springs families use both.",
        },
        {
          title: "Planning ahead as dementia progresses",
          content:
            "Dementia care planning in Colorado Springs is most effective when families think one stage ahead. A loved one currently in the early stage who attends a day program three days a week may need five-day attendance within a year and eventually residential memory care. A person currently managed well with home care may eventually benefit from the additional stimulation and oversight of a day program as safety concerns at home increase. Hayat's coordinated approach — adult day center and home care under one team — allows families to adjust the balance of services as the disease progresses without starting over with new providers.",
        },
      ],
      actionSteps: [
        "Ask your loved one's neurologist or primary care physician for a functional staging assessment",
        "Observe your loved one's behavior during unstructured home time for a full week before deciding",
        "Schedule a trial day at an adult care center in Colorado Springs — one session often tells you a lot",
        "Ask any home care agency how their staff are specifically trained for dementia care",
        "Create a written behavior log of difficult times of day, triggers, and what helps — this is essential for any care plan",
        "Plan for what comes next while the current arrangement is still working",
      ],
    },
  },
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const seniorLivingGuideTopics = [
  {
    title: "When Is The Right Time To Consider Senior Living?",
    description: "Recognizing the signs that a loved one may benefit from a community setting, including safety concerns, social isolation, and increasing care needs.",
  },
  {
    title: "Types Of Senior Living Communities Explained",
    description: "A clear breakdown of independent living, assisted living, memory care, and skilled nursing so families can compare options with confidence.",
  },
  {
    title: "What To Expect During A Community Tour",
    description: "A practical checklist of things to look for, questions to ask, and details to observe when visiting a senior living community.",
  },
  {
    title: "How To Talk To A Parent About Senior Living",
    description: "Tips for starting a respectful conversation about transitioning to a community, including how to address concerns and set realistic expectations.",
  },
  {
    title: "Financial Planning For Assisted Living",
    description: "An overview of typical costs, payment options, and planning strategies that help families prepare for the financial side of senior care.",
  },
  {
    title: "Making The Transition Smooth And Comfortable",
    description: "Guidance on what to pack, how to personalize a new suite, and ways to help a loved one feel at home during the first weeks.",
  },
] as const;

export const careerOpenings = [
  {
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-Time",
    description: "Provide hands-on daily support to residents with compassion, dignity, and attention to individual care plans.",
  },
  {
    title: "Activities Coordinator",
    type: "Full-Time",
    description: "Plan and lead enrichment programs, social events, and creative workshops that keep residents engaged and connected.",
  },
  {
    title: "Dining Services Associate",
    type: "Part-Time",
    description: "Support meal preparation, table service, and dining room hospitality for residents and their guests.",
  },
  {
    title: "Housekeeping Team Member",
    type: "Full-Time",
    description: "Maintain clean, welcoming living spaces and common areas that reflect the community's standard of care.",
  },
  {
    title: "Front Desk & Reception",
    type: "Part-Time",
    description: "Welcome visitors, coordinate schedules, and serve as a friendly first point of contact for families and residents.",
  },
] as const;

export const careerBenefits = [
  "Competitive pay and shift flexibility",
  "Paid training and professional development",
  "Health, dental, and vision insurance options",
  "Supportive team culture and mentorship",
  "Meaningful work that makes a daily difference",
  "Opportunities for career advancement",
] as const;

export const photoCategories = [
  {
    title: "Exterior & Grounds",
    count: 8,
    description: "Building facades, landscaped pathways, and outdoor seating areas that define the community's curb appeal.",
  },
  {
    title: "Common Areas & Lounges",
    count: 10,
    description: "The lobby, great room, library, and social spaces where residents gather, relax, and connect.",
  },
  {
    title: "Dining Spaces",
    count: 6,
    description: "The main dining hall and private dining areas where meals and celebrations take place.",
  },
  {
    title: "Activity & Wellness Rooms",
    count: 6,
    description: "Fitness studio, enrichment room, and creative spaces designed for daily programming.",
  },
  {
    title: "Suite Interiors",
    count: 10,
    description: "Sample layouts of studio, one-bedroom, and companion suites showing finishes and natural light.",
  },
  {
    title: "Outdoor Living",
    count: 6,
    description: "Courtyards, garden paths, and patio areas that bring nature into the daily routine.",
  },
] as const;

export const videoHighlights = [
  {
    title: "Community Walkthrough Tour",
    description: "A guided tour through the lobby, common areas, dining room, activity spaces, and model suites at Hayat Care Centers.",
    duration: "4:30",
  },
  {
    title: "A Day In The Life At Hayat",
    description: "See how residents spend a typical day, from morning routines and meals to activities, social time, and evening wind-down.",
    duration: "3:15",
  },
  {
    title: "Meet The Hayat Team",
    description: "Hear from the care team, dining staff, and activity coordinators about what makes the Hayat community special.",
    duration: "2:45",
  },
] as const;

export const faqs = [
  {
    q: "Who is Hayat Care Centers for?",
    a: "Hayat serves young adults through older adults and families with two offerings: an adult care center for structured daytime support, and a home care agency for personalized help at home. Many families use one service first and add the other later as needs change.",
  },
  {
    q: "What support is available?",
    a: "Depending on the path you choose, Hayat can provide personal care, medication reminders, meals and nutrition support, companionship, light housekeeping, transportation, and clear family communication—always guided by a written plan.",
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

/* ──────────────── Benefits page ──────────────── */

export const benefitsHero = {
  eyebrow: "Benefits",
  title: "Everything That Comes With Being Part Of Hayat",
  subtitle:
    "From nourishing meals and wellness programming to companionship and family peace of mind—here is what residents and their families actually receive.",
} as const;

export const benefitHighlights = [
  {
    stat: "Daily",
    label: "Chess & mind-sport play",
    description:
      "Open boards, friendly matches, and coached games for beginners through experienced players—chess as a social mind sport: concentration, patience, and conversation around the table.",
    lucideIcon: "Crown",
    image:
      "https://images.unsplash.com/photo-1758691031235-9db55497d898?auto=format&fit=crop&w=1600&q=82",
  },
  {
    stat: "7",
    label: "Days of structured activities",
    description:
      "Social gatherings, creative workshops, movement classes, and outings fill every day of the week—not just weekdays.",
    lucideIcon: "CalendarHeart",
    image: "/images/seniors/senior-activity-01.jpg",
  },
  {
    stat: "24/7",
    label: "Attentive care coordination",
    description:
      "Round-the-clock oversight, medication reminders, and responsive communication so families never feel out of the loop.",
    lucideIcon: "HeartHandshake",
    image: "/images/usedimages/4.png",
  },
  {
    stat: "1:1",
    label: "Personalized wellness plans",
    description:
      "Every resident receives a tailored plan built around mobility, preferences, health goals, and family input—never a one-size template.",
    lucideIcon: "ClipboardCheck",
    image: "/images/usedimages/homcare.png",
  },
] as const;

export const mealBenefits = [
  {
    title: "Seasonal, Chef-Guided Menus",
    text: "Rotating menus inspired by seasonal produce, cultural traditions, and resident favorites—planned by a dedicated culinary team.",
  },
  {
    title: "Dietary Accommodations",
    text: "Low-sodium, diabetic-friendly, soft-texture, vegetarian, halal, and allergy-aware options handled with care—not as afterthoughts.",
  },
  {
    title: "Snacks & Hydration Stations",
    text: "Fresh fruit, light bites, tea, coffee, and water stations available throughout the day so no one waits until the next meal.",
  },
  {
    title: "Social Dining Atmosphere",
    text: "Restaurant-style table service, themed dining events, and family meal invitations that turn eating into a highlight of the day.",
  },
] as const;

export const lifestyleBenefits = [
  {
    title: "Creative Workshops",
    text: "Art, music, storytelling, and hands-on projects that keep the mind active and give residents something to look forward to.",
    lucideIcon: "Palette",
  },
  {
    title: "Fitness & Balance Programs",
    text: "Chair yoga, guided stretching, walking groups, and strength routines designed for confidence and safe movement.",
    lucideIcon: "Dumbbell",
  },
  {
    title: "Outings & Community Trips",
    text: "Organized excursions to parks, cultural venues, local shops, and seasonal events that add variety and joy.",
    lucideIcon: "MapPinned",
  },
  {
    title: "Spiritual & Reflective Time",
    text: "Devotionals, quiet reflection spaces, and purpose-centered gatherings for residents who find meaning in spiritual practice.",
    lucideIcon: "Sparkles",
  },
  {
    title: "Companionship & Connection",
    text: "Conversation circles, game afternoons, buddy programs, and visiting volunteers so no resident feels isolated.",
    lucideIcon: "UsersRound",
  },
  {
    title: "Family Peace of Mind",
    text: "Transparent updates, responsive coordination, and honest guidance when needs evolve—families stay partners, not bystanders.",
    lucideIcon: "ShieldCheck",
  },
] as const;

export const benefitsCta = {
  title: "Ready to see the difference?",
  text: "Schedule a tour, meet the team, and experience firsthand what makes Hayat feel like home.",
} as const;
