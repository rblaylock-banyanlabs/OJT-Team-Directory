# Team Directory Application

A modern, interactive team directory built with React, TypeScript, and React Router. Features flip cards, detailed member profiles, and a beautiful animated interface.

## 🚀 Features

- **Interactive Team Cards** - Hover to flip and see vision statements
- **Detailed Member Profiles** - Comprehensive pages with contact info, skills, and projects
- **Multi-page Navigation** - React Router with smooth transitions
- **Responsive Design** - Works perfectly on all devices
- **Dark Mode Support** - Toggle between light and dark themes
- **Search & Filter** - Find team members by name, role, or skills
- **Animated Background** - Beautiful floating shapes and gradients
- **Contact Integration** - Direct email and phone links

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons
- **Next.js** - React framework (using App Router)

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── ui/                 # Basic reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── common/             # Common app-specific components
│   │   ├── animated-background.tsx
│   │   ├── theme-toggle.tsx
│   │   └── loading-spinner.tsx
│   ├── forms/              # Form components
│   │   ├── add-member-form.tsx
│   │   └── form-field.tsx
│   ├── layout/             # Layout components
│   │   ├── header.tsx
│   │   ├── page-layout.tsx
│   │   └── container.tsx
│   ├── team/               # Team-specific components
│   │   ├── team-member-card.tsx
│   │   ├── team-grid.tsx
│   │   ├── team-filters.tsx
│   │   └── team-stats.tsx
│   └── typography/         # Typography components
│       ├── heading.tsx
│       ├── text.tsx
│       └── gradient-text.tsx
├── pages/                  # Page components
│   ├── team-directory.tsx
│   ├── about.tsx
│   └── team-member-detail.tsx
├── hooks/                  # Custom hooks
│   ├── use-team.tsx
│   ├── use-local-storage.tsx
│   └── use-filters.tsx
├── types/                  # TypeScript type definitions
│   ├── team.ts
│   └── common.ts
├── constants/              # App constants
│   ├── team-data.ts
│   └── app-config.ts
├── utils/                  # Utility functions
│   ├── date.ts
│   ├── format.ts
│   └── validation.ts
└── context/                # React Context providers
    └── team-context.tsx
\`\`\`

## 🎯 Component Architecture

### Reusable UI Components
- **Button** - Multiple variants (primary, secondary, outline, ghost)
- **Card** - Flexible card component with header/content sections
- **Input/Textarea** - Form input components with validation
- **Badge** - Status and tag indicators
- **Avatar** - User profile images with fallbacks

### Layout Components
- **Header** - Navigation header with theme toggle
- **PageLayout** - Consistent page wrapper with animated background
- **Container** - Responsive content container

### Typography Components
- **Heading** - Semantic headings (h1-h6) with consistent styling
- **Text** - Body text with size and color variants
- **GradientText** - Gradient text effects for highlights

### Form Components
- **FormField** - Reusable form field with label and validation
- **AddMemberForm** - Complete form for adding team members

## 🔧 Custom Hooks

### \`useTeam\`
Manages team member data and operations:
\`\`\`typescript
const { teamMembers, addMember, getMember, updateMember } = useTeam()
\`\`\`

### \`useFilters\`
Handles search, filtering, and sorting:
\`\`\`typescript
const { filteredMembers, searchTerm, setSearchTerm, roleFilter, setRoleFilter } = useFilters(teamMembers)
\`\`\`

### \`useLocalStorage\`
Persists data to localStorage:
\`\`\`typescript
const [data, setData] = useLocalStorage('key', defaultValue)
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Purple to Pink gradient (\`from-purple-500 to-pink-500\`)
- **Secondary**: Purple variants for accents
- **Background**: Gradient from purple/pink/indigo
- **Text**: Semantic text colors with dark mode support

### Typography Scale
- **Heading 1**: 3xl font-bold (Page titles)
- **Heading 2**: 2xl font-bold (Section titles)
- **Heading 3**: xl font-semibold (Card titles)
- **Body**: Base font-normal (Regular text)
- **Caption**: sm text-muted-foreground (Helper text)

### Spacing System
- **Container**: max-w-7xl mx-auto px-4
- **Sections**: py-8 space-y-8
- **Cards**: p-6 space-y-4
- **Grid**: gap-6 (responsive grid spacing)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd team-directory
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   Navigate to \`http://localhost:3000\`

## 📱 Usage

### Adding Team Members
1. Click the "Add Member" button on the main directory
2. Fill out the comprehensive form with member details
3. Include social links, skills, and project information
4. Submit to add the member to the directory

### Viewing Member Profiles
1. Click on any team member card in the directory
2. View detailed profile with contact information
3. Access social links and portfolio
4. See featured projects and skills

### Filtering and Search
1. Use the search bar to find members by name or role
2. Filter by specific roles using the dropdown
3. Sort alphabetically or by join date
4. Clear filters to reset the view

## 🎯 Best Practices Implemented

### Component Design
- **Single Responsibility** - Each component has one clear purpose
- **Composition over Inheritance** - Components are composed together
- **Props Interface** - Clear TypeScript interfaces for all props
- **Default Props** - Sensible defaults for optional props

### State Management
- **Context API** - Global state for team data
- **Custom Hooks** - Encapsulated logic for reusability
- **Local State** - Component-specific state kept local
- **Derived State** - Computed values using useMemo

### Code Organization
- **Feature-based Structure** - Related components grouped together
- **Barrel Exports** - Clean import/export patterns
- **Type Safety** - Comprehensive TypeScript coverage
- **Constants** - Centralized configuration and data

### Performance
- **React.memo** - Prevent unnecessary re-renders
- **useMemo/useCallback** - Optimize expensive computations
- **Code Splitting** - Lazy loading for better performance
- **Image Optimization** - Proper image handling and fallbacks

## 🔧 Customization

### Adding New Team Members
Edit \`src/constants/team-data.ts\` to add more team members:

\`\`\`typescript
export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "new-member",
    name: "New Member",
    role: "Developer",
    // ... other properties
  }
]
\`\`\`

### Customizing Themes
Modify \`tailwind.config.ts\` for custom colors:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      }
    }
  }
}
\`\`\`

### Adding New Pages
1. Create component in \`src/pages/\`
2. Add route in \`app/page.tsx\`
3. Update navigation in header component

## 🧪 Testing

### Running Tests
\`\`\`bash
npm test
# or
yarn test
\`\`\`

### Test Structure
- **Unit Tests** - Individual component testing
- **Integration Tests** - Component interaction testing
- **E2E Tests** - Full user flow testing

## 📦 Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow the existing component patterns
- Add proper JSDoc comments for complex functions
- Ensure responsive design for all components

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for the icon library
- **React Router** for client-side routing

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

Contributors:
Jessica Sharp
Robert Blaylock
Daniel Walker