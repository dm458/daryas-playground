const ideas = [
  {
    status: "NEW CONNECTION",
    title: "Use the STAC rubric as an RL signal for creative models",
    summary: "Froggy-Training needs a reliable reward signal for training models to generate creative research ideas. Adapt STAC's evaluation methodology into an evidence-grounded rubric for novelty and utility/feasibility, then use the validated rubric score as the reinforcement-learning reward.",
    connection: "STAC turns ambiguous concepts into measurable constituent scores and gathers validity evidence for the resulting instrument. That methodology can produce a structured reward signal for Froggy-Training—provided the rubric is validated against domain experts before RL training and monitored for reward hacking.",
    sources: ["Froggy-Training RL pipeline", "STAC evaluation methodology"],
    scores: {
      novelty: { value: 3.7, caption: "High" },
      utility: { value: 3.4, caption: "Strong" },
    },
    scoreData: {
      novelty: {
        title: "Novelty score",
        summary: "Using a validated measurement rubric as the reward function is a non-obvious transfer from evaluation research into the model-training loop.",
        constituents: [
          ["Codebase originality", 3.5],
          ["Nonobviousness", 3.9],
          ["Product identity impact", 3.1],
          ["Consumer-facing impact", 3.6],
        ],
      },
      utility: {
        title: "Utility / feasibility score",
        summary: "The proposal creates the missing RL signal with an existing methodology, but requires careful calibration, human validation, and reward-hacking monitoring.",
        constituents: [
          ["Functional value", 3.8],
          ["Community alignment", 3.4],
          ["Affected surface centrality", 3.5],
          ["Situatedness", 3.9],
          ["Feasibility", 2.8],
        ],
      },
    },
    issueTitle: "[Shadow-Frog] Use a validated STAC rubric as the Froggy-Training RL signal",
    details: {
      description: "Implement a structured creativity reward that scores generated research ideas on STAC-derived novelty and utility/feasibility constituents. Aggregate the calibrated constituent scores into the reward used by Froggy-Training's reinforcement-learning loop, with held-out human evaluation as a release gate.",
      subsystem: "training / reward modeling",
      files: [
        "froggy_training/rewards/stac_reward.py",
        "froggy_training/configs/creative_rl.yaml",
        "froggy_training/eval/stac_rubric.yaml",
      ],
      shadowAnchor: "STAC evaluation methodology: construct systematization, evidence-grounded constituent scoring, and multi-lens validity checks.",
    },
    impact: {
      summary: "Enables Froggy-Training to create agents for judgment-heavy business workflows where success cannot be reduced to a deterministic pass/fail check. STAC-derived rubrics can turn ambiguous qualities—such as sound legal reasoning, prudent financial judgment, and useful strategic recommendations—into structured RL signals.",
      outcomes: [
        "Extend RL-trained agents into legal review, financial analysis, compliance, procurement, and other expert workflows without predefined verifiable outcomes.",
        "Keep subjective outcomes auditable by exposing the rubric dimensions behind each reward and monitoring disagreement with human experts.",
      ],
    },
    refined: {
      title: "Build a validated STAC reward model for creative-idea RL",
      summary: "Turn STAC's novelty and utility/feasibility constructs into a scored reward rubric, calibrate it against researcher judgments, and use the validated score as an RL signal for training creative models.",
      plan: [
        "Adapt STAC's novelty and utility/feasibility constituents into a reward rubric for generated research ideas.",
        "Calibrate and validate the reward scorer against blinded domain-expert comparisons.",
        "Use the validated score as the RL signal and monitor held-out quality, constituent drift, and reward hacking.",
      ],
    },
    chat: {
      intro: "<p>I found a promising transfer from STAC into the Froggy-Training loop.</p><p>STAC's structured novelty and utility/feasibility rubric could become the reward signal used to train creative models with reinforcement learning.</p>",
      analysis: "<p>Use the STAC hierarchy to score each generated idea:</p><ul><li><strong>Novelty:</strong> originality, nonobviousness, and meaningful change.</li><li><strong>Utility / feasibility:</strong> functional value, alignment, situatedness, and realistic constraints.</li></ul><p>Aggregate the validated constituent scores into a reward, rather than asking one judge for a holistic creativity rating.</p>",
      refinement: "<p>I refined the idea into a guarded RL workflow and updated the idea card.</p><p>The critical safeguard is to validate the reward against domain experts and held-out quality before optimization, then monitor whether the model learns to satisfy the judge instead of producing better ideas.</p>",
    },
  },
  {
    status: "NEW CONNECTION",
    title: "Use evaluator disagreement to expose creativity blind spots",
    summary: "Run independent creativity judges over the same Froggy-Training outputs, then apply STAC's disagreement-analysis workflow to find ambiguous rubric boundaries—such as when recombination counts as novelty or how close evidence must be to a proposal. Turn confirmed disagreement mechanisms into targeted benchmark cases.",
    connection: "STAC has a workflow that reconstructs competing judge rationales, clusters recurring disagreements, and confirms them on held-out examples. Froggy-Training can reuse it to find where its creativity metric is brittle instead of treating judge inconsistency as noise.",
    sources: ["Froggy-Training evaluation pipeline", "STAC disagreement analysis"],
    scores: {
      novelty: { value: 3.5, caption: "High" },
      utility: { value: 3.2, caption: "Strong" },
    },
    scoreData: {
      novelty: {
        title: "Novelty score",
        summary: "Using disagreement as a source of benchmark cases is a non-obvious transfer that goes beyond ordinary inter-rater agreement analysis.",
        constituents: [
          ["Codebase originality", 3.4],
          ["Nonobviousness", 3.8],
          ["Product identity impact", 2.9],
          ["Consumer-facing impact", 3.4],
        ],
      },
      utility: {
        title: "Utility / feasibility score",
        summary: "The idea directly improves evaluator quality and can reuse existing judge outputs, though confirming disagreement mechanisms requires additional experiments.",
        constituents: [
          ["Functional value", 3.6],
          ["Community alignment", 3.2],
          ["Affected surface centrality", 3.3],
          ["Situatedness", 3.7],
          ["Feasibility", 2.5],
        ],
      },
    },
    issueTitle: "[Shadow-Frog] Build disagreement-driven tests for Froggy-Training creativity judges",
    details: {
      description: "Score the same generated ideas with independent creativity judges, reconstruct the reasoning behind disagreements, and cluster repeated rubric-boundary failures. Convert confirmed mechanisms into held-out regression cases for the Froggy-Training evaluator.",
      subsystem: "evaluation / judge quality",
      files: [
        "froggy_training/eval/disagreement_analysis.py",
        "froggy_training/eval/creativity_judges.yaml",
        "froggy_training/tests/test_creativity_boundaries.py",
      ],
      shadowAnchor: "STAC disagreement analysis: reconstruct, cluster, screen, and confirm judge-disagreement mechanisms on held-out examples.",
    },
    impact: {
      summary: "Makes creativity evaluation more stable and diagnosable by turning recurring judge disagreements into explicit product tests.",
      outcomes: [
        "Reduce silent rubric ambiguity in model comparisons and release decisions.",
        "Build a durable regression suite for creativity boundaries such as recombination and evidence proximity.",
      ],
    },
    refined: {
      title: "Build a disagreement-driven red-team suite for creativity judges",
      summary: "Compare independent judge rationales, identify repeated ambiguity mechanisms, and convert each confirmed boundary failure into a regression case for the Froggy-Training creativity benchmark.",
      plan: [
        "Score a shared set of generated ideas with two independent judges.",
        "Cluster disagreements around rubric boundaries such as recombination and evidence proximity.",
        "Confirm each mechanism on held-out ideas and add survivors to a regression suite.",
      ],
    },
    chat: {
      intro: "<p>This second idea uses STAC's disagreement analysis rather than its measurement hierarchy.</p><p>Instead of averaging away judge inconsistency, it treats repeated disagreements as evidence that the creativity rubric has a missing or ambiguous boundary.</p>",
      analysis: "<p>Run two independent judges on the same Froggy-Training outputs, reconstruct why their labels differ, and cluster recurring mechanisms.</p><p>The strongest mechanisms become targeted tests—for example, whether recombining familiar techniques should count as novel.</p>",
      refinement: "<p>I converted the connection into a red-team workflow and updated the idea card.</p><p>Each confirmed disagreement becomes a held-out regression case, making evaluator improvements measurable over time.</p>",
    },
  },
];

const ideaTitle = document.getElementById("ideaTitle");
const ideaSummary = document.getElementById("ideaSummary");
const ideaStatus = document.getElementById("ideaStatus");
const ideaCard = document.getElementById("ideaCard");
const refinedPlan = document.getElementById("refinedPlan");
const chatBody = document.getElementById("chatBody");
const chatEmpty = document.getElementById("chatEmpty");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const feedbackModal = document.getElementById("feedbackModal");
const scoreDetails = document.getElementById("scoreDetails");
const scoreDetailsTitle = document.getElementById("scoreDetailsTitle");
const scoreDetailsSummary = document.getElementById("scoreDetailsSummary");
const constituentList = document.getElementById("constituentList");
const toast = document.getElementById("toast");
const noveltyScore = document.getElementById("noveltyScore");
const noveltyMeter = document.getElementById("noveltyMeter");
const noveltyCaption = document.getElementById("noveltyCaption");
const utilityScore = document.getElementById("utilityScore");
const utilityMeter = document.getElementById("utilityMeter");
const utilityCaption = document.getElementById("utilityCaption");
const primarySource = document.getElementById("primarySource");
const secondarySource = document.getElementById("secondarySource");
const refinedPlanList = document.getElementById("refinedPlanList");
const ideaPosition = document.getElementById("ideaPosition");
const previousIdeaButton = document.getElementById("previousIdeaButton");
const nextIdeaButton = document.getElementById("nextIdeaButton");
const addIssueButton = document.getElementById("addIssueButton");
const ideaFeed = document.getElementById("ideaFeed");
const ideaDetails = document.getElementById("ideaDetails");
const ideaDescription = document.getElementById("ideaDescription");
const ideaSubsystem = document.getElementById("ideaSubsystem");
const ideaFiles = document.getElementById("ideaFiles");
const ideaShadowAnchor = document.getElementById("ideaShadowAnchor");
const impactSummary = document.getElementById("impactSummary");
const impactOutcomes = document.getElementById("impactOutcomes");

let chatStep = 0;
let toastTimer;
let currentIdeaIndex = 0;

chatBody.appendChild(ideaFeed);

function getIssueUrl() {
  const idea = ideas[currentIdeaIndex];
  const issueBody = `## Cross-project idea

${idea.summary}

## Why

${idea.connection}

## Proposed plan

${idea.refined.plan.map((item, index) => `${index + 1}. ${item}`).join("\n")}

## Shadow-Frog scores

- Novelty: ${idea.scores.novelty.value.toFixed(1)} / 4
- Utility / feasibility: ${idea.scores.utility.value.toFixed(1)} / 4

Generated from the Shadow-Frog in Lattice concept prototype.`;

  return `https://github.com/dm458/daryas-playground/issues/new?title=${encodeURIComponent(idea.issueTitle)}&body=${encodeURIComponent(issueBody)}`;
}

function renderScoreDetails(type) {
  const data = ideas[currentIdeaIndex].scoreData[type];
  document.querySelectorAll(".score-card").forEach((card) => {
    const isActive = card.dataset.score === type;
    card.setAttribute("aria-expanded", String(isActive));
    card.querySelector(".score-action").textContent = isActive ? "Hide breakdown" : "View breakdown";
  });
  scoreDetailsTitle.textContent = data.title;
  scoreDetailsSummary.textContent = data.summary;
  constituentList.innerHTML = data.constituents.map(([label, value]) => `
    <div class="constituent">
      <span>${label}</span>
      <span class="constituent-bar"><span style="width:${value / 4 * 100}%"></span></span>
      <span class="constituent-value">${value.toFixed(1)}</span>
    </div>
  `).join("");
  scoreDetails.hidden = false;
}

function closeScoreDetails() {
  scoreDetails.hidden = true;
  document.querySelectorAll(".score-card").forEach((card) => {
    card.setAttribute("aria-expanded", "false");
    card.querySelector(".score-action").textContent = "View breakdown";
  });
}

document.querySelectorAll(".score-card").forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeScoreDetails();
    } else {
      renderScoreDetails(card.dataset.score);
    }
  });
});

document.getElementById("closeScoreDetails").addEventListener("click", closeScoreDetails);

function resetChat() {
  chatStep = 0;
  chatBody.querySelectorAll(".message, .suggestion-row").forEach((element) => element.remove());
  chatEmpty.hidden = true;
  chatInput.value = "";
  sendButton.classList.remove("ready");
}

function renderIdea(index, animate = true) {
  currentIdeaIndex = Math.max(0, Math.min(index, ideas.length - 1));
  const idea = ideas[currentIdeaIndex];

  if (animate) ideaCard.classList.add("switching");

  closeScoreDetails();
  closeFeedback();
  ideaStatus.textContent = idea.status;
  ideaStatus.classList.remove("refined");
  ideaTitle.textContent = idea.title;
  ideaSummary.textContent = idea.summary;
  refinedPlan.hidden = true;
  noveltyScore.textContent = idea.scores.novelty.value.toFixed(1);
  noveltyMeter.style.width = `${idea.scores.novelty.value / 4 * 100}%`;
  noveltyCaption.textContent = idea.scores.novelty.caption;
  utilityScore.textContent = idea.scores.utility.value.toFixed(1);
  utilityMeter.style.width = `${idea.scores.utility.value / 4 * 100}%`;
  utilityCaption.textContent = idea.scores.utility.caption;
  primarySource.textContent = idea.sources[0];
  secondarySource.textContent = idea.sources[1];
  ideaDescription.textContent = idea.details.description;
  ideaSubsystem.textContent = idea.details.subsystem;
  ideaFiles.innerHTML = idea.details.files.map((file) => `<code>${file}</code>`).join("");
  ideaShadowAnchor.textContent = idea.details.shadowAnchor;
  impactSummary.textContent = idea.impact.summary;
  impactOutcomes.innerHTML = idea.impact.outcomes.map((outcome) => `<li>${outcome}</li>`).join("");
  ideaDetails.open = false;
  ideaPosition.textContent = `Idea ${currentIdeaIndex + 1} of ${ideas.length}`;
  previousIdeaButton.disabled = currentIdeaIndex === 0;
  nextIdeaButton.disabled = currentIdeaIndex === ideas.length - 1;
  addIssueButton.href = getIssueUrl();
  document.getElementById("feedbackTitle").textContent = `Why isn't idea ${currentIdeaIndex + 1} useful?`;
  document.querySelectorAll("#reasonChips button").forEach((chip) => chip.classList.remove("selected"));
  document.getElementById("feedbackText").value = "";
  resetChat();

  if (animate) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => ideaCard.classList.remove("switching"));
    });
  }
}

previousIdeaButton.addEventListener("click", () => renderIdea(currentIdeaIndex - 1));
nextIdeaButton.addEventListener("click", () => renderIdea(currentIdeaIndex + 1));

function openFeedback() {
  feedbackModal.hidden = false;
  document.getElementById("feedbackText").focus();
}

function closeFeedback() {
  feedbackModal.hidden = true;
}

document.getElementById("notInterestedButton").addEventListener("click", openFeedback);
document.getElementById("feedbackClose").addEventListener("click", closeFeedback);
document.getElementById("feedbackSkip").addEventListener("click", submitFeedback);
document.getElementById("feedbackSubmit").addEventListener("click", submitFeedback);
feedbackModal.addEventListener("click", (event) => {
  if (event.target === feedbackModal) closeFeedback();
});

document.querySelectorAll("#reasonChips button").forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("selected"));
});

function submitFeedback() {
  closeFeedback();
  ideaCard.classList.add("dismissed");
  showToast("Feedback saved. This idea was removed.");
  window.setTimeout(() => ideaCard.classList.remove("dismissed"), 1700);
}

function addMessage(role, html) {
  if (chatEmpty) chatEmpty.hidden = true;
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.innerHTML = role === "assistant"
    ? `<div class="message-avatar">SF</div><div class="message-bubble">${html}</div>`
    : `<div class="message-bubble">${html}</div>`;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function addSuggestions(items) {
  const row = document.createElement("div");
  row.className = "suggestion-row";
  items.forEach((item) => {
    const chip = document.createElement("button");
    chip.className = "suggestion-chip";
    chip.textContent = item.label;
    chip.addEventListener("click", () => {
      row.remove();
      if (item.action === "issue") {
        window.open(getIssueUrl(), "_blank", "noopener,noreferrer");
      } else if (item.action === "feedback") {
        openFeedback();
      } else {
        runChatTurn(item.prompt);
      }
    });
    row.appendChild(chip);
  });
  chatBody.appendChild(row);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function startChat() {
  if (chatStep > 0) {
    chatInput.focus();
    return;
  }
  const idea = ideas[currentIdeaIndex];
  chatStep = 1;
  addMessage("assistant", idea.chat.intro);
  addSuggestions([
    { label: "How would this work?", prompt: "How would this apply to our creativity evaluation?" },
    { label: "Show the supporting evidence", prompt: "Show me the evidence behind this connection." },
  ]);
  chatInput.focus();
}

function runChatTurn(prompt) {
  const idea = ideas[currentIdeaIndex];
  const safePrompt = prompt.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  }[character]));

  addMessage("user", `<p>${safePrompt}</p>`);
  chatInput.value = "";
  sendButton.classList.remove("ready");

  if (chatStep <= 1) {
    chatStep = 2;
    window.setTimeout(() => {
      if (ideas[currentIdeaIndex] !== idea) return;
      addMessage("assistant", idea.chat.analysis);
      addSuggestions([
        { label: "Refine the proposal", prompt: "Make the proposal concrete enough to create an issue." },
        { label: "What should we validate?", prompt: "What validation evidence should we collect?" },
      ]);
    }, 350);
  } else {
    chatStep = 3;
    window.setTimeout(() => {
      if (ideas[currentIdeaIndex] !== idea) return;
      addMessage("assistant", idea.chat.refinement);
      applyRefinement();
      addSuggestions([
        { label: "Add issue", action: "issue" },
        { label: "Not interested", action: "feedback" },
      ]);
    }, 350);
  }
}

function applyRefinement() {
  const idea = ideas[currentIdeaIndex];
  ideaStatus.textContent = "REFINED WITH YOU";
  ideaStatus.classList.add("refined");
  ideaTitle.textContent = idea.refined.title;
  ideaSummary.textContent = idea.refined.summary;
  refinedPlanList.innerHTML = idea.refined.plan.map((item) => `<li>${item}</li>`).join("");
  refinedPlan.hidden = false;
  refinedPlan.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.getElementById("chatButton").addEventListener("click", startChat);

chatInput.addEventListener("input", () => {
  sendButton.classList.toggle("ready", chatInput.value.trim().length > 0);
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    if (chatInput.value.trim()) runChatTurn(chatInput.value.trim());
  }
});

sendButton.addEventListener("click", () => {
  if (chatInput.value.trim()) runChatTurn(chatInput.value.trim());
});

function showToast(message) {
  window.clearTimeout(toastTimer);
  document.getElementById("toastText").textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

const query = new URLSearchParams(window.location.search);
const requestedIdea = Number.parseInt(query.get("idea"), 10);
renderIdea(Number.isInteger(requestedIdea) ? requestedIdea - 1 : 0, false);

const state = query.get("state");
if (state === "feedback") {
  openFeedback();
}
if (state === "details") {
  ideaDetails.open = true;
}
if (state === "chat" || state === "refined") {
  startChat();
}
if (state === "refined") {
  runChatTurn("How would this apply to our creativity evaluation?");
  window.setTimeout(() => runChatTurn("Make the proposal concrete enough to create an issue."), 500);
}
