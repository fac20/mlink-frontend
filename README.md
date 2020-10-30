<h1 align="center"> MLINK </h1> 
    
<p align="center">
<img alt="mlink logo" width="200" src="src/assets/images/logo.png"/>
</p>

[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub license](https://img.shields.io/badge/License-MIT-green.svg)](https://shields.io/)
[![GitHub contributors](https://img.shields.io/badge/Contributors-4-blue.svg)](https://GitHub.com/fac20/mlink-frontend/graphs/contributors/)
[![GitHub issues](https://img.shields.io/badge/Issues-5-orange.svg)](https://GitHub.com/fac20/mlink-frontend/issues/)
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)

## Content

- [Mission](#Mission-rocket)
- [Team](#Team)
- [Design Week](#Design-Week)
- [Tech Stack](#Tech-Stack)
- [Sprint One](#Sprint-One)
- [Sprint Two](#Sprint-Two)
- [Installation](#Installation)
- [Bugs](#Bugs)
- [Next Steps](#Next-Steps)
- [Acknowledgement](#Acknowledgement-1st_place_medal)

## Mission :rocket:

[Link to our website](https://mlink.netlify.app/) <br> We were set on a mission by our Product Owner, Usama, to create a
mobile-first web application that allows health professionals to network with each other.

## Team

- [Amber :angel:](https://github.com/amberrignell)
- [Khadija :fairy: ](https://github.com/khadija-nur)
- [Shaya :mermaid: ](https://github.com/fairyaksh)
- [Glenroy - Terence (Terry) :boom:](https://github.com/RunGT)

## Design Week

![](https://i.imgur.com/deAdrPE.png=250x250)

## Tech Stack

- React.js
- Javascript
- Figma
- Jira
- GraphQL
- Hasura
- Heroku
- Netlify
- PostgresQL

## Sprint One

## Sprint Two

## Installation

- Clone the repo `git clone https://github.com/fac20/mlink-frontend.git`
- Install npm packages using `npm install`
- Create a .env file and store the hasura secret key within it
  - The variable name should begin with _REACT_APP\_\_ so that you can access it using
    \_process.env.REACT_APP_<variable-name>_ without the need to install any packages like \_dotenv_
    [more info in the create-react-app docs](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Known Bugs

- Readmore buttons in profile page - when one of these buttons are clicked it expands all the entries for each button
<details>
<summary> How to fix this:</summary>
- Set a unique state for each component that's using the dropdown
</details>
- Data to be displayed on the dashboard and network pages are not being returned even though it's being fetched.
- User Id and Location are currenly hardcoded and should be changed once auhorisation has been set up.

## Next Steps

- [ ] Fix all the above bugs
- [ ] Use a GraphQl client like [URQL](https://formidable.com/open-source/urql/) or
      [Apollo](https://www.apollographql.com/) for state management to easily fetch, cache, and modify application data,
      while automatically updating the UI.
- [ ] Set up authorisation and social login with [Auth0](https://auth0.com/)
- [ ] Error handling - Create appropriate display messages for when the user encounters unexpected conditions
- [ ] Configure CORS on Hasura to be specific to certain domains and subdomains (it's currently default which is \*)

<details>
<summary> Resources</summary>
- [Using JWTs for GraphQL Authorization with Hasura](https://auth0.com/blog/using-jwts-for-graphql-authorization-with-hasura/)  
- [URQL Docs](https://formidable.com/open-source/urql/docs/)  
- [Apollo Docs](https://www.apollographql.com/docs/react/)  
- [Configure CORS on Hasura](https://hasura.io/docs/1.0/graphql/core/deployment/graphql-engine-flags/config-examples.html#configure-cors)

</details>

## Acknowledgement :1st_place_medal:

Thank you to everyone who helped us - whether it was through code or words of encouragement.

:superhero: _Special_ thanks to our heroes: :superhero:

- Ivo
- Joe
- Sofia
- Izaak
- Reda

Most importantly, a big pat on the back for us, the dream team! :cloud: :stars:
