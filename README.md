# AWS Amplify ML App

## Prerequisites

1. [NodeJS](https://nodejs.org/en/)
2. [VSCode](https://code.visualstudio.com/)/[Sublime](https://www.sublimetext.com/)/[Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)
3. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
4. [AWS Amplify](https://docs.amplify.aws/cli/start/install)

## Option 1: Clone the Repo

`git clone https://github.com/sameer-goel/AWS-Amplify-ML-Workshop.git`

## Now we need to configure the Amplify

```
amplify configure

- Specify the AWS Region: us-east-1 || us-west-2 || eu-central-1
- Specify the username of the new IAM user: amplify-cli-user
  > In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.
- Enter the access key of the newly created user:
  ? accessKeyId: (<YOUR_ACCESS_KEY_ID>)
  ? secretAccessKey: (<YOUR_SECRET_ACCESS_KEY>)
- Profile Name: amplify-cli-user
```

## Intialize Amplify settings

```
amplify init

- Enter a name for the project: sameer-ml-app
- Enter a name for the environment: dev
- Choose your default editor: Visual Studio Code (or your default editor)
- Please choose the type of app that youre building: javascript
- What javascript framework are you using: react
- Source Directory Path: src
- Distribution Directory Path: build
- Build Command: npm run-script build
- Start Command: npm run-script start
- Do you want to use an AWS profile? Y
- Please choose the profile you want to use: amplify-cli-user
```

## Push the Amplify code to cloud

`amplify push`

> It will trigger cloudformation step

## Install existing dependencies

`npm install`

## Install existing dependencies

`npm install`

## Cleanup

`amplify delete`

> Note: If it fails to cleanup, delete the cloudformation stack.

<hr />
