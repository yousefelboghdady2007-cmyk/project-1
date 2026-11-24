ACCESSIBLE COURSE MINI-SITE
Course: Web Design & Development

CONTENTS
- index.html: course home and learning outcomes
- staff.html: teaching team information
- schedule.html: accessible weekly timetable (Sunday and Wednesday sessions)
- register.html: accessible registration form
- styles.css and script.js: styling and interactions
- server.js: optional local server for the form Network-panel evidence
- plans/: landmark maps, heading outlines, and form-field plan
- evidence/: 20 test cases and evidence-record templates
- reflection.md: 300–400 word reflection draft

OPEN IN VS CODE
1. Extract the ZIP file.
2. Open VS Code.
3. Choose File > Open Folder and select Accessible_Course_Mini_Site.
4. For a quick visual preview, open index.html with Live Server.

IMPORTANT FORM TEST
The registration form uses a local POST endpoint so the submitted name=value pairs can appear in the browser Network panel.
1. Install Node.js if it is not already installed.
2. Open the VS Code terminal in this folder.
3. Run: node server.js
4. Open http://localhost:5500/register.html
5. Open browser Developer Tools > Network, submit test data, and inspect the POST request named "submit".
6. The server prints the submitted pairs in the terminal and does not save them.
Live Server alone does not provide this POST endpoint; use the Node command for this specific evidence.

BEFORE SUBMISSION
- Confirm the displayed schedule and course information against any later official announcements. No unprovided email address or room number has been added.
- Run all four HTML files through the Nu HTML Checker: https://validator.w3.org/nu/
- Test keyboard-only operation and record the actual result.
- Measure text/background contrast with a contrast checker and record actual ratios.
- Run the 20 test cases in two browsers and fill in the actual results. Do not claim a test passed unless you performed it.
- Use a screen reader available on your device/computer and record what it announces.
- The site is a front-end demonstration and does not permanently store registrations.
