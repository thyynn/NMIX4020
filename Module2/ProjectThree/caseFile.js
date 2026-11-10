const caseOverview = {
  title: "Overview",
  summary:
    "Amanda Knox, an American student in Perugia, Italy, was accused alongside Raffaele Sollecito of the 2007 murder of British student Meredith Kercher. The case drew international attention, relied on disputed forensic evidence and interrogation statements, and moved through multiple trials and appeals over several years.",
  coreQuestions: [
    "What reliable forensic evidence tied the suspects to the crime scene?",
    "How did interrogation practices and early investigative theories influence the case?",
    "Which rulings were ultimately upheld by Italy's highest court?"
  ],
  outcome:
    "In 2015, Italy's Supreme Court definitively acquitted Knox and Sollecito of the murder charge; Rudy Guede's conviction was upheld separately."
};

const witnessLog = {
  title: "Key People & Witnesses",
  people: [
    {
      name: "Meredith Kercher",
      role: "Victim",
      notes: "British exchange student living with Knox in Perugia.",
      image:
        "https://famous-trials.com/images/ftrials/AmandaKnox/kercher_laugh.jpg",
      imageAlt: "Meredith Kercher"
    },
    {
      name: "Amanda Knox",
      role: "Accused / Defendant",
      notes: "American student; maintained innocence throughout the appeals.",
      image:
        "https://famous-trials.com/images/ftrials/AmandaKnox/amanda-knoxleftprofile2.jpg",
      imageAlt: "Amanda Knox"
    },
    {
      name: "Raffaele Sollecito",
      role: "Accused / Defendant",
      notes: "Italian student and Knox's boyfriend at the time.",
      image:
        "https://famous-trials.com/images/ftrials/AmandaKnox/raffaelesollecitowithguard.jpg",
      imageAlt: "Raffaele Sollecito"
    },
    {
      name: "Rudy Guede",
      role: "Convicted",
      notes: "Convicted in a separate fast-track trial for Kercher's murder.",
      image:
        "https://famous-trials.com/images/ftrials/AmandaKnox/Rudy-Guede2.jpg",
      imageAlt: "Rudy Guede"
    },
    {
      name: "Patrick Lumumba",
      role: "Accused by Knox",
      notes: "Named during interrogation; later exonerated.",
      image:
        "https://famous-trials.com/images/ftrials/AmandaKnox/akrstogether.jpg",
      imageAlt: "Amanda Knox and Raffaele Sollecito"
    }
  ]
};

const timelineData = {
  title: "Timeline",
  events: [
    { date: "Nov 1, 2007", event: "Meredith Kercher is found murdered in Perugia." },
    { date: "Nov 2007", event: "Knox and Sollecito are arrested after police questioning." },
    { date: "Nov 10, 2007", event: "Fingerprints in the murder room match Rudy Guede; he is later arrested in Mainz, Germany." },
    { date: "Sep 18, 2008", event: "Pretrial proceedings begin; later folded into Guede's fast-track case." },
    { date: "Jan 2009", event: "Full trial opens in Perugia's Hall of Frescoes." },
    { date: "Dec 4, 2009", event: "Knox and Sollecito are convicted in the first trial." },
    { date: "Oct 3, 2011", event: "Appeal court overturns convictions; Knox and Sollecito are released." },
    { date: "Mar 2013", event: "Italy's Supreme Court orders a new appeal trial." },
    { date: "Jan 2014", event: "Appeal court in Florence re-convicts Knox and Sollecito." },
    { date: "Mar 2015", event: "Supreme Court annuls convictions and issues definitive acquittals." },
    { date: "Jun 5, 2024", event: "Florence appeal court reaffirms Knox's conviction for slander involving Lumumba." },
    { date: "Jan 23, 2025", event: "Italy's Supreme Court confirms the slander conviction." }
  ]
};

const trialRecord = {
  title: "Trial & Appeals",
  firstTrial: {
    label: "First Trial (2009)",
    summary:
      "The initial trial opened in January 2009 in the Hall of Frescoes, with months of prosecution testimony and a December 4, 2009 verdict."
  },
  appeals: [
    {
      label: "Appeal (2011)",
      summary:
        "Independent review of forensic evidence contributed to acquittals for Knox and Sollecito."
    },
    {
      label: "Supreme Court Review (2013)",
      summary:
        "The Supreme Court set aside the acquittals and ordered a new appeal."
    },
    {
      label: "Florence Appeal (2014)",
      summary:
        "A new appeal court reinstated convictions for both defendants."
    },
    {
      label: "Final Supreme Court Ruling (2015)",
      summary:
        "Definitive acquittal for Knox and Sollecito, closing the murder case."
    }
  ]
};

const evidenceVault = {
  title: "Evidence & Disputes",
  items: [
    {
      label: "Forensic Evidence",
      detail: "DNA evidence on a knife and bra clasp was debated, with defense experts raising contamination concerns."
    },
    {
      label: "Interrogation Statements",
      detail: "Police questioning, disputed interrogation practices, and Knox's signed statements were central points of controversy."
    },
    {
      label: "Alternate Suspect Evidence",
      detail: "Rudy Guede's DNA and a shoe print linked him to the scene and supported his separate conviction."
    },
    {
      label: "Staged Break-In Theory",
      detail: "Investigators argued the broken window and room disturbance suggested a staged break-in."
    },
    {
      label: "Media Coverage",
      detail: "International attention amplified public pressure and shaped perceptions."
    }
  ]
};

const caseImpact = {
  title: "Impact & Legacy",
  points: [
    "The case fueled debate about forensic standards, interrogation practices, and investigative bias.",
    "It highlighted contrasts between U.S. and Italian legal procedures, especially during appeals.",
    "Media attention shaped public perception and added pressure on the legal process."
  ]
};

const reflections = {
  title: "Reflections",
  entries: [
    {
      question: "Provide at least one prompt you used to build this case file.",
      answer: "Create a case file for the Amanda Knox trial (html, css, js) with several sections (overview, witnesses, timeline, trial, etc.), and incorporate objects in a few of the sections."
    },
    {
      question: "What did you change after the AI output?",
      answer: "I added photos, buttons, more information, and fixed any formating issues."
    },
    {
      question: "What did you learn about JS objects?",
      answer: "I learned that JavaScript objects are a powerful way to organize and structure data. They allow you to group related information together in a way that is easy to access and manipulate. I also learned that you can use objects to create more complex data structures, such as arrays of objects, which can be very useful for representing real-world scenarios like the case file I created."
    },
    {
      question: "During this project, did you see AI as a shortcut, a collaborator, or something else?",
      answer: "I saw Codex as a way to start a draft for me to edit and learn new ways to structure code. I would then make changes to the code and learn from the process. I also used it to generate content for the case file, which I then edited for accuracy and clarity."
    },
    {
      question: "After this project, what is a new boundary you would set for yourself OR a boundary you would remove when using AI?",
      answer: "Before this project, my boundary was that I would always review and edit AI output to ensure accuracy and originality. Now, a new boundary I would set for myself is that I will try to learn why the AI generated certain code and how I can improve upon it."
    }
  ]
};

function renderOverview(data) {
  const section = document.getElementById("overview");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.summary}</p>
    <p><span class="label">Outcome</span><br>${data.outcome}</p>
    <div class="label">Core Questions</div>
    <ul class="list">
      ${data.coreQuestions.map((question) => `<li>${question}</li>`).join("")}
    </ul>
  `;
}

function renderWitnesses(data) {
  const section = document.getElementById("witnesses");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      ${data.people
        .map(
          (person) => `
            <li>
              <div class="person-card">
                <img src="${person.image}" alt="${person.imageAlt}" class="person-photo">
                <div>
                  <div class="label">${person.role}</div>
                  <strong>${person.name}</strong><br>
                  ${person.notes}
                </div>
              </div>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderTimeline(data) {
  const section = document.getElementById("timeline");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      ${data.events
        .map(
          (entry) => `
            <li>
              <div class="label">${entry.date}</div>
              ${entry.event}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderTrial(data) {
  const section = document.getElementById("trial");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      <li>
        <div class="label">${data.firstTrial.label}</div>
        ${data.firstTrial.summary}
      </li>
      ${data.appeals
        .map(
          (appeal) => `
            <li>
              <div class="label">${appeal.label}</div>
              ${appeal.summary}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderEvidence(data) {
  const section = document.getElementById("evidence");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      ${data.items
        .map(
          (item) => `
            <li>
              <div class="label">${item.label}</div>
              ${item.detail}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderImpact(data) {
  const section = document.getElementById("impact");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      ${data.points.map((point) => `<li>${point}</li>`).join("")}
    </ul>
  `;
}

function renderReflections(data) {
  const section = document.getElementById("reflections");
  section.innerHTML = `
    <h2>${data.title}</h2>
    <ul class="list">
      ${data.entries
        .map(
          (entry) => `
            <li>
              <strong>${entry.question}</strong><br>
              ${entry.answer}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "witnesses", label: "Witnesses" },
  { id: "timeline", label: "Timeline" },
  { id: "trial", label: "Trial" },
  { id: "evidence", label: "Evidence" },
  { id: "impact", label: "Impact" },
  { id: "reflections", label: "Reflections" }
];

function setActiveSection(activeId) {
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (!element) return;
    element.classList.toggle("is-hidden", section.id !== activeId);
  });

  document.querySelectorAll(".section-nav button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === activeId);
  });
}

function renderNavigation() {
  const nav = document.getElementById("section-nav");
  nav.innerHTML = sections
    .map(
      (section) =>
        `<button type="button" data-section="${section.id}">${section.label}</button>`
    )
    .join("");

  nav.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setActiveSection(button.dataset.section);
  });
}

renderOverview(caseOverview);
renderWitnesses(witnessLog);
renderTimeline(timelineData);
renderTrial(trialRecord);
renderEvidence(evidenceVault);
renderImpact(caseImpact);
renderReflections(reflections);
renderNavigation();
setActiveSection("overview");
