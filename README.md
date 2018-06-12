# koa-template
A simple/clean Koa template with basic resources to start your koa api

koa-template is a basic Restfull API template build on top of koa.js framework.

## Ready, set, go!
Download the dependencies, create your SentryProject on [https://sentry.io/](https://sentry.io/), and run, just like that!

Clone the repo:
`https://github.com/alanbueno/koa-template`

Run `npm install` or `yarn install`

[Create your .env file](https://github.com/alanbueno/koa-template#env-file)

Run `npm start` or `yarn run start`

## Env File
Create a .env file (in the root of the project) with the env variables
```shell
SENTRY_URL=someTokenYouAlreadyCreatedOnSentryPage@sentry.io/someNumber
```

## Usage

Once the app is ready n running, use any HTTP(s) client to make a request::

You can set port on config file, if not, default is 3001.

Example: http://localhost:3001/
  - Method: GET
  - Host: http://localhost:3001
  - Path: '/'

Shoud return just:
```
{
  "version":"0.0.1",
  "uptime":9.567
}
```
___

Example: http://localhost:3001/ping
  - Method: GET
  - Host: http://localhost:3001
  - Path: '/ping'

Health Check shoud return just:
```
pong
```
