Image Processing API Project

-Content 
    .Decription
        -file structure
        -set up
        -run project
        -structure of request
    .Technologies
    .Tools
    .Resources
    .Auther

.DEscription
    The project is a backend server using nodejs to run endpoint whitch get a request with query of name and size of an image
    and return the image with the size in query.

    -file structure
        -build
            -tests
                -helper
                    -reporter.js
                -image_routes.spec.js
                -sharp_function.spec.js
            -utilites
                -image_routes.js
                -sharp_function.js
            -index.js
        -images
            ...
        -resized_images
            ...
        -node_modules
            ...
        -spec
            -support
                -jasmine.json
        -src
            -tests
                -helper
                    -reporter.ts
                -image_routes.spec.ts
                -sharp_function.spec.ts
            -utilites
                -image_routes.ts
                -sharp_function.ts
            -index.ts
        -eslintignore
        -eslint.json
        -gitignore
        -prettierignore
        -package-lock.json
        -package.json
        -README.md
        -tsconfig.json

    -set up
        install an ide for running node (recommended vs code) and browser (chrome)

        install node v16.13.2 and npm 8.1.2

        install as Development Dependencies
            "@types/express": "^4.17.13",
            `"@types/express-validator": "^3.0.0",
            "@types/jasmine": "^3.10.3",
            "@types/node": "^17.0.8",
            "@types/sharp": "^0.29.5",
            "@types/supertest": "^2.0.11",
            "@typescript-eslint/eslint-plugin": "^5.9.1",
            "@typescript-eslint/parser": "^5.9.1",
            "eslint": "^8.6.0",
            "eslint-config-prettier": "^8.3.0",
            "eslint-plugin-prettier": "^4.0.0",
            "jasmine-ts": "^0.4.0",
            "prettier": "^2.5.1",
            "ts-node": "^10.4.0",
            "typescript": "^4.5.4"`
            "supertest": "^6.2.1"
            "jasmine": "^4.0.2",
            "jasmine-spec-reporter": "^7.0.0",

        install as Dependencies
            "express": "^4.17.2",
            "express-validator": "^6.14.0",
            "sharp": "^0.29.3",
            

        config scripts for (prettier, eslint, jasmine)

    -run the project
        after doing the above open the terminal and run:
            1-npm run prettier --> improve and fix the error of the style of code
            2-npm run build --> build the code
            3-npm run test --> build and test the code
            4-node build or nodemon build --> run the project

        you can run this script and it will run all the 4 scripts above:
            npm run start

    -structure of request
        http://localhost:3000/image/api?filename=<string>&width=<number>&height=<number>

        ex. http://localhost:3000/image/api?filename=logo&width=90&height=90

.Technologies
    nodejs
    typescript
    express jasmine

.Tools
    vs code
    google chrome

.Resources
    udacity
    community slack and toturs
    npmjs.com
    sharp documentation
    google

.Auther: Marwan Ahmed(udacity student)



        