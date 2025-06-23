# User Dashboard

A responsive professional profile dashboard built with Next.js, React, and Tailwind CSS.

## Features

- 🎭 **Role-based Navigation**: Switch between different professional roles
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🔍 **Tabbed Experience Section**: Filter experiences by category
- 📋 **Detailed View**: Click on experience cards for detailed information
- 🎨 **Modern UI**: Clean and professional design with Tailwind CSS
- 🚀 **Fast Performance**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: JSONPlaceholder API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd profile-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify or connect your GitHub repository to Netlify for automatic deployments.

### Environment Setup

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

## Project Structure

```
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── ExperienceSection.tsx
│   │   ├── ProfileDashboard.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── SidebarNavigation.tsx
│   │   ├── TopNavigation.tsx
│   │   └── ui
│   │       ├── Avatar.tsx
│   │       ├── Button.tsx
│   │       ├── SelectDropDown.tsx
│   │       └── toast.tsx
│   ├── types
│   │   ├── experience.ts
│   │   ├── post.ts
│   │   ├── profile.ts
│   │   ├── types.ts
│   │   └── user.ts
│   └── utils
│       └── fetchData.ts
└── tsconfig.json
```

## API Integration

The dashboard fetches data from:
- User Profile: `https://jsonplaceholder.typicode.com/users/1`
- Posts/Experiences: `https://jsonplaceholder.typicode.com/posts?userId=1`

## Key Components

### Layout Component
- Top navigation with role dropdown and Book Now button
- Collapsible sidebar navigation
- Responsive design with mobile menu

### ProfileHeader Component  
- User avatar with initials
- Name and location display
- Verification badge

### ExperienceSection Component
- Tabbed interface for filtering experiences
- Grid layout of experience cards
- Modal detail view for selected experiences

## Customization


```javascript
const roles = ['Church Singer', 'Opera Singer', 'Voice Coach', 'Music Director', 'New Role']
```

### Modifying Experience Categories
Update the `tabs` array in `components/ExperienceSection.js`:

```javascript
const tabs = ['All', 'Performance', 'Training', 'New Category']
```

### Styling Changes
All styles use Tailwind CSS classes. Modify the `tailwind.config.js` for theme customization.
