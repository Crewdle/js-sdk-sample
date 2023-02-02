# Crewdle Video API Sample

This repository is provided by Crewdle to show how to use its Video API.

## Code location

This sample is a simple Ionic/Angular application. The implementation of the Video API is located at `src/app/home/home.page.ts`.

## Running the sample

To run this sample, you first need to obtain your API access from Crewdle. You can request your access by sending an email to `support@crewdle.com`.

The first step is to install the npm packages. In your console, type the following command:
`npm install`

Then, you will need to install the Ionic CLI. In your console, type the following command:
`npm install -g @ionic/cli`

Before, you can start the application, you will need a user access token. You can obtain one from the following curl call:
`curl -X POST https://api.crewdle.com/v1/users -H "Content-Type: application/json" -H "Authorization: Basic {auth}" -d '{"uid": "{unique user ID}","name":"{user name}","email":"{user email}"}'`

The `auth` string that you need to pass in the previous call can be obtained with a `base64` of `{accessKey}:{secret}`.

You will also need a room ID. You can obtain one with the following curl call:
`curl -X POST https://api.crewdle.com/v1/users/{unique user ID}/rooms -H "Content-Type: application/json" -H "Authorization: Basic {auth}" -d '{"accessType":"url","forceViewMode":"default","roomCloseWhenHostLeave":false,"isHostRequired":true}'`

Enter the `accessKey`, `accessToken` and `roomId` in `src/app/home/home.page.ts`.

You can now run the sample! In your console, type the following command:
`ionic serve`
