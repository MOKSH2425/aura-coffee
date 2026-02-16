# ☕ AURACOFFEE - Premium Digital Experience

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20Tailwind%20%7C%20JS-orange)

**Aura Coffee** is a luxury coffee shop website featuring a "Dark Mode" aesthetic, seamless navigation, and a fully functional shopping cart simulation. The project focuses on high-end UI/UX design, utilizing a rich color palette of Deep Espresso (`#120C08`) and Aura Gold (`#E08E00`).

## ✨ Features

### 🎨 UI/UX Design
* **Dark Luxury Theme:** Custom Tailwind configuration for a consistent brand identity.
* **Responsive Layout:** Fully optimized for Desktop, Tablet, and Mobile screens.
* **Glassmorphism Effects:** Modern frosted glass navigation and overlays.
* **Smooth Animations:** Hover effects, slide-out drawers, and fade-in transitions.

### 🛒 Functional Modules
* **Shopping Cart Logic:** * Add items from the Shop or Menu pages.
    * Slide-out cart drawer with quantity adjustments (`+` / `-`).
    * Auto-calculates totals.
    * State persists while browsing (SPA-like feel).
* **Toast Notifications:** Sleek popup alerts when actions are performed (e.g., "Added to Cart").
* **Smart Navigation:** Active state tracking and sticky sub-menus on the Menu and Shop pages.

### 📄 Pages Included
1.  **Home (`index.html`):** immersive hero section, testimonials, and location map.
2.  **Menu (`menu.html`):** Categorized digital menu with sticky navigation.
3.  **Shop (`shop.html`):** E-commerce listing with filtering and sorting UI.
4.  **Reservations (`book.html`):** Interactive booking interface with date/time selection.
5.  **Rewards (`rewards.html`):** Loyalty dashboard simulating a user account/points system.
6.  **Auth (`login.html` / `signup.html`):** User entry points linked to the navigation.
7.  **Story & Locations:** Brand narrative and store finder pages.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **Tailwind CSS (via CDN):** Utility-first styling with custom config in `js/config.js`.
* **Vanilla JavaScript:** logic for the cart, notifications, and navigation (`js/main.js`).
* **Google Fonts:** *Plus Jakarta Sans* for modern typography.
* **Material Icons:** For UI elements and badges.

---

## 🚀 Getting Started

Since this project uses the CDN version of Tailwind CSS, there is **no build step** (no `npm install` required).

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/aura-coffee.git](https://github.com/YOUR_USERNAME/aura-coffee.git)
    ```

2.  **Run the Project**
    * Simply open `index.html` in your browser.
    * **Recommended:** Use the "Live Server" extension in VS Code for the best experience.

---

## 📂 Project Structure

```text
AURACOFFEE/
├── css/
│   └── style.css       # Custom animations & overrides
├── js/
│   ├── config.js       # Tailwind theme configuration (Colors/Fonts)
│   └── main.js         # Cart logic & Interactions
├── images/             # (Optional) For local assets
├── index.html          # Homepage
├── menu.html           # Menu Page
├── shop.html           # E-commerce Page
├── ...                 # Other HTML pages
└── README.md           # Documentation