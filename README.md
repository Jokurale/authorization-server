# authorization-server 🌀

◼ JWT authorization server for personal use.

## Getting Started👨‍🦯

- Clone or fork repository from main/master or build branch.

### Prerequisites👈

- Make sure your npm is up to date.
- Make sure your MongoDB DBaaS client is online and your credentials are valid.


### Installing 📜

```
npm install
```

and then run the server through the one of following commands:

#### Build 🏃‍♂️

```
node server.js
```

```
npm run start
```

#### Dev 👨‍💻

```
npm run dev
```

Suitable status should appear.

## Running the tests 📊

Unit testing platform is excluded from repository.

API is being tested using [Postman](https://www.postman.com) robust Collection Runner and [Newman CLI](https://www.npmjs.com/package/newman) for summary exporting

> Latest API testing summary is available on [this repo](https://github.com/Jokurale/authorization-server-api-coverage)
> > Actual coverage:
> > 102/102 tests passed - 100% ✅

```
newman run {{collection.json}} -r html --reporter-html-template {{template.hbs}}
```

## Deployment 📈

Service is in pre-release state. Functional react-redux-based GUI and dashboard is being crafted.

## Route map 🎫
<pre>
. <br />
└── / <br />
    ├── /refresh <br />
    │   ├── Request: Refresh token in authorization header <br />
    │   └── Response: New access token or Error message <br />
    ├── /login <br />
    │   ├── Request: Login and password <br />
    │   └── Response: Token set (Access token and Refresh token) or Error message <br />
    └── /logout <br />
        ├── Request: Valid refresh token <br />
        └── Response: Operation result or Error message <br />
</pre> 

## Built With 📐

- node.js
- npm
- bcrypt 5.0.0
- body-parser 1.19.0
- cors 2.8.5
- dotenv 8.2.0
- express 4.17.1
- express-rate-limit 5.2.6
- helmet 4.4.1
- jsonwebtoken 8.5.1
- mongoose 5.11.17
- morgan 1.10.0

## Versioning 🗂

Manual VCS via Git/GitHub

## Authors 🕺

- **Michał Podsiadły** - _Initial work_

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments 🎉

- Hat tip to anyone whose code was used.
- Inspired by recent jwt crash course and lack of light-weight personal request jwt service.
- [Check out readme gen](https://www.makeareadme.com)
