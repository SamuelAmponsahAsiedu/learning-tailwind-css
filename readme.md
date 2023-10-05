# HOW TO SET UP TAILWINDCSS

make sure you have node installed check by running 'node --v'
if installed

# In vscode terminal

-Create package.json file by running 'npm init' command. Hit eneter till finish
-Run 'npm install -D tailwindcss'
-Run 'npx tailwindcss init'. tailwind.config.js is created
-In tailwind.config.js paste in content["./dist.{html,js}']

-Create a dist folder. In this folder create index.html file
-Create a src folder. In this folder create input.css file
-Copy @tailwind base;
@tailwind components;
@tailwind utilities;

-Run in vscode terninal 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
' this creates output.css file in dist folder

- In head of index.css import output.css '<link rel="stylesheet" href="style.css">'
  -Install tailwind intellisense extension
  -In package.json add to scripts  
   "dev": "tailwindcss -i ./src/input.css -o ./dist/style.css --watch"

-In vscode terminal run 'npm run dev'
