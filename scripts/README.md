# Portfolio Data Seeding Scripts

## Adding Projects to Firebase

This directory contains scripts to seed your portfolio with project data.

### Prerequisites

1. Make sure you have your Firebase configuration set up in `.env.local`
2. Install dependencies:
   ```bash
   yarn install
   ```

### Seeding Projects

To add the main projects (MongoDB ABAC Plugin, GREMS Mobile App, LinkBuilders, Affcollect) to your Firebase:

1. **Install dependencies** (if not already done):
   ```bash
   yarn install
   ```

2. **Run the seed script**:
   ```bash
   yarn seed:projects
   ```

   This script will:
   - Check if projects already exist in your Firebase (to avoid duplicates)
   - Add 4 main projects to your Firestore `projects` collection
   - Display success/error messages

### Project Thumbnails

The projects reference thumbnail images at:
- `/public/images/projects/mongodb-abac.jpg`
- `/public/images/projects/grems.jpg`
- `/public/images/projects/linkbuilders.jpg`
- `/public/images/projects/affcollect.jpg`

**Action Required**: Add your project thumbnail images to `/public/images/projects/` directory.

### Manual Import (Alternative)

If you prefer to manually import projects to Firebase:

1. Open `scripts/projects-data.json`
2. Go to your Firebase Console → Firestore Database
3. Import the JSON data into the `projects` collection

### Modifying Project Data

Edit `scripts/seed-projects.ts` to:
- Add more projects
- Update project information
- Change thumbnails or links
- Modify tags

After editing, run `yarn seed:projects` again (the script prevents duplicates).

### Troubleshooting

**Error: "Projects collection already has data"**
- This is expected behavior to prevent duplicates
- If you want to re-seed, manually delete the projects in Firebase Console first

**Error: Firebase configuration missing**
- Check that your `.env.local` file has all required Firebase environment variables
- Variables needed: `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, etc.
