// Branching leadership scenarios. Each first choice reveals a complication
// (followUp), then a second choice yields coaching feedback tied to a style.

export const SCENARIOS = [
  {
    id: 's1',
    title: 'The Missed Deadline',
    situation:
      'A key project is due Friday. On Wednesday, your lead engineer tells you it won\'t be ready until the following Tuesday.',
    choices: [
      {
        id: 'a',
        text: 'Tell them the deadline is firm and ask what it takes to hit it',
        followUp:
          'They stay late two nights and ship Friday, but seem exhausted and quieter than usual in the following days.',
        options: [
          { id: '1', text: 'Check in on how they\'re doing before assigning the next project', feedback: 'Good recovery — pairing a firm deadline with a genuine follow-up on their wellbeing prevents burnout from becoming a pattern.', style: 'eqLeader' },
          { id: '2', text: 'Move straight to the next priority', feedback: 'The deadline got hit, but unaddressed exhaustion compounds. A quick check-in costs little and prevents quiet burnout.', style: 'directive' },
        ],
      },
      {
        id: 'b',
        text: 'Ask what\'s blocking them and problem-solve together',
        followUp:
          'Turns out a dependency from another team is the real blocker. Fixing it will take a few days regardless of effort.',
        options: [
          { id: '1', text: 'Escalate to the other team\'s lead and reset stakeholder expectations', feedback: 'Strong move — you found the real constraint and addressed it at the source instead of pushing your own team harder for no reason.', style: 'collaborative' },
          { id: '2', text: 'Ask your engineer to push through anyway', feedback: 'Pushing on a dependency you don\'t control usually just produces stress without changing the actual timeline.', style: 'directive' },
        ],
      },
    ],
  },
  {
    id: 's2',
    title: 'The Quiet Team Member',
    situation:
      'In team meetings, one strong performer never speaks up. In 1:1s they have sharp opinions, but they go silent in the group.',
    choices: [
      {
        id: 'a',
        text: 'Call on them directly in the next meeting to share their view',
        followUp:
          'Put on the spot, they freeze and give a vague answer. Afterward they seem uncomfortable.',
        options: [
          { id: '1', text: 'Apologize privately and ask how they\'d prefer to contribute', feedback: 'Recovering well — adapting your approach to how someone actually processes things builds more trust than the original ask cost you.', style: 'eqLeader' },
          { id: '2', text: 'Keep calling on them so they get used to it', feedback: 'Repeated public pressure on someone who freezes under it usually trains them to shut down further, not speak up more.', style: 'directive' },
        ],
      },
      {
        id: 'b',
        text: 'Ask them privately what would make speaking up in the group easier',
        followUp:
          'They say they think better in writing and get talked over when they pause to think.',
        options: [
          { id: '1', text: 'Add a written pre-read or async input option before meetings', feedback: 'This directly removes their actual barrier — a small process change that lets a strong contributor actually contribute.', style: 'eqLeader' },
          { id: '2', text: 'Tell the team to be more patient in meetings and move on', feedback: 'A general reminder rarely changes real-time group dynamics. The written option would have addressed the actual root cause.', style: 'collaborative' },
        ],
      },
    ],
  },
  {
    id: 's3',
    title: 'The Unpopular Change',
    situation:
      'Leadership just announced a return-to-office policy your team strongly dislikes. You have to roll it out to your team tomorrow.',
    choices: [
      {
        id: 'a',
        text: 'Present the policy clearly and explain it\'s not up for debate',
        followUp:
          'The team goes quiet in the meeting, but morale visibly drops over the following week and one person mentions job searching.',
        options: [
          { id: '1', text: 'Set up 1:1s to hear individual concerns even though the policy won\'t change', feedback: 'Even when you can\'t change the outcome, being heard changes how people experience it. This limits further damage.', style: 'eqLeader' },
          { id: '2', text: 'Assume it will blow over and say nothing further', feedback: 'Unaddressed resentment about a top-down change tends to surface as attrition rather than fade on its own.', style: 'directive' },
        ],
      },
      {
        id: 'b',
        text: 'Acknowledge it\'s unpopular and ask for input on how to implement it',
        followUp:
          'The team proposes a flexible hybrid interpretation that technically complies but keeps most people happy.',
        options: [
          { id: '1', text: 'Take the proposal to leadership and advocate for it', feedback: 'You turned a mandate you couldn\'t control into a problem the team helped solve — strong use of collaborative leadership within real constraints.', style: 'collaborative' },
          { id: '2', text: 'Implement it exactly as leadership specified, ignoring the proposal', feedback: 'Asking for input and then discarding it usually damages trust more than not asking at all would have.', style: 'directive' },
        ],
      },
    ],
  },
  {
    id: 's4',
    title: 'The Rising Star Who Wants More',
    situation:
      'Your best performer asks for a promotion. You agree they deserve it, but there\'s no budget approved for six months.',
    choices: [
      {
        id: 'a',
        text: 'Be direct: no budget, but you\'ll advocate for it in six months',
        followUp:
          'They thank you but you later learn they\'ve started interviewing elsewhere.',
        options: [
          { id: '1', text: 'Proactively check in on what would keep them engaged in the meantime', feedback: 'Honesty alone isn\'t retention. Following up on their underlying need (growth, recognition) is what actually keeps strong people.', style: 'eqLeader' },
          { id: '2', text: 'Let it play out and see what happens', feedback: 'Losing your best performer over a timing gap is often avoidable with a small proactive gesture in the interim.', style: 'handsOff' },
        ],
      },
      {
        id: 'b',
        text: 'Paint a picture of the growth path and what the next 6 months could build toward',
        followUp:
          'They\'re energized short-term, but three months in, nothing concrete has changed and they seem to be losing faith in the plan.',
        options: [
          { id: '1', text: 'Check in at the halfway point with a concrete update, even if it\'s "still on track"', feedback: 'Vision without a checkpoint reads as empty after a while. A concrete mid-point update keeps the story credible.', style: 'transformational' },
          { id: '2', text: 'Assume the initial conversation was enough motivation', feedback: 'A single inspiring conversation fades fast without reinforcement — especially when the promised timeline stretches on.', style: 'transformational' },
        ],
      },
    ],
  },
  {
    id: 's5',
    title: 'The Mistake That Cost Money',
    situation:
      'A team member\'s error caused a costly production incident. They\'re clearly shaken and worried about their job.',
    choices: [
      {
        id: 'a',
        text: 'Focus the conversation on what happened and how to prevent it',
        followUp:
          'They give you a clear, professional postmortem, but seem to be holding back and avoid eye contact.',
        options: [
          { id: '1', text: 'Pause and ask directly how they\'re feeling about it', feedback: 'Facts alone don\'t address the fear underneath. A direct, human check-in often unlocks what a purely technical debrief misses.', style: 'eqLeader' },
          { id: '2', text: 'Move on once the technical postmortem is done', feedback: 'The incident is documented, but an unaddressed fear of "am I going to get fired" tends to quietly erode confidence and risk-taking.', style: 'directive' },
        ],
      },
      {
        id: 'b',
        text: 'Reassure them first, then work through what happened together',
        followUp:
          'They relax and give an honest, detailed account — including a second smaller issue they\'d been afraid to mention.',
        options: [
          { id: '1', text: 'Thank them for the honesty and reinforce that surfacing issues early is valued', feedback: 'This is how you build a team that self-reports problems early instead of hiding them — a compounding advantage over time.', style: 'eqLeader' },
          { id: '2', text: 'Note the second issue but don\'t comment on the honesty', feedback: 'You got the information, but missed a cheap opportunity to reinforce the exact behavior (early honesty) you want more of.', style: 'collaborative' },
        ],
      },
    ],
  },
  {
    id: 's6',
    title: 'The 86\'d Item Mid-Rush',
    situation:
      'It\'s peak lunch rush. The kitchen just told you a top-selling item is 86\'d, and there are still fifteen people in line who haven\'t ordered yet.',
    choices: [
      {
        id: 'a',
        text: 'Tell the cashiers to just handle it as guests order',
        followUp:
          'A few cashiers improvise well, but two others let confused guests linger at the register while they figure out what to say, backing up the line.',
        options: [
          { id: '1', text: 'Step in immediately, give the team one clear alternative to suggest, and move down the line', feedback: 'A fast, specific redirect gets the line moving again — waiting for the team to individually improvise under pressure costs real minutes.', style: 'directive' },
          { id: '2', text: 'Let it play out since most cashiers are managing fine', feedback: 'Two backed-up registers during peak rush compounds fast. "Mostly fine" isn\'t the standard when a guest is stuck mid-line.', style: 'handsOff' },
        ],
      },
      {
        id: 'b',
        text: 'Grab the mic and announce the 86 with a specific alternative to the whole line at once',
        followUp:
          'The line moves smoothly, but a couple of regulars look disappointed they didn\'t get to ask questions about the swap.',
        options: [
          { id: '1', text: 'Have cashiers personally check in with anyone who looked hesitant as they reach the register', feedback: 'The broadcast solved the speed problem; a personal follow-up for the guests who still looked unsure closes the empathy gap.', style: 'eqLeader' },
          { id: '2', text: 'Consider it handled since the line kept moving', feedback: 'Throughput recovered, but a disappointed regular who never got a personal word is a guest experience left on the table.', style: 'directive' },
        ],
      },
    ],
  },
  {
    id: 's7',
    title: 'The Cashier About to Break',
    situation:
      'Mid-shift, you notice one of your newer cashiers is flushed, has made two small order mistakes in a row, and looks like they might cry between guests.',
    choices: [
      {
        id: 'a',
        text: 'Pull them aside immediately for a quick, private check-in',
        followUp:
          'They admit they\'re overwhelmed and embarrassed about the mistakes. The register now needs coverage while you talk.',
        options: [
          { id: '1', text: 'Have a lead cover the register for five minutes so the conversation isn\'t rushed', feedback: 'Protecting the moment shows the check-in was real, not performative — five minutes of coverage buys a lot of trust.', style: 'eqLeader' },
          { id: '2', text: 'Keep the conversation to under a minute so the register isn\'t left short', feedback: 'Speed protected the floor but likely left the actual problem — and the person — only half-addressed.', style: 'directive' },
        ],
      },
      {
        id: 'b',
        text: 'Quietly rotate them to a lower-pressure station without making it a moment',
        followUp:
          'They calm down within the hour, but never get the chance to name what was actually wrong, and the same pattern shows up again next Friday.',
        options: [
          { id: '1', text: 'Follow up privately after the shift to understand what happened', feedback: 'The in-the-moment fix bought relief; the after-shift conversation is what actually prevents the pattern from repeating.', style: 'eqLeader' },
          { id: '2', text: 'Consider it resolved since the shift recovered', feedback: 'The symptom went away for one shift, but with no root cause found, Friday will likely repeat itself.', style: 'handsOff' },
        ],
      },
    ],
  },
  {
    id: 's8',
    title: 'The VIP Table\'s Wrong Course',
    situation:
      'A VIP guest\'s entrée comes back from the kitchen visibly wrong, seconds before it\'s due at the table — and the guest is already watching the pass.',
    choices: [
      {
        id: 'a',
        text: 'Quietly hold the plate and calmly reset the table\'s expectations without naming the mistake',
        followUp:
          'The recovery reads as seamless to the guest, but your line cooks don\'t know the specific standard that was actually broken.',
        options: [
          { id: '1', text: 'Debrief the kitchen right after service on exactly what went wrong and the fix', feedback: 'Protecting the guest experience in the moment and coaching the root cause afterward are both needed — this closes the loop.', style: 'directive' },
          { id: '2', text: 'Move on without a kitchen debrief since the guest never noticed', feedback: 'The guest was protected, but the same mistake is now likely to happen again with the next VIP table.', style: 'handsOff' },
        ],
      },
      {
        id: 'b',
        text: 'Tell the table there was a kitchen mix-up and it will be a couple more minutes',
        followUp:
          'The guest is understanding, but the moment of "effortless service" — the whole point of the room — is gone for the rest of the visit.',
        options: [
          { id: '1', text: 'Recover the tone with a genuine, unprompted gesture before the next course arrives', feedback: 'Naming the mistake cost some polish; a real gesture afterward can still rebuild the evening\'s feel.', style: 'eqLeader' },
          { id: '2', text: 'Continue the rest of service as normal', feedback: 'The information was honest, but the composed, choreographed feel the room sells never got recovered.', style: 'directive' },
        ],
      },
    ],
  },
]
