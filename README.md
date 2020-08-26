# JSON-Viewer
This repo contains code for react json viewer. It shows json in browser beautifully, when Json file is selected. It also have input where users can enter a JSONPath expression. When JSONPath is added, the json tree shows the highlighted parts of object that math the expression in the input field.


## Requirements
* node `^10.0.0`
* yarn `^1.12.3` or npm `^6.4.1`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project:

```bash
$ git clone git@github.com:umairfarooq44/json-viewer.git
$ cd json-viewer
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`build`            |Builds the application to ./dist|
|`test`             |Runs unit tests with jest and enzyme.|