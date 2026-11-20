/* data.js — all the content in one place.
   Edit copy here; nothing in render.js or scene.js needs to change.
   A line with `tag` shows a yellow pill; without one it is plain text.
   (Files share one global, `SITE`, so the page runs from a double-clicked
   file without a local server.) */

window.SITE = window.SITE || {};

SITE.META = {
  train: '230104',
  name: 'API to KPI Express',
  nameShort: 'API TO KPI EXP',
  email: 'anjaliichaturvedi@gmail.com',
  github: 'https://github.com/anjalichaturvedi',
  linkedin: '#',   // add your LinkedIn URL
  resume: '#'      // add your resume URL
};

// The two end panels are fixed; the stations below are rendered from data.
SITE.STATIONS = [
  {
    id: 'stn1', hindi: 'वसंत कुंज', name: 'DPS Vasant Kunj',
    prev: '◄ START', next: 'NODEBREW JN ►',
    signHi: 'चाय', signEn: 'CHAI · COFFEE', kicker: 'Stn 01 / 04 · School',
    led: 'यात्रीगण कृपया ध्यान दें · Train 230104 · Arriving at DPS Vasant Kunj',
    foot: 'Next: Nodebrew Jn', nextHref: '#stn2',
    lines: [
      { text: 'DPS Vasant Kunj. Where the curiosity started.' },
      { text: 'Learned to code as a teen, Kode with Klossy scholar.' },
      { text: "Then picked for UC Berkeley's women in STEM program, 1 of 30 in the world." }
    ]
  },
  {
    id: 'stn2', hindi: 'नोडब्रू जंक्शन', name: 'Nodebrew Jn',
    prev: '◄ DPS VASANT KUNJ', next: 'JIIT NOIDA ►',
    signHi: 'पूछताछ', signEn: 'ENQUIRY', kicker: 'Stn 02 / 04 · Founder and Lead, 2020 to 2026',
    led: 'यात्रीगण कृपया ध्यान दें · Train 230104 · Arriving at Nodebrew Jn',
    foot: 'Next: JIIT, Noida', nextHref: '#stn3',
    lines: [
      { text: 'Started Nodebrew and grew it into one of the biggest women in tech communities around.' },
      { tag: '70K+', text: 'Members, across 36 countries.' },
      { tag: '35', text: 'People on the team I led.' },
      { tag: '$30K', text: 'Raised from 19 sponsors, Jane Street among them.' },
      { tag: '28+', text: 'Programs run: 3 hackathons, 5 cohorts, 20+ bootcamps.' }
    ]
  },
  {
    id: 'stn3', hindi: 'जे.आई.आई.टी. नोएडा', name: 'JIIT, Noida',
    prev: '◄ NODEBREW JN', next: 'NUTRABAY ►',
    signHi: 'प्रतीक्षालय', signEn: 'WAITING ROOM', kicker: 'Stn 03 / 04 · Computer Science, 2022 to 2026',
    led: 'यात्रीगण कृपया ध्यान दें · Train 230104 · Arriving at JIIT, Noida',
    foot: 'Next: Nutrabay', nextHref: '#stn4',
    lines: [
      { text: 'BS in Computer Science. Four internships first, each a different seat.' },
      { tag: '2021', text: 'RSVI, my first SDE role. Built a web platform for the visually impaired.' },
      { tag: '2023', text: 'InstaPrepsAI, first PM taste. Found where learners quietly dropped off.' },
      { tag: '2024', text: 'SkillArena, product growth. Read the data across 30 colleges, pushed 110% MoM.' },
      { tag: '2025', text: 'Intervue.io, engineering R&D. Coding rubrics across 5+ domains, formatting automated.' }
    ]
  },
  {
    id: 'stn4', hindi: 'न्यूट्राबे', name: 'Nutrabay',
    prev: '◄ JIIT NOIDA', next: 'NEXT STOP ►',
    signHi: 'पूछताछ', signEn: 'ENQUIRY', kicker: 'Stn 04 / 04 · APM, Gurugram, Feb 2026 to now',
    led: 'यात्रीगण कृपया ध्यान दें · Train 230104 · Arriving at Nutrabay',
    foot: 'You are here', nextHref: '#stn5',
    lines: [
      { text: 'APM at Nutrabay, a D2C health brand. I build what runs after you hit buy: delivery, support, the stuff nobody sees but everybody feels.' },
      { tag: '-12%', text: 'Failed deliveries. Outreach that actually reaches people, WhatsApp to SMS to email to an AI voice call. Manual follow-up down 65%, across ~50K shipments.' },
      { tag: '55%', text: 'Of eligible support chats now handled by AI. Tickets per order down 22%.' },
      { tag: '24h', text: 'Saved every week, by pulling order, shipment and calling tools into one workspace for the team.' }
    ]
  }
];
