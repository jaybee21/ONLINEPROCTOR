# ONLINEPROCTOR
Online Proctoring System to Monitor Students while witing exams
Problem we are trying to solve?
Due to Covid 19, remote learning has been a constant and so have been online examinations.
But proctoring has always been a task and cheating and unfair practices have always been a problem.
**Problems with the exisiting sytem?**

#CLICK THE FOLLOWING LINKS TO SEE DESIGN

The current solutions assumes to have 2 platforms 
- One for testing purposes like Google Form for writing exams 
- And another, video conferencing platforms like meet or zoom for manual proctoring.

Our PS poses to develop an application that can automatically proctor and monitor students, without the need of manual proctoring - ie without a teacher's aid.


### Market & User Research

- On market research, the products available found, are paid.
- On user research and feedback from students, UX of such platforms isn't upto the mark.
- UX from the client's end isn't frictionless, it was expected by the client to upload questions on their platforms. 
- The existing product doesn't seem to have an accessible Admin Dashboard.
## Architecture and Design

The tradeoff in a Hackathon: `Speed over quality`



But something that we are proud of is, we tried to follow ideal software development practices.

- Architecture
- Design
- Code
*Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
├───extension
├───model
└───server
```

- `client`: The frontend for the application.
- `extension`: Chrome/Edge extension to keep a track of browser tabs.
- `model`: Model APIs for Machine Learning.
- `server`: The backend for the application.

<br />

**Client**

For local setup of frontend:
- `cd client`
- `npm i`
- `npm start`
- Go to `localhost:3000`

Structure

```
src
├───assets
├───components
├───containers
└───index.js
```

Individual Component & Container Structure

```
component
├───component.jsx
└───component.css
```

<br />
<br />

**Extension**

Read [this](https://github.com/tusharnankani/LeadsTracker#using-this-extension) or [this](https://github.com/dheerajdlalwani/back-to-work/#how-to-install) for a brief description for installing extensions.
- Open new tab & type: `chrome://extensions` or `edge://extensions`.
- Look for the Developer mode toggle & turn it on if it's not already.
- After cloning the repository, click on `Load Unpacked` and select the `extension` directory.

<br />
<br />

**Model**

The complete setup can be found in the [`model` directory](./model).

NOTE:

- Apart from this `tensorflow` and `tensorflow_hub` should be installed .
- The face-pose-estimation model is not final it is just a placeholder for now(will improve it as we get time).
- How to convert javascript array for image into image tensor that part is remaining.

<br />
<br />

**Server**

For local setup of backend:
- `cd server`
- `npm i`
- `npm start`

```
server
├───controllers
├───middlewares
├───models
├───routes
└───package.json
```

<br />
<br />

### License 📜

[GNU General Public License v3.0](/LICENSE)


### Authors

- JABULE SIMANGA 
  

<sub>We are ONE.</sub>
