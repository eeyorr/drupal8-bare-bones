Introduction
-----------
This a bare bones starter theme for Drupal 8, originally based on devcolab_lightship by devcollaborative.com.
This is a sub-theme of the core base theme, Classy.


Setting Up Your Theme
--------
Rename all instances of the theme's machine name bare_bones in file names and in files themselves with your theme_name.
You can do a search/replace on the theme folder in order to do this.
Our usual convention for the theme's machine name is an organization's abbreviation and the year the site's slated to be launched, so for example org2019.


Setting Up Gulp
--------

Steps detailed here: https://css-tricks.com/gulp-for-beginners/

  1. Initialize Node Package Manager - npm init
  This will generate a package-lock.json file, which *should* be committed in Git.

  2. If you have Gulp installed globally (see the CSS Tricks link above for instructions), then save it locally to this project with:
  npm install gulp --save-dev

  3. Type npm i to have npm install the dependencies for the project per package.json. You should be ready to compile now!


Gulp Tasks
--------

gulp sass - compiles sass into CSS

gulp clean:css - deletes compiled CSS

gulp watch - watches sass directories for changes and recompiles whenever you save a change

gulp build - simple one time build task


Adding additional libraries and associated tasks for developer convenience may be okay on a particular project, but please check in with a team lead before you add them. We are doing our best to reduce complexity so that later on, in 2-5 years' time, it's not difficult to reproduce this development environment.


Adding Externally Hosted Custom Fonts
--------
To add an external CSS file for Google or Adobe Fonts (formerly Typekit):

1. Add a fonts block to the libraries.yml file, like this:

  fonts:
  version: VERSION
  css:
    theme:
      https://use.typekit.net/zux5iaj.css: { type: external, minified: true }

2. Add this top line in the libraries block of the .info.yml file:

libraries:
  - your-theme-name/fonts
  - your-theme-name/global-styling
  - your-theme-name/global-scripts

3. Profit!


Templates
--------
To override template files, copy Classy template files into the theme's "templates" sub-directory.


Adding Regions
--------
To add new regions to the theme for block placement, add the region to the "regions" section of your-theme-name.info.yml, and then add the region to the theme's page.html.twig template.


Sass Partials
-------------
In the future, we may add sass-globbing tasks to gulp, to automatically add new partials as needed. We have not yet agreed as a team on how to name and organize partials *, so please feel free to do what works for you. You can then add them to the custom.scss file manually. (Don't forget: if you choose to put partials into subfolders, make sure to add the subfolder wildcard path to the gulp tasks for sass compiling and watching.)

* Right now we have this divided out into two folders; (1) base and (2) styles. Ideally the base folder should be used as a set-it-and-forget folder structure for core theme styles and components. Styles is where the magic should happen with partials for theming the site.

