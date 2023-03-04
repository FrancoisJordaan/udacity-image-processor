# udacity-image-processor

The Udacity Image Processor allows users to resize previously uploaded jpeg images. <br>
It uses a chaching mechanism to return an image if it has been resized before.

## Usage example
A user would like their file, fjord.jpeg resized to 250px wide by 250px high. <br>
They can visit the following URL to view the result:
http://localhost:4055/api/images/?filename=fjord&width=250&height=250 <br>
After the image has successfully been resized it will be stored in the src/assets/resized-images folder.

# Installation
Clone the GitHub repo and use npm to install the package dependencies
```
$ https://github.com/FrancoisJordaan/udacity-image-processor.git
$ cd udacity-image-processor
$ npm install
```
Add any jpeg images you would like to be resizable to the src/assets/source-images folder.

## Available scripts listed in the package.json file
```npm run start``` - runs the app locally using nodemon <br>
```npm run start:prod``` - runs the app locally using the build folder. *This should only be used after running the build script!* <br>
```npm run build``` - transpiles the ts code to js and saves it in the build folder <br>
```npm run test``` - runs the jasmine tests <br>
```npm run lint``` - runs the eslint linter <br>
```npm run prettier``` - runs the prettier package to rewrite files in a pretty way <br>


