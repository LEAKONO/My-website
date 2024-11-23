# My Portfolio Website

This is a portfolio website built by **Emmanuel Leakono**. The website showcases various sections including **Home**, **About**, **Services**, **Skills**, **Education**, **Projects**, and **Contact**, along with the ability to download the resume. 

## Features of the Navbar

The navbar is a responsive component that includes a **Top Navigation** bar with a logo and a **Side Navigation** bar. The navbar adapts to both small (mobile) and large (desktop) screens with the following features:

### 1. **Logo:**
   - The logo is positioned on the left side of the top navigation on larger screens.
   - On smaller screens, the logo is centered, and the font size is reduced for better spacing.

### 2. **Hamburger Menu:**
   - On smaller screens (mobile devices), a **hamburger button** appears at the top-left corner of the page.
   - Clicking the hamburger menu toggles the side navigation (sliding it in and out).

### 3. **Side Navigation (Sidebar):**
   - The side navigation (or sidebar) contains links to the following sections:
     - **Home** - The main landing page of the website.
     - **About** - Information about the website or the owner.
     - **Services** - A list of services or skills offered.
     - **Skills** - Showcases technical and soft skills.
     - **Education** - Displays educational background.
     - **Projects** - Portfolio of personal or professional projects.
     - **Contact** - A section with contact information or a contact form.
     - **Resume** - A link to download the resume in PDF format.

### 4. **Responsive Design:**
   - The navbar adjusts for mobile devices. On screens larger than `768px`, the side navigation remains visible on the left side.
   - On smaller screens, the side navigation is hidden by default and only appears when the hamburger menu is clicked.

### Code Explanation:

Here’s a breakdown of how the navbar is implemented in React with styled-components:

#### Top Navigation (`TopNav`):
- The top navigation bar contains the **Logo** and the **Hamburger** menu. The background color is a soft purple (`#6A1B9A`) for a modern look.
- The hamburger button is positioned at the top-left corner of the screen on mobile devices and controls the toggle of the side navigation.

#### Hamburger Button (`Hamburger`):
- A simple button that consists of three bars. On click, it toggles the visibility of the side navigation.

#### Side Navigation (`SideNav`):
- The side navigation is fixed to the left of the screen, and it contains navigation links.
- The `isOpen` state controls whether the side navigation is visible or hidden on mobile devices.

#### NavLink Component (`NavLink`):
- Each link in the side navigation has an icon and text, and the color of the link changes on hover to indicate interactivity.
- The links are styled dynamically based on their content. For example, the **Home** link has a different color (`#E64A19`) compared to other links (`#6A1B9A`).

## How to Use This Project

1. Clone this repository to your local machine.
#####  Install the required dependencies:
- npm install

##### Run the development server:
- npm start
