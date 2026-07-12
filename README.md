# Resume Maker
https://resume-maker-orcin-one.vercel.app/

A guided, multi-step resume builder. Fill in your contact info, education, and work experience, then preview and download a polished, formatted resume as a PDF — all in your browser, no sign-up required.

<img width="1920" height="998" alt="image" src="https://github.com/user-attachments/assets/7225ebc8-fbe1-44cf-ad8d-4a113e346f02" />

## Features

- **Step-by-step flow** — contact info, education, experience, then a live resume preview, with a progress bar showing where you are
- **Multiple education and experience entries** — add or remove entries freely; numbering updates automatically
- **Inline validation** — each field is validated on blur (email format, phone format, LinkedIn/GitHub URLs, dates, GPA, etc.) with clear error messages
- **Live resume preview** — see your formatted resume update as you fill in the forms
- **One-click PDF export** — download your finished resume as a PDF using `html2canvas-pro` and `jsPDF`
- **Autosave** — your progress is saved to `localStorage`, so refreshing or closing the tab won't lose your data
- **Fully responsive** — works on desktop, tablet, and mobile

## Screenshots

| Contact information | Education |
|---|---|
| <img width="1920" height="996" alt="image" src="https://github.com/user-attachments/assets/12e4e1ac-d115-4423-b6b2-7b727e78ad8b" /> | <img width="1920" height="996" alt="image" src="https://github.com/user-attachments/assets/01adbf1d-8707-4b42-9db8-78faeac4e609" /> |

| Work experience | Resume preview |
|---|---|
| <img width="1918" height="996" alt="image" src="https://github.com/user-attachments/assets/981127c6-75c4-461b-91e0-c320c70054df" /> | <img width="1920" height="998" alt="image" src="https://github.com/user-attachments/assets/d23d7d59-4ce5-42b2-8662-0eed3465fd85" /> |

## Tech stack

- **React** — component-based UI
- **Tailwind CSS** — utility-first styling, fully responsive layout
- **html2canvas-pro** — captures the resume preview as an image
- **jsPDF** — converts the captured image into a downloadable PDF
- **localStorage** — persists form progress across sessions

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/resume-maker.git
cd resume-maker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (or whichever port your dev server prints).

### Building for production

```bash
npm run build
```

The production-ready files will be output to the `dist` folder.

## Project structure

```
src/
├── assets/              # SVG icons used throughout the app
├── components/
│   ├── App.jsx           # Root component, owns form state and step routing
│   ├── Menu.jsx           # Welcome screen
│   ├── Header.jsx         # Step title + progress bar
│   ├── Bar.jsx             # Individual progress bar segment
│   ├── Form.jsx            # Routes to the correct form based on current step
│   ├── Contact.jsx         # Contact information form
│   ├── Education.jsx       # List of education entries
│   ├── EducationForm.jsx   # Single education entry card
│   ├── Experience.jsx      # List of work experience entries
│   ├── ExperienceForm.jsx  # Single work experience entry card
│   ├── Resume.jsx           # Final resume preview and PDF export
│   ├── Input.jsx             # Reusable labeled input with validation error display
│   ├── Button.jsx            # Reusable button (back / continue / save)
│   ├── AddButton.jsx         # "Add another..." button for entries
│   └── Footer.jsx             # Back / Continue navigation
```

## How it works

1. **Welcome screen** — press "Get started" to begin
2. **Contact info** — enter your name, email, phone, and optional links (LinkedIn, GitHub, portfolio)
3. **Education** — add one or more schools, degrees, and dates
4. **Experience** — add one or more roles with descriptions of your work
5. **Preview & download** — review your formatted resume and download it as a PDF

Your progress is saved automatically, so you can leave and come back without losing your work.
