function Method(title, subtitle, description, target) {
  this.title = title
  this.subtitle = subtitle
  this.description = description
  this.target = target
}

var abTesting = new Method(
  "A/B Testing",
  "Quantitative, Behavioral",
  "Comparing two versions of the same design to see which performs statistically better against a predetermined goal",
  "ab-testing-card"
)

var heuristic = new Method(
  "Heuristic Analysis",
  "Quantitative, Behavioral",
  "Analyzing interfaces with respect to a set of usability best practices to detect usability problems before actual users engage with the interface",
  "heuristic-modal"
)

var dataTracking = new Method(
  "Data Tracking",
  "Quantitative, Behavioral",
  "Description of Data Tracking",
  "data-modal"
)

var webAnalytics = new Method(
  "Web Analytics",
  "Quantitative, Behavioral",
  "Measurement, collection, analysis, and reporting of internet data to understand and optimize usage and usability",
  "analytics-modal"
)

var usabilityTesting = new Method(
  "Usability Testing",
  "Qualitative, Behavioral",
  "Focuses on people and their tasks and seeks empirical evidence about how to improve the usability of an interface",
  "usability-modal"
)

var ethnography = new Method(
  "Ethnography",
  "Qualitative, Behavioral",
  "Attentive observation of people, artifacts, environments, events, behaviors, and interactions",
  "ethnography-modal"
)

var thinkAloud = new Method(
  "Think Aloud Protocol",
  "Qualitative, Behavioral",
  "A method where participants verbalize what they are doing and thinking while completing a task, revealing interface aspects that delight, confuse, and frustrate",
  "thinkaloud-modal"
)

var contextualInquiry = new Method(
  "Contextual Inquiry",
  "Qualitative, Behavioral",
  "An immersive, contextual method of observing and interviewing that reveals underlying (and invisible) work structure",
  "contextual-modal"
)

var digitalDiaries = new Method(
  "Diary Studies",
  "Qualitative, Attitudinal",
  "Guiding artifacts and activities that allow users to provide snapshots into their daily lives and events",
  "diaries-modal"
)

var codesign = new Method(
  "Codesign Sessions",
  "Qualitative, Attitudinal",
  "A human-centered approach incorporating active user and stakeholder engagement in participatory design exercises",
  "codesign-modal"
)

var interviews = new Method(
  "Semi-Structured Interviews",
  "Qualitative, Attitudinal",
  "Direct contact with participants one-on-one to collect firsthand personal accounts of experience, opinions, attitudes, and perceptions",
  "interviews-modal"
)

var focusGroups = new Method(
  "Focus Groups",
  "Qualitative, Attitudinal",
  "Convening multiple users to provide insight into themes, patterns, and trends experienced collectively by groups",
  "fg-modal"
)

var speedDating = new Method(
  "Speed Dating",
  "Quantitative, Attitudinal",
  "Comparing multiple design concepts in quick succession to learn how people react while also validating user needs",
  "sd-modal"
)

var cardSorting = new Method(
  "Card Sorting",
  "Quantitative, Attitudinal",
  "Asking users to sort components into different buckets based on their comprehension and expected categorization",
  "cs-modal"
)

var survey = new Method(
  "Survey",
  "Quantitative, Attitudinal",
  "Collecting self-reported information from people about their characteristics, thoughts, feelings, perceptions, behaviors, and attitudes",
  "survey-modal"
)
