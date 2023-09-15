## MERN Stack Doctor Appointment Booking App

MERN Stack Doctor Appointment Booking Application using React , Redux Toolkit , AntD , Node , MongoDB 

## Features :

Separate User Interfaces for Users, Admins, Doctors

JWT Authentication and Password Hashing

Ant Design Library for UI Components,

Redux Toolkit,

Notifications Functionality for Users, Admin, and Doctors

Manage Users, Doctors, and Appointments from the Admin panel

<ol>
<li>Download the project from the git repository</li>
<li>Add .env file in root directory for the backend which contains</li>

```
PORT=5000
MONGO_URI=YOUR_OWN_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET
```
<li>Add .env file in client directory for the frontend which contains</li>

```

REACT_APP_SERVER_DOMAIN=http://127.0.0.1:5000/api
REACT_APP_CLOUDINARY_BASE_URL=https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload
REACT_APP_CLOUDINARY_CLOUD_NAME=YOUR_OWN_CLOUDINARY_CLOUD_NAME
REACT_APP_CLOUDINARY_PRESET=YOUR_OWN_CLOUDINARY_PRESET
```
**Note:** Replace the **{CLOUD_NAME}** with your own cloudinary cloud name

<li>To run the backend, go to root directory in the terminal and execute: npm start</li>
<li>To run the frontend, open a new terminal and run 'cd client/' to go to client directory and execute: npm start</li>
</ol>

### To access the admin dashboard

<ol>
<li>Download the project from the git repository</li>
<li>You need to create your own MongoDB instance and add the MongoDB url to the .env file</li>
<li>Register on the website and go to your MongoDB and manually change the 'isAdmin' field of the account you want to make admin in the DB to 'true' and then log in back on the site</li>
<li>Now you will be able to access the admin dashboard</li>
</ol>

### Home page

<img src="./client/src/images/full_pic.png" alt='home'/>

### Sign up page

<img src="./client/src/images/signup.png" alt='signup'/>

### Sign in page

<img src="./client/src/images/signin.png" alt='signin'/>

### Profile page

<img src="./client/src/images/profile.png" alt='profile'/>

### All Doctors page

<img src="./client/src/images/doctors.png" alt='doctors'/>

### Apply for doctor page

<img src="./client/src/images/docapply.png" alt='applyfordoctor'/>

### Admin all users dashboard

<img src="./client/src/images/users.png" alt='users'/>

### Admin all applications page

<img src="./client/src/images/applications.png" alt='applications'/>

### Book Appointment page

<img src="./client/src/images/bookappointment.png" alt='bookappointment'/>

### Users all appointments page

<img src="./client/src/images/userappointments.png" alt='appointments'/>

### Doctors all appointments page

<img src="./client/src/images/doctorappointments.png" alt='appointments'/>

### Notifications page

<img src="./client/src/images/notifications.png" alt='notifications'/>

<hr/>
# Final-project
