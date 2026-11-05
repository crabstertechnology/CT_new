# Crabster Technology - Industrial IoT & Automation Website

Modern, responsive web platform for **Crabster Technology** (Industrial IoT, Panels & Automation — Coimbatore), designed and built directly from the complete set of design templates and updated with official brand identity assets and palette.

---

## 🎨 Brand Identity & Colors

- **Primary Brand Accent**: Crabster Orange (`#E87121` / `#D45E12`) derived from the official logo emblem
- **Contrasting Dark Navy / Onyx**: `#09111E` / `#0B1017`
- **Official Logo**: Embedded directly in the navbar, footer, and browser favicon from `public/assets/crabster-logo.png`

---

## 🛠️ Tech Stack

- **React 18** + **Vite 5** (Fast, modular, modern component-driven setup)
- **Tailwind CSS** (Configured with custom brand palette `brand.orange`, `brand.dark`)
- **Lucide Icons** (Industrial, engineering & navigation iconography)
- **Google Fonts Inter** (Clean editorial sans-serif)

---

## 📐 Implemented Template Sections

The website implements all 10 core sections in exact sequence, fitting full screen width with zero dead side margins:

1. **Header & Navigation** ([`src/components/Navbar.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/Navbar.jsx))
   - Official Crabster Logo emblem + `CRABSTER TECHNOLOGY` in the far left corner.
   - Interactive dropdown for 4 core service capabilities.
   - Jump links: *Industries*, *About*, *Contact*.
   - Primary action button: **"Talk to an engineer"** in Crabster Orange in the far right corner.
   - Responsive mobile drawer menu.

2. **Hero Section** ([`src/components/Hero.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/Hero.jsx))
   - Eyebrow in Crabster Orange: `INDUSTRIAL IOT, PANELS & AUTOMATION — COIMBATORE`
   - Headline: *"Upgrade the plant you already have, without enterprise prices."*
   - Copy tailored for small and mid-sized Tamil Nadu manufacturers.
   - Dual CTAs: *"Talk to an engineer"* in brand orange & *"Explore our services"*.
   - Cropped photography of an open industrial electrical control panel with PLC enclosure.

3. **Mission Statement Banner** ([`src/components/StatementBanner.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/StatementBanner.jsx))
   - Dark contrast section with subtle orange ambient radial blur: *"Industrial automation should not be reserved for large enterprises."*
   - Value narrative & *"How we work"* navigation anchor with orange accent arrow.

4. **Problem Diagnosis ("Where It Usually Goes Wrong")** ([`src/components/ProblemsSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/ProblemsSection.jsx))
   - Headline: *"The same four problems, in almost every plant we visit"*
   - 4-item grid with brand orange icons:
     1. *Machines that stop without warning*
     2. *Production numbers arrive after the fact*
     3. *Panels nobody wants to open*
     4. *Manual steps that scale with volume*

5. **Four Ways We Modernise a Plant ("What We Do")** ([`src/components/ServicesSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/ServicesSection.jsx))
   - 4 service cards in signature light-gray container styling with Crabster Orange icons:
     1. *Industrial IoT & Edge Solutions*
     2. *Automation Panel Boards*
     3. *Process Automation*
     4. *Production Automation*
   - Interactive modals detailing engineering scope & deliverables for each service.

6. **The Affordable Route ("Modernise the machine you already own")** ([`src/components/ModernizeSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/ModernizeSection.jsx))
   - Factory machine retrofit photography with operator screen terminal.
   - 3-point capability checklist with Crabster Orange icons.
   - Outlined CTA button: *"How production automation works"*.

7. **How We Work ("From the first walk round the plant to a running system")** ([`src/components/HowWeWorkSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/HowWeWorkSection.jsx))
   - Vertical connected timeline with Crabster Orange circular badges:
     - `01` Requirement study
     - `02` Survey and scope
     - `03` Design and build
     - `04` Install and commission
     - `05` Handover and support

8. **Who We Work With ("Built for the way Tamil Nadu's factories run")** ([`src/components/WhoWeWorkWithSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/WhoWeWorkWithSection.jsx))
   - 3-column sector breakdown highlighting Coimbatore, Tiruppur, Erode & Pollachi:
     - *Textiles & garments*
     - *Engineering & CNC*
     - *Pumps & motors*
     - *Food processing & packaging*
     - *Automotive components*
     - *Plastics & injection moulding*

9. **Common Questions ("What owners ask us before the first visit")** ([`src/components/FAQSection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/FAQSection.jsx))
   - Interactive accordion with Crabster Orange chevrons.

10. **Start With A Conversation ("Tell us what the plant is doing now")** ([`src/components/EnquirySection.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/EnquirySection.jsx))
    - Floor inquiry form with inputs for Name, Email, Phone, and Problem Description.
    - Submit CTA button in brand orange.

11. **Footer** ([`src/components/Footer.jsx`](file:///run/media/janu51/USER/FounderOS/CT_Template/src/components/Footer.jsx))
    - Official Crabster logo emblem + wordmark, Coimbatore address & service cluster notice.
    - Services & Company navigation columns.
    - Copyright bar and back-to-top button.

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

Server is currently running at: **`http://localhost:3000`**
