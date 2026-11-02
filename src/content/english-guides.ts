import type { FaqItem, LinkItem } from './translations';

export interface GuideFact {
  label: string;
  value: string;
}

export interface GuideSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideSource {
  label: string;
  href: string;
}

export interface EnglishGuide {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  lastVerified: string;
  facts: GuideFact[];
  sections: GuideSection[];
  faq: FaqItem[];
  related: LinkItem[];
  sources: GuideSource[];
}

const baseSources = {
  adalaj: {
    label: 'Incredible India · Adalaj Stepwell',
    href: 'https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell',
  },
  tourism: {
    label: 'Gujarat Tourism · Adalaj ni Vav',
    href: 'https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html',
  },
  maps: {
    label: 'Google Maps share link',
    href: 'https://maps.app.goo.gl/L6jtyGBiHo9eYhdN9',
  },
  akshardham: {
    label: 'Akshardham Gujarat · Visitor Information',
    href: 'https://akshardham.com/gujarat/visitor-info/',
  },
  trimandir: {
    label: 'Trimandir · Adalaj Trimandir',
    href: 'https://www.trimandir.org/list-of-trimandirs/adalaj-trimandir/',
  },
  trimandirFacilities: {
    label: 'Dada Bhagwan · Facilities of Adalaj Trimandir',
    href: 'https://www.dadabhagwan.org/about/trimandir/trimandir-facilities/',
  },
  dandiKutir: {
    label: 'Dandi Kutir · Official website',
    href: 'https://www.dandi-kutir.com/',
  },
  indroda: {
    label: 'GEER Foundation · Indroda Nature Park',
    href: 'https://geerfoundation.gujarat.gov.in/',
  },
  scienceCity: {
    label: 'Gujarat Tourism · Science City',
    href: 'https://gtbooking.gujarattourism.com/central-zone/ahmedabad/science-city.html',
  },
  dadaHarir: {
    label: 'Gujarat Tourism · Bai Harir ni Vav',
    href: 'https://www.gujarattourism.com/central-zone/ahmedabad/dada-harir-ni-vav.html',
  },
  ahmedabadAirport: {
    label: 'Ahmedabad Airport · Official website',
    href: 'https://svpia-ahmedabad.adaniairports.com/en',
  },
};

export const englishGuides: Record<string, EnglishGuide> = {
  'visit-duration': {
    slug: 'visit-duration',
    title: 'How long to spend at Adalaj Stepwell',
    description: 'Plan a 30, 60 or 90 minute Adalaj Stepwell visit and decide when to pair the monument with Trimandir or Akshardham.',
    eyebrow: 'Visit planning',
    intro: 'Give the stepwell at least 45 minutes, and plan on 60 to 90 minutes if you want photos and time on the stairs. A quick 20-minute look is possible, but most people enjoy Adalaj far more without the rush.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Typical visit', value: '45 to 60 minutes' },
      { label: 'Quick photo stop', value: '20 to 30 minutes' },
      { label: 'Best paired with', value: 'Trimandir or Akshardham' },
    ],
    sections: [
      {
        title: 'Decide your length before you arrive',
        paragraphs: [
          'Treat 45 to 60 minutes as your baseline. That is enough time to walk down all five levels, look up through the octagonal opening and study the carved panels without hurrying.',
          'Scale up or down depending on your day: a quick stop on the way to Gandhinagar, or a slower visit if the stepwell is the main reason you came.',
        ],
        bullets: [
          '20 to 30 minutes: a photo stop on the way to Gandhinagar or Akshardham.',
          '45 to 60 minutes: the comfortable default for most visitors.',
          '75 to 90 minutes: architecture fans, photographers and families who want rest stops on the stairs.',
        ],
      },
      {
        title: 'What actually takes up your time',
        paragraphs: [
          'The stairs are the main variable. Adalaj is a five-storey stepwell, so walking down to the water level and back up takes real time, especially once you start stopping at each level to look at the carvings.',
          'In summer heat the same visit feels longer because you will want more breaks and shade. Budget extra time if you are visiting with children or anyone who finds steep steps tiring.',
        ],
        bullets: [
          'Walking down to the lowest level and back up.',
          'Pausing at each storey to see the carved pillars and terraces.',
          'Entrance checks and any queue at the gate.',
          'The short walk from parking to the monument.',
        ],
      },
      {
        title: 'Fitting the stepwell into a half-day',
        paragraphs: [
          'Adalaj works best as a focused stop rather than the whole outing. If you are heading on to Akshardham, keep the stepwell to about an hour so you still have time for the security check and the exhibitions there, and remember it is closed on Mondays.',
          'If Trimandir is your second stop, it is right next door, so a relaxed pace still fits comfortably into half a day.',
        ],
      },
      {
        title: 'A simple plan that works',
        paragraphs: [
          'Start at the stepwell in the morning while it is still cool, spend 45 to 60 minutes on the monument, then move on to your second stop. This keeps your energy for the stairs and leaves the rest of the day free.',
        ],
      },
    ],
    faq: [
      { q: 'How much time do I need at Adalaj Stepwell?', a: 'Plan on 45 to 60 minutes for a comfortable visit. A quick look takes 20 to 30 minutes, and photographers or slow walkers may want up to 90 minutes.' },
      { q: 'Is 20 minutes enough to see it?', a: 'You can see the main well and the octagonal opening in 20 minutes, but it feels rushed. Most people enjoy the site more with at least 45 minutes.' },
      { q: 'Can I combine Adalaj with Akshardham the same day?', a: 'Yes, if you keep the stepwell visit short. Leave about an hour here so you still have time for the security check and exhibitions at Akshardham, which is closed on Mondays.' },
      { q: 'Are the stairs hard work?', a: 'The descent and climb take a few minutes each and are manageable for most people, but allow extra time with young children or if anyone in your group needs to rest on steep steps.' },
    ],
    related: [
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
    ],
    sources: [baseSources.adalaj, baseSources.tourism, baseSources.maps],
  },
  'best-time-to-visit': {
    slug: 'best-time-to-visit',
    title: 'Best time to visit Adalaj Stepwell',
    description: 'See the best season, light window and same-day checks for planning an Adalaj Stepwell visit without relying on outdated hours.',
    eyebrow: 'Visit planning',
    intro: 'Aim for October to March, when the weather is cool enough to enjoy the open stairwell, and go in the morning if you want to beat the heat and the crowds. Confirm the opening hours on the day you travel, because public sources do not always agree.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Best season', value: 'October to March' },
      { label: 'Best time of day', value: 'Morning' },
      { label: 'Summer tip', value: 'Go early and carry water' },
    ],
    sections: [
      {
        title: 'Pick the cooler months when you can',
        paragraphs: [
          'October to March is the most comfortable stretch for Adalaj. Temperatures drop enough that walking down and back up the five levels feels pleasant rather than exhausting, and you can combine the stepwell with other stops without overheating.',
          'If you are visiting between April and June, start as early as you can and keep the stepwell stop short.',
        ],
      },
      {
        title: 'Go in the morning',
        paragraphs: [
          'Morning is the safest choice. The light falls nicely on the carvings, the heat has not built up yet and you protect the rest of the day for onward travel.',
        ],
        bullets: [
          'Use a morning slot if you are continuing to Akshardham or Gandhinagar.',
          'Late afternoon can work for softer light, but confirm the closing time first.',
          'Avoid planning your visit around the very last hour of entry.',
        ],
      },
      {
        title: 'Match the season to your plan',
        paragraphs: [
          'In the cooler months you can comfortably pair Adalaj with a longer Gandhinagar itinerary. In the monsoon, expect slippery steps and short, unpredictable showers, so keep the visit flexible. In peak summer, treat Adalaj as a short early-morning stop and save indoor attractions such as Dandi Kutir for later in the day.',
        ],
      },
      {
        title: 'Check the hours on the day',
        paragraphs: [
          'Different public sources list slightly different opening times, so confirm the current timings before you set out rather than trusting a single figure. Check the last entry time separately from the opening time, and expect public holidays or special events to affect the schedule.',
        ],
        bullets: [
          'Check opening and last-entry times separately.',
          'Re-check on the morning of your visit.',
          'Build a buffer if you are pairing the stepwell with another attraction.',
        ],
      },
    ],
    faq: [
      { q: 'What is the best month to visit Adalaj Stepwell?', a: 'October to March is the best window. The weather is cooler, so the stairs and open terraces are far more enjoyable than in the summer heat.' },
      { q: 'What time of day is best?', a: 'Morning is usually best. It is cooler, the light is good for photos, and you still have the rest of the day for other attractions.' },
      { q: 'Can I visit in summer or the monsoon?', a: 'Yes, but plan around the weather. In summer, go early and keep the visit short. In the monsoon, watch for slippery steps and be ready to adjust your timing.' },
      { q: 'Do I need to check the opening hours in advance?', a: 'Yes. Public sources list slightly different times, so confirm the current opening and last-entry hours on the day you travel.' },
    ],
    related: [
      { label: 'Adalaj timings', href: '/en/timings/' },
      { label: 'Visit duration', href: '/en/visit-duration/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.adalaj, baseSources.tourism, baseSources.maps],
  },
  'from-ahmedabad-city': {
    slug: 'from-ahmedabad-city',
    title: 'How to reach Adalaj Stepwell from Ahmedabad',
    description: 'Plan the road journey from Ahmedabad to Adalaj Stepwell, including where to start, when to leave and how to avoid overpromising fixed travel times.',
    eyebrow: 'Transport',
    intro: 'A car or app-based cab is the simplest way to reach Adalaj from Ahmedabad, and the drive usually takes under an hour outside peak traffic. Adalaj sits roughly 18 to 20 km north of the city centre, so it works well as a half-day outing.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Distance', value: 'About 18 to 20 km north of the city' },
      { label: 'Easiest transport', value: 'Car or app-based cab' },
      { label: 'Typical trip', value: 'Half-day' },
    ],
    sections: [
      {
        title: 'The drive to Adalaj',
        paragraphs: [
          'Head north toward Gandhinagar and leave the corridor at Adalaj. The stepwell is on Adalaj Road in the village, and most cabs and map apps will take you straight to the entrance.',
          'Allow roughly 45 minutes to an hour from central Ahmedabad, and more during morning and evening rush hour.',
        ],
      },
      {
        title: 'Choose your transport',
        paragraphs: [
          'A cab is easiest because it drops you at the entrance and lets you continue to Gandhinagar afterwards. If you are driving yourself, there is parking near the site, though space can be tight on busy weekends.',
        ],
        bullets: [
          'Car or app-based cab: the simplest door-to-door option.',
          'Auto-rickshaw: possible, but less comfortable for the full distance.',
          'Public bus: cheaper, but you will still need a short walk or ride from the nearest stop.',
        ],
      },
      {
        title: 'When to leave',
        paragraphs: [
          'Leave earlier if Adalaj is only your first stop, especially if you plan to continue to Akshardham. A later start is fine when the stepwell is your main destination. Traffic on the Ahmedabad to Gandhinagar corridor builds up during commuter hours, so try to avoid the peak if you can.',
        ],
      },
      {
        title: 'Plan the rest of your day',
        paragraphs: [
          'Because Adalaj is on the way to Gandhinagar, it pairs easily with Trimandir next door or with a longer Gandhinagar outing. Keep the stepwell stop to about an hour if you want to add a second attraction, and check the opening hours for anything you plan to visit afterwards.',
        ],
      },
    ],
    faq: [
      { q: 'How far is Adalaj Stepwell from Ahmedabad?', a: 'It is roughly 18 to 20 km north of the city centre, on the way to Gandhinagar. The drive usually takes under an hour outside rush hour.' },
      { q: 'What is the easiest way to get there?', a: 'A car or an app-based cab. It drops you at the entrance and makes it easy to continue to Gandhinagar or Akshardham afterwards.' },
      { q: 'Can I go by public transport?', a: 'You can, but the last stretch from the nearest stop to the stepwell is the tricky part. For most visitors a cab or car is more reliable.' },
      { q: 'Can I combine Adalaj with Akshardham on the same day?', a: 'Yes, if you leave the city in the morning. Akshardham has a security check and is closed on Mondays, so keep the stepwell visit short.' },
    ],
    related: [
      { label: 'Nearest metro and last mile', href: '/en/nearest-metro-last-mile/' },
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
      { label: 'Adalaj half-day with Trimandir', href: '/en/adalaj-trimandir-half-day/' },
    ],
    sources: [baseSources.maps, baseSources.trimandir, baseSources.tourism],
  },
  'from-gandhinagar-city': {
    slug: 'from-gandhinagar-city',
    title: 'How to reach Adalaj Stepwell from Gandhinagar',
    description: 'Plan the shorter city-to-monument transfer from Gandhinagar to Adalaj Stepwell and decide whether to continue to Akshardham, Dandi Kutir or Indroda.',
    eyebrow: 'Transport',
    intro: 'Adalaj is only about 8 to 10 km from Gandhinagar, which makes it an easy morning stop. It pairs naturally with Akshardham, Dandi Kutir or Indroda Park, so you can build it into whatever else you have planned.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Distance', value: 'About 8 to 10 km from Gandhinagar' },
      { label: 'Easiest transport', value: 'Car or app-based cab' },
      { label: 'Good pairing', value: 'Akshardham, Dandi Kutir, Indroda' },
    ],
    sections: [
      {
        title: 'The short drive from Gandhinagar',
        paragraphs: [
          'Adalaj sits on the Gandhinagar side of the Ahmedabad to Gandhinagar corridor, so the transfer is short. Head toward Ahmedabad and turn off at Adalaj; from most parts of the city you will reach the village and the stepwell in a short drive.',
        ],
      },
      {
        title: 'What to pair with the stepwell',
        paragraphs: [
          'Because you are already close, Adalaj fits neatly into a bigger Gandhinagar day. Pick your second stop based on what your group enjoys.',
        ],
        bullets: [
          'Akshardham for a temple visit, remembering it is closed on Mondays and has a security check.',
          'Dandi Kutir for indoor history and a good weather backup.',
          'Indroda Nature Park for families who want a park-style stop.',
        ],
      },
      {
        title: 'An order that works well',
        paragraphs: [
          'Do the stepwell first, while the morning is cool and you still have energy for the stairs, then move on to your second stop. If you are travelling with older visitors or young children, saving the more seated or shaded attraction for later is usually more comfortable.',
        ],
        bullets: [
          'Stepwell first, then a single nearby attraction.',
          'Keep the stepwell to about an hour so the rest of the day stays relaxed.',
          'Confirm opening days and hours for your second stop before you leave.',
        ],
      },
    ],
    faq: [
      { q: 'Is Adalaj worth visiting from Gandhinagar?', a: 'Yes. It is one of the closest heritage sites to the city and fits easily into both half-day and full-day plans.' },
      { q: 'How far is it from Gandhinagar?', a: 'It is roughly 8 to 10 km away, on the Gandhinagar side of the corridor toward Ahmedabad, so it is a short drive.' },
      { q: 'What should I visit after Adalaj?', a: 'Akshardham is the best temple-focused follow-up. For variety, choose Dandi Kutir for indoor history or Indroda for a family-friendly park.' },
      { q: 'Can I do Adalaj without going into Ahmedabad?', a: 'Yes. Adalaj fits into a Gandhinagar-based day, and you do not need to go into the city between stops.' },
    ],
    related: [
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
      { label: 'Akshardham guide', href: '/en/akshardham-gandhinagar-guide/' },
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
    ],
    sources: [baseSources.maps, baseSources.akshardham, baseSources.dandiKutir, baseSources.indroda],
  },
  'nearest-metro-last-mile': {
    slug: 'nearest-metro-last-mile',
    title: 'Nearest metro to Adalaj Stepwell and last-mile planning',
    description: 'Use metro only as part of an Ahmedabad-to-Adalaj journey and plan the final road connection carefully instead of assuming station-to-monument access.',
    eyebrow: 'Transport',
    intro: 'There is no metro station at the stepwell itself, so treat the metro as the first half of a longer trip: ride as far as it helps, then finish the last few kilometres by auto-rickshaw, cab or a booked pickup. Adalaj is still very much a road destination.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Metro role', value: 'Partial journey only' },
      { label: 'Last mile', value: 'Auto, cab or pickup' },
      { label: 'Best for', value: 'Travellers already near a metro line' },
    ],
    sections: [
      {
        title: 'How the metro fits the trip',
        paragraphs: [
          'Gujarat Metro runs between Ahmedabad and Gandhinagar, so it can cover the busiest part of an Ahmedabad-side journey. What it cannot do is reach the stepwell door: you will still need a short road transfer at the end.',
        ],
        bullets: [
          'Use the metro for the long urban leg, then switch to a cab or auto.',
          'Decide your last-mile plan before you leave the station.',
          'If you are carrying bags, a direct cab may be simpler than a transfer.',
        ],
      },
      {
        title: 'When the metro works well',
        paragraphs: [
          'The metro suits travellers who are already near a line, want to keep costs down and are happy to manage one transfer at the end. It is a longer and less convenient option for families or for days when you are visiting several places.',
        ],
        bullets: [
          'Good for a single-destination trip when you are travelling light.',
          'Less convenient if you are also visiting Akshardham or several sites in one day.',
          'Less convenient with young children, older travellers or heavy luggage.',
        ],
      },
      {
        title: 'Plan the last mile carefully',
        paragraphs: [
          'Check the current metro route and the day of travel before you set out, since services and operating sections can change. Once you get off, arrange your onward ride the same way you would from any station, and confirm the route and fare before you start.',
        ],
      },
      {
        title: 'A straightforward hybrid plan',
        paragraphs: [
          'Ride the metro to the station closest to your route north, then take an auto-rickshaw or cab for the remaining distance to Adalaj. If speed or comfort matters more than cost, skip the metro and take a direct cab instead, which is simpler door to door.',
        ],
      },
    ],
    faq: [
      { q: 'Is there a metro station at Adalaj Stepwell?', a: 'No. The metro can take you part of the way from Ahmedabad toward Gandhinagar, but you will still need a short road transfer to reach the stepwell.' },
      { q: 'Is the metro cheaper than a cab?', a: 'The metro leg usually costs less, but you will add the price of the last-mile transfer. For convenience, a direct cab is simpler, especially for groups.' },
      { q: 'Who should use the metro for this trip?', a: 'Travellers already near a metro line who want to keep costs down and do not mind arranging one onward transfer.' },
      { q: 'How do I handle the last few kilometres?', a: 'Take an auto-rickshaw, cab or a pre-booked pickup from the station closest to Adalaj, and confirm the route and fare before you set off.' },
    ],
    related: [
      { label: 'From Ahmedabad city', href: '/en/from-ahmedabad-city/' },
      { label: 'Adalaj transport', href: '/en/transport/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.maps, baseSources.tourism],
  },
  'adalaj-to-akshardham': {
    slug: 'adalaj-to-akshardham',
    title: 'Adalaj Stepwell to Akshardham Gandhinagar: Route and Timing Tips',
    description: 'How to travel from Adalaj Stepwell to Akshardham in Gandhinagar, with practical advice on cabs, entry security, open days and how much time to set aside.',
    eyebrow: 'Nearby route',
    intro: 'Adalaj Stepwell and Akshardham make an easy same-day pair, because both sit on the Ahmedabad–Gandhinagar corridor. Visit Adalaj first, then give Akshardham a generous block of time, since entry there is slower and more regulated than at a plain monument.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Getting there', value: 'Car, cab or auto-rickshaw — a short drive of roughly 15–25 minutes' },
      { label: 'Time to allow', value: 'Around 2–4 hours at Akshardham once you are inside' },
      { label: 'Open days', value: 'Usually closed on Mondays — confirm the current schedule before you travel' },
    ],
    sections: [
      {
        title: 'Getting from Adalaj to Akshardham',
        paragraphs: [
          'The two sites are close if you are already at Adalaj. A cab, an app-based ride or an auto-rickshaw is the simplest choice, and the road heads north towards Gandhinagar. Local buses also run along this corridor, but they are slower and less predictable, so book a cab if your time is tight.',
          'If you are driving yourself, allow for city traffic near Gandhinagar, especially at weekends. Parking at the temple complex is separate from the monument, so budget a few extra minutes to walk in.',
        ],
        bullets: [
          'Cab or app ride: easiest and fastest for most visitors.',
          'Auto-rickshaw: cheaper for a short hop, but agree the fare first.',
          'Local bus: cheap but slow — only if you are not watching the clock.',
        ],
      },
      {
        title: 'Entry and security at Akshardham',
        paragraphs: [
          'Akshardham is a large, security-controlled complex, not a roadside stop. Expect bag checks and a screening at the entrance, and plan for that queue to take time on busy days. Phones and cameras are usually restricted inside, so keep valuables minimal and confirm the current rules at the gate.',
          'Once inside, the mandir darshan and the exhibitions are separate areas that run at their own pace. If you only want darshan, you can keep the visit lighter; if exhibitions matter, add a bigger buffer.',
        ],
      },
      {
        title: 'Open days and when to skip a Monday',
        paragraphs: [
          'Akshardham is usually closed on Mondays, so this route does not work as a same-day pair that day unless you have rechecked and the complex is open. On other days, aim to arrive well before the last-entry window closes rather than right at closing time.',
          'Opening hours and entry cut-offs can change with the season and with festivals, so confirm the current timings on the official Akshardham visitor page or by phone before you set out.',
        ],
      },
      {
        title: 'How to split the day',
        paragraphs: [
          'Start at Adalaj while your energy is high. The stepwell is a walk-down, walk-up visit with steep, narrow steps, so keep it focused rather than lingering. Then transfer to Akshardham for the second half, where shaded walkways, seating and food options make it a calmer finish.',
          'Doing it the other way round is riskier: an unhurried Akshardham visit can eat the whole day and leave no comfortable window for the stepwell.',
        ],
      },
    ],
    faq: [
      { q: 'Can I visit Adalaj Stepwell and Akshardham on the same day?', a: 'Yes. It works well if you visit Adalaj first and leave a solid block of time for Akshardham, since its entry and security take longer than a simple monument visit.' },
      { q: 'Is Akshardham open on Mondays?', a: 'It is usually closed on Mondays, but schedules can change, so confirm the current opening days before you travel.' },
      { q: 'How long should I allow at Akshardham?', a: 'Plan roughly two to four hours once you are inside. Add more if you want the exhibitions as well as the main mandir.' },
      { q: 'What should I not bring?', a: 'Travel light. Large bags and loose items slow down the security check, and phones or cameras are usually restricted inside, so confirm the rules at the entrance.' },
    ],
    related: [
      { label: 'Akshardham guide', href: '/en/akshardham-gandhinagar-guide/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
      { label: 'Adalaj day trip', href: '/en/adalaj-akshardham-day-trip/' },
    ],
    sources: [baseSources.maps, baseSources.akshardham, baseSources.tourism],
  },
  'adalaj-to-trimandir': {
    slug: 'adalaj-to-trimandir',
    title: 'Adalaj Stepwell to Trimandir: A Short, Easy Pairing',
    description: 'Pair Adalaj Stepwell with Trimandir, just minutes away, and plan a relaxed half-day with vegetarian food and a calmer cultural stop.',
    eyebrow: 'Nearby route',
    intro: 'Trimandir sits right by Adalaj, so it is the easiest second stop after the stepwell — no long transfer and no strict entry window. Pair them when you want a gentle half-day rather than a packed schedule.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Getting there', value: 'A very short drive, roughly 5–10 minutes from the stepwell' },
      { label: 'Time to allow', value: 'Around 1–2 hours at Trimandir' },
      { label: 'Dress and etiquette', value: 'Remove shoes and dress modestly, with shoulders and knees covered' },
    ],
    sections: [
      {
        title: 'Why the pairing works so well',
        paragraphs: [
          'Trimandir is a large, calm temple complex close to Adalaj, so you can move between the two without committing to a long journey. That makes it a good fit when you want a slower day: the stepwell first, then a relaxed, shaded stop with food and seating.',
        ],
      },
      {
        title: 'What to expect at Trimandir',
        paragraphs: [
          'Trimandir is a non-sectarian temple complex built around the idea of uniting different spiritual traditions, with gardens, a hall and visitor facilities. It is more than a quick darshan stop, so give yourself time to walk the grounds rather than rushing in and out.',
        ],
        bullets: [
          'You will need to remove your shoes before entering the temple areas.',
          'Photography rules can be strict, so look for posted signs or ask staff.',
          'The grounds are a calm place to slow down after the stepwell.',
        ],
      },
      {
        title: 'Eating and resting nearby',
        paragraphs: [
          'Trimandir has vegetarian dining on site, usually within fixed meal windows, plus a food court that runs longer during the day. That makes it a practical place to eat after Adalaj without hunting for a restaurant on the highway.',
          'Service hours can vary by day and season, so check the current timings when you arrive rather than relying on a fixed schedule.',
        ],
      },
      {
        title: 'How to sequence the day',
        paragraphs: [
          'Visit Adalaj first and Trimandir second. The stepwell involves steep, narrow steps, so do it while your energy is fresh, then move to Trimandir for a gentler stop with food and shade.',
          'If your group includes older travellers or children, this order keeps the more physical part short and ends somewhere comfortable.',
        ],
      },
    ],
    faq: [
      { q: 'Is Adalaj Stepwell to Trimandir a good half-day plan?', a: 'Yes. It is one of the easiest pairings nearby, because the two sites are very close and Trimandir needs no long transfer.' },
      { q: 'Can I eat near Trimandir after visiting Adalaj?', a: 'Yes. Trimandir has vegetarian dining on site, with fixed meal windows and a food court, though the exact hours can vary, so check on arrival.' },
      { q: 'Is this easier than going to Akshardham?', a: 'Usually yes, if you would rather have a short, calm half-day than a larger landmark with tighter entry rules.' },
    ],
    related: [
      { label: 'Trimandir Adalaj guide', href: '/en/trimandir-adalaj/' },
      { label: 'Half-day itinerary', href: '/en/adalaj-trimandir-half-day/' },
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
    ],
    sources: [baseSources.maps, baseSources.trimandir, baseSources.trimandirFacilities],
  },
  'nearby-attractions': {
    slug: 'nearby-attractions',
    title: 'Best places to visit near Adalaj Stepwell',
    description: 'Choose the best nearby attraction after Adalaj Stepwell, from Trimandir and Akshardham to Dandi Kutir, Indroda Nature Park and Gujarat Science City.',
    eyebrow: 'Nearby planning',
    intro: 'The right next stop depends on your mood and the weather. Right around Adalaj you have a calm temple complex at Trimandir; a little further out, Gandhinagar adds a grand temple, a Gandhi museum, a nature park and a science centre.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Closest add-on', value: 'Trimandir, just minutes from the stepwell' },
      { label: 'Best big landmark', value: 'Akshardham in Gandhinagar (usually closed on Mondays)' },
      { label: 'Best for families', value: 'Indroda Nature Park or Gujarat Science City' },
    ],
    sections: [
      {
        title: 'Trimandir: the easiest continuation',
        paragraphs: [
          'Trimandir sits right by Adalaj, so it is the lowest-stress second stop. It is a large, calm temple complex with gardens and vegetarian food on site, ideal if you want a gentle cultural finish without a long drive.',
        ],
      },
      {
        title: 'Akshardham: the headline landmark',
        paragraphs: [
          'Akshardham in Gandhinagar is the biggest and most famous stop in the area, and it is a full experience with security checks and separate areas for darshan and exhibitions. It is usually closed on Mondays, and entry takes time, so treat it as a half-day of its own rather than a quick add-on.',
        ],
      },
      {
        title: 'Museums, parks and rainy-day options',
        paragraphs: [
          'Dandi Kutir is a Gandhi-themed museum in Gandhinagar and a good indoor option when the weather turns. Indroda Nature Park is a wide, green space known for its dinosaur fossils and natural-history exhibits, best for families and anyone who wants open air after stone architecture.',
          'Gujarat Science City, on the edge of Ahmedabad, is another strong family stop with interactive exhibits and galleries, and it works well as a rainy-day backup or a change of pace from temples and monuments.',
        ],
        bullets: [
          'Calmest option: Trimandir',
          'Most iconic: Akshardham',
          'Best indoor backup: Dandi Kutir',
          'Best open-air family stop: Indroda Nature Park',
          'Best interactive science stop: Gujarat Science City',
        ],
      },
      {
        title: 'How to combine two stops',
        paragraphs: [
          'Pick one main stop and one easy add-on rather than cramming three or four into a single day. A common, comfortable pattern is Adalaj plus Trimandir for a relaxed half-day, or Adalaj plus Akshardham if you start early and can give the temple its own block of time.',
        ],
      },
    ],
    faq: [
      { q: 'What is the best place to visit after Adalaj Stepwell?', a: 'For an easy option, Trimandir; for a big landmark, Akshardham in Gandhinagar. The better choice depends on your pace and how much time you have.' },
      { q: 'Which nearby attraction is best in bad weather?', a: 'Dandi Kutir and Gujarat Science City are both indoor-friendly, so either works as a rainy-day backup.' },
      { q: 'Is there a family-friendly nearby stop?', a: 'Yes. Indroda Nature Park and Gujarat Science City are the most family-oriented options, with space to walk and plenty to keep children interested.' },
    ],
    related: [
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'Adalaj day trip', href: '/en/adalaj-akshardham-day-trip/' },
    ],
    sources: [baseSources.akshardham, baseSources.trimandir, baseSources.dandiKutir, baseSources.indroda],
  },
  'trimandir-adalaj': {
    slug: 'trimandir-adalaj',
    title: 'Trimandir Adalaj visitor guide',
    description: 'What to expect at Trimandir in Adalaj: how to visit respectfully, dress and etiquette, food on site, and how to pair it with Adalaj Stepwell.',
    eyebrow: 'Nearby attraction',
    intro: 'Trimandir is a large, calm temple complex just minutes from Adalaj Stepwell. It suits travellers who want a respectful cultural stop with food and shade on site, and it is easy to visit on the same trip as the stepwell.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Location', value: 'In Adalaj, a short drive from the stepwell' },
      { label: 'Dress and etiquette', value: 'Modest clothing, shoes off before temple areas, quiet behaviour' },
      { label: 'Time to allow', value: 'Around 1–2 hours, more if you eat on site' },
    ],
    sections: [
      {
        title: 'What kind of place Trimandir is',
        paragraphs: [
          'Trimandir is a non-sectarian temple complex built around the idea of bringing different spiritual traditions together, with gardens, a hall for gatherings and visitor facilities. It belongs to the Dada Bhagwan tradition and is designed to feel open and welcoming rather than exclusive.',
          'Because it is more than a single shrine, give yourself time to walk the grounds instead of treating it as a five-minute photo stop.',
        ],
      },
      {
        title: 'Visiting rules, dress and etiquette',
        paragraphs: [
          'You do not need to be religious to visit, but the site is a place of worship, so respect applies. Remove your shoes before entering temple areas, dress modestly with shoulders and knees covered, and keep noise down.',
        ],
        bullets: [
          'Shoes off before temple areas — there is usually a shoe stand.',
          'Cover shoulders and knees; avoid very short or sleeveless clothing.',
          'Follow any posted rules on photography and keep phones on silent.',
          'Ask staff if you are unsure, rather than assuming.',
        ],
      },
      {
        title: 'Food and facilities on site',
        paragraphs: [
          'Trimandir is known for its vegetarian dining, usually served within fixed meal windows, plus a food court that runs longer during the day. That makes it a convenient place to eat after a morning at the stepwell.',
          'Meal times can shift by day and season, so confirm the current windows when you arrive.',
        ],
      },
      {
        title: 'Pairing it with Adalaj Stepwell',
        paragraphs: [
          'Visit the stepwell first, while you have energy for its steep steps, then come to Trimandir to slow down, sit and eat. The short distance between them means you do not lose much time in transit.',
        ],
      },
    ],
    faq: [
      { q: 'Is Trimandir worth adding after Adalaj Stepwell?', a: 'Yes, especially if you want a calm cultural stop with food and seating right after the more physical stepwell visit.' },
      { q: 'Can I eat at Trimandir?', a: 'Yes. There is vegetarian dining on site, normally within fixed meal windows plus a food court, though the hours can vary, so check when you arrive.' },
      { q: 'Is Trimandir only for religious visitors?', a: 'No. Everyone is welcome, but it is a place of worship, so come dressed modestly and behave respectfully.' },
      { q: 'Do I need to remove my shoes?', a: 'Yes, shoes come off before entering the temple areas, so wear footwear that is easy to slip on and off.' },
    ],
    related: [
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'Half-day itinerary', href: '/en/adalaj-trimandir-half-day/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.trimandir, baseSources.trimandirFacilities],
  },
  'akshardham-gandhinagar-guide': {
    slug: 'akshardham-gandhinagar-guide',
    title: 'Akshardham Gandhinagar visitor guide after Adalaj',
    description: 'How to plan an Akshardham Gandhinagar visit after Adalaj Stepwell, with advice on security, open days, timings and how much time to set aside.',
    eyebrow: 'Nearby attraction',
    intro: 'Akshardham in Gandhinagar is a large, security-controlled temple complex, so it is worth treating as a proper half-day rather than a quick add-on. Pair it with Adalaj only if you start early and can give it its own block of time.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Open days', value: 'Usually closed on Mondays — confirm the current schedule before you travel' },
      { label: 'Time to allow', value: 'Around 2–4 hours once you are inside' },
      { label: 'Entry', value: 'Security screening; phones and cameras usually restricted' },
    ],
    sections: [
      {
        title: 'Entry, security and what to bring',
        paragraphs: [
          'Akshardham is a large complex with a formal entry process. Expect bag checks and screening at the gate, and plan for the queue to take time, especially at weekends and on public holidays.',
          'Travel light. Large bags, loose items and restricted electronics slow the check, and phones or cameras are usually not allowed inside, so keep valuables to a minimum and confirm the current rules at the entrance.',
        ],
      },
      {
        title: 'Open days and timings',
        paragraphs: [
          'Akshardham is usually closed on Mondays, so avoid planning this as your Monday route. Opening hours and last-entry times can change with the season and with festivals, so confirm the current timings on the official Akshardham visitor page or by phone before you set out — do not assume a fixed schedule.',
        ],
      },
      {
        title: 'Planning your time inside',
        paragraphs: [
          'The main mandir and the exhibitions are separate areas that run at their own pace. If you only want darshan, you can keep the visit lighter; if you also want the exhibitions, add a bigger buffer, because ticket windows and last entry for those can close earlier than the complex itself.',
        ],
        bullets: [
          'Darshan only: a shorter, simpler visit.',
          'Mandir plus exhibitions: allow extra time and arrive earlier.',
          'Arrive well before the last-entry window closes, not just before closing time.',
        ],
      },
      {
        title: 'Combining it with Adalaj Stepwell',
        paragraphs: [
          'If you want both on one day, do Adalaj first and keep it efficient, then transfer to Akshardham with time to spare for entry. Skip the double stop if you start late, if your group needs a slower pace, or if your goal is a full, unhurried Akshardham visit.',
        ],
      },
    ],
    faq: [
      { q: 'Is Akshardham Gandhinagar open on Mondays?', a: 'It is usually closed on Mondays, but schedules can change, so confirm the current opening days before you go.' },
      { q: 'Can I do Akshardham after Adalaj in one day?', a: 'Yes, but it works best when you visit Adalaj first, start early and leave enough time for Akshardham’s entry and security.' },
      { q: 'Should I plan the exhibitions as well as the mandir?', a: 'Only if you have enough time. The exhibitions run on their own timings and can close earlier, so plan extra buffer if they matter to you.' },
      { q: 'What should I leave behind?', a: 'Large bags and, usually, phones and cameras. Travel light to get through the security check faster, and confirm the current rules at the gate.' },
    ],
    related: [
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
      { label: 'Adalaj day trip', href: '/en/adalaj-akshardham-day-trip/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.akshardham, baseSources.tourism],
  },
  'restaurants-near-adalaj': {
    slug: 'restaurants-near-adalaj',
    title: 'Where to eat near Adalaj Stepwell',
    description: 'Plan a meal stop near Adalaj Stepwell by food type, timing and route, and see when to eat before, after or around the stepwell on the Ahmedabad–Gandhinagar corridor.',
    eyebrow: 'Food planning',
    intro: 'There is no reliable restaurant right at the stepwell gate, so the real decision is whether to eat before you arrive, after you leave, or further along your route. Most visitors do best with a simple vegetarian meal at the nearby Trimandir complex or a later city meal in Gandhinagar or Ahmedabad.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Best meal window', value: 'Lunch after the stepwell, or breakfast before' },
      { label: 'Food type nearby', value: 'Mostly vegetarian, with Jain options in temple areas' },
      { label: 'Easiest fixed meal', value: 'The Trimandir complex, a short drive away' },
    ],
    sections: [
      {
        title: 'Eat before, after, or further along?',
        paragraphs: [
          'Adalaj sits on the Ahmedabad–Gandhinagar corridor, roughly 18-20 km north of central Ahmedabad and 8-10 km from Gandhinagar city. That means your meal stop is really about your route, not the monument itself. If you set off from Ahmedabad early, eat breakfast in the city first; if you are heading onward to Gandhinagar, keep lunch for later and eat on that stretch.',
        ],
      },
      {
        title: 'The nearest practical meal: the Trimandir complex',
        paragraphs: [
          'The easiest fixed meal near the stepwell is the Trimandir Adalaj complex, a short drive away. It usually runs a vegetarian dining hall and a food court with set breakfast, lunch and dinner windows, so you can attach a meal to your trip without hunting around. The food is simple and Gujarati-style. Confirm the current serving times and how payment works when you arrive, because these change from time to time.',
        ],
        bullets: [
          'Ask whether the thali is Jain (no onion, garlic or root vegetables) if that matters to you.',
          'Menus and signage are usually in Gujarati and English, and staff can confirm ingredients if asked.',
          'Remove your shoes and dress modestly before entering the complex.',
        ],
      },
      {
        title: 'Jain, pure-veg and how to confirm',
        paragraphs: [
          'Gujarat is overwhelmingly vegetarian, so a meat-free meal is easy to find. But “vegetarian” does not always mean Jain. If you avoid onion, garlic and root vegetables, say “Jain food” clearly and confirm it with the kitchen or your server rather than trusting the menu alone. The same applies if you want to know whether a dish uses separate oil or ghee.',
        ],
        bullets: [
          'Say “Jain” explicitly — many places assume plain vegetarian is enough.',
          'Ask whether a dish contains onion, garlic, potato or other root vegetables.',
          'For strict needs, a temple dining hall is usually the safest choice.',
        ],
      },
      {
        title: 'If you keep moving, the cities give you more',
        paragraphs: [
          'If you would rather eat later, both cities offer far more variety. Gandhinagar has business-hotel restaurants and family vegetarian places, while Ahmedabad has the widest choice, including Gujarati thali houses and cafes. Confirm opening hours before you go, since many kitchens close between lunch and dinner.',
        ],
      },
    ],
    faq: [
      { q: 'Is there somewhere to eat right at Adalaj Stepwell?', a: 'Do not count on a full meal at the monument gate. Plan to eat before you arrive, after you leave, or at the Trimandir complex a short drive away.' },
      { q: 'Is the food near Adalaj vegetarian?', a: 'Almost always. Gujarat is largely vegetarian and the nearest temple dining is fully vegetarian. If you need Jain food, ask for it directly and confirm it with staff.' },
      { q: 'Should I stop near the stepwell or eat in the city?', a: 'If you are heading to Gandhinagar or back to Ahmedabad, eating there gives you more choice. The temple complex nearby is the simplest option if you want to stay close.' },
      { q: 'Do I need to book a table?', a: 'Usually not for casual meals or temple dining, but check opening hours first, and call ahead if you are a large group.' },
    ],
    related: [
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'Half-day itinerary', href: '/en/adalaj-trimandir-half-day/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.trimandirFacilities, baseSources.maps],
  },
  'adalaj-trimandir-half-day': {
    slug: 'adalaj-trimandir-half-day',
    title: 'Adalaj Stepwell and Trimandir half-day itinerary',
    description: 'Combine Adalaj Stepwell with Trimandir on an easy half-day trip, with a relaxed pace, short transfers and a vegetarian meal stop on the way.',
    eyebrow: 'Itinerary',
    intro: 'Pairing Adalaj Stepwell with the nearby Trimandir makes an unhurried half-day: heritage first, then a calmer multi-faith temple stop with food on site. It suits travellers who want two cultural stops without committing to a full-day itinerary.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Time needed', value: 'About 3 to 4 hours' },
      { label: 'Best for', value: 'A relaxed morning or afternoon' },
      { label: 'Food on site', value: 'Vegetarian dining at the Trimandir complex' },
    ],
    sections: [
      {
        title: 'Adalaj first, then Trimandir',
        paragraphs: [
          'Start at Adalaj Stepwell while you are fresh, since the carved five-storey shaft is the main event. Most groups spend roughly 45 to 60 minutes here. Then drive the short distance to Trimandir Adalaj, a multi-faith temple complex, for a quieter second stop where you can sit, walk and eat.',
        ],
        bullets: [
          'Arrive at the stepwell early to avoid the midday heat and the busiest hours.',
          'Carry water; the stepwell is cooler inside, but the approach is exposed.',
          'Keep the temple visit unhurried — it is more about atmosphere than ticking off sights.',
        ],
      },
      {
        title: 'Getting between the two stops',
        paragraphs: [
          'The two sites sit close together on the Ahmedabad–Gandhinagar corridor, so the transfer is short. A taxi or app-based cab is the simplest option, and drivers usually know both by name. Agree the fare before you set off, and if you want the driver to wait, arrange that up front.',
        ],
      },
      {
        title: 'Eating at the Trimandir',
        paragraphs: [
          'The Trimandir complex usually has a vegetarian dining hall and a food court, with set windows for breakfast, lunch and dinner. It is the easiest place to attach a meal to this route. Confirm the current timings when you arrive, and ask staff directly if you need Jain food, which avoids onion, garlic and root vegetables.',
        ],
        bullets: [
          'Remove your shoes and dress modestly before entering the complex.',
          'Ask whether the thali is Jain if that matters — “vegetarian” alone may still include onion and garlic.',
          'Keep some cash in case a counter does not take cards.',
        ],
      },
      {
        title: 'Who this half-day suits',
        paragraphs: [
          'This route works well for families, older travellers and anyone who wants a gentle pace. It is a better fit than the Akshardham day trip if you would rather not rush, and if a calm cultural outing matters more to you than seeing a headline attraction.',
        ],
      },
    ],
    faq: [
      { q: 'Is half a day enough for Adalaj and Trimandir?', a: 'Yes. For most visitors, three to four hours covers both comfortably. Allow longer only if you want a slow meal or more time inside the temple complex.' },
      { q: 'Should I visit the stepwell or the temple first?', a: 'Visit Adalaj first. The stepwell is the main sight and is easier at the start of the trip, and the temple makes a calmer finish with food nearby.' },
      { q: 'Is this route good for families and older travellers?', a: 'Yes. The distances are short, the pace is gentle, and there is seating and food at the second stop.' },
      { q: 'Do I need a car?', a: 'A taxi or cab is easiest, because the two sites are close but not really walkable together. Public transport is possible but slower and less predictable.' },
    ],
    related: [
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'Trimandir guide', href: '/en/trimandir-adalaj/' },
      { label: 'Visit duration', href: '/en/visit-duration/' },
    ],
    sources: [baseSources.trimandir, baseSources.trimandirFacilities, baseSources.maps],
  },
  'adalaj-akshardham-day-trip': {
    slug: 'adalaj-akshardham-day-trip',
    title: 'Adalaj Stepwell and Akshardham day trip itinerary',
    description: 'Plan a full day combining Adalaj Stepwell with Akshardham in Gandhinagar, with a sensible visit order, transfer tips and Akshardham timing notes.',
    eyebrow: 'Itinerary',
    intro: 'This full-day route combines Adalaj Stepwell with Akshardham in Gandhinagar, one of the region’s largest temple complexes. It works best with an early start: visit the stepwell first, then give Akshardham the bulk of the day, and remember it is usually closed on Mondays.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Time needed', value: 'Roughly a full day' },
      { label: 'Avoid', value: 'Mondays, when Akshardham usually closes' },
      { label: 'Getting around', value: 'Car or taxi; both sites sit on the same corridor' },
    ],
    sections: [
      {
        title: 'Adalaj first, Akshardham second',
        paragraphs: [
          'Start at Adalaj Stepwell in the morning, while it is cooler and before the crowds build. Keep the visit to about an hour, then continue north to Akshardham in Gandhinagar, which sits on the same Ahmedabad–Gandhinagar corridor a short drive further on. Doing the smaller site first leaves the rest of the day for Akshardham’s entry, security and darshan.',
        ],
      },
      {
        title: 'Plan around Akshardham’s timings',
        paragraphs: [
          'Akshardham is large and has a security check, so budget extra time before you actually get inside. It usually closes on Mondays, and the exhibitions can run on separate, shorter hours than the main mandir. Check the official visitor page for the day you plan to go, and decide in advance whether you want darshan only or the exhibitions too.',
        ],
        bullets: [
          'Leave large bags behind so you clear security faster.',
          'Phones and cameras are usually not allowed inside — confirm the current rules at the gate.',
          'Arrive with enough daylight left; a late start leaves little usable time.',
        ],
      },
      {
        title: 'Getting there without a car',
        paragraphs: [
          'This route is easiest by car or taxi, because the two sites are spread along the highway and public transport between them is slow and indirect. If you are relying on cabs, agree whether your driver waits or whether you will book a new one at Akshardham, and confirm fares and pickup points before you set off.',
        ],
      },
      {
        title: 'When to pick a different plan',
        paragraphs: [
          'Choose the Trimandir half-day instead if you cannot start early, if the weather is rough, or if your group prefers a slower pace. Akshardham needs a real block of time, and squeezing it into a rushed afternoon rarely works well.',
        ],
      },
    ],
    faq: [
      { q: 'Can I visit Adalaj and Akshardham in one day?', a: 'Yes, but start early. Visit Adalaj first, then give Akshardham most of the day so you are not rushing its security and darshan.' },
      { q: 'Is Akshardham open on Mondays?', a: 'It is usually closed on Mondays, though schedules can change. Confirm the current opening days on the official visitor page before you travel.' },
      { q: 'Do I need a car for this day trip?', a: 'A car or taxi makes it much easier. The two sites are close on the map but not well linked by quick public transport.' },
      { q: 'What should I leave behind?', a: 'Large bags and usually phones and cameras. Travel light to move through security faster, and check the current rules at the gate.' },
    ],
    related: [
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
      { label: 'Akshardham guide', href: '/en/akshardham-gandhinagar-guide/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
    ],
    sources: [baseSources.akshardham, baseSources.maps, baseSources.tourism],
  },
  'architecture-overview': {
    slug: 'architecture-overview',
    title: 'Adalaj Stepwell architecture, explained for visitors',
    description: 'Learn how to read Adalaj Stepwell as a five-storey structure built downward around water, and which parts — the octagonal opening, the three entrances and the stacked landings — are worth pausing over.',
    eyebrow: 'Architecture',
    intro: 'By the end of this page you will be able to read Adalaj as a five-storey building that descends around water rather than rises, and you will know which features — the octagonal opening, the three entrances and the stepped landings — to look for on the way down.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What it is', value: 'A five-storey stepwell, not a ruin' },
      { label: 'Where to look first', value: 'Up through the octagonal opening' },
      { label: 'Pairs well with', value: 'The carvings and five-storeys pages' },
    ],
    sections: [
      {
        title: 'What you are actually looking at',
        paragraphs: [
          'Adalaj reads less like a single monument and more like an inverted tower. Rather than rising, it descends: five stepped storeys arranged around a central well shaft, with flights of stairs and columned landings wrapping down toward the water.',
          'That downward logic is the whole point. A stepwell — vav in Gujarati — was built to reach the water table and to keep that water, and the people using it, out of the full force of the sun. Once you see it as a cool vertical public space rather than a decorative pit, the rest of the structure makes sense.',
        ],
      },
      {
        title: 'The elements worth pausing over',
        paragraphs: [
          'Most descriptions of Adalaj settle on the same visitor-level anchors: three entrances, an octagonal opening above the shaft, and a depth of five storeys.',
        ],
        bullets: [
          'Look up through the octagonal opening — it is the frame that connects the deepest levels to the sky.',
          'Notice that each storey is a little smaller than the one above it, so the walls step inward as you go down.',
          'Watch how carved pillars repeat along every landing; they carry the structure, but they also shade the walkways and break up the long view.',
          'Stand still on one level and look across, then up, then down — the space reads differently from each angle.',
        ],
      },
      {
        title: 'How the light and the levels work',
        paragraphs: [
          'Because the opening narrows as it rises, the lower levels sit in deep, shifting shade. Light reaches them mainly through the central shaft and the open sides, so the carvings and the water surface change character through the day. That is why a single glance from the top is never quite enough.',
          'The structure is also entered from more than one side. The three entrances are usually described as serving different approaches, which is part of why the site feels like a meeting place rather than one long staircase.',
        ],
      },
      {
        title: 'A simple way to walk it',
        paragraphs: [
          'Start at the rim and take in the full depth, then descend one storey at a time instead of rushing to the water level. Pause at each landing to look back up: the stacked columns and the octagonal opening line up behind you, which is the view most photographs try to capture.',
        ],
      },
    ],
    faq: [
      { q: 'What kind of structure is Adalaj Stepwell?', a: 'It is a five-storey stepwell built downward around a central water shaft, with three entrances, stacked landings and rows of carved pillars.' },
      { q: 'What should I look at first?', a: 'Stand at the rim and look down, then up again through the octagonal opening. That view makes the depth and the inward-stepping shape clear before you start descending.' },
      { q: 'How do I know which way to walk?', a: 'There is no fixed route. Descend one level at a time and pause at each landing; the three entrances let you enter and leave from different sides.' },
      { q: 'Do I need to care about architecture to enjoy it?', a: 'No. The layout is easy to read on its own — depth, shade, pillars and water — and knowing a little about it mostly helps you slow down and notice more.' },
    ],
    related: [
      { label: 'Carvings and symbols', href: '/en/carvings-and-symbols/' },
      { label: 'Five storeys explained', href: '/en/five-storeys-explained/' },
      { label: 'Three entrances explained', href: '/en/three-entrances-explained/' },
    ],
    sources: [baseSources.tourism, baseSources.adalaj],
  },
  'carvings-and-symbols': {
    slug: 'carvings-and-symbols',
    title: 'Adalaj Stepwell carvings and symbols, explained',
    description: 'Learn how to read the carved pillars, brackets and decorative bands at Adalaj Stepwell, and where documented detail ends and interpretation begins.',
    eyebrow: 'Architecture',
    intro: 'This page helps you actually see the carvings at Adalaj — the pillars, brackets and wall bands — and understand what can honestly be said about them without inventing meanings the stone does not prove.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What you will see', value: 'Carved pillars, brackets and bands' },
      { label: 'Style mix', value: 'Hindu and Islamic decoration' },
      { label: 'Best light', value: 'Morning or late afternoon' },
    ],
    sections: [
      {
        title: 'What is actually carved here',
        paragraphs: [
          'At Adalaj the carving is not hung on the walls like separate panels. It is part of the building: the pillars that hold up each landing, the brackets where they meet the beams, and the horizontal bands running along the walls are all worked stone.',
          'That is what makes the carving both easy to miss and rewarding to find. Because it sits inside the structure, you meet it while moving through changing light and height, not in a neat display case.',
        ],
      },
      {
        title: 'The style you are looking at',
        paragraphs: [
          'Adalaj is usually described as blending two traditions. The overall form and many of the bracket-and-pillar details belong to the regional temple-building style of Gujarat, often called the Solanki tradition, while the decorative bands and geometric or floral patterns show clear Islamic influence. The result is a hybrid rather than a copy of either.',
          'Knowing this helps you read the surface: expect a mix of small figures, leaf-like (foliate) and geometric patterns, and repeating ornamental bands rather than one consistent visual programme.',
        ],
      },
      {
        title: 'Reading symbols without overclaiming',
        paragraphs: [
          'It is tempting to assign a fixed meaning to every figure, but that is where stepwell guides usually go wrong. Some motifs clearly echo themes common in temple art, while others are decorative or their original intent is simply not documented. The honest approach is to describe what is visible and to admit when a meaning is a guess.',
        ],
        bullets: [
          'Describe the shape first — figure, flower or geometric band — before saying what it might represent.',
          'Use “often interpreted as” or “usually read as” rather than stating a meaning as fact.',
          'Keep documented detail separate from later legend, which belongs with the site’s history rather than with the stonework itself.',
          'A figure you cannot identify is still worth looking at; not everything needs a label.',
        ],
      },
      {
        title: 'Getting a good look',
        paragraphs: [
          'Carving shows up best when light rakes across it, so the softer light of morning or late afternoon reveals more depth than flat midday sun. Move close for individual details and step back to see how a motif repeats along a whole row of pillars.',
          'The contrast between the repeated ornament and the small differences between one panel and the next is one of the quiet pleasures of the site, and it rewards a slow walk rather than a quick photo stop.',
        ],
      },
    ],
    faq: [
      { q: 'Does every carving at Adalaj have a known meaning?', a: 'No. Many details can be described visually and by style, but not every figure has a documented meaning, so a good guide avoids claiming one for each.' },
      { q: 'What style are the carvings?', a: 'They are usually described as a blend of Gujarat’s regional temple style and Islamic decorative tradition, seen in the pillars and brackets as well as in the wall bands.' },
      { q: 'Should I trust stories about what a carving symbolises?', a: 'Treat them carefully. Some readings are well grounded, but others are later interpretation. It is fine to enjoy a story as a story while keeping it separate from what the stone actually shows.' },
      { q: 'Where are the carvings concentrated?', a: 'They run throughout the structure — along the pillars and brackets of each landing and in the decorative bands on the walls — so you pass them on every level rather than in one single spot.' },
    ],
    related: [
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Photo spots', href: '/en/photo-spots/' },
      { label: 'Photography rules', href: '/en/photography-rules/' },
    ],
    sources: [baseSources.tourism, baseSources.adalaj],
  },
  'water-engineering-cooling': {
    slug: 'water-engineering-cooling',
    title: 'How Adalaj Stepwell stored water and stayed cool',
    description: 'A plain-language look at how the depth, shade and heavy stone of Adalaj Stepwell supported water storage and made the lower levels noticeably cooler.',
    eyebrow: 'Architecture',
    intro: 'This page explains, in plain terms, why a stepwell was useful: how Adalaj reached and held water, and why the deeper levels feel so much cooler than the ground above.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Original purpose', value: 'Water access and a cool gathering place' },
      { label: 'What you will notice', value: 'Lower levels feel cooler' },
      { label: 'Why it worked', value: 'Depth, shade and thick stone' },
    ],
    sections: [
      {
        title: 'What a stepwell was for',
        paragraphs: [
          'A stepwell — vav in Gujarati — was working infrastructure long before it was a monument. It gave a community a way to reach the water table directly, and it doubled as a cool, shaded place to meet, rest and carry out daily tasks through the hot months.',
          'Adalaj fits that pattern. Its five storeys of stairs and landings were not only a way down to the water; they were also the reason people would linger below ground on a hot day.',
        ],
      },
      {
        title: 'Why the lower levels feel cooler',
        paragraphs: [
          'Three things do most of the work. First, depth: the deeper you go, the more earth and stone sit between you and the direct sun. Second, shade: the shaft and the inward-stepping walls block most of the day’s strongest light. Third, stone mass: thick stone walls and pillars heat up and cool down slowly, so they even out the temperature around them.',
          'The result is a lower zone that feels calmer and cooler than the road above — a difference you sense rather than measure. It is a good example of building with the climate rather than against it, even though nobody at the time would have described it that way.',
        ],
      },
      {
        title: 'Air, water and the shape of the well',
        paragraphs: [
          'The open central shaft is not only for looking up. It lets light in and allows warmer air to rise and escape as cooler air settles lower, which is part of why the descent feels progressively fresher. The water itself helps too, holding the space at a more steady temperature than the open air.',
          'You do not need technical figures to see the logic. Walk down slowly, stop at a middle landing and compare it with the temperature at the rim — the building is doing plainly what it was designed to do.',
        ],
      },
      {
        title: 'How this connects to other stepwells',
        paragraphs: [
          'The storage and cooling principles you notice at Adalaj are shared across the stepwell tradition rather than unique to this site. Seeing the same ideas at a second stepwell, such as Dada Harir in Ahmedabad, makes the engineering easier to appreciate, because you start recognising the pattern and not just one building.',
        ],
      },
    ],
    faq: [
      { q: 'Why is it cooler inside Adalaj Stepwell?', a: 'Depth, shade and heavy stone combine to keep the lower levels out of direct sun and to even out the temperature, so the descent usually feels noticeably cooler than ground level.' },
      { q: 'Was Adalaj Stepwell used for anything besides water?', a: 'Yes. Like other stepwells, it was a community space as well as a water source — a shaded place to gather, rest and work during hot weather.' },
      { q: 'Can you tell me exactly how many degrees cooler it is?', a: 'No reliable figure is worth quoting. The cooling comes from well-understood effects such as depth and stone mass, but how much you feel depends on the season, the time of day and the weather.' },
      { q: 'Is there still water in the stepwell?', a: 'The water level depends on the season and rainfall and can vary a lot through the year, so check on the day rather than expecting a fixed level.' },
    ],
    related: [
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Dada Harir vs Adalaj', href: '/en/dada-harir-vs-adalaj/' },
      { label: 'Stepwell culture route', href: '/en/stepwell-culture-route/' },
    ],
    sources: [baseSources.tourism, baseSources.dadaHarir, baseSources.adalaj],
  },
  'dada-harir-vs-adalaj': {
    slug: 'dada-harir-vs-adalaj',
    title: 'Dada Harir Stepwell vs Adalaj Stepwell: which to visit',
    description: 'Compare Adalaj Stepwell and Dada Harir Stepwell by route, setting and convenience, and decide which one fits your trip.',
    eyebrow: 'Architecture',
    intro: 'This page compares Adalaj and Dada Harir on the things that actually affect a visit — where they are, how they feel and which one suits your route — so you can choose with confidence rather than guess.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Adalaj suits', value: 'The Ahmedabad–Gandhinagar route' },
      { label: 'Dada Harir suits', value: 'A day based in Ahmedabad' },
      { label: 'Shared trait', value: 'Both are five-storey stepwells' },
    ],
    sections: [
      {
        title: 'The short answer',
        paragraphs: [
          'If you are travelling the Ahmedabad–Gandhinagar corridor and want a stepwell that sits naturally between the two cities, Adalaj is usually the easier fit. If your day is based inside Ahmedabad and you want to stay close to the city, Dada Harir in Asarwa is the more convenient choice.',
          'Both are five-storey stepwells of the same broad tradition, so neither is a lesser version of the other — they simply belong to different routes.',
        ],
      },
      {
        title: 'Where each one is',
        paragraphs: [
          'Adalaj stands in Adalaj village on the Ahmedabad–Gandhinagar road, which makes it a natural stop when you are heading to Gandhinagar or pairing it with Trimandir or Akshardham nearby. Dada Harir sits inside Ahmedabad at Asarwa, so it folds into a city day rather than a highway stop.',
          'That single difference in location explains most of the practical choice. Where you are staying and where you are heading next usually decides it.',
        ],
      },
      {
        title: 'Atmosphere and setting',
        paragraphs: [
          'Adalaj is often described as the more open and monumental of the two, with its large central shaft and a setting that feels like a dedicated heritage stop. Dada Harir has its own character and a denser urban setting, which some visitors find makes it feel more woven into everyday Ahmedabad.',
          'Both mix Hindu and Islamic decorative traditions, so if you are going for the carving, either will reward you. The mood, the surroundings and the ease of getting there are the real differences.',
        ],
      },
      {
        title: 'Which suits which visitor',
        bullets: [
          'Choose Adalaj if you are on the Ahmedabad–Gandhinagar route, or combining the stepwell with Trimandir or Akshardham.',
          'Choose Dada Harir if you are spending the day in Ahmedabad and want a heritage stop close to the city.',
          'See both if you are genuinely interested in how the stepwell tradition varies; the shared features make the differences clearer.',
          'Give whichever you pick real time — one stepwell seen slowly usually beats two seen in a hurry.',
        ],
        paragraphs: [
          'There is no wrong answer here. The better visit is the one that fits your route and leaves you enough time to actually go down to the water and look up through the shaft.',
        ],
      },
    ],
    faq: [
      { q: 'Which is better, Adalaj or Dada Harir?', a: 'Neither is better overall. Adalaj fits the Ahmedabad–Gandhinagar route more easily, while Dada Harir is more convenient if your day is centred on Ahmedabad.' },
      { q: 'Are they the same kind of stepwell?', a: 'Broadly, yes. Both are five-storey stepwells of the same regional tradition and both mix Hindu and Islamic decoration, so the differences are mostly about setting, route and atmosphere rather than type.' },
      { q: 'Should I visit both on one trip?', a: 'Only if you have the time and a real interest in stepwell architecture. If your schedule is tight, pick the one that matches your route and give it proper time.' },
      { q: 'Which is easier to reach from Ahmedabad city?', a: 'Dada Harir, since it sits inside Ahmedabad at Asarwa. Adalaj is a short drive out along the Gandhinagar road, which suits people already heading that way.' },
    ],
    related: [
      { label: 'Stepwell culture route', href: '/en/stepwell-culture-route/' },
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Water engineering and cooling', href: '/en/water-engineering-cooling/' },
    ],
    sources: [baseSources.tourism, baseSources.dadaHarir],
  },
  'parking-drop-off': {
    slug: 'parking-drop-off',
    title: 'Adalaj Stepwell parking and drop-off guide',
    description: 'Where to park or be dropped off at Adalaj Stepwell, how the last stretch to the entrance works, and how to arrange a smooth return pickup.',
    eyebrow: 'Visit logistics',
    intro: 'A cab or family drop-off is usually the simplest way to reach Adalaj Stepwell, and it helps to agree on a pickup point before you walk in. Parking on site is basic and can get busy at weekends, so keep your plans a little flexible.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Easiest arrival', value: 'Cab or family drop-off' },
      { label: 'Busiest', value: 'Weekend afternoons' },
      { label: 'Helpful to arrange', value: 'An agreed pickup point and your driver’s number' },
    ],
    sections: [
      {
        title: 'Where cars and cabs actually stop',
        paragraphs: [
          'The stepwell sits just off the Ahmedabad–Gandhinagar road in Adalaj village, roughly 18 to 20 km north of Ahmedabad city centre. There is a small area by the entrance where cars and cabs can pull in and let people out. This is a modest monument stop rather than a large visitor complex, so do not expect a big, clearly signed car park with numbered bays.',
        ],
      },
      {
        title: 'Parking or drop-off: which is easier?',
        paragraphs: [
          'If Adalaj is one stop in a longer day, a drop-off is usually easier than finding a space and then tracking your driver down again. If you are driving yourself and plan to stay a while, you can normally park close to the entrance, but space is limited and can fill up on weekends and public holidays.',
        ],
        bullets: [
          'For a short visit of about 45 to 60 minutes, drop-off and pickup keeps things simple.',
          'With children or older travellers, prefer a closer drop-off to cut down on walking.',
          'If you are self-driving, arrive earlier in the day to improve your chances of a spot.',
          'If your driver waits nearby, agree a return time so you are not left hunting for them.',
        ],
      },
      {
        title: 'Setting up the return pickup',
        paragraphs: [
          'Mobile signal at the site is usually fine, but crowds and passing traffic can make it hard to spot your car. Agree on a clear landmark before you go in — the main entrance gate is the easiest reference point — and share a live location with your driver if you can. If you are using a ride-hailing app, the pickup pin sometimes lands on the main road rather than the gate, so confirm the exact spot with your driver.',
        ],
      },
      {
        title: 'If you are combining Adalaj with another stop',
        paragraphs: [
          'Adalaj sits on the road between Ahmedabad and Gandhinagar, so it fits naturally with northbound stops. The Trimandir Adalaj complex is a short drive away and makes a convenient landmark to regroup or continue your journey from.',
        ],
      },
    ],
    faq: [
      { q: 'Can I park right at Adalaj Stepwell?', a: 'Usually yes — cars can pull in near the entrance — but the area is small and can fill up at weekends, so treat parking as limited rather than guaranteed.' },
      { q: 'Is it better to be dropped off?', a: 'For a short visit, yes. A drop-off saves time and avoids the search for a space, especially when Adalaj is only one stop in your day.' },
      { q: 'How long does a visit take?', a: 'Most people spend roughly 45 to 60 minutes here, which makes drop-off and pickup a practical choice.' },
      { q: 'What if I cannot find my driver afterwards?', a: 'Agree on the main entrance gate as your meeting point and share a live location. In ride-hailing apps, check whether the pickup pin has dropped you on the main road instead.' },
    ],
    related: [
      { label: 'Stairs and accessibility', href: '/en/stairs-accessibility/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Transport from Ahmedabad', href: '/en/from-ahmedabad-city/' },
    ],
    sources: [baseSources.maps, baseSources.tourism],
  },
  'stairs-accessibility': {
    slug: 'stairs-accessibility',
    title: 'Adalaj Stepwell stairs and accessibility',
    description: 'How the stairs at Adalaj Stepwell really work, where the slippery and unrailed stretches are, and how to plan a lower-strain visit.',
    eyebrow: 'Visit logistics',
    intro: 'Adalaj Stepwell is built around stairs, so plan for a real descent and climb — there is no step-free route down to the water level. If stairs, wheels or low-strain movement are a concern, confirm the current access on the day.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Getting in and out', value: 'Stairs across several levels' },
      { label: 'Step-free access', value: 'Limited or none to the well' },
      { label: 'Best time', value: 'Cooler morning or late afternoon' },
    ],
    sections: [
      {
        title: 'What the stairs are actually like',
        paragraphs: [
          'The stepwell is five storeys deep, and you reach the lower levels by walking down stone stairs and along landings, then climbing back up. The steps are stone, uneven in places and often worn smooth, so the going is slower than a modern staircase. There are landings where you can pause, but the descent and climb are the heart of the visit rather than an optional extra.',
        ],
      },
      {
        title: 'Where to be careful',
        paragraphs: [
          'Some stretches — especially around the well opening and along the upper edges — do not have a continuous modern railing. Treat these edges with care, keep to the middle lines of the steps, and do not lean over the shaft to take a photo.',
        ],
        bullets: [
          'Take the descent one step at a time; surfaces are not always level.',
          'Keep clear of the well edge where there is no continuous barrier.',
          'Wear shoes with grip rather than smooth soles.',
          'Pause on the landings if the heat or the climb is catching up with you.',
        ],
      },
      {
        title: 'Accessibility, strollers and wheelchairs',
        paragraphs: [
          'If you need confirmed step-free access, Adalaj should not be a safe assumption. The historic layout is stair-based, and there is no guaranteed lift or ramp to the lower levels. You can usually still see a good deal from the upper levels and the entrance area without going all the way down, which is a workable option for visitors who want to limit the climbing.',
        ],
        bullets: [
          'Strollers and wheelchairs become difficult once the stairs begin.',
          'Visitors with limited mobility can often enjoy the upper-level views instead.',
          'A close drop-off cuts down on the walking before you reach the stairs.',
        ],
      },
      {
        title: 'Planning an easier visit',
        paragraphs: [
          'If stairs are a concern, go earlier or later in the day to avoid the worst heat, keep the visit short, and avoid stacking another stair-heavy monument straight afterwards. A flatter indoor stop later — Dandi Kutir or a museum — is usually a kinder second half of the day.',
        ],
      },
    ],
    faq: [
      { q: 'Is Adalaj Stepwell accessible for wheelchairs or strollers?', a: 'Not to the lower levels. The monument is stair-based, with no confirmed step-free route down to the water, so plan on viewing from the upper levels if that is a concern.' },
      { q: 'How many stairs are there?', a: 'The exact number varies by route, but expect several flights down and back up across the five levels, on stone steps that are not perfectly even.' },
      { q: 'Can older visitors still enjoy the site?', a: 'Often yes. Many people view from the upper levels and entrance, take the descent slowly, and keep the visit short during the cooler hours.' },
      { q: 'Are there railings?', a: 'Some areas have railings or low walls, but there is no continuous modern barrier around the well opening, so watch the edges and keep children close.' },
    ],
    related: [
      { label: 'Parking and drop-off', href: '/en/parking-drop-off/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
    ],
    sources: [baseSources.maps, baseSources.adalaj],
  },
  'with-kids': {
    slug: 'with-kids',
    title: 'Visiting Adalaj Stepwell with kids',
    description: 'A practical family guide to Adalaj Stepwell: how long to stay, where children need watching, and which nearby stops suit kids better.',
    eyebrow: 'Visit logistics',
    intro: 'Adalaj can be a great short stop for children — it is cool, dramatic and quick to explore — as long as you watch the stair edges and keep the visit brief. Aim for about 30 to 60 minutes with active supervision rather than a long, free-roaming wander.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Ideal visit length', value: 'About 30 to 60 minutes' },
      { label: 'Main thing to watch', value: 'Stair edges and the well opening' },
      { label: 'Best time', value: 'Morning or late afternoon' },
    ],
    sections: [
      {
        title: 'What kids usually enjoy here',
        paragraphs: [
          'The stepwell is five storeys deep and stays cool even in the heat, and children tend to be drawn to the depth, the echoes and the carved walls more than to the history. A short visit works well: descend a couple of levels, look up at the structure, and let them enjoy the geometry rather than marching them through every detail.',
        ],
      },
      {
        title: 'Keeping young children safe',
        paragraphs: [
          'The main risks are the stair edges and the open well shaft. There is no continuous modern railing around the opening, so hold hands on the stairs, keep children back from the edge, and stay between them and the drop.',
        ],
        bullets: [
          'Hold hands on the steps, especially on the way down.',
          'Keep children back from the well opening and any unrailed edge.',
          'Do not let them lean over the shaft or climb on low walls.',
          'Carry water and watch for the heat, even though it is cooler at the bottom.',
        ],
      },
      {
        title: 'Heat, shade and small children',
        paragraphs: [
          'The open ground around the entrance can be hot at midday, and shade is patchy. Go in the morning or late afternoon if you can, bring water and hats, and be ready to shorten the visit if a child is tired or the sun is strong.',
        ],
      },
      {
        title: 'Making it part of a family day',
        paragraphs: [
          'Adalaj is compact, so it pairs well with a child-focused second stop. Indroda Nature Park and Gujarat Science City are usually better continuations than another monument, because they let children move and explore at their own pace.',
        ],
      },
    ],
    faq: [
      { q: 'Is Adalaj Stepwell good for kids?', a: 'Yes, as a short supervised stop. It is dramatic and quick to see, but the stairs and the open well mean young children need close attention throughout.' },
      { q: 'How long should we stay?', a: 'About 30 to 60 minutes is usually enough. After that, children tend to lose interest, so plan a second stop for the rest of the day.' },
      { q: 'Can I bring a stroller?', a: 'It is not practical once the stairs begin. Bring a carrier instead if you have a baby, and keep to the upper levels.' },
      { q: 'What is a good family stop after Adalaj?', a: 'Indroda Nature Park or Gujarat Science City usually works well — both are more hands-on and child-oriented than another stepwell or monument.' },
    ],
    related: [
      { label: 'Indroda family day trip', href: '/en/indroda-family-day-trip/' },
      { label: 'Science City half-day trip', href: '/en/science-city-half-day-trip/' },
      { label: 'Stairs and accessibility', href: '/en/stairs-accessibility/' },
    ],
    sources: [baseSources.indroda, baseSources.scienceCity, baseSources.maps],
  },
  'monsoon-visit': {
    slug: 'monsoon-visit',
    title: 'Visiting Adalaj Stepwell in monsoon',
    description: 'What a monsoon visit to Adalaj Stepwell is really like: slippery stone steps, timing, footwear and indoor backups for wet days.',
    eyebrow: 'Visit logistics',
    intro: 'Monsoon (roughly June to September) can make Adalaj atmospheric and far less punishing than the dry heat, but the stone steps turn slippery and plans can wash out. Pack grip footwear, keep the visit flexible, and have an indoor backup ready.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Season', value: 'Roughly June to September' },
      { label: 'Main risk', value: 'Wet, slippery stone steps' },
      { label: 'Bring', value: 'Grip footwear and a light rain cover' },
    ],
    sections: [
      {
        title: 'What the rains change here',
        paragraphs: [
          'The stepwell sits partly below ground, and its steps, landings and edges are all stone. When it rains, these surfaces get slick, and the stretches without a continuous railing feel less forgiving. Light and visibility can drop too, which makes the descent less comfortable even for people who are confident on stairs.',
        ],
      },
      {
        title: 'Walking safely on wet stone',
        paragraphs: [
          'Take the descent very slowly in the rain, keep to the inner side of the stairs, and use the walls or railings where they exist. Do not hurry on the way back up, and be extra careful on the smooth, polished patches that get slippery when wet.',
        ],
        bullets: [
          'Wear shoes with real grip, not smooth soles or flip-flops.',
          'Use railings and walls where available, and stay away from unrailed edges.',
          'Shorten the visit if the steps feel slick or you cannot see well.',
          'Carry a light rain cover, as an umbrella is awkward on narrow stairs.',
        ],
      },
      {
        title: 'Timing and comfort',
        paragraphs: [
          'Rain in Gujarat is often intense but not constant, so a dry window can open up within the same day. Check the forecast on the morning of your visit, and if the showers are heavy, plan to return later rather than pushing through slippery conditions.',
        ],
      },
      {
        title: 'Indoor backups for a wet day',
        paragraphs: [
          'If the weather turns, it is smarter to move indoors than to force another outdoor stop. Dandi Kutir and Gujarat Science City are both largely indoor and make better rainy-day plans than adding a second monument.',
        ],
      },
    ],
    faq: [
      { q: 'Is monsoon a good time to visit Adalaj Stepwell?', a: 'It can be, if you accept the trade-off: softer heat and dramatic atmosphere in exchange for slippery stone and less predictable weather.' },
      { q: 'Are the steps dangerous when wet?', a: 'They can be slippery, especially the smooth, worn patches, and some edges have no continuous railing. Slow down, wear grip footwear, and keep away from the edges.' },
      { q: 'What should I bring?', a: 'Shoes with grip, a light rain cover or poncho, and drinking water. An umbrella is awkward once you are on the narrow stairs.' },
      { q: 'What if it rains heavily on the day?', a: 'Have an indoor backup ready. Dandi Kutir or Gujarat Science City are usually better wet-day choices than another outdoor monument.' },
    ],
    related: [
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
      { label: 'Photography rules', href: '/en/photography-rules/' },
    ],
    sources: [baseSources.maps, baseSources.adalaj, baseSources.dandiKutir, baseSources.scienceCity],
  },
  'toilets-drinking-water': {
    slug: 'toilets-drinking-water',
    title: 'Adalaj Stepwell toilets and drinking water',
    description: 'What to expect for toilets and drinking water at Adalaj Stepwell, why you should carry your own water, and where to plan a better-serviced stop.',
    eyebrow: 'Visit logistics',
    intro: 'Do not count on Adalaj Stepwell for full visitor facilities — it is a heritage stop rather than a service complex, and what is available on the day can change. Carry your own drinking water and treat the monument as a short visit, not the place to solve every comfort need.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Drinking water', value: 'Bring your own' },
      { label: 'Toilets', value: 'Basic at best; confirm on the day' },
      { label: 'Best approach', value: 'Use facilities before or after' },
    ],
    sections: [
      {
        title: 'What to expect on site',
        paragraphs: [
          'Adalaj is an ASI-protected monument, and facilities at ASI sites can vary. Some basic toilets may be available near the entrance, but treat them as simple and confirm on the day rather than assuming they are open and well maintained. Drinking water is not something to rely on here.',
        ],
      },
      {
        title: 'Carrying your own water',
        paragraphs: [
          'Gujarat is hot, and walking down and back up the stepwell adds to the effort. Bring more water than you think you need, especially if you are visiting with children or older travellers, and do not expect to buy or refill it at the monument.',
        ],
      },
      {
        title: 'Planning comfort into your day',
        paragraphs: [
          'If toilets and water matter to your group, build them into the day around the monument rather than relying on the stepwell itself. A better-serviced stop before or after Adalaj — in Ahmedabad or Gandhinagar, or at a nearby complex — is usually the safer plan.',
        ],
        bullets: [
          'Use facilities at your hotel, a restaurant or another stop before you arrive.',
          'Carry water, plus a small supply of tissues or hand sanitiser.',
          'For young children or older travellers, do not make Adalaj your only facility stop.',
          'Confirm current facilities on the day; they can be limited or closed.',
        ],
      },
      {
        title: 'Nearby options',
        paragraphs: [
          'The Trimandir Adalaj complex is close by and is a much larger site, so it can be a convenient place to plan facilities before or after the stepwell. Availability there can also vary, so confirm on the day if this matters to your trip.',
        ],
      },
    ],
    faq: [
      { q: 'Are there toilets at Adalaj Stepwell?', a: 'There may be basic toilets near the entrance, but facilities at ASI monuments can vary, so it is best to confirm on the day and not rely on them being open or well maintained.' },
      { q: 'Is there drinking water at the site?', a: 'Do not count on it. Bring your own water, especially in the hot months, and plan to refill elsewhere.' },
      { q: 'What should families with children do?', a: 'Use facilities before you arrive, carry water and tissues, and avoid making Adalaj the only comfort stop in your day.' },
      { q: 'Where is the nearest better-serviced stop?', a: 'Larger stops in Ahmedabad or Gandhinagar, or a nearby complex such as the Trimandir Adalaj area, are usually a safer bet — but confirm their hours and facilities on the day.' },
    ],
    related: [
      { label: 'Parking and drop-off', href: '/en/parking-drop-off/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
    ],
    sources: [baseSources.maps, baseSources.trimandirFacilities],
  },
  'from-ahmedabad-airport': {
    slug: 'from-ahmedabad-airport',
    title: 'How to reach Adalaj Stepwell from Ahmedabad Airport',
    description: 'Plan the ride from SVPI Ahmedabad Airport to Adalaj Stepwell, with practical tips on timing, luggage and whether to visit on arrival day.',
    eyebrow: 'Transport',
    intro: 'Taking a taxi or app-based cab straight from the airport is the easiest way to reach Adalaj, which is roughly 20 to 30 km away toward the city and Gandhinagar. It works best as a first stop when you are already heading north, and least well if you land tired with hotel check-in still to handle.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Distance', value: 'Roughly 20 to 30 km from the airport' },
      { label: 'Easiest option', value: 'Prepaid taxi or app-based cab' },
      { label: 'Good for', value: 'Arrival day if you are heading north' },
    ],
    sections: [
      {
        title: 'Getting there from the terminal',
        paragraphs: [
          'Sardar Vallabhbhai Patel International Airport sits in the north-east of Ahmedabad, and Adalaj is out toward Gandhinagar, so the two are on the same half of the city. A prepaid taxi from the terminal or an app-based cab is the simplest choice, and both drop you at the stepwell entrance rather than on a main road.',
          'Allow roughly 45 minutes to an hour and a half depending on traffic. The Ahmedabad to Gandhinagar corridor slows down sharply around commuter hours, so avoid a late-morning or early-evening arrival if you can.',
        ],
        bullets: [
          'Prepaid airport taxi: fixed by zone and easy to find at the exit.',
          'App-based cab: often cheaper, but the pick-up point can be a short walk from arrivals.',
          'Public transport: possible but awkward with luggage, and you will still need a final ride.',
        ],
      },
      {
        title: 'Should you go on arrival day?',
        paragraphs: [
          'It makes sense when your flight lands in the morning and you are already moving toward Gandhinagar. In that case, treat the stepwell as a relaxed first stop of about an hour rather than a full outing.',
          'It makes less sense after a long or late flight. If you still have to check in, rest and eat, going straight to a monument usually leaves you rushing and tired. Sort out the hotel first and visit Adalaj the next morning instead.',
        ],
      },
      {
        title: 'Luggage, timing and what to expect',
        paragraphs: [
          'Luggage is the thing most people overlook, and it is what spoils arrival-day visits. Most cabs are happy to wait with your bags, but the stepwell means stairs and uneven stone, so you will not want to carry much down with you.',
          'If you have heavy bags, ask your driver to wait, keep valuables on you and keep the stop short. Confirm the current opening hours before you travel, since heritage sites sometimes adjust them seasonally.',
        ],
      },
    ],
    faq: [
      { q: 'Can I visit Adalaj Stepwell straight from Ahmedabad Airport?', a: 'Yes. A taxi or app-based cab will take you there directly, and it is a good first stop if you are already heading toward Gandhinagar.' },
      { q: 'How long does the drive take?', a: 'Usually about 45 minutes to an hour and a half, depending on traffic. The corridor toward Gandhinagar is busiest around commuter hours.' },
      { q: 'Is there public transport from the airport?', a: 'There are buses and other options, but with luggage they are more hassle than they are worth. A direct cab is the reliable choice.' },
      { q: 'Should I combine the airport, Adalaj and Akshardham in one day?', a: 'Only if you land early and still have energy. Both places take time, and Akshardham has a security check and is usually closed on Mondays.' },
    ],
    related: [
      { label: 'From Ahmedabad city', href: '/en/from-ahmedabad-city/' },
      { label: 'Adalaj day trip', href: '/en/adalaj-akshardham-day-trip/' },
      { label: 'Stay in Ahmedabad or Gandhinagar', href: '/en/stay-ahmedabad-or-gandhinagar/' },
    ],
    sources: [baseSources.ahmedabadAirport, baseSources.maps, baseSources.tourism],
  },
  'from-ahmedabad-junction': {
    slug: 'from-ahmedabad-junction',
    title: 'How to reach Adalaj Stepwell from Ahmedabad Junction',
    description: 'Plan the trip from Ahmedabad Junction (Kalupur) to Adalaj Stepwell, including transport choices, luggage tips and timing after your train.',
    eyebrow: 'Transport',
    intro: 'A direct cab or app-based cab from Ahmedabad Junction is the simplest way to reach Adalaj, which sits roughly 20 km north toward Gandhinagar. It is an easy half-day outing, but decide first whether to go straight after arriving or settle into the city and visit later.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Distance', value: 'About 20 km north of the station' },
      { label: 'Easiest option', value: 'Cab or app-based cab from the station' },
      { label: 'Good for', value: 'A half-day outing' },
    ],
    sections: [
      {
        title: 'Getting out of the station area',
        paragraphs: [
          'Ahmedabad Junction (Kalupur) sits on the eastern side of the old city, and the roads immediately around it are busy and congested. Rather than trying to walk far with bags, book an app-based cab or take a prepaid auto-rickshaw from the authorised stand.',
          'Once you are clear of the old city, the drive north toward Gandhinagar moves quickly. Allow roughly 45 minutes to an hour and a half, and more during rush hour.',
        ],
        bullets: [
          'App-based cab: easiest if you can wait a few minutes for pick-up.',
          'Prepaid auto-rickshaw: fine for the hop out of the station area, but less comfortable for the full distance.',
          'Public bus toward Gandhinagar: cheaper, but you will still need a final ride or walk to the stepwell.',
        ],
      },
      {
        title: 'Straight to Adalaj or into the city first?',
        paragraphs: [
          'Going straight works well if your train arrives in the morning, you are travelling light and the stepwell is part of a day heading north. You can see Adalaj and still continue to Gandhinagar or Akshardham.',
          'It works less well if you arrive tired, have heavy bags or need to sort out a hotel first. In that case, drop your luggage, rest, and treat Adalaj as a separate half-day trip.',
        ],
      },
      {
        title: 'Practical tips for a train-day visit',
        paragraphs: [
          'The stepwell involves stairs and uneven stone, so avoid hauling luggage around with you. If you go straight from the station, ask your driver to wait with your bags while you visit.',
          'Built in the late 15th century and protected by the Archaeological Survey of India, Adalaj is a five-storey stepwell, and an hour is usually enough to see it comfortably. Confirm the current opening hours before you travel.',
        ],
      },
    ],
    faq: [
      { q: 'Can I visit Adalaj Stepwell the same day I arrive at Ahmedabad Junction?', a: 'Yes, especially as a half-day outing. A direct cab makes it straightforward, and you can also go later after checking into your hotel.' },
      { q: 'How far is Adalaj from Ahmedabad Junction?', a: 'Roughly 20 km to the north, on the way toward Gandhinagar. Expect about 45 minutes to an hour and a half by road.' },
      { q: 'Should I go straight from the station with my luggage?', a: 'Only if your bags are manageable and your arrival is early. Otherwise it is easier to leave your luggage at the hotel and go later.' },
      { q: 'Can I use the metro from the station?', a: 'The metro is useful as part of a longer trip toward Gandhinagar, but there is no station at the stepwell, so you will still need a short cab or auto-rickshaw for the last stretch.' },
    ],
    related: [
      { label: 'From Ahmedabad city', href: '/en/from-ahmedabad-city/' },
      { label: 'Nearest metro and last mile', href: '/en/nearest-metro-last-mile/' },
      { label: 'Ahmedabad-Gandhinagar day trip', href: '/en/ahmedabad-gandhinagar-day-trip/' },
    ],
    sources: [baseSources.maps, baseSources.tourism],
  },
  'indroda-nature-park-guide': {
    slug: 'indroda-nature-park-guide',
    title: 'Indroda Nature Park after Adalaj Stepwell',
    description: 'Plan a family-friendly visit to Indroda Nature Park in Gandhinagar after Adalaj Stepwell, with tips on timing, outdoor comfort and what to expect.',
    eyebrow: 'Nearby attraction',
    intro: 'Indroda Nature Park is a good second stop after Adalaj if your group wants open space and a change of pace. Set on the banks of the Sabarmati in Gandhinagar and run by the GEER Foundation, it is an outdoor park best known for its dinosaur displays and natural-history exhibits.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Distance from Adalaj', value: 'Short drive into Gandhinagar' },
      { label: 'Good for', value: 'Families and nature lovers' },
      { label: 'Suggested time', value: 'Two to three hours' },
    ],
    sections: [
      {
        title: 'What you can see there',
        paragraphs: [
          'Indroda is best known for its open-air dinosaur park, where life-size models and fossil displays introduce palaeontology in a way that appeals to children. Beyond that there are nature trails, a small zoo area, and botanical and geological exhibits spread across the grounds.',
          'Because it is spread out and largely outdoors, it feels very different from the enclosed stone space of the stepwell. That contrast is exactly what makes the pairing work.',
        ],
      },
      {
        title: 'Getting there and pairing it with Adalaj',
        paragraphs: [
          'The park is on the Sabarmati riverfront in Gandhinagar, a short drive from Adalaj. A car or app-based cab is the easiest way to connect the two, and you can fit both into a relaxed half day.',
        ],
        bullets: [
          'Do the stepwell first, while it is cooler and you still have energy for the stairs.',
          'Visit the park when the sun is lower, since much of it is unshaded.',
          'Aim for two to three hours at the park if you want to walk the trails rather than just see the dinosaur section.',
        ],
      },
      {
        title: 'Outdoor comfort and timing',
        paragraphs: [
          'This is an outdoor destination, so heat, sun and rain all affect the visit. Carry water, wear a hat and comfortable shoes, and try to avoid the middle of a hot day. If the weather turns wet, the park is not the best backup, and an indoor stop such as Dandi Kutir is a safer choice.',
          'The park suits families with children and anyone who wants a break from monuments. Confirm the current opening days and hours before you go, as they can change.',
        ],
      },
    ],
    faq: [
      { q: 'Is Indroda Nature Park worth visiting after Adalaj Stepwell?', a: 'Yes, especially for families and anyone who wants open space and a change of pace after a stone monument.' },
      { q: 'What is Indroda Nature Park known for?', a: 'Mainly its dinosaur displays and natural-history exhibits, along with nature trails and a small zoo area.' },
      { q: 'How long should I spend at Indroda?', a: 'About two to three hours is comfortable if you want to walk around rather than just see the dinosaur section.' },
      { q: 'Is Indroda a good rainy-day option?', a: 'Not really. Most of the appeal is outdoors, so on a wet day an indoor stop like Dandi Kutir works better.' },
    ],
    related: [
      { label: 'Indroda family day trip', href: '/en/indroda-family-day-trip/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
      { label: 'With kids', href: '/en/with-kids/' },
    ],
    sources: [baseSources.indroda, baseSources.tourism],
  },
  'dandi-kutir-guide': {
    slug: 'dandi-kutir-guide',
    title: 'Dandi Kutir Museum after Adalaj Stepwell',
    description: 'Plan a visit to Dandi Kutir in Gandhinagar after Adalaj Stepwell, with tips on what it covers, indoor comfort and checking opening hours.',
    eyebrow: 'Nearby attraction',
    intro: 'Dandi Kutir is a Gandhi-themed museum in Gandhinagar, set inside the Mahatma Mandir complex, and it makes a strong indoor second stop after Adalaj. Because it is mostly indoors with set visiting hours, it is one of the most reliable options when the weather is uncertain.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Location', value: 'Inside the Mahatma Mandir complex, Gandhinagar' },
      { label: 'Good for', value: 'Indoor history and rainy days' },
      { label: 'Suggested time', value: 'About one to two hours' },
    ],
    sections: [
      {
        title: 'What Dandi Kutir is',
        paragraphs: [
          'Dandi Kutir is built around the story of Mahatma Gandhi, using exhibits and displays to walk visitors through his life and the ideas behind the Salt March. It is an indoor, air-conditioned museum rather than a monument, which is what sets it apart from the stepwell.',
          'Together with the surrounding Mahatma Mandir complex, it gives a Gandhinagar visit a civic and historical angle that pairs neatly with the craftsmanship and architecture of Adalaj.',
        ],
      },
      {
        title: 'Why it works after Adalaj',
        paragraphs: [
          'Adalaj is a deep stone structure that you mostly experience on foot and outdoors. Dandi Kutir moves the day indoors into a cool, seated setting, so it is a comfortable follow-up if the day is hot, humid or rainy.',
        ],
        bullets: [
          'Good rainy-day or hot-afternoon backup.',
          'Suits anyone who prefers exhibits and interpretation to outdoor walking.',
          'An easy pairing with the Mahatma Mandir area around it.',
        ],
      },
      {
        title: 'Planning the visit',
        paragraphs: [
          'Because it is a managed museum, Dandi Kutir usually keeps fixed opening hours and may close on certain days, often a Monday, so check the current schedule before you set out. Photography, entry and timing rules are set by the museum, so follow the notices on site.',
          'Allow about one to two hours inside, plus time to look around the wider complex. A car or app-based cab is the simplest way to connect it with Adalaj.',
        ],
      },
    ],
    faq: [
      { q: 'Is Dandi Kutir a good rainy-day option after Adalaj?', a: 'Yes. It is an indoor museum, so it is one of the most dependable options when the weather is unstable.' },
      { q: 'What is Dandi Kutir about?', a: 'It is a Gandhi-themed museum, focused on his life and the ideas behind the Salt March, set within the Mahatma Mandir complex.' },
      { q: 'When is Dandi Kutir open?', a: 'It usually keeps fixed hours and may close on certain days, often a Monday. Check the current schedule before you travel.' },
      { q: 'How long does a visit take?', a: 'About one to two hours inside is usually enough, plus time for the surrounding complex.' },
    ],
    related: [
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
      { label: 'Ahmedabad-Gandhinagar day trip', href: '/en/ahmedabad-gandhinagar-day-trip/' },
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
    ],
    sources: [baseSources.dandiKutir, baseSources.maps],
  },
  'gujarat-science-city-guide': {
    slug: 'gujarat-science-city-guide',
    title: 'Gujarat Science City after Adalaj Stepwell',
    description: 'Plan a family visit to Gujarat Science City after Adalaj Stepwell, with tips on what to see, timing and how to combine the two.',
    eyebrow: 'Nearby attraction',
    intro: 'Gujarat Science City is a hands-on science and entertainment complex on the Ahmedabad side of the city, and it makes an easy, child-friendly second stop after Adalaj. It suits families and mixed groups who want the day to stay active and interactive rather than monument-focused.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Location', value: 'On the Ahmedabad side of the corridor' },
      { label: 'Good for', value: 'Families and curious kids' },
      { label: 'Suggested time', value: 'Half a day or more' },
    ],
    sections: [
      {
        title: 'What you can do there',
        paragraphs: [
          'Science City is a large complex with several attractions, including a science centre, an aquarium and large-format film or dome shows. Many of the main exhibits are indoors, while there is also open outdoor space to walk between them.',
          'It is designed to be active and hands-on, so it suits children and anyone who enjoys interactive exhibits more than quiet historic sites.',
        ],
      },
      {
        title: 'Pairing it with Adalaj',
        paragraphs: [
          'Science City sits out toward the Ahmedabad side, so it works best when your day is heading back toward the city after the stepwell rather than deeper into Gandhinagar.',
        ],
        bullets: [
          'Do Adalaj first, then drive back toward Ahmedabad for Science City.',
          'Plan at least half a day there if you want to see more than one attraction.',
          'Buy or check tickets and show timings in advance, as queues build up at weekends.',
        ],
      },
      {
        title: 'Timing and practical tips',
        paragraphs: [
          'It is a popular family destination, so weekends, school holidays and public holidays get busy. Go early if you want to cover the main attractions without rushing, and build in time for walking between buildings.',
          'Some attractions have separate or timed shows, and schedules can change, so confirm the current timings and ticket details before you travel. A car or app-based cab is the easiest way to connect it with Adalaj.',
        ],
      },
    ],
    faq: [
      { q: 'Is Gujarat Science City good for families after Adalaj Stepwell?', a: 'Yes. It is interactive and child-friendly, so it works well as a second stop for families or mixed-interest groups.' },
      { q: 'How much time do I need at Science City?', a: 'At least half a day if you want to see more than one attraction. It is a large complex with several separate areas.' },
      { q: 'Is Science City indoors or outdoors?', a: 'It is a mix. Many main exhibits are indoors, but there is also outdoor space between the attractions, so plan for both.' },
      { q: 'When is the best time to go?', a: 'Early on a weekday is calmest. Weekends and school holidays are busy, so allow extra time for queues and shows.' },
    ],
    related: [
      { label: 'Science City half-day trip', href: '/en/science-city-half-day-trip/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
    ],
    sources: [baseSources.scienceCity, baseSources.maps],
  },
  'vegetarian-jain-food': {
    slug: 'vegetarian-jain-food',
    title: 'Vegetarian and Jain-friendly food near Adalaj',
    description: 'How to eat vegetarian or Jain-friendly around Adalaj Stepwell: what Gujarati food is like, how to ask for no onion, garlic or root vegetables, and when to fit meals into your day.',
    eyebrow: 'Food',
    intro: 'Around Adalaj and across most of Gujarat, vegetarian food is the default, so finding a meat-free meal is easy. If you need Jain food — no onion, garlic or root vegetables — say so clearly when you order, because “vegetarian” on its own does not cover it.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Dietary default', value: 'Most restaurants here are pure vegetarian' },
      { label: 'Jain food', value: 'No onion, garlic or root vegetables — ask first' },
      { label: 'Best meal timing', value: 'Before or after the stepwell, not during' },
    ],
    sections: [
      {
        title: 'What Gujarati vegetarian food actually means',
        paragraphs: [
          'Gujarati cooking is built on vegetables, grains, lentils and dairy, and a standard meal may include rotli or roti, several shaak (cooked vegetables), dal, kadhi, rice, chaas (buttermilk) and a sweet. Many places are pure vegetarian, meaning no meat, fish or egg at all.',
          'Vegetarian does not automatically mean Jain, so keep the two separate when you plan. A dish can be fully vegetarian and still contain onion or garlic, which is why you need to ask rather than assume.',
        ],
      },
      {
        title: 'How to ask for Jain-friendly food in English',
        paragraphs: [
          'Jain food leaves out onion, garlic and all underground root vegetables such as potato, carrot, radish and beetroot. The simplest approach is to say plainly that you want Jain food, or to ask for no onion, garlic, potato or root vegetables.',
          'Confirm the oil and the masala base too, since onion or garlic often hide there even when the visible dish looks plain. If the staff seem unsure, ask to see a Jain menu or stick to simple dishes such as plain dal, rice, roti and steamed snacks.',
        ],
        bullets: [
          '“Is this dish Jain?” is the clearest single question to start with.',
          'Add “no onion, garlic, potato or root vegetables” for extra clarity.',
          'Ask a second time about the masala and the oil, not just the main ingredient.',
        ],
      },
      {
        title: 'Where it is easiest on your route',
        paragraphs: [
          'Adalaj itself is a small town, so the immediate area leans towards local snacks and mid-range vegetarian restaurants rather than a wide choice. The Trimandir complex nearby is a reliable vegetarian-leaning stop and usually has simple dining facilities within the wider grounds.',
          'For more variety, plan a meal in Gandhinagar or back in Ahmedabad, both of which have far more pure-vegetarian and Jain-aware restaurants than the village.',
        ],
      },
      {
        title: 'Timing your meal around the visit',
        paragraphs: [
          'The stepwell is the reason you are here, so most travellers eat either before arriving or after the visit rather than stopping mid-route. Breakfast usually works best before you leave Ahmedabad, while a fuller lunch or thali fits after the monument, especially if your day continues into Gandhinagar.',
        ],
      },
    ],
    faq: [
      { q: 'Is it easy to find vegetarian food around Adalaj?', a: 'Yes. Gujarati food is largely vegetarian and most restaurants in the area are pure vegetarian, so a meat-free meal is straightforward.' },
      { q: 'Does vegetarian mean Jain-friendly?', a: 'No. Jain food also excludes onion, garlic and root vegetables, so ask specifically rather than assuming the two are the same.' },
      { q: 'How do I confirm a dish is actually Jain?', a: 'Ask directly whether it is Jain, and check the masala and oil as well, since those can hide onion or garlic. If staff are unsure, choose plainer dishes like dal, rice and roti.' },
      { q: 'Where should I plan my main meal?', a: 'Adalaj town has limited choice, so the easiest options are the Trimandir area, Gandhinagar or Ahmedabad. Confirm opening hours before you go.' },
    ],
    related: [
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
      { label: 'Gujarati breakfast near Adalaj', href: '/en/gujarati-breakfast-near-adalaj/' },
      { label: 'Gandhinagar thali guide', href: '/en/gandhinagar-thali-guide/' },
    ],
    sources: [baseSources.trimandirFacilities, baseSources.maps],
  },
  'gujarati-breakfast-near-adalaj': {
    slug: 'gujarati-breakfast-near-adalaj',
    title: 'Gujarati breakfast near Adalaj Stepwell',
    description: 'What a Gujarat-style breakfast looks like, which dishes to try, and whether to eat it before, after or on the way to Adalaj Stepwell.',
    eyebrow: 'Food',
    intro: 'A Gujarat-style breakfast is one of the best-value food experiences on the Ahmedabad to Gandhinagar route, and it is almost always vegetarian. Eat it before you reach the stepwell, since the area right around the monument is not a breakfast district.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Typical dishes', value: 'Fafda-jalebi, khaman, dhokla, thepla, poha, upma' },
      { label: 'Where it works best', value: 'Before the stepwell, back in town' },
      { label: 'Diet', value: 'Almost always pure vegetarian' },
    ],
    sections: [
      {
        title: 'What to order for breakfast',
        paragraphs: [
          'Gujarati breakfast is savoury, snacky and usually served through the morning rather than at a fixed hour. Look for fafda with jalebi, khaman and dhokla (steamed chickpea snacks), thepla (flatbread with fenugreek), poha (flattened rice), upma and sev.',
          'Most items are light, so a small plate of two or three things gives you a better taste of the style than one large dish.',
        ],
        bullets: [
          'Fafda with jalebi — the classic sweet-and-savoury pairing.',
          'Khaman and dhokla — soft steamed snacks, good for sharing.',
          'Thepla — flatbread that also travels well as a snack later.',
          'Poha or upma — lighter options if you want something gentle.',
        ],
      },
      {
        title: 'Where breakfast fits in your day',
        paragraphs: [
          'The simplest plan is to eat before you leave Ahmedabad, then drive to Adalaj and visit the stepwell while it is still quiet. Adalaj itself is a small town with local snack and tea shops rather than a dedicated breakfast scene, so treating the monument as the food stop rarely works.',
          'If you would rather sleep in, plan a later breakfast on the way into Gandhinagar instead, where there is more choice.',
        ],
      },
      {
        title: 'How to pick a good snack shop',
        paragraphs: [
          'For items like fafda and khaman, freshness matters more than a polished setting, so a shop with steady local turnover is usually a better sign than an empty one. Confirm the place is pure vegetarian, which most are.',
          'If you need Jain food, ask about onion, garlic and potato not just in the main dish but also in the chutneys and the oil, since those are easy to overlook.',
        ],
      },
    ],
    faq: [
      { q: 'Should I eat breakfast before visiting Adalaj Stepwell?', a: 'Usually yes. Eating before you set off, or early on the route, keeps the monument visit calm and leaves the rest of the day free.' },
      { q: 'Is the area next to the stepwell good for breakfast?', a: 'Not really. Adalaj is a small town with local snack shops. A proper Gujarati breakfast is easier to find in Ahmedabad or Gandhinagar.' },
      { q: 'What should a first-timer try?', a: 'Start with fafda with jalebi, khaman and dhokla to get a feel for the style, then add thepla or poha if you want something more filling.' },
      { q: 'Is Gujarati breakfast vegetarian?', a: 'Yes, almost always pure vegetarian. If you need Jain food, ask about onion, garlic, potato and other root vegetables, including in chutneys.' },
    ],
    related: [
      { label: 'Vegetarian and Jain-friendly food', href: '/en/vegetarian-jain-food/' },
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
      { label: 'From Ahmedabad city', href: '/en/from-ahmedabad-city/' },
    ],
    sources: [baseSources.maps, baseSources.trimandirFacilities],
  },
  'cafes-near-adalaj': {
    slug: 'cafes-near-adalaj',
    title: 'Cafes near Adalaj Stepwell',
    description: 'When a cafe stop near Adalaj Stepwell actually makes sense, what you can expect locally, and when to save your coffee for Gandhinagar or Ahmedabad.',
    eyebrow: 'Food',
    intro: 'There is no cafe scene right beside Adalaj Stepwell, so treat coffee as a route decision rather than a destination. Unless you simply need a rest stop on a long drive, plan your coffee break in Gandhinagar or back in Ahmedabad.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Local reality', value: 'Few dedicated cafes beside the monument' },
      { label: 'Best for coffee', value: 'Gandhinagar or Ahmedabad' },
      { label: 'Good use', value: 'A rest break on a longer drive' },
    ],
    sections: [
      {
        title: 'What you will actually find near Adalaj',
        paragraphs: [
          'Adalaj is a town on the highway, and its food is built around snacks, tea stalls and mid-range restaurants rather than a cafe culture. A proper espresso-style cafe is much easier to find once you reach Gandhinagar or Ahmedabad.',
          'If all you want is chai and something light, a local tea stall will usually do the job. Confirm what is available on the day, since the offering is limited and can vary.',
        ],
      },
      {
        title: 'When a cafe stop is worth it',
        paragraphs: [
          'A coffee break earns its place on a longer driving day, when you are stringing together several stops or your group needs to reset after the stepwell before the next attraction.',
          'On a short Adalaj-only visit it rarely adds much, and you are usually better off saving the coffee for the city, where comfort and choice are higher.',
        ],
        bullets: [
          'Worth it when the drive is long and the day has several stops.',
          'Not worth arranging just for a road break beside the monument.',
          'Often smoother to hold the break until Gandhinagar or Ahmedabad.',
        ],
      },
      {
        title: 'How to plan the break into your route',
        paragraphs: [
          'Decide the pause by what comes next, not by wanting coffee right away. If you are heading into Gandhinagar, hold the break until you arrive. If you are returning to Ahmedabad, plan it nearer the city where choice and comfort are better.',
          'Allow extra time for traffic rather than assuming a quick stop, especially on the highway stretches between Adalaj, Gandhinagar and Ahmedabad.',
        ],
      },
    ],
    faq: [
      { q: 'Is there a good cafe right at Adalaj Stepwell?', a: 'Realistically no. The area is built around local snack and tea shops, and proper cafes are easier to find in Gandhinagar or Ahmedabad.' },
      { q: 'Where should I plan a coffee break?', a: 'On a long driving day a mid-route rest stop is fine, but otherwise hold your coffee until you reach Gandhinagar or Ahmedabad, where the choice is much better.' },
      { q: 'What can I get near the stepwell if I just need a break?', a: 'Usually tea and light snacks from a local stall. Confirm on the day, because the offering is limited and can change.' },
      { q: 'Is a cafe stop worth it on a short visit?', a: 'Not usually. On an Adalaj-only trip it rarely adds much, so save the coffee for later in the city.' },
    ],
    related: [
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
      { label: 'Gujarati breakfast near Adalaj', href: '/en/gujarati-breakfast-near-adalaj/' },
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
    ],
    sources: [baseSources.maps],
  },
  'gandhinagar-thali-guide': {
    slug: 'gandhinagar-thali-guide',
    title: 'Gandhinagar thali guide after Adalaj Stepwell',
    description: 'What a Gujarati thali includes, whether it is unlimited, how to order it, and why it fits better after your Adalaj visit than before.',
    eyebrow: 'Food',
    intro: 'A Gujarati thali is a full sit-down meal, so it fits best after your stepwell visit rather than before it. Plan it in Gandhinagar or Ahmedabad, where thali restaurants are easy to find, and go hungry.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What it is', value: 'A large vegetarian platter of many small dishes' },
      { label: 'Usually included', value: 'Rotli, shaak, dal, kadhi, rice, chaas, sweet' },
      { label: 'Best time', value: 'Lunch or a relaxed dinner after the visit' },
    ],
    sections: [
      {
        title: 'What is on a Gujarati thali',
        paragraphs: [
          'A thali is a round platter of many small bowls, not a single dish. A typical spread includes rotli or roti, several shaak (cooked vegetable dishes), dal, kadhi, rice, chaas (buttermilk) and one or more sweets, and some places add a farsan snack course and pickles.',
          'Because so much arrives at once, pace yourself and start with the lighter items before the heavier, richer ones.',
        ],
      },
      {
        title: 'How to order and eat it',
        paragraphs: [
          'In most thali restaurants you do not order item by item. You sit down and the staff serve the standard set, then refill whatever you enjoy, so ask whether the thali is unlimited, which many are.',
          'If you want less, say so early so that plates are not piled up, and signal when you are finished, since servers often keep topping up bowls until you ask them to stop.',
        ],
        bullets: [
          'Ask whether the thali is unlimited before you start.',
          'Say if you want smaller portions so nothing is wasted.',
          'Tell the server to stop when you are full rather than feeling obliged to finish.',
        ],
      },
      {
        title: 'Why it fits after Adalaj, not before',
        paragraphs: [
          'A thali is heavy and unhurried, so eating it before the monument tends to slow you down and can feel uncomfortable on a warm day. It works far better as the settled meal once your sightseeing is done, especially when your day continues into Gandhinagar.',
          'Pair it with a short rest afterwards rather than rushing straight to the next stop.',
        ],
      },
      {
        title: 'Jain and pure-vegetarian thalis',
        paragraphs: [
          'Thali restaurants are almost always pure vegetarian, which makes them a safe choice if you avoid meat, fish and egg. For Jain food, ask before you sit whether the thali can be prepared without onion, garlic and root vegetables such as potato and carrot.',
          'Not every kitchen can adapt a full thali, so it is worth confirming before you commit, or choosing a simpler restaurant that clearly offers Jain food.',
        ],
      },
    ],
    faq: [
      { q: 'Should I eat a thali before or after Adalaj Stepwell?', a: 'After. A thali is a big, relaxed meal, so it fits better once your visit is done, especially if you are continuing into Gandhinagar.' },
      { q: 'Is a Gujarati thali unlimited?', a: 'Often yes, but not always, so ask when you arrive. Servers usually keep refilling until you tell them to stop.' },
      { q: 'Is a thali vegetarian?', a: 'Almost always pure vegetarian, meaning no meat, fish or egg. For Jain food, ask whether they can leave out onion, garlic and root vegetables.' },
      { q: 'How much does a thali cost?', a: 'Prices vary by restaurant and area, so treat it as a range rather than a fixed number and confirm on the day.' },
    ],
    related: [
      { label: 'Vegetarian and Jain-friendly food', href: '/en/vegetarian-jain-food/' },
      { label: 'Restaurants near Adalaj', href: '/en/restaurants-near-adalaj/' },
      { label: 'Ahmedabad-Gandhinagar day trip', href: '/en/ahmedabad-gandhinagar-day-trip/' },
    ],
    sources: [baseSources.maps, baseSources.trimandirFacilities],
  },
  'indroda-family-day-trip': {
    slug: 'indroda-family-day-trip',
    title: 'Adalaj Stepwell and Indroda family day trip',
    description: 'A family-friendly day that pairs Adalaj Stepwell with Indroda Nature Park at a pace that works for children and mixed-interest groups.',
    eyebrow: 'Itinerary',
    intro: 'Start at Adalaj Stepwell while everyone still has energy, then spend the rest of the day at Indroda Nature Park in Gandhinagar, where children can run around. Budget most of a day, roughly four to six hours of sightseeing plus the drive between the two.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Time needed', value: 'Most of a day, about four to six hours plus travel' },
      { label: 'Best for', value: 'Families with children and mixed-interest groups' },
      { label: 'Best order', value: 'Adalaj first, Indroda second' },
    ],
    sections: [
      {
        title: 'Morning: Adalaj Stepwell, kept short',
        paragraphs: [
          'Do the stepwell first, while everyone is fresh. It is smaller than it looks in photos, so about 45 minutes to an hour is usually enough to walk down the five levels and take pictures.',
          'Go early if you can, because the stone platforms are calmer and cooler before the mid-morning crowds build up.',
        ],
        bullets: [
          'Hold younger children’s hands on the open stairways and keep them away from unguarded edges.',
          'The lower levels can feel enclosed, so do not linger there if a child is uneasy.',
          'There are basic snack options near the site, but do not plan on a full restaurant here.',
        ],
      },
      {
        title: 'Late morning: drive to Indroda Nature Park',
        paragraphs: [
          'From Adalaj, drive on toward Gandhinagar. Indroda Nature Park sits on the Sabarmati riverfront and is managed by the GEER Foundation, with dinosaur fossil displays and nature-education exhibits across a large, mostly outdoor campus.',
          'Confirm the current opening days and hours before you set out, and carry hats, water and sunscreen, because shade is limited in parts of the park.',
        ],
        bullets: [
          'Plan for at least two to three hours if children want the dinosaur area and the nature exhibits.',
          'Wear closed shoes; the paths are long and partly unpaved.',
          'A slow walk or a rented cycle works better than rushing from one end to the other.',
        ],
      },
      {
        title: 'Lunch and the afternoon rhythm',
        paragraphs: [
          'The simplest plan is to eat between the two stops, around Adalaj or on the way into Gandhinagar, so you start Indroda with everyone fed and rested.',
          'Keep the afternoon loose. Children often spend longer than expected in the dinosaur section, so leave room rather than scheduling a third major stop.',
        ],
      },
      {
        title: 'If the weather turns',
        paragraphs: [
          'This is an outdoor-heavy day, so it is the weak choice in heavy or unstable rain. If the forecast looks poor, swap to an indoor plan such as Dandi Kutir or Science City and save Indroda for a clearer day.',
        ],
      },
    ],
    faq: [
      { q: 'Should Adalaj come before or after Indroda?', a: 'Do Adalaj first. The stepwell is quicker and easier to enjoy early, and Indroda works well as an open, flexible second half of the day.' },
      { q: 'Is this better for families than Adalaj plus Akshardham?', a: 'For many families, yes. Indroda is more relaxed and child-friendly than a second formal, dress-coded site, though Akshardham is the stronger pick if you want a major cultural landmark.' },
      { q: 'How long do we need in total?', a: 'Most families spend about four to six hours on the two stops, plus travel time between them.' },
      { q: 'What if it rains?', a: 'Switch to an indoor option such as Dandi Kutir or Science City. Indroda is mostly open-air, so it is not a rainy-day plan.' },
    ],
    related: [
      { label: 'Indroda guide', href: '/en/indroda-nature-park-guide/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
    ],
    sources: [baseSources.indroda, baseSources.maps],
  },
  'science-city-half-day-trip': {
    slug: 'science-city-half-day-trip',
    title: 'Adalaj Stepwell and Science City half-day plan',
    description: 'Combine Adalaj Stepwell with Gujarat Science City in a half-day route that suits families and mixed-interest groups.',
    eyebrow: 'Itinerary',
    intro: 'Pair a short, focused stop at Adalaj Stepwell with a few hours at Gujarat Science City, which sits on the Ahmedabad side of the corridor. This works best as a flexible half-day: see the stepwell first, then let Science City fill however much time you have left.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Time needed', value: 'Half a day, about four to five hours plus travel' },
      { label: 'Best for', value: 'Families and mixed-interest groups' },
      { label: 'Best direction', value: 'Adalaj first, then Science City back toward Ahmedabad' },
    ],
    sections: [
      {
        title: 'Start with a focused stepwell stop',
        paragraphs: [
          'Give Adalaj about 45 minutes to an hour. The carved levels and the quiet atmosphere are the appeal, and a short visit keeps the rest of the half-day realistic.',
          'Reading the story of the well before you go helps, because the site itself has limited on-the-spot explanation.',
        ],
      },
      {
        title: 'Then move to Science City',
        paragraphs: [
          'Gujarat Science City is in the Hebatpur area on the edge of Ahmedabad, and it mixes indoor halls with outdoor sections, including a science centre, an aquarium and large-format shows.',
          'Decide in advance what you most want to see, because the campus is spread out and trying to cover everything will eat the whole day, not half of it.',
        ],
        bullets: [
          'Keep the stepwell stop short so Science City still feels unhurried.',
          'Check the current timings, ticket counters and show schedules before you travel; they can change, and some days are busier than others.',
          'Pick two or three highlights rather than every hall, especially with young children.',
        ],
      },
      {
        title: 'Food and pacing',
        paragraphs: [
          'Eat either before Science City or at the food options on its campus, so you are not hunting for lunch mid-visit. Late morning at Adalaj followed by an early-afternoon Science City works smoothly for most groups.',
          'If you are based in Ahmedabad, ending at Science City means you are already heading back toward the city rather than adding a long return leg.',
        ],
      },
      {
        title: 'When to choose a different pairing',
        paragraphs: [
          'If the group wants a culture-heavy second stop, Akshardham or Trimandir fits better. If you want an indoor history backup instead of an interactive one, choose Dandi Kutir.',
        ],
      },
    ],
    faq: [
      { q: 'Is Science City a good second stop after Adalaj?', a: 'Yes. It balances heritage with interactive, family-friendly exhibits, which keeps a half-day interesting for mixed groups.' },
      { q: 'Can this really fit in half a day?', a: 'It can, if the Adalaj visit stays short and you pick a few Science City highlights instead of trying to see everything.' },
      { q: 'Is Science City indoor or outdoor?', a: 'Both. It has indoor exhibition halls plus outdoor areas, so it is partly workable in light rain but still better suited to a fair-weather day.' },
      { q: 'Who should skip this route?', a: 'Travellers who want a purely historic or temple-focused day will prefer a different pairing.' },
    ],
    related: [
      { label: 'Science City guide', href: '/en/gujarat-science-city-guide/' },
      { label: 'With kids', href: '/en/with-kids/' },
      { label: 'Ahmedabad-Gandhinagar day trip', href: '/en/ahmedabad-gandhinagar-day-trip/' },
    ],
    sources: [baseSources.scienceCity, baseSources.maps],
  },
  'ahmedabad-gandhinagar-day-trip': {
    slug: 'ahmedabad-gandhinagar-day-trip',
    title: 'Ahmedabad to Gandhinagar day trip with Adalaj',
    description: 'Build an Ahmedabad-Gandhinagar day trip around Adalaj Stepwell, then choose a second stop by pace, weather and who is travelling.',
    eyebrow: 'Itinerary',
    intro: 'Adalaj Stepwell sits on the corridor between the two cities, so it is a natural anchor for a day that starts in Ahmedabad and ends in or near Gandhinagar. Plan two or three stops at most, and protect time for food and transfers.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Time needed', value: 'A full day, roughly six to eight hours' },
      { label: 'Getting around', value: 'Easiest with your own car, a taxi or an app-based cab' },
      { label: 'Best structure', value: 'Adalaj in the middle, one or two add-ons around it' },
    ],
    sections: [
      {
        title: 'Why Adalaj works as the anchor',
        paragraphs: [
          'Adalaj sits roughly 18 to 20 km north of central Ahmedabad and about 8 to 10 km from Gandhinagar city, so it breaks the day naturally between the two.',
          'The stepwell is a compact, ASI-protected monument from the late 15th century, which makes it an efficient stop: about an hour, and you are back on the road.',
        ],
      },
      {
        title: 'Choosing the rest of the day',
        paragraphs: [
          'Pick your second stop to match the group. Akshardham in Gandhinagar is the biggest cultural landmark; Dandi Kutir is the indoor Gandhian museum inside the Mahatma Mandir complex; Indroda Nature Park is the open-air family option; and Science City is the interactive finish on the Ahmedabad side.',
          'A simple route is Adalaj first, then one Gandhinagar stop, and then either head back or add a short Ahmedabad-side stop if you still have energy.',
        ],
        bullets: [
          'Akshardham for an iconic but stricter, dress-coded visit; it is usually closed on Mondays.',
          'Dandi Kutir as weather insurance, keeping in mind that it typically keeps fixed hours and may close on certain days.',
          'Indroda for open space and children, or Science City for interactive exhibits and families.',
        ],
      },
      {
        title: 'Getting around and timing',
        paragraphs: [
          'A car, taxi or app-based cab makes this route far easier to manage. Distances between stops look short on paper but add up with traffic.',
          'Aim to leave Ahmedabad in the morning, do Adalaj before the midday heat, and place your heaviest stop after lunch. Build in a buffer for entry queues and security at larger sites.',
        ],
      },
      {
        title: 'Where the day can go wrong',
        paragraphs: [
          'The usual mistake is stacking three or four major attractions with no buffer for food, transfers or entry procedures. Choose deliberately rather than trying to see everything, and confirm opening days and timings before you set out.',
        ],
      },
    ],
    faq: [
      { q: 'Can I do Ahmedabad, Adalaj and Gandhinagar in one day?', a: 'Yes, if you keep to two or three stops and treat the rest as optional. Trying to cover everything is what makes the day fall apart.' },
      { q: 'What is the best second stop after Adalaj?', a: 'Akshardham is the strongest iconic option. Dandi Kutir, Indroda and Science City are better depending on weather and whether you are travelling with children.' },
      { q: 'Do I need a car?', a: 'A car, taxi or app-based cab makes the day much simpler. Public transport exists, but it is harder to chain across both cities and the stepwell.' },
      { q: 'What is the biggest planning mistake?', a: 'Fitting in too many major stops without protecting meal and transfer time. Fewer stops, done well, make a better day.' },
    ],
    related: [
      { label: 'Nearby attractions', href: '/en/nearby-attractions/' },
      { label: 'Adalaj to Akshardham', href: '/en/adalaj-to-akshardham/' },
      { label: 'Rainy-day alternatives', href: '/en/rainy-day-alternatives/' },
    ],
    sources: [baseSources.maps, baseSources.akshardham, baseSources.dandiKutir, baseSources.indroda, baseSources.scienceCity],
  },
  'rainy-day-alternatives': {
    slug: 'rainy-day-alternatives',
    title: 'Rainy-day alternatives to Adalaj Stepwell',
    description: 'Indoor and lower-risk options near Adalaj Stepwell when the weather turns, with Dandi Kutir and Science City as the most practical backups.',
    eyebrow: 'Itinerary',
    intro: 'If it is pouring, skip the stepwell. Decide early and switch to an indoor stop such as Dandi Kutir or Science City, rather than driving out and hoping the rain eases.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Best indoor backup', value: 'Dandi Kutir, a Gandhian museum in Gandhinagar' },
      { label: 'Best family backup', value: 'Gujarat Science City' },
      { label: 'Key habit', value: 'Decide early, before you leave' },
    ],
    sections: [
      {
        title: 'When to drop the stepwell plan',
        paragraphs: [
          'Call it off when surfaces are wet or slippery, when rain is steady rather than passing, or when children and older travellers are uncomfortable. The stepwell is outdoor and stair-heavy, so a wet visit is more stressful than rewarding.',
          'Gujarat’s monsoon runs roughly from June to September with frequent afternoon showers, but rain can surprise you at other times too, so keep a backup in mind before you travel.',
        ],
      },
      {
        title: 'Dandi Kutir: the history-focused indoor pick',
        paragraphs: [
          'Dandi Kutir is a Gandhian-themed museum inside the Mahatma Mandir complex in Gandhinagar, and it is fully indoors, which makes it the cleanest substitution for a wet day.',
          'It usually keeps fixed hours and may close on certain days, so confirm the current schedule before you go.',
        ],
      },
      {
        title: 'Science City: the broader family pick',
        paragraphs: [
          'Gujarat Science City, on the Ahmedabad side of the corridor, works well for families and mixed groups. It has indoor halls including a science centre and an aquarium, though parts of the campus are outdoors.',
        ],
        bullets: [
          'Choose Dandi Kutir when you want history and an easy, single-building visit.',
          'Choose Science City when children or a mixed group need variety.',
          'In heavy rain, favour the most indoor option rather than a stretched-out campus.',
        ],
      },
      {
        title: 'A simple wet-weather plan',
        paragraphs: [
          'Decide before you leave. If the forecast is poor, skip Adalaj entirely, drive straight to your indoor stop, and eat near it rather than in transit. Save the stepwell for a clearer day, when the light and the carvings are far more rewarding.',
        ],
      },
    ],
    faq: [
      { q: 'What is the best indoor backup if I skip Adalaj?', a: 'Dandi Kutir is usually the strongest history-focused indoor choice. Science City is better for families and mixed-interest groups.' },
      { q: 'Should I still squeeze in a quick Adalaj stop in the rain?', a: 'Only if the surfaces feel safe and the rain is light and stable. Otherwise the visit is rushed and uncomfortable, and it is not worth it.' },
      { q: 'Is Science City fully indoor?', a: 'No. It has indoor exhibition halls and an aquarium, but also outdoor areas, so it is a partial wet-weather option rather than a fully enclosed one.' },
      { q: 'When is the rainy season here?', a: 'Broadly June to September, with common afternoon showers. The exact timing varies from year to year, so check the forecast close to your travel date.' },
    ],
    related: [
      { label: 'Monsoon visit', href: '/en/monsoon-visit/' },
      { label: 'Dandi Kutir guide', href: '/en/dandi-kutir-guide/' },
      { label: 'Science City guide', href: '/en/gujarat-science-city-guide/' },
    ],
    sources: [baseSources.dandiKutir, baseSources.scienceCity, baseSources.maps],
  },
  'hotels-near-adalaj': {
    slug: 'hotels-near-adalaj',
    title: 'Hotels near Adalaj Stepwell',
    description: 'Decide whether it is worth staying near Adalaj Stepwell, or whether the monument works better as a stop from a hotel base in Ahmedabad or Gandhinagar.',
    eyebrow: 'Stay planning',
    intro: 'Most travellers do not need to sleep beside the stepwell, because Adalaj is easily visited as a stop from Ahmedabad or Gandhinagar. A local stay only makes sense if you are in transit or want to cut down on transfers, so weigh that against the far wider choice of hotels in the two cities.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Best for', value: 'Travellers in transit between the two cities' },
      { label: 'Most common choice', value: 'A city base in Ahmedabad or Gandhinagar' },
      { label: 'Nearby option', value: 'The Trimandir complex has some stay facilities' },
    ],
    sections: [
      {
        title: 'When a stay right by Adalaj makes sense',
        paragraphs: [
          'A night near Adalaj can work if you are moving between Ahmedabad and Gandhinagar, arriving late, or want a quieter local stop on a longer route. It rarely makes sense just to see the stepwell, which is a short visit.',
        ],
        bullets: [
          'Good if you want to break up a long drive along the corridor.',
          'Less useful if your main sightseeing is in either city.',
        ],
      },
      {
        title: 'Why most visitors choose a city base',
        paragraphs: [
          'Ahmedabad and Gandhinagar both offer far more hotels, restaurants and onward transport than the Adalaj area. Ahmedabad suits a broader city trip, while Gandhinagar suits a calmer base near attractions such as Akshardham and Dandi Kutir. Adalaj sits within easy reach of both, at roughly 18-20 km from central Ahmedabad and 8-10 km from Gandhinagar city.',
        ],
        bullets: [
          'Choose Ahmedabad for the widest choice of hotels, food and transport.',
          'Choose Gandhinagar for a quieter base close to nearby attractions.',
          'Choose a local stay mainly for route or timing convenience.',
        ],
      },
      {
        title: 'What you can expect locally',
        paragraphs: [
          'Accommodation close to the stepwell is limited and mostly tied to the surrounding area rather than the monument itself. The Trimandir complex, for example, has some stay facilities. Expect simpler guesthouse or dharamshala-style options rather than large hotels, and check availability, facilities and cancellation terms directly before you rely on them.',
        ],
      },
      {
        title: 'How to choose, in short',
        paragraphs: [
          'If Adalaj is one sightseeing day in a bigger trip, base yourself in a city and treat the stepwell as an outing. Book near Adalaj only if your itinerary genuinely benefits from being on the corridor or close to the temple complex.',
        ],
      },
    ],
    faq: [
      { q: 'Should I stay near Adalaj Stepwell?', a: 'Usually no. It is a short visit, and both Ahmedabad and Gandhinagar give you far more choice for the rest of your trip.' },
      { q: 'Are there places to stay near Adalaj?', a: 'Options are limited and mostly in the surrounding area rather than at the monument. The Trimandir complex has some stay facilities, so check directly what is available.' },
      { q: 'Who benefits most from staying nearby?', a: 'Travellers in transit between the two cities, or anyone who wants to reduce transfers on a longer route.' },
      { q: 'Which is the better base, Ahmedabad or Gandhinagar?', a: 'Ahmedabad for more city variety; Gandhinagar for a calmer base nearer the attractions in that direction.' },
    ],
    related: [
      { label: 'Stay in Ahmedabad or Gandhinagar', href: '/en/stay-ahmedabad-or-gandhinagar/' },
      { label: 'Adalaj to Trimandir', href: '/en/adalaj-to-trimandir/' },
      { label: 'From Ahmedabad airport', href: '/en/from-ahmedabad-airport/' },
    ],
    sources: [baseSources.trimandirFacilities, baseSources.maps],
  },
  'stay-ahmedabad-or-gandhinagar': {
    slug: 'stay-ahmedabad-or-gandhinagar',
    title: 'Should you stay in Ahmedabad or Gandhinagar for Adalaj?',
    description: 'Choose between Ahmedabad and Gandhinagar as a base for visiting Adalaj Stepwell by weighing city energy, nearby attractions and travel time.',
    eyebrow: 'Stay planning',
    intro: 'Adalaj sits between the two cities, so either can work as a base, and the right choice really depends on the rest of your trip. Pick Ahmedabad for more food, hotels and city life; pick Gandhinagar for a calmer base close to Akshardham, Dandi Kutir and other nearby sights.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Best for variety', value: 'Ahmedabad' },
      { label: 'Best for nearby sights', value: 'Gandhinagar' },
      { label: 'Distance to Adalaj', value: 'About 18-20 km from Ahmedabad, 8-10 km from Gandhinagar' },
    ],
    sections: [
      {
        title: 'Ahmedabad: the wider choice',
        paragraphs: [
          'Ahmedabad is the bigger, busier base, with more hotels, restaurants, markets, museums and transport links, including the airport. If Adalaj is one day within a larger city trip, it is usually the easier place to stay. The trade-off is a longer drive to the stepwell, which sits roughly 18-20 km north of the centre and can take a while in traffic.',
        ],
      },
      {
        title: 'Gandhinagar: calmer and closer',
        paragraphs: [
          'Gandhinagar is a planned, low-rise administrative city, so it feels quieter and greener, and its hotels lean business-oriented. It is the better base if your trip centres on nearby sights such as Akshardham, Dandi Kutir, Indroda Nature Park and the stepwell itself, all of which sit within a short drive.',
        ],
        bullets: [
          'Choose Gandhinagar for shorter transfers to nearby attractions.',
          'Choose Ahmedabad for the widest choice of food, hotels and city activity.',
          'Consider a split stay only if your itinerary genuinely uses both ends.',
        ],
      },
      {
        title: 'How Adalaj fits either choice',
        paragraphs: [
          'Adalaj does not need its own base. From either city it makes a comfortable half-day or day trip, and it pairs naturally with Trimandir or with Akshardham depending on which direction you are heading. If you stay in Gandhinagar, the stepwell is a quick early stop; if you stay in Ahmedabad, plan it as a northbound outing.',
        ],
      },
    ],
    faq: [
      { q: 'Should I stay in Ahmedabad or Gandhinagar for Adalaj?', a: 'Either works. Ahmedabad gives more hotels, food and city life, while Gandhinagar is calmer and closer to nearby attractions like Akshardham and Dandi Kutir.' },
      { q: 'Do I need to stay near the stepwell itself?', a: 'No. Adalaj is a short trip from both cities and does not need a dedicated base.' },
      { q: 'Which is closer to Adalaj?', a: 'Gandhinagar is closer, at about 8-10 km, while central Ahmedabad is roughly 18-20 km away. Confirm driving times with your driver, as traffic varies.' },
      { q: 'Should I split my stay between the two cities?', a: 'Only if your itinerary really uses both ends. For most trips, one base plus a day trip is simpler.' },
    ],
    related: [
      { label: 'Hotels near Adalaj', href: '/en/hotels-near-adalaj/' },
      { label: 'From Gandhinagar city', href: '/en/from-gandhinagar-city/' },
      { label: 'Ahmedabad-Gandhinagar day trip', href: '/en/ahmedabad-gandhinagar-day-trip/' },
    ],
    sources: [baseSources.maps, baseSources.akshardham, baseSources.dandiKutir, baseSources.indroda],
  },
  'three-entrances-explained': {
    slug: 'three-entrances-explained',
    title: 'Adalaj Stepwell’s three entrances explained',
    description: 'Why Adalaj Stepwell is described as having three entrances, where they sit, and what the layout tells you about the stepwell as a shared public space.',
    eyebrow: 'Architecture detail',
    intro: 'Adalaj is entered from more than one side, and knowing that changes how you walk it. This page explains what the three entrances are and what the layout reveals about how the stepwell was used.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What they are', value: 'Three separate ways into the stepwell' },
      { label: 'Why it matters', value: 'It reads as a shared public space, not one staircase' },
      { label: 'Look for', value: 'Flights of steps arriving from different sides' },
    ],
    sections: [
      {
        title: 'What “three entrances” actually means',
        paragraphs: [
          'Gujarat Tourism describes Adalaj as having three entrances, and that is a useful clue for visitors rather than trivia. Instead of one grand staircase down to the water, the stepwell was approached from different directions, so it reads as a place you enter and gather in, not simply a single descent.',
          'On the ground this means you can walk in from more than one point around the rim. Different flights of steps reach the landings at different corners, which is one reason the interior feels open and cross-shaped rather than like a closed shaft.',
        ],
      },
      {
        title: 'Why the layout matters when you visit',
        paragraphs: [
          'Stepwells were working buildings as much as monuments: people came to draw water, rest in the cool air and meet. A layout with several points of entry fits that daily, social use.',
        ],
        bullets: [
          'They let several people or groups reach the water and the landings without crowding a single staircase.',
          'They connect the stepwell to different approaches in the surrounding settlement, matching its role as a community space.',
          'They give you more than one route down, so you can descend on one side and return on another and see the carvings from a new angle.',
        ],
      },
      {
        title: 'How to read it on the ground',
        paragraphs: [
          'From the rim, pause and trace the flights of steps before you go down. Notice how they meet the landings from different sides and how rows of carved pillars line each route.',
          'There is no fixed path. Because the entrances feed different corners of the structure, circling once at the top and then descending gives you a better sense of the whole than heading straight for the water.',
        ],
      },
    ],
    faq: [
      { q: 'How many entrances does Adalaj Stepwell have?', a: 'It is usually described as having three entrances — different ways into the stepwell from around the rim, rather than one single staircase.' },
      { q: 'Do the entrances lead to the same place?', a: 'They all bring you into the same stepped structure around the central shaft, but they reach the landings from different sides, so each gives a slightly different view.' },
      { q: 'Which entrance should I use?', a: 'There is no official best one. Walk around the rim first to see the layout, then take whichever flight is open; you can often return by another and see the carvings from a second angle.' },
      { q: 'Why would a stepwell need more than one entrance?', a: 'Stepwells were busy public places used for water, shade and gathering, so several entrances helped many people come and go without blocking a single route.' },
    ],
    related: [
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Octagonal opening explained', href: '/en/octagonal-opening-explained/' },
      { label: 'Five storeys explained', href: '/en/five-storeys-explained/' },
    ],
    sources: [baseSources.tourism, baseSources.adalaj],
  },
  'octagonal-opening-explained': {
    slug: 'octagonal-opening-explained',
    title: 'The octagonal opening at Adalaj Stepwell explained',
    description: 'What the octagonal opening at Adalaj Stepwell is, why the shape is eight-sided, and how it shapes light, depth and the view from inside.',
    eyebrow: 'Architecture detail',
    intro: 'The octagonal opening is the frame most visitors end up looking through without quite realising it. This page explains what it is and how it changes the light and the sense of depth inside the stepwell.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What you are looking at', value: 'An eight-sided opening above the well shaft' },
      { label: 'Where to stand', value: 'At a lower landing, looking straight up' },
      { label: 'Pairs well with', value: 'The architecture and photo-spot pages' },
    ],
    sections: [
      {
        title: 'What the octagonal opening is',
        paragraphs: [
          'At the centre of Adalaj is the well shaft itself, and above it the structure opens into an octagonal ring — eight-sided rather than square or round. It is the opening that carries light and air down through the storeys to the water at the bottom.',
          'It is sometimes described as the monument’s eye: whatever level you are on, this opening is what connects the deepest, most shaded parts of the stepwell to the sky above.',
        ],
      },
      {
        title: 'Why the opening is octagonal',
        paragraphs: [
          'A stepwell has to reconcile two shapes at once: the roughly circular well and shaft at its heart, and the square-ish building wrapped around it. An eight-sided opening is a practical way to bridge the two, turning the corners gently instead of leaving awkward gaps.',
          'It is worth being clear that this is a reading of how the geometry works, not a documented statement of the builders’ intent. What is certain is what you can see: an eight-sided opening, ringed by the structure, sitting directly above the water.',
        ],
      },
      {
        title: 'How it shapes light and the view',
        paragraphs: [
          'Because the opening narrows as it rises, light falls mainly in a soft column down the centre. The lower landings stay in deep shade for much of the day, and the carvings there move in and out of visibility as the sun shifts.',
          'The opening is also the best way to feel the height of the stepwell. From the bottom, looking straight up, the stacked storeys and their columns converge toward that eight-sided patch of sky — the view most photographs of Adalaj are trying to capture.',
        ],
      },
    ],
    faq: [
      { q: 'What is the octagonal opening at Adalaj Stepwell?', a: 'It is the eight-sided opening above the central well shaft, the main channel that brings light and air down through the storeys to the water.' },
      { q: 'Why is it octagonal rather than round?', a: 'It sits between a roughly circular shaft and a square-ish building, so an eight-sided opening fits the two together more smoothly. That is a reading of the geometry rather than a recorded statement of intent.' },
      { q: 'Where is the best place to see it?', a: 'From the lower landings, look straight up the shaft. The opening frames the sky and makes the depth of the stepwell easiest to grasp.' },
      { q: 'Does the opening have a fixed symbolic meaning?', a: 'It is often described in symbolic terms, but those readings are interpretation rather than documented fact. The safe description is architectural: it lights the shaft and centres the space.' },
    ],
    related: [
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Photo spots', href: '/en/photo-spots/' },
      { label: 'Three entrances explained', href: '/en/three-entrances-explained/' },
    ],
    sources: [baseSources.tourism, baseSources.adalaj],
  },
  'five-storeys-explained': {
    slug: 'five-storeys-explained',
    title: 'Reading the five storeys of Adalaj Stepwell',
    description: 'What “five storeys” means at Adalaj Stepwell, how each level steps inward, and how to read the structure one landing at a time as you descend.',
    eyebrow: 'Architecture detail',
    intro: 'Adalaj is described as a five-storey stepwell, but the storeys go down, not up. This page explains what each level is and how to read the building one landing at a time as you walk toward the water.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'What it means', value: 'Five stepped levels descending to the water' },
      { label: 'Each level', value: 'A little smaller than the one above it' },
      { label: 'How to read it', value: 'One landing at a time, looking back up' },
    ],
    sections: [
      {
        title: 'What “five storeys” really describes',
        paragraphs: [
          'A stepwell is built downward, so its storeys are levels of descent rather than floors you climb. At Adalaj there are five of them, arranged around the central shaft, each one a little smaller and deeper than the last.',
          'That is the clearest way to hold the number in mind: not five floors in a tower, but five stages between the rim at ground level and the water at the bottom.',
        ],
      },
      {
        title: 'How the storeys step inward',
        paragraphs: [
          'As you go down, the walls step in, so the stepwell tapers gently toward the shaft. Each level has its own flights of steps and a row of carved pillars, and the landings give you a place to stand and look across the space.',
          'Because the levels shrink, the light and the sense of enclosure change as you descend. The upper storeys feel open and bright; the lower ones are cooler, more shaded and more intimate as they close in around the water.',
        ],
      },
      {
        title: 'A simple way to walk the five levels',
        paragraphs: [
          'Try not to rush straight to the water. Take one storey at a time, and at each landing turn and look back up: the stacked columns and the octagonal opening line up behind you and give the clearest sense of the depth.',
        ],
        bullets: [
          'At the rim, look down first to take in all five levels at once.',
          'On each landing, pause and look up, then across, then down.',
          'Save a slower look at the water level for last, where the light and shade are often most striking.',
        ],
      },
      {
        title: 'What “five storeys” does not mean',
        paragraphs: [
          'The five-storey description is about the architecture, not a guarantee of access. Barriers, closed sections and site rules can affect which levels are open on the day you visit, so treat the number as a way to understand the structure rather than a promise about the route.',
        ],
      },
    ],
    faq: [
      { q: 'How many storeys does Adalaj Stepwell have?', a: 'It is described as a five-storey stepwell — five stepped levels descending around the central shaft toward the water.' },
      { q: 'Do the storeys go up or down?', a: 'Down. A stepwell is built into the ground, so its five levels of descent lead from the rim at ground level down to the water.' },
      { q: 'Can I walk down all five levels?', a: 'Usually you can follow the open visitor route downward, but access to some sections can vary with site rules and conditions on the day, so follow any barriers or instructions on site.' },
      { q: 'Which level is the most impressive?', a: 'The lower landings near the water tend to feel the most dramatic, but the best overview is from the top, where all five levels and the octagonal opening line up.' },
    ],
    related: [
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
      { label: 'Timings', href: '/en/timings/' },
      { label: 'Stairs and accessibility', href: '/en/stairs-accessibility/' },
    ],
    sources: [baseSources.tourism, baseSources.adalaj, baseSources.dadaHarir],
  },
  'rudabai-legend-explained': {
    slug: 'rudabai-legend-explained',
    title: 'The Rudabai legend at Adalaj Stepwell',
    description: 'Who Ruda Rani was, what is recorded about her role at Adalaj Stepwell, and how to tell the documented history apart from the stories told about her.',
    eyebrow: 'Legends',
    intro: 'Adalaj is closely tied to a queen, Ruda Rani (Rudabai), and to a set of stories about her. This page sets out what is recorded about her and separates it from the popular tales, so you can enjoy both without confusing them.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Who she was', value: 'Ruda Rani, linked to the Vaghela line' },
      { label: 'Her role', value: 'Usually credited as the stepwell’s patron' },
      { label: 'Keep apart', value: 'Recorded history and later legend are not the same' },
    ],
    sections: [
      {
        title: 'What is recorded about Ruda Rani',
        paragraphs: [
          'The stepwell is also known as Rudabai ni Vav, or Ruda Rani’s stepwell. Ruda Rani is usually credited as the woman who had Adalaj built, and she is linked to the Vaghela dynasty in the story of the site. Construction is generally dated to the late 15th century, often given as beginning around 1498–1499.',
          'That is the core of the documented account: a named patron, a broad date range, and the monument itself standing as the evidence of the commission.',
        ],
      },
      {
        title: 'The stories that grew around her',
        paragraphs: [
          'Alongside that record there is a well-known set of tales. The commonly told story links Ruda Rani to a neighbouring ruler and to the events that followed — a story of rivalry, conflict and, in some versions, a vow or promise connected to the building of the stepwell.',
          'These should be read as legend. The tale is repeated in many retellings and is part of why the site stays memorable, but it is narrative tradition rather than something the surviving records confirm. Details also vary between tellings, which is itself a sign of a story rather than a record.',
        ],
        bullets: [
          'Treat the romantic and wartime versions as legend, not as documented fact.',
          'The monument is the hard evidence; the drama around it is tradition.',
          'A story being popular does not make it history — it makes it a good story.',
        ],
      },
      {
        title: 'How to enjoy both without mixing them up',
        paragraphs: [
          'There is no need to choose between the history and the legend. Knowing that Ruda Rani really is the figure tied to the stepwell’s construction can make the stories more interesting, not less.',
          'The honest way to hold it is simple: the patronage is history, and the elaborate tale of why and how is legend. Enjoy the story as a story, and keep it separate from the dates and the stonework.',
        ],
      },
    ],
    faq: [
      { q: 'Was there a real queen called Rudabai at Adalaj?', a: 'Yes — Ruda Rani, or Rudabai, is the figure usually credited with commissioning the stepwell, which is also called Rudabai ni Vav after her.' },
      { q: 'Is the story about her a true history?', a: 'Only partly. Her role as the stepwell’s patron is the recorded part; the dramatic tale of rivalry, conflict and vows that grew around her is legend, repeated in many versions rather than confirmed by records.' },
      { q: 'Why is the legend told so often?', a: 'It gives the monument a human story, which is why it is repeated so widely. Treating it as legend rather than fact keeps it enjoyable without overstating what we know.' },
      { q: 'Where can I find the documented dates?', a: 'Construction is generally dated to the late 15th century, often given as around 1498–1499, though precise details are debated. The stepwell’s history and architecture pages cover the source-backed structural detail.' },
    ],
    related: [
      { label: 'History', href: '/en/history/' },
      { label: 'Adalaj history and dates', href: '/en/history/' },
      { label: 'Carvings and symbols', href: '/en/carvings-and-symbols/' },
    ],
    sources: [baseSources.adalaj, baseSources.tourism],
  },
  'photography-rules': {
    slug: 'photography-rules',
    title: 'Photography at Adalaj Stepwell: rules and etiquette',
    description: 'Practical guidance for photographing Adalaj Stepwell, from casual visitor photos to tripods, drones and commercial shoots, with a clear note to check current rules on site.',
    eyebrow: 'Photography',
    intro: 'Casual photography is normally part of a visit to Adalaj, but what is allowed can differ for tripods, drones and commercial work. This page covers what to expect and how to shoot respectfully at a protected monument.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Casual photos', value: 'Usually fine for personal use' },
      { label: 'Tripods and drones', value: 'Often restricted — check on site' },
      { label: 'Commercial shoots', value: 'Usually need prior permission' },
    ],
    sections: [
      {
        title: 'Casual photography',
        paragraphs: [
          'Taking personal photos with a phone or a handheld camera is usually part of a normal visit at Adalaj. The warm carved stone and shifting light hardly invite you to leave the camera behind.',
          'As a courtesy, keep your shots from blocking stairs or landings, and step aside when others are moving through — the space is narrow in places and shared with everyone else on the route.',
        ],
      },
      {
        title: 'Tripods, drones and larger equipment',
        paragraphs: [
          'Monuments cared for by the Archaeological Survey of India (ASI) usually take a stricter view of bulky equipment than of a camera in your hand. Tripods, drones and rigs that need space or a long set-up are often restricted, but the exact rules are set locally and can change.',
          'The reliable approach is to ask at the entrance or the ticket desk before you set anything up, and to treat the answer as the rule for that visit rather than a permanent fact about the site.',
        ],
      },
      {
        title: 'Commercial and professional shoots',
        paragraphs: [
          'If you are shooting for a business — advertising, a film, or paid editorial work — plan on needing permission. Commercial filming and photography at protected monuments usually require prior approval, normally arranged through the official ASI or site channel.',
          'Do not assume a personal-visit allowance covers a commercial job. The distinction is usually clear, and checking ahead saves a wasted trip with gear you cannot use.',
        ],
      },
      {
        title: 'Etiquette that keeps the site open to everyone',
        paragraphs: [
          'Rules and etiquette overlap at a place like Adalaj.',
        ],
        bullets: [
          'Never climb on carvings, balustrades or the well edge for a shot.',
          'Do not block the stairs or landings, or hold up a group to stage a photo.',
          'Keep yourself and your gear inside the open visitor route.',
          'Respect all no-entry or closed sections, and follow instructions from staff.',
        ],
      },
    ],
    faq: [
      { q: 'Can I take photos at Adalaj Stepwell?', a: 'Personal photography with a phone or handheld camera is usually fine, but rules can vary, so follow any signs and instructions on site.' },
      { q: 'Can I bring a tripod or a drone?', a: 'Often not. ASI-protected monuments usually restrict bulky equipment such as tripods and drones, so ask at the entrance for the current rule before you rely on them.' },
      { q: 'Do I need permission for a commercial shoot?', a: 'Usually yes. Commercial or professional filming and photography generally need prior approval, arranged through the official ASI or site channel rather than assumed on arrival.' },
      { q: 'What should I avoid doing while photographing?', a: 'Do not climb on the carvings or the well edge, do not block the stairs or landings, and stay within the open visitor route.' },
    ],
    related: [
      { label: 'Photo spots', href: '/en/photo-spots/' },
      { label: 'Carvings and symbols', href: '/en/carvings-and-symbols/' },
      { label: 'Monsoon visit', href: '/en/monsoon-visit/' },
    ],
    sources: [baseSources.adalaj, baseSources.maps],
  },
  'photo-spots': {
    slug: 'photo-spots',
    title: 'Best photo spots at Adalaj Stepwell',
    description: 'The viewpoints and light that work best for photographing Adalaj Stepwell, from the octagonal opening to the stacked landings, all within the open visitor route.',
    eyebrow: 'Photography',
    intro: 'Adalaj rewards depth and geometry more than any single detail. This page suggests where to stand and when to shoot to get the views that make the stepwell look like itself — all from within the open visitor route.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Strongest view', value: 'Up the shaft to the octagonal opening' },
      { label: 'Best light', value: 'Morning, or softer late-afternoon light' },
      { label: 'Best approach', value: 'Depth and framing over risky angles' },
    ],
    sections: [
      {
        title: 'Shoot the depth, not just the detail',
        paragraphs: [
          'The image that reads most clearly as Adalaj is one that shows the structure as a whole: stacked levels, rows of carved pillars, and the eight-sided opening at the top, all leading the eye down toward the water.',
          'Close detail shots of the carving are rewarding too, but on their own they lose the thing that makes this stepwell distinctive — the sense of a building carved downward around a central shaft. Try to get at least one frame that shows how the levels and the opening line up.',
        ],
      },
      {
        title: 'Where to stand',
        paragraphs: [
          'The strongest positions are along the visitor route, where the geometry does much of the work for you.',
        ],
        bullets: [
          'At the rim, look straight down through the storeys for a top-down frame of the whole descent.',
          'From a lower landing, look straight up the shaft: the columns converge on the octagonal opening and the sky beyond it.',
          'Across a landing, shoot along a row of carved pillars to use repetition as a leading line.',
          'Include the water surface where you can — it reflects the stone and brightens the darkest levels.',
        ],
      },
      {
        title: 'Best light and time',
        paragraphs: [
          'Light changes a lot inside a stepwell, because the strong light comes only from the open sides and the shaft above. As a general guide, morning or the softer light of late afternoon is usually kinder than the flat glare of midday, which both flattens the carving and throws hard shadows.',
          'You do not need a fixed “best” hour. Watch how the light moves down the walls, and revisit a level you like once the shade has shifted — the same spot often photographs quite differently later in the day.',
        ],
      },
      {
        title: 'Photograph safely and respectfully',
        paragraphs: [
          'The best shot is never worth an unsafe move. Stay inside the open visitor route, keep clear of stairs and landings where people are walking, and do not lean over the well edge or climb on carvings for a better angle.',
          'For equipment rules — especially tripods and anything bulky — check the site’s current guidance on the day, as described on the photography rules page.',
        ],
      },
    ],
    faq: [
      { q: 'What is the best angle at Adalaj Stepwell?', a: 'Looking up the shaft from a lower landing is the classic shot: the stacked columns and the octagonal opening frame the sky above. Looking down from the rim is a good second view of the whole descent.' },
      { q: 'What time of day is best for photos?', a: 'As a general rule, morning or softer late-afternoon light works better than harsh midday sun, which flattens the carving. The light inside shifts through the day, so a spot can photograph differently later.' },
      { q: 'Where should I not stand to take a photo?', a: 'Anywhere outside the open visitor route. Avoid leaning over the well edge or climbing on carvings, and keep stairs and landings clear for other visitors.' },
      { q: 'Do I need special equipment for good photos?', a: 'No. Most strong images come from framing depth and geometry with whatever camera you have; a well-composed view up or down the shaft matters more than the gear.' },
    ],
    related: [
      { label: 'Photography rules', href: '/en/photography-rules/' },
      { label: 'Octagonal opening explained', href: '/en/octagonal-opening-explained/' },
      { label: 'Best time to visit', href: '/en/best-time-to-visit/' },
    ],
    sources: [baseSources.adalaj, baseSources.maps, baseSources.tourism],
  },
  'stepwell-culture-route': {
    slug: 'stepwell-culture-route',
    title: 'A stepwell culture route from Adalaj',
    description: 'How to use Adalaj Stepwell as the anchor for a wider stepwell route, including Dada Harir in Ahmedabad, and how to keep the day unhurried.',
    eyebrow: 'Heritage route',
    intro: 'Adalaj is one great stepwell, but it is not the only one worth seeing in the region. This page shows how to build a small, unhurried route around it — with Dada Harir as the natural comparison — without turning the day into a checklist.',
    lastVerified: '2 November 2026',
    facts: [
      { label: 'Anchor site', value: 'Adalaj Stepwell, on the Ahmedabad–Gandhinagar corridor' },
      { label: 'Natural comparison', value: 'Dada Harir Stepwell, Ahmedabad' },
      { label: 'Best for', value: 'Visitors drawn to architecture and heritage' },
    ],
    sections: [
      {
        title: 'Why stepwells are worth a route',
        paragraphs: [
          'Stepwells were a whole building type in this part of India, built to reach groundwater and to give people a cool, social place to gather. Seeing more than one turns an individual monument into a regional story about water, architecture and everyday life.',
          'Adalaj makes a good anchor for that story because it is easy to reach and richly carved. Pairing it with a second stepwell shows you both what the buildings share and how each one differs.',
        ],
      },
      {
        title: 'Dada Harir: the natural comparison',
        paragraphs: [
          'Dada Harir Stepwell (Bai Harir ni Vav), in Asarwa in Ahmedabad, is the most useful companion to Adalaj. It is also a five-storey stepwell, usually dated to around 1499, and it was built for Sultan Mahmud Begada’s court by Bai Harir Sultani — a similar small stepwell with a different patron and setting.',
          'Putting the two side by side makes the shared form clearer: the descending levels, the columns and the shaft. It also makes the differences easier to see, in finish, scale and surroundings.',
        ],
      },
      {
        title: 'How to keep the route realistic',
        paragraphs: [
          'A good heritage route is chosen, not collected. There is no need to see every stepwell in the area in a single day.',
        ],
        bullets: [
          'Give Adalaj proper time on its own before adding a second site.',
          'Choose one comparison stepwell rather than rushing three.',
          'Let the second stop follow your interest — architecture, history or simply a change of scene — not a list.',
          'If you are travelling via Ahmedabad, Dada Harir fits naturally on that side of the trip, which keeps the driving sensible.',
        ],
      },
      {
        title: 'Who this route suits',
        paragraphs: [
          'This works best for visitors with a real interest in architecture, history or heritage, and for return visitors who have already made the basic Adalaj visit and want more.',
          'If a single monument is enough for your trip, that is a fine way to see Adalaj too — the route is an option, not a requirement.',
        ],
      },
    ],
    faq: [
      { q: 'What is a stepwell culture route?', a: 'It is simply visiting Adalaj as part of a wider look at stepwells and the region’s heritage, rather than as a single isolated stop.' },
      { q: 'Which other stepwell should I add to Adalaj?', a: 'Dada Harir Stepwell in Ahmedabad is the most natural comparison: it is also five storeys and dates to around the same period, so the shared form and the differences are easy to see.' },
      { q: 'Should first-time visitors see several stepwells in one day?', a: 'Usually not. Most first-time visitors get more from giving Adalaj proper time, then adding just one comparison site if stepwell architecture really interests them.' },
      { q: 'Can I do this route if I am short on time?', a: 'Yes — visit Adalaj as the anchor and add one nearby companion such as Dada Harir only if the timing works. The route is meant to stay unhurried, not to fit in more sites.' },
    ],
    related: [
      { label: 'Dada Harir vs Adalaj', href: '/en/dada-harir-vs-adalaj/' },
      { label: 'Water engineering and cooling', href: '/en/water-engineering-cooling/' },
      { label: 'Architecture overview', href: '/en/architecture-overview/' },
    ],
    sources: [baseSources.tourism, baseSources.dadaHarir, baseSources.adalaj],
  },
};

export const featuredEnglishGuides = [
  englishGuides['adalaj-to-akshardham'],
  englishGuides['nearby-attractions'],
  englishGuides['visit-duration'],
  englishGuides['best-time-to-visit'],
  englishGuides['adalaj-trimandir-half-day'],
  englishGuides['adalaj-akshardham-day-trip'],
];

export const allEnglishGuides = Object.values(englishGuides);

export const englishGuideCollections = {
  priority: [
    englishGuides['visit-duration'],
    englishGuides['best-time-to-visit'],
    englishGuides['from-ahmedabad-city'],
    englishGuides['from-gandhinagar-city'],
    englishGuides['nearest-metro-last-mile'],
    englishGuides['adalaj-to-akshardham'],
    englishGuides['adalaj-to-trimandir'],
    englishGuides['nearby-attractions'],
    englishGuides['trimandir-adalaj'],
    englishGuides['akshardham-gandhinagar-guide'],
    englishGuides['restaurants-near-adalaj'],
    englishGuides['adalaj-trimandir-half-day'],
    englishGuides['adalaj-akshardham-day-trip'],
  ],
  architecture: [
    englishGuides['architecture-overview'],
    englishGuides['carvings-and-symbols'],
    englishGuides['water-engineering-cooling'],
    englishGuides['dada-harir-vs-adalaj'],
  ],
  visit: [
    englishGuides['parking-drop-off'],
    englishGuides['stairs-accessibility'],
    englishGuides['with-kids'],
    englishGuides['monsoon-visit'],
    englishGuides['toilets-drinking-water'],
  ],
  transport: [
    englishGuides['from-ahmedabad-airport'],
    englishGuides['from-ahmedabad-junction'],
  ],
  nearby: [
    englishGuides['indroda-nature-park-guide'],
    englishGuides['dandi-kutir-guide'],
    englishGuides['gujarat-science-city-guide'],
  ],
  food: [
    englishGuides['vegetarian-jain-food'],
    englishGuides['gujarati-breakfast-near-adalaj'],
    englishGuides['cafes-near-adalaj'],
    englishGuides['gandhinagar-thali-guide'],
  ],
  itinerary: [
    englishGuides['indroda-family-day-trip'],
    englishGuides['science-city-half-day-trip'],
    englishGuides['ahmedabad-gandhinagar-day-trip'],
    englishGuides['rainy-day-alternatives'],
  ],
  stay: [
    englishGuides['hotels-near-adalaj'],
    englishGuides['stay-ahmedabad-or-gandhinagar'],
  ],
  conditional: [
    englishGuides['three-entrances-explained'],
    englishGuides['octagonal-opening-explained'],
    englishGuides['five-storeys-explained'],
    englishGuides['rudabai-legend-explained'],
    englishGuides['photography-rules'],
    englishGuides['photo-spots'],
    englishGuides['stepwell-culture-route'],
  ],
};
