# VCET Virtual Assistant 🎓🤖

An interactive, AI-powered Virtual Assistant designed for **Vidyavardhini's College of Engineering and Technology (VCET)**, Vasai (W). 

Built with modern web technologies, offering voice interaction, instant campus queries, feedback tracking, and browser-based database persistence.

---

## ✨ Features

- **🏛️ Comprehensive Campus Knowledge Base**: Instant answers regarding admissions, cutoffs, engineering branches, fees & scholarships, placements, campus facilities, and transit routes.
- **🎨 Modern Design System**:
  - Warm Off-White canvas with elegant Lavender, Royal Blue, White, and Sunset Orange accents.
  - Glassmorphic panels, responsive grid layout, and smooth micro-interactions.
  - 🌓 **Theme Switcher**: Toggle between Off-White/Light and Midnight Lavender Dark mode.
- **🎙️ Voice Recognition (Speech-to-Text)**: Ask questions hands-free via Web Speech API (`webkitSpeechRecognition`).
- **🔊 Text-to-Speech (Read Aloud)**: Listen to answers spoken aloud using the browser's native `SpeechSynthesis`.
- **🗄️ Local Database (`localStorage`)**:
  - Full conversation history persistence across page reloads.
  - Interactive **📋 History Drawer** to browse, switch, or manage past chat sessions.
  - 👍 / 👎 **Feedback System**: Save helpfulness ratings directly to the local database.
- **⚡ Campus Explorer**: Filter questions quickly with categorized tabs (`🎓 Admission`, `📚 Branches`, `💼 Placements`, `🏛️ Campus`, `📞 Contact`) and real-time search.
- **📥 Export Transcript**: Export your entire chat history as a `.txt` file with a single click.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/VarunKuwar/-VCET-Virtual-Assistant.git
cd -VCET-Virtual-Assistant
```

### 2. Run Locally
Open `index.html` directly in your browser, or start a local server:

**Using Python:**
```bash
python -m http.server 5500
```
Then visit: [http://localhost:5500](http://localhost:5500)

**Using VS Code Live Server:**
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 📁 Project Structure

```plaintext
├── index.html            # Main semantic HTML structure & layout
├── style.css             # Design system, theme variables & animations
├── script.js             # Knowledge base engine, localStorage database, voice API
├── vcet college logo.jpg # College emblem asset
└── README.md             # Project documentation
```

---

## 🏫 About VCET
**Vidyavardhini's College of Engineering and Technology (VCET)** is affiliated with the University of Mumbai, approved by AICTE, and accredited with **Grade 'A' by NAAC**. Located near Vasai Road Railway Station, Palghar, Maharashtra.

---

## 📄 License
This project is open-source and intended for academic and demonstration purposes.
