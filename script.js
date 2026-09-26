/**
 * VCET Virtual Assistant - Engine v2.5
 * Interactive UI, Enhanced Knowledge Base, and LocalStorage Database Persistence
 */

// ============================================================================
// 1. KNOWLEDGE BASE & FAQ ENGINE
// ============================================================================
const vcetKnowledgeBase = [
  {
    category: "academics",
    keywords: ["branch", "branches", "departments", "courses", "stream", "streams", "intake", "computer", "it", "aids", "extc", "mechanical", "civil"],
    title: "Engineering Branches & Intake",
    answer: `<strong>Vidyavardhini's College of Engineering and Technology (VCET)</strong> offers the following undergraduate (B.E. / B.Tech) programmes affiliated with the University of Mumbai:
<ul>
  <li><strong>Computer Engineering</strong> (Intake: 120 seats)</li>
  <li><strong>Information Technology (IT)</strong> (Intake: 60 seats)</li>
  <li><strong>Artificial Intelligence & Data Science (AI & DS)</strong> (Intake: 60 seats)</li>
  <li><strong>Electronics & Telecommunication (EXTC)</strong> (Intake: 60 seats)</li>
  <li><strong>Mechanical Engineering</strong> (Intake: 60 seats)</li>
  <li><strong>Civil Engineering</strong> (Intake: 60 seats)</li>
</ul>
All programmes are AICTE-approved and accredited by NAAC with Grade 'A'.`,
    followups: ["Admission eligibility for FE", "College fee structure", "Placement records"]
  },
  {
    category: "admissions",
    keywords: ["admission", "eligibility", "mht-cet", "cet", "jee", "cap", "fe", "first year", "cut off", "cutoff", "process"],
    title: "First-Year Admission Process",
    answer: `<strong>First Year Engineering (FE) Admission Guidelines:</strong>
<ul>
  <li><strong>Eligibility:</strong> Candidates must have passed 10+2 (HSC) with Physics & Mathematics as compulsory subjects, plus Chemistry/Biotechnology/Technical Vocational subject, securing at least <strong>45% marks</strong> (40% for reserved categories).</li>
  <li><strong>Entrance Exams:</strong> Valid score in <strong>MHT-CET</strong> (conducted by State CET Cell, Maharashtra) or <strong>JEE Main (Paper-1)</strong>.</li>
  <li><strong>Counselling:</strong> Centralized Admission Process (CAP) rounds managed by Maharashtra State CET Cell (DTE Code: <strong>3194</strong>).</li>
  <li><strong>Institute Level:</strong> A designated quota is available under Institute Level Quota as per DTE norms.</li>
</ul>`,
    followups: ["What are the college fees?", "What branches are available?", "Required documents for admission"]
  },
  {
    category: "admissions",
    keywords: ["fee", "fees", "cost", "scholarship", "ebc", "tfws", "caste", "concession", "financial"],
    title: "Fees & Scholarships",
    answer: `<strong>Fee Structure & Financial Assistance:</strong>
<ul>
  <li><strong>Annual Tuition Fees:</strong> Approximately ₹1,10,000 – ₹1,25,000 per academic year (approved by the Fee Regulating Authority, Maharashtra).</li>
  <li><strong>EBC Scheme:</strong> Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna provides <strong>50% tuition fee waiver</strong> for open category students with annual family income under ₹8 Lakhs.</li>
  <li><strong>TFWS (Tuition Fee Waiver Scheme):</strong> 100% tuition waiver for meritorious candidates allocated under TFWS seats through CAP.</li>
  <li><strong>Government Scholarships:</strong> Full or partial concessions for SC / ST / VJ-NT / OBC / SBC candidates through the MahaDBT portal.</li>
</ul>`,
    followups: ["Admission eligibility for FE", "Placement statistics", "Contact office"]
  },
  {
    category: "placements",
    keywords: ["placement", "placements", "job", "jobs", "package", "salary", "companies", "recruiters", "tcs", "infosys", "highest package"],
    title: "Placements & Career Opportunities",
    answer: `<strong>VCET Training & Placement Cell Overview:</strong>
<ul>
  <li><strong>Top Recruiters:</strong> TCS, Infosys, Capgemini, LTIMindtree, Persistent Systems, Cognizant, Reliance Jio, Zeus Learning, Hexaware, and more.</li>
  <li><strong>Highest Package:</strong> Up to <strong>₹12 LPA – ₹18 LPA</strong> in recent recruitment drives.</li>
  <li><strong>Average Package:</strong> Approximately <strong>₹4.5 LPA – ₹5.5 LPA</strong>.</li>
  <li><strong>Internship Support:</strong> Dedicated summer and winter internship drives with corporate tie-ups and startup incubators.</li>
</ul>`,
    followups: ["Branches at VCET", "Campus facilities", "Contact placement cell"]
  },
  {
    category: "campus",
    keywords: ["location", "reach", "address", "station", "distance", "route", "map", "where", "vasai", "direction"],
    title: "Campus Location & How to Reach",
    answer: `<strong>VCET Location & Transit Guide:</strong>
<p><strong>Address:</strong> K.T. Marg, Vartak College Campus, Vasai Road (West), Palghar - 401202, Maharashtra.</p>
<ul>
  <li><strong>By Local Train (Western Railway):</strong> Just a <strong>5 to 7-minute walk</strong> (approx. 400 meters) from Vasai Road Railway Station (West side).</li>
  <li><strong>By Road:</strong> Easily accessible via Western Express Highway (NH 48) via Vasai-Nalasopara Link Road.</li>
  <li><strong>By Bus / Auto:</strong> Share-autos and VVMT municipal buses are readily available outside the station.</li>
</ul>`,
    followups: ["Campus facilities and library", "College contact number", "Hostel availability"]
  },
  {
    category: "campus",
    keywords: ["facility", "facilities", "campus", "library", "lab", "labs", "canteen", "sports", "gymkhana", "wifi"],
    title: "Campus Infrastructure & Facilities",
    answer: `<strong>Campus Highlights & Student Amenities:</strong>
<ul>
  <li><strong>Central Library:</strong> Over 35,000+ volumes, IEEE e-journal subscriptions, digital library, and a spacious quiet reading room.</li>
  <li><strong>Computing Labs:</strong> High-speed gigabit Wi-Fi network, modern workstations with Linux/Windows dual boot, and dedicated AI/Data Science lab.</li>
  <li><strong>Sports & Gymkhana:</strong> Facilities for badminton, table tennis, chess, carrom, and turf grounds for cricket & football tournaments.</li>
  <li><strong>Canteen & Auditoriums:</strong> Hygienic cafeteria serving vegetarian breakfast/meals, and an air-conditioned seminar hall for conferences.</li>
</ul>`,
    followups: ["College festivals & events", "Branches available", "How to reach VCET"]
  },
  {
    category: "campus",
    keywords: ["fest", "fests", "event", "events", "oscillations", "zeal", "solect", "cultural", "hackathon", "annual"],
    title: "Festivals & Student Life",
    answer: `<strong>Extracurricular Events & Annual Festivals:</strong>
<ul>
  <li><strong>Oscillations:</strong> The flagship National-level Technical Symposium featuring hackathons, paper presentations, and robotics competitions.</li>
  <li><strong>Zeal:</strong> The grand Annual Cultural Fest packed with music, drama, dance showcases, and celebrity nights.</li>
  <li><strong>Sports Meet:</strong> Annual inter-department sports olympiad covering outdoor and indoor sports.</li>
  <li><strong>Student Chapters:</strong> Active bodies including IEEE VCET, CSI, IETE, NSS unit, and VCET E-Cell.</li>
</ul>`,
    followups: ["What branches are available?", "Campus facilities", "Contact details"]
  },
  {
    category: "contact",
    keywords: ["contact", "phone", "email", "website", "office", "enquiry", "telephone", "principal"],
    title: "Official Contact Information",
    answer: `<strong>Official Contact Details:</strong>
<ul>
  <li><strong>College Office Phone:</strong> +91 0250-2338234 / 2338235</li>
  <li><strong>Official Email:</strong> <a href="mailto:vcet_inbox@vcet.edu.in">vcet_inbox@vcet.edu.in</a></li>
  <li><strong>Official Website:</strong> <a href="https://vcet.edu.in" target="_blank">www.vcet.edu.in</a></li>
  <li><strong>Office Hours:</strong> Monday – Saturday (10:00 AM to 5:00 PM)</li>
  <li><strong>Address:</strong> K.T. Marg, Vasai Road (W), Dist. Palghar - 401202.</li>
</ul>`,
    followups: ["Admission eligibility for FE", "College fee structure", "How to reach VCET"]
  },
  {
    category: "admissions",
    keywords: ["document", "documents", "certificate", "hsc", "ssc", "domicile", "leaving"],
    title: "Required Documents for Admission",
    answer: `<strong>Key Documents Checklist for FE Engineering:</strong>
<ul>
  <li>MHT-CET / JEE Main Score Card</li>
  <li>HSC (Std. XII) & SSC (Std. X) Marksheets</li>
  <li>College Leaving / Transfer Certificate (LC/TC)</li>
  <li>Maharashtra State Domicile Certificate / Birth Certificate</li>
  <li>Caste Certificate, Validity & Non-Creamy Layer (if applicable)</li>
  <li>Income Certificate issued by Tahsildar (for EBC/TFWS claims)</li>
  <li>Aadhaar Card copy & 4 recent passport-size photographs</li>
</ul>`,
    followups: ["FE Admission procedure", "Fees & Scholarships", "Contact office"]
  },
  {
    category: "academics",
    keywords: ["full form", "who is vcet", "about vcet", "vidyavardhini", "trust", "history"],
    title: "About VCET & Trust",
    answer: `<strong>Vidyavardhini's College of Engineering and Technology (VCET)</strong> was established in 1994 under the prestigious <em>Vidyavardhini Trust</em> (founded in 1970 by the visionary late Padmashri H.G. Vartak).
<br/><br/>
Located across a lush green campus in Vasai, VCET is accredited with <strong>Grade 'A' by NAAC</strong>, approved by AICTE New Delhi, and affiliated to the University of Mumbai. It stands as one of the premier engineering hubs in Mumbai's western suburban belt.`,
    followups: ["What branches are available?", "Placement statistics", "How to reach VCET"]
  }
];

// Fallback response for unhandled questions
function getFallbackResponse(query) {
  return `Thank you for your question. While I don't have an exact match for <em>"${escapeHtml(query)}"</em>, here are some key areas I can assist you with right away:
<ul>
  <li><strong>Admissions & MHT-CET Cutoffs:</strong> Eligibility rules, CAP rounds, documents.</li>
  <li><strong>Departments & Intake:</strong> Computer, IT, AI & Data Science, EXTC, Mechanical, Civil.</li>
  <li><strong>Placements:</strong> Recent statistics, salary packages, top recruiters.</li>
  <li><strong>Fees & Concessions:</strong> Tuition fee breakdown, EBC, TFWS, and caste scholarships.</li>
  <li><strong>Location & Campus:</strong> Just 5 minutes from Vasai Road Station.</li>
</ul>
Feel free to click any suggestion below or rephrase your query!`;
}

// ============================================================================
// 2. DATABASE LAYER (localStorage with full schema & session persistence)
// ============================================================================
const DB_STORAGE_KEY = "vcet_ai_assistant_db_v2";

class ChatDatabase {
  constructor() {
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(DB_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn("Error reading database from localStorage:", e);
    }
    // Initialize default schema
    const initial = {
      currentSessionId: null,
      sessions: [],
      settings: {
        theme: "light",
        voiceEnabled: false
      },
      stats: {
        totalQueries: 0
      }
    };
    this.save(initial);
    return initial;
  }

  save(dataToSave = this.data) {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
      console.error("Failed to save database to localStorage:", e);
    }
  }

  getSessions() {
    return this.data.sessions || [];
  }

  getCurrentSession() {
    if (!this.data.currentSessionId && this.data.sessions.length > 0) {
      this.data.currentSessionId = this.data.sessions[0].id;
    }
    return this.data.sessions.find(s => s.id === this.data.currentSessionId) || null;
  }

  createSession(initialTitle = "New Conversation") {
    const newSession = {
      id: "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      title: initialTitle,
      createdAt: new Date().toISOString(),
      messages: []
    };
    this.data.sessions.unshift(newSession);
    this.data.currentSessionId = newSession.id;
    this.save();
    return newSession;
  }

  switchSession(sessionId) {
    const exists = this.data.sessions.find(s => s.id === sessionId);
    if (exists) {
      this.data.currentSessionId = sessionId;
      this.save();
      return exists;
    }
    return null;
  }

  addMessage(sender, text, feedback = null) {
    let session = this.getCurrentSession();
    if (!session) {
      session = this.createSession();
    }

    const messageObj = {
      id: "msg_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      feedback
    };

    session.messages.push(messageObj);

    // Auto-update session title from first user query
    if (sender === "user" && session.messages.filter(m => m.sender === "user").length === 1) {
      session.title = text.length > 32 ? text.substring(0, 32) + "..." : text;
    }

    this.data.stats.totalQueries = (this.data.stats.totalQueries || 0) + 1;
    this.save();
    return messageObj;
  }

  updateMessageFeedback(messageId, feedbackValue) {
    const session = this.getCurrentSession();
    if (!session) return;

    const msg = session.messages.find(m => m.id === messageId);
    if (msg) {
      msg.feedback = msg.feedback === feedbackValue ? null : feedbackValue;
      this.save();
      return msg.feedback;
    }
    return null;
  }

  clearCurrentSessionMessages() {
    const session = this.getCurrentSession();
    if (session) {
      session.messages = [];
      session.title = "Cleared Conversation";
      this.save();
    }
  }

  deleteSession(sessionId) {
    this.data.sessions = this.data.sessions.filter(s => s.id !== sessionId);
    if (this.data.currentSessionId === sessionId) {
      this.data.currentSessionId = this.data.sessions.length > 0 ? this.data.sessions[0].id : null;
    }
    this.save();
  }

  clearAllSessions() {
    this.data.sessions = [];
    this.data.currentSessionId = null;
    this.save();
  }

  getSetting(key) {
    return this.data.settings ? this.data.settings[key] : null;
  }

  setSetting(key, val) {
    if (!this.data.settings) this.data.settings = {};
    this.data.settings[key] = val;
    this.save();
  }
}

// Instantiate Database
const db = new ChatDatabase();

// ============================================================================
// 3. APPLICATION STATE & DOM REFERENCES
// ============================================================================
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const voiceBtn = document.getElementById("voice-btn");
const voiceToggleBtn = document.getElementById("voice-toggle-btn");
const speechIcon = document.getElementById("speech-icon");
const themeToggle = document.getElementById("theme-toggle");
const historyBtn = document.getElementById("history-btn");
const historyCountBadge = document.getElementById("history-count");
const clearBtn = document.getElementById("clear-btn");
const exportChatBtn = document.getElementById("export-chat-btn");
const charCountSpan = document.getElementById("char-count");
const followupTray = document.getElementById("followup-tray");

// History Drawer elements
const historyDrawer = document.getElementById("history-drawer");
const historyBackdrop = document.getElementById("history-backdrop");
const closeHistoryBtn = document.getElementById("close-history-btn");
const historySessionList = document.getElementById("history-session-list");
const newSessionBtn = document.getElementById("new-session-btn");
const clearAllHistoryBtn = document.getElementById("clear-all-history-btn");

// Filter elements
const categoryTabs = document.getElementById("category-tabs");
const chipFilterInput = document.getElementById("chip-filter-input");
const quickChipContainer = document.getElementById("quick-chips");
const toastShelf = document.getElementById("toast-shelf");

// Speech recognition instance
let speechRecognizer = null;
let isListening = false;
let isAudioOutputEnabled = db.getSetting("voiceEnabled") || false;

// ============================================================================
// 4. UI HELPER FUNCTIONS & TOASTS
// ============================================================================
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast-msg toast-${type}`;
  toast.innerHTML = `<span>${type === "success" ? "✅" : type === "warning" ? "⚠️" : "ℹ️"}</span> <span>${escapeHtml(message)}</span>`;

  toastShelf.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Speak aloud using SpeechSynthesis
function speakAloud(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel(); // Stop prior speech
  
  // Clean HTML tags from speech text
  const cleanText = text.replace(/<[^>]*>?/gm, " ");
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

// Update History Count Badge
function updateHistoryBadge() {
  const sessions = db.getSessions();
  if (historyCountBadge) {
    historyCountBadge.textContent = sessions.length;
  }
}

// ============================================================================
// 5. CHAT RENDERING ENGINE
// ============================================================================
function renderMessageRow(msgObj, isTyping = false) {
  const row = document.createElement("div");
  row.className = `chat-row ${msgObj.sender === "bot" ? "bot-row" : "user-row"}`;
  row.id = msgObj.id || "msg_typing";

  // Avatar
  const avatar = document.createElement("div");
  avatar.className = `msg-avatar ${msgObj.sender === "bot" ? "bot-avatar" : "user-avatar"}`;
  avatar.textContent = msgObj.sender === "bot" ? "V" : "U";

  // Bubble Wrapper
  const bubbleWrap = document.createElement("div");
  bubbleWrap.className = "msg-bubble-wrap";

  // Bubble Content
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";

  if (isTyping) {
    bubble.innerHTML = `
      <div class="typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>`;
  } else {
    bubble.innerHTML = msgObj.text;
  }

  bubbleWrap.appendChild(bubble);

  // Meta row (timestamp and actions)
  if (!isTyping) {
    const metaRow = document.createElement("div");
    metaRow.className = "msg-meta-row";

    const timeSpan = document.createElement("span");
    timeSpan.textContent = msgObj.time || new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    metaRow.appendChild(timeSpan);

    if (msgObj.sender === "bot") {
      const actions = document.createElement("div");
      actions.className = "msg-actions";

      // Copy text button
      const copyBtn = document.createElement("button");
      copyBtn.className = "action-chip";
      copyBtn.title = "Copy message";
      copyBtn.innerHTML = "📋";
      copyBtn.addEventListener("click", () => {
        const plain = bubble.innerText;
        navigator.clipboard.writeText(plain).then(() => {
          showToast("Copied message to clipboard!", "success");
        });
      });

      // Read aloud button
      const speakBtn = document.createElement("button");
      speakBtn.className = "action-chip";
      speakBtn.title = "Read aloud";
      speakBtn.innerHTML = "🔊";
      speakBtn.addEventListener("click", () => {
        speakAloud(msgObj.text);
      });

      // Feedback Thumbs Up
      const thumbsUp = document.createElement("button");
      thumbsUp.className = `action-chip ${msgObj.feedback === "up" ? "active-up" : ""}`;
      thumbsUp.title = "Helpful";
      thumbsUp.innerHTML = "👍";
      thumbsUp.addEventListener("click", () => {
        const result = db.updateMessageFeedback(msgObj.id, "up");
        thumbsUp.classList.toggle("active-up", result === "up");
        thumbsDown.classList.remove("active-down");
        showToast(result === "up" ? "Thanks for your feedback!" : "Feedback removed", "info");
      });

      // Feedback Thumbs Down
      const thumbsDown = document.createElement("button");
      thumbsDown.className = `action-chip ${msgObj.feedback === "down" ? "active-down" : ""}`;
      thumbsDown.title = "Not helpful";
      thumbsDown.innerHTML = "👎";
      thumbsDown.addEventListener("click", () => {
        const result = db.updateMessageFeedback(msgObj.id, "down");
        thumbsDown.classList.toggle("active-down", result === "down");
        thumbsUp.classList.remove("active-up");
        showToast(result === "down" ? "Feedback recorded. We'll improve!" : "Feedback removed", "info");
      });

      actions.appendChild(copyBtn);
      actions.appendChild(speakBtn);
      actions.appendChild(thumbsUp);
      actions.appendChild(thumbsDown);
      metaRow.appendChild(actions);
    }

    bubbleWrap.appendChild(metaRow);
  }

  row.appendChild(avatar);
  row.appendChild(bubbleWrap);
  chatbox.appendChild(row);
  chatbox.scrollTop = chatbox.scrollHeight;

  return row;
}

// Render follow-up suggestions
function renderFollowups(followupList) {
  followupTray.innerHTML = "";
  if (!followupList || followupList.length === 0) return;

  followupList.forEach(item => {
    const pill = document.createElement("button");
    pill.className = "followup-pill";
    pill.textContent = "✨ " + item;
    pill.addEventListener("click", () => {
      submitUserQuery(item);
    });
    followupTray.appendChild(pill);
  });
}

// Match user question with knowledge base
function matchAnswer(query) {
  const clean = query.toLowerCase().trim();
  let bestMatch = null;
  let highestScore = 0;

  for (const item of vcetKnowledgeBase) {
    let score = 0;
    for (const kw of item.keywords) {
      if (clean.includes(kw)) {
        score += kw.length > 4 ? 2 : 1;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return {
      text: bestMatch.answer,
      followups: bestMatch.followups
    };
  }

  return {
    text: getFallbackResponse(query),
    followups: ["What branches are offered at VCET?", "Tell me about FE Admissions", "How do I reach the campus?"]
  };
}

// Submit a User Query
function submitUserQuery(text) {
  const query = (text || chatInput.value).trim();
  if (!query) return;

  // Render & save user message
  const userMsg = db.addMessage("user", query);
  renderMessageRow(userMsg);

  // Clear input & reset count
  chatInput.value = "";
  chatInput.style.height = "auto";
  updateCharCounter();
  followupTray.innerHTML = "";

  // Render typing indicator
  const typingRow = renderMessageRow({ sender: "bot", text: "" }, true);

  sendBtn.disabled = true;

  // Process and respond
  setTimeout(() => {
    typingRow.remove();

    const result = matchAnswer(query);
    const botMsg = db.addMessage("bot", result.text);
    renderMessageRow(botMsg);
    renderFollowups(result.followups);

    sendBtn.disabled = false;
    updateHistoryBadge();

    // Auto-read aloud if enabled
    if (isAudioOutputEnabled) {
      speakAloud(result.text);
    }
  }, 650);
}

// Load conversation session into view
function loadActiveSession() {
  chatbox.innerHTML = "";
  followupTray.innerHTML = "";

  let session = db.getCurrentSession();
  if (!session || session.messages.length === 0) {
    if (!session) {
      session = db.createSession("Welcome Session");
    }
    // Greet the student if brand new session
    const greetingMsg = db.addMessage(
      "bot",
      `Namaste and welcome to <strong>VCET Virtual Assistant</strong>! 🙏
<br/><br/>
I can help you explore Vidyavardhini's College of Engineering and Technology (Vasai). 
Feel free to ask about <strong>Admissions</strong>, <strong>Engineering Branches</strong>, <strong>Placements</strong>, <strong>Campus Facilities</strong>, or <strong>Fee concessions</strong>!`
    );
    renderMessageRow(greetingMsg);
    renderFollowups(["Branches at VCET", "FE Admission & Cutoffs", "Placement Statistics", "Campus Location"]);
  } else {
    session.messages.forEach(msg => {
      renderMessageRow(msg);
    });
  }

  updateHistoryBadge();
}

// ============================================================================
// 6. HISTORY SIDEBAR DRAWER
// ============================================================================
function openHistoryDrawer() {
  renderHistorySessionsList();
  historyDrawer.classList.add("active");
  historyBackdrop.classList.add("active");
}

function closeHistoryDrawer() {
  historyDrawer.classList.remove("active");
  historyBackdrop.classList.remove("active");
}

function renderHistorySessionsList() {
  historySessionList.innerHTML = "";
  const sessions = db.getSessions();
  const currentSession = db.getCurrentSession();

  if (sessions.length === 0) {
    historySessionList.innerHTML = `<div class="no-sessions">No saved conversations found.</div>`;
    return;
  }

  sessions.forEach(sess => {
    const item = document.createElement("div");
    item.className = `session-item ${currentSession && currentSession.id === sess.id ? "current-active" : ""}`;

    const dateFormatted = new Date(sess.createdAt).toLocaleDateString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    item.innerHTML = `
      <div class="session-item-header">
        <span class="session-date">${dateFormatted}</span>
        <button class="session-delete-btn" title="Delete session">🗑️</button>
      </div>
      <div class="session-title">${escapeHtml(sess.title || "Conversation")}</div>
      <div class="session-count">${sess.messages.length} messages</div>
    `;

    // Click item to switch
    item.addEventListener("click", (e) => {
      if (e.target.closest(".session-delete-btn")) return;
      db.switchSession(sess.id);
      loadActiveSession();
      closeHistoryDrawer();
      showToast("Loaded saved conversation", "info");
    });

    // Delete session button
    const deleteBtn = item.querySelector(".session-delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      db.deleteSession(sess.id);
      renderHistorySessionsList();
      updateHistoryBadge();
      if (!db.getCurrentSession() || db.getCurrentSession().id === sess.id) {
        loadActiveSession();
      }
      showToast("Session deleted", "warning");
    });

    historySessionList.appendChild(item);
  });
}

// ============================================================================
// 7. VOICE RECOGNITION (SPEECH-TO-TEXT)
// ============================================================================
function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceBtn.style.display = "none";
    return;
  }

  speechRecognizer = new SpeechRecognition();
  speechRecognizer.continuous = false;
  speechRecognizer.interimResults = false;
  speechRecognizer.lang = "en-IN";

  speechRecognizer.onstart = () => {
    isListening = true;
    voiceBtn.classList.add("listening");
    showToast("Listening... Speak your question now", "info");
  };

  speechRecognizer.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    chatInput.value = transcript;
    updateCharCounter();
    showToast(`Heard: "${transcript}"`, "success");
    submitUserQuery(transcript);
  };

  speechRecognizer.onerror = (event) => {
    console.warn("Speech recognition error:", event.error);
    showToast("Voice recognition failed: " + event.error, "warning");
  };

  speechRecognizer.onend = () => {
    isListening = false;
    voiceBtn.classList.remove("listening");
  };

  voiceBtn.addEventListener("click", () => {
    if (isListening) {
      speechRecognizer.stop();
    } else {
      try {
        speechRecognizer.start();
      } catch (err) {
        console.error("Mic error:", err);
      }
    }
  });
}

// ============================================================================
// 8. THEME TOGGLER & EXPORT
// ============================================================================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  db.setSetting("theme", theme);
}

function setupTheme() {
  if (localStorage.getItem("vcet_theme_version") !== "v2_offwhite") {
    db.setSetting("theme", "light");
    localStorage.setItem("vcet_theme_version", "v2_offwhite");
  }
  const savedTheme = db.getSetting("theme") || "light";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    showToast(`Switched to ${next === "light" ? "off-white" : "dark"} theme`, "info");
  });
}

function exportConversation() {
  const session = db.getCurrentSession();
  if (!session || session.messages.length === 0) {
    showToast("No messages to export!", "warning");
    return;
  }

  let transcript = `========================================================\n`;
  transcript += `VCET VIRTUAL ASSISTANT - CONVERSATION TRANSCRIPT\n`;
  transcript += `Date: ${new Date().toLocaleString()}\n`;
  transcript += `Session: ${session.title}\n`;
  transcript += `========================================================\n\n`;

  session.messages.forEach(m => {
    const sender = m.sender === "bot" ? "VCET BOT" : "YOU";
    const plainText = m.text.replace(/<[^>]*>?/gm, "");
    transcript += `[${m.time}] ${sender}:\n${plainText}\n\n`;
  });

  const blob = new Blob([transcript], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `VCET_Chat_${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Chat transcript exported!", "success");
}

// ============================================================================
// 9. EVENT LISTENERS & INITIALIZATION
// ============================================================================
function updateCharCounter() {
  const len = chatInput.value.length;
  charCountSpan.textContent = len;
}

// Auto-expand textarea
chatInput.addEventListener("input", () => {
  chatInput.style.height = "auto";
  chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
  updateCharCounter();
});

// Keydown (Enter to send, Shift+Enter for newline)
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submitUserQuery();
  }
});

sendBtn.addEventListener("click", () => submitUserQuery());

// Voice Speech Output Toggle Button
voiceToggleBtn.addEventListener("click", () => {
  isAudioOutputEnabled = !isAudioOutputEnabled;
  db.setSetting("voiceEnabled", isAudioOutputEnabled);
  speechIcon.textContent = isAudioOutputEnabled ? "🔊" : "🔇";
  showToast(isAudioOutputEnabled ? "Voice responses enabled" : "Voice responses muted", "info");
});

// Clear Chat button
clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the current conversation?")) {
    db.clearCurrentSessionMessages();
    loadActiveSession();
    showToast("Chat cleared!", "info");
  }
});

// Export Chat button
exportChatBtn.addEventListener("click", exportConversation);

// History Drawer toggles
historyBtn.addEventListener("click", openHistoryDrawer);
closeHistoryBtn.addEventListener("click", closeHistoryDrawer);
historyBackdrop.addEventListener("click", closeHistoryDrawer);

newSessionBtn.addEventListener("click", () => {
  db.createSession();
  loadActiveSession();
  closeHistoryDrawer();
  showToast("Started new conversation session", "success");
});

clearAllHistoryBtn.addEventListener("click", () => {
  if (confirm("Delete all saved conversation history? This cannot be undone.")) {
    db.clearAllSessions();
    loadActiveSession();
    closeHistoryDrawer();
    showToast("All history cleared", "warning");
  }
});

// Category Tabs filter
categoryTabs.querySelectorAll(".cat-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    categoryTabs.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const category = tab.dataset.category;

    const chips = quickChipContainer.querySelectorAll(".quick-chip");
    chips.forEach(chip => {
      const chipCat = chip.dataset.category;
      if (category === "all" || chipCat === category) {
        chip.style.display = "flex";
      } else {
        chip.style.display = "none";
      }
    });
  });
});

// Search input filter for chips
chipFilterInput.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase().trim();
  const chips = quickChipContainer.querySelectorAll(".quick-chip");
  chips.forEach(chip => {
    const text = chip.innerText.toLowerCase();
    if (!val || text.includes(val)) {
      chip.style.display = "flex";
    } else {
      chip.style.display = "none";
    }
  });
});

// Quick Chips click handler
quickChipContainer.querySelectorAll(".quick-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const q = chip.dataset.question;
    submitUserQuery(q);
  });
});

// Initialize on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  setupTheme();
  setupSpeechRecognition();
  
  if (speechIcon) {
    speechIcon.textContent = isAudioOutputEnabled ? "🔊" : "🔇";
  }

  loadActiveSession();
  console.log("VCET Virtual Assistant v2.5 initialized with Local Database.");
});
