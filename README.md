## Initial Steps

Navigate into the folder you want the repository cloned into.

Run:
### `git clone https://https://github.com/mcmurtrycollege/McMurtry-Website-Active`

Then to run the website in development mode locally on your computer run:

### `npm run start` 

From within the directory for the repository.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

###  `npm run deploy`

Implicitly calls `npm run build` and then stages and commits the neccessary build files and pushes them the the gh-pages branch of the repository.

## Deployment

This website is hosted on github pages and pulls from the gh-pages branch of the repository. The source code for the website is in the master branch. To make changes/deploy the website running the command `npm run deploy` will create a production build of the website and push it to the gh-pages branch, after a couple of minutes these changes should be reflected in the website itself. 

To update the source code following a deployment run the following commands:

### `git add .`
### `git commit -m <brief commit message here>`
### `git push origin master`

This will commit the source code to the master branch. Remember to always pull before you push to this branch. 

  Additionally after every deployment of the website, go to the settings menu of this repository and scroll down the section labeled `gh-pages`. Make sure that under custom domain it says `mcmurtry.rice.edu`, that the `Enforce HTTPS` box is checked, and that at the top it says `Your GitHub Pages site is currently being built from the gh-pages branch`. If menus/options are different change them and make sure that the changes are saved.
