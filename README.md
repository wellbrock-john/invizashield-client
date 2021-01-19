# InvizaShield

## This application will stand as a gift to my father to be used for his business, Invizashield LLC, and serve as a grand gesture of appreciation and gratitude for his support thorugh this transitional period of my life going from 'shop boy' to Software Engineer. The goal of building this application was to create a website that brings Invizashield's online presence into a higher class. It was built with the styling intentions to deliver information to clients that will catch the eye and provide persuasive bits of information to earn business. User account creation allows for streamlined communications between my father and his client's and email components built into the site also allow for quick messaging from clients directly to my father's email.

```
Demo Account Credentials:
email: demo@demo.com
password: P@ssword1234
```

[Live Site]()

[Frontend Repo](https://github.com/wellbrock-john/ivizashield-client)

[Backend Repo](https://github.com/wellbrock-john/invizashield-server)

---

## Screenshots

### Landing (Home) Page

![Landing Page]()

```
When you get to the landing page, there are instructions for signing up, logging into your account or using the Demo account.
```

### Dashboard Page

![Dashboard Page]()

```
The user's dashboard page provides a simplistic layout where they can navigate to different features of the application. Those features include the "InvizaGarage" feature, the "Schedule" feature and the "Profile" feature for the dashboard and and of the Navbar pages.
```

### InvizaGarage Page

![InvizaGarage Page]()

```
The InvizaGarage page allows a user to add vehicles to their garage, edit any vehicles already in their garage and delete any vehicles in their garage. To add a vehicle, click on the free quote link. The free quote link and edit link will direct the user to a form page that is either pre-filled with a vehicles attributes or will be empty, for adding a new vehicle. Each form has a save and submit button respectively. 
```

### Profile Page

![Profile Page]()

```
The profile page displays a user's first name, last name, email and phone number. They can edit and save as necessary.
```

### Contact Page

![Contact Page]()

```
A user can enter their name, email and a message to send. When the user presses submit, the form will be sent to the business owner's email address. The phone number on the page also acts as an active tel link that will call the number on any device that allows phone calls.
```

---

## Tech Stack

### React | Node.js | Express | PostgreSQL | SQL | JWT | HTML | CSS

---

## API Documentation

- /api/auth
- - POST - login a user

- /api/users
- - POST - create/register a new user
- - PUT - edit user information

- /api/vehicles
- - GET - get vehicles by user
- - POST - save vehicles for a user
- - PUT - edit vehicles for a user

- /api/vehicles/:id
- - DELETE - delete a vehicle by id

- /api/contact
- - POST - send email to business owner

---

```
Created by @wellbrock-john
```
