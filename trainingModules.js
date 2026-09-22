// Dual-Track Leadership Training Manual — hospitality/floor-specific modules.
// Each module develops the leader and the team simultaneously.
// Modules without content yet are left `null` and rendered as "coming soon"
// by Manual.jsx — add content here as each module is built, no page changes needed.

export const MODULE_1 = {
  id: 'm1',
  title: 'The Masterful Pre-Shift',
  subtitle: 'Hospitality & Energy Focus',
  intro:
    'The pre-shift is the single highest-leverage five minutes of the day. It is not a briefing — it is a thermostat-setting event. Whatever temperature a leader brings to that huddle is the temperature the team carries onto the floor.',

  scriptingMatrix: {
    scenario:
      'Friday dinner rush, one line cook short, a VIP table booked for 7pm.',
    low: {
      label: 'Low-Energy / Vague',
      text: `"Okay guys, listen up. Busy night tonight. We're short-staffed in the kitchen so just be patient with tickets. Try to be nice to guests and watch your times. There's a VIP table at 7, so, you know, take care of them. Any questions? Alright, let's have a good shift."`,
    },
    high: {
      label: 'High-Energy / Ultra-Clear',
      text: `"We're one line cook short tonight — that's on us to manage, not on the guest to notice. The moment you drop a ticket, tell the table what's great about tonight's specials while they wait. Table 14 at 7 is a VIP — greet them by name before they sit, and if their entrée runs past 15 minutes, I personally bring a comped appetizer to the table. That's the standard tonight. Give me a 'let's go' if you're locked in."`,
    },
    rows: [
      { element: 'Framing the shortage', low: 'Just be patient', high: 'Here\u2019s exactly how we manage it: [specific action]' },
      { element: 'VIP instruction', low: 'Take care of them', high: 'Greet by name. If X happens, Y is the standard response.' },
      { element: 'Tone delivery', low: 'Flat, monotone, eyes down', high: 'Stands tall, eye contact, voice has lift' },
      { element: 'Close', low: '\u201cAny questions? Let\u2019s have a good shift\u201d', high: 'Calls for energy back from the team' },
    ],
  },

  engagementSteps: [
    {
      title: 'Open with a call, not a statement',
      detail: '"Give me one word for your energy walking in today." Forces immediate participation and gives real diagnostic data on who might need a check-in later.',
    },
    {
      title: 'Let someone else own the win',
      detail: '"Who had a moment yesterday they\u2019re proud of?" Let them tell it uninterrupted \u2014 installs the standard through peer example, not top-down decree.',
    },
    {
      title: 'State the focus, then test it',
      detail: 'Give the one clear focus, then: "Someone repeat that back in your own words." If nobody can, it wasn\u2019t clear enough \u2014 fix it on the spot.',
    },
    {
      title: 'Cold-call for an example',
      detail: '"Give me an example of when that might come up tonight." Forces the team to mentally rehearse the behavior before they hit the floor.',
    },
    {
      title: 'End on their voice, not yours',
      detail: '"What\u2019s the energy word for tonight?" Let them shout it together \u2014 the last word before doors open should come from them.',
    },
  ],

  dualTrack: [
    { leader: 'Command presence \u2014 holding a room\u2019s attention in under 90 seconds, no notes', team: 'Confidence \u2014 they\u2019ve rehearsed the exact words and actions before facing a guest' },
    { leader: 'Precision communication \u2014 translating a value into a physical action', team: 'Clarity \u2014 zero gray area about what "good" looks like tonight' },
    { leader: 'Emotional regulation \u2014 generating genuine energy on command, even on a hard day', team: 'Psychological safety \u2014 a team that\u2019s asked and heard learns their voice matters' },
    { leader: 'Real-time facilitation \u2014 cold-calling, redirecting, keeping the huddle tight', team: 'Retention \u2014 because they said it out loud, it sticks' },
  ],

  compoundingEffect:
    'A leader who runs this structure for two weeks straight builds a team that expects to be asked, expects to speak, and expects clarity \u2014 which means every future coaching conversation, correction, and appraisal lands on a team already trained to engage rather than just absorb.',
}

export const MODULE_2 = null // Deep Dive into Leading & Team Development \u2014 not yet built
export const MODULE_3 = null // Adaptive Knowledge Testing (diagnostic quizzes) \u2014 not yet built

export const MODULES_ORDER = [MODULE_1, MODULE_2, MODULE_3]
