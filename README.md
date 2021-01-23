# InvizaShield

## This application will stand as a gift to my father to be used for his business, Invizashield LLC, and serve as a grand gesture of appreciation and gratitude for his support thorugh this transitional period of my life going from 'shop boy' to Software Engineer. The goal of building this application was to create a website that brings Invizashield's online presence into a higher class. It was built with the styling intentions to deliver information to clients that will catch the eye and provide persuasive bits of information to earn business. User account creation allows for streamlined communications between my father and his clients and email components built into the site also allow for quick messaging from clients directly to my father's email.

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

![Landing Page](https://user-images.githubusercontent.com/68931297/105114059-235eb100-5a94-11eb-86a4-691acd799d52.png)

```
When you get to the landing page, there are instructions for signing up, logging into your account or using the Demo account. In the navbar, the Services, Gallery and Contact Us links are open to public use. The InvizaGarage link will scroll to the registration/login form if a user is not logged in and will display a message explaining that they must create an account or log in to view their InvizaGarage.
```
![Landing Page](https://user-images.githubusercontent.com/68931297/105114282-8ea88300-5a94-11eb-81cc-d2e2f1da7741.png)

![Login](https://user-images.githubusercontent.com/68931297/105114463-f1018380-5a94-11eb-9aa6-8276f038674c.png)

---

### Dashboard Page
```
The user's dashboard page provides a simplistic layout where they can navigate to different features of the application. Those features include the "InvizaGarage" feature, the "Schedule" feature and the "Profile" feature for the dashboard and any of the Navbar pages.
```
![Dashboard Garage](https://user-images.githubusercontent.com/68931297/105114638-489fef00-5a95-11eb-8c4a-a8d86aba4c32.png)

![Dashboard Schedule](https://user-images.githubusercontent.com/68931297/105114657-4fc6fd00-5a95-11eb-99ab-28c78f7af0b9.png)

![Dashboard Profile](https://user-images.githubusercontent.com/68931297/105114669-56557480-5a95-11eb-8413-bb82ce592f11.png)

---

### InvizaGarage Page
```
The InvizaGarage page allows a user to add vehicles to their garage, edit any vehicles already in their garage and delete any vehicles in their garage. To add a vehicle, click on the free quote link. The free quote link and edit link will direct the user to a form page that is either pre-filled with a vehicle's attributes or will be empty, for adding a new vehicle. Each form has a button that will send a request to the server. 
```
![2021-01-19 (14)](https://user-images.githubusercontent.com/68931297/105115519-f2cc4680-5a96-11eb-98f8-d9277074a784.png)

![2021-01-19 (8)](https://user-images.githubusercontent.com/68931297/105115272-7b96b280-5a96-11eb-9be5-07a2e91aab29.png)

![2021-01-19 (9)](https://user-images.githubusercontent.com/68931297/105115280-7f2a3980-5a96-11eb-9792-45f1674f9db1.png)

---

### Contact Page
```
A user can enter their name, email and a message to send. When the user presses submit, the form will be sent to the business owner's email address. The phone number on the page also acts as an active tel link that will call the number on any device that allows phone calls.
```
![2021-01-19 (12)](https://user-images.githubusercontent.com/68931297/105115707-4ccd0c00-5a97-11eb-8398-2c9bdbd19068.png)

---

## Tech Stack

### React | Node.js | Express | PostgreSQL | SQL | JWT | HTML | CSS

---

---

## API Documentation

---

### Open Endpoints

---

Open endpoints require no Authentication.

### /api/auth
- POST - login a user

- - Inputs 
- - * email
- - * password
- - Outputs
- - * user information
- - * * id
- - * * first_name
- - * * last_name
- - * * phone_num
- - * * email

### /api/users
- POST - create/register a new user
- - Input
- - * first_name
- - * last_name
- - * phone_num (integer)
- - * email
- - * password 
- - Output
- - * identicle to the above output for POST to /api/auth

### /api/contact
- POST - send email to business owner
- - Input 
- - * name
- - * email
- - * message
- - Output 
- - * To destination email
- - * * name
- - * * email
- - * * message
- -  returns HTTP Status to user

---

### Endpoints that require Authentication

---

Closed endpoints require a valid Token to be included in the header of the request. A Token can be acquired from POSTing a new user or POSTing a login as an existing user.

### /api/users/:id
- PUT - edit user information
- - Input
- - * first_name
- - * last_name
- - * phone_num (integer)
- - * email 
- - Output
- - * first_name
- - * last_name
- - * phone_num (integer)
- - * email

### /api/vehicles
- GET - get vehicles by user
- - Input
- - * id (user)
- - * email
- - * phone_num
- - Output
- - * user's vehicles
- - * * id
- - * * year
- - * * make
- - * * model
- - * * submodel
- - * * color
- - * * paintCondition
- - * * coverage
- POST - save vehicles for a user
- - Input
- - * vehicle information
- - * * id
- - * * year
- - * * make
- - * * model
- - * * submodel
- - * * color
- - * * paintCondition
- - * * coverage
- - * user information
- - * * id (user)
- - * * first_name
- - * * last_name
- - * * email
- - * * phone_num
- - Output
- - * user's vehicles
- - * * id
- - * * year
- - * * make
- - * * model
- - * * submodel
- - * * color
- - * * paintCondition
- - * * coverage
- PUT - edit vehicles for a user
- - Input
- - * vehicle information
- - * * id
- - * * year
- - * * make
- - * * model
- - * * submodel
- - * * color
- - * * paintCondition
- - * * coverage
### /api/vehicles/:id
- - DELETE - delete a vehicle by id
- - Input
- - * user id
- - * vehicle id
- - Output
- - * Status i.e. 204 | 400 | 500

---

```
Created by @wellbrock-john
```
