# electron-vite-starter

Node version: 20

### How to get the chadcn with tailwind setup working with electron vite

Note all the steps are documented on the "tailwind-init" branch of this repository

1. Follow the chadcn vite manual installation steps
2. installing new chadcn components only works if you have a components.json file
   - View how the components.json file is configured on this project
3. Make sure the tsconfig.json paths is set. The aliases in the components.json file picks up it's "@" value from the tsconfig.json file.
   - Note: the aliases in the components.json file is not picked up if the paths is set in tsconfig.web.json. So it must be set in the tsconfig.json file
4. At runtime of the application, the "@" alias value for components import is picked from the alias configuration in the "electron.vite.config.ts" file. Failure to configure the settings in this step having followed the all the steps above, will lead to the successful installation of chadcn components into the right directory but, will throw an error when you run the application because the "@" symbol won't be recognized at runtime.
5. To get rid of sqeakly lines under "@" imports of components if you are getting some at this point, you can get rid of that by setting the path in the "tsconfig.web.josn" file
6. Finally copy the "tailwind.config.js" file and "the main.css" file of this project

A valid example of all the aliases and path configuration can be found in my electron-vite-start
