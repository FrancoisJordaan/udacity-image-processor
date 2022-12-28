# udacity-image-processor

Udacity Image Processing API

Available scripts
npm run start - runs the app locally using nodemon
npm run start:prod - runs the app locally using the build folder. *This should only be used after running the build script!*
npm run build - transpiles the ts code to js and saves it in the build folder
npm run test - runs the jasmine tests
npm run lint - runs the eslint linter
npm run prettier - runs the prettier package to rewrite files in a pretty way


Example of resizing an image: http://localhost:4055/api/images/?filename=fjord&width=250&height=250

Example of an image file that doesn't exist and therefor can't be resized: http://localhost:4055/api/images/?filename=banana&width=250&height=250
