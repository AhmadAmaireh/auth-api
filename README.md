# auth-api
Phase 3 Requirements
In this final phase, the new requirement is to extend the restrictive capabilities of our routes to our API, implementing a fully functional, authenticated and authorized API Server using the latest coding techniques

Specifically, we want to make the following restrictions:

Regular users can READ
Writers can READ and CREATE
Editors can READ, CREATE, and UPDATE
Administrators can READ, CREATE, UPDATE, and DELETE
Routes that end up performing those actions in our API/Database need to be protected by both a valid user and that user’s permissions

Technical Requirements / Notes
Begin with the 2 servers provided to you in the starter-code folder.

api-server is a fully functional API server that performs CRUD operations via REST
auth-server is a fully functional Auth server, capable of adding users, logging users in, and providing middleware that can be used to protect any route
Task 1: Combine these 2 servers into a single server
Your server should respond to the following routes:
POST /signup to create a user
POST /signin to login a user and receive a token
GET /secret should require a valid bearer token
GET /users should require a valid token and “delete” permissions
NOTE: You will have some duplicated files and functionality between the 2 servers. Eliminate the waste and end with a single running server with all current routes functional

Task 2: Create a new set of “Protected” API routes
Restrict access without a valid token AND a specific capability.

Create a new set of routes (V2) within the server
V2 API Routes (/api/v2/...) must now be protected with the proper permissions based on user capability, using Bearer Authentication and an ACL
app.get(...) should require authentication only, no specific roles
app.post(...) should require both a bearer token and the create capability
app.put(...) should require both a bearer token and the update capability
app.patch(...) should require both a bearer token and the update capability
app.delete(...) should require both a bearer token and the delete capability
Task 3: Apply best practices and quality engineering
Full Test Coverage
Well executed UML and WRRC Diagrams
Polished and Complete Developer Friendly README.md at the root of your repo
Clean and Test
The provided server works to support the above requirements, but it has a few principle shortcomings that you must address

Convert any method that’s using promise syntax (.then()) to use the more modern async/await syntax
Ensure that all route handler methods, middleware methods, model methods are properly catching and responding to errors.
Do you have try/catch in place wherever you can?
Are you logging full errors to the console?
Are you giving properly formatted errors to the browser in the response?
Write a suite of tests that make the following assertions, at minimum:
AUTH Routes
POST /signup creates a new user and sends an object with the user and the token to the client
POST /signin with basic authentication headers logs in a user and sends an object with the user and the token to the client
V1 (Unauthenticated API) routes
POST /api/v1/:model adds an item to the DB and returns an object with the added item
GET /api/v1/:model returns a list of :model items
GET /api/v1/:model/ID returns a single item by ID
PUT /api/v1/:model/ID returns a single, updated item by ID
DELETE /api/v1/:model/ID returns an empty object. Subsequent GET for the same ID should result in nothing found
V2 (Authenticated API Routes)
POST /api/v2/:model with a bearer token that has create permissions adds an item to the DB and returns an object with the added item
GET /api/v2/:model with a bearer token that has read permissions returns a list of :model items
GET /api/v2/:model/ID with a bearer token that has read permissions returns a single item by ID
PUT /api/v2/:model/ID with a bearer token that has update permissions returns a single, updated item by ID
DELETE /api/v2/:model/ID with a bearer token that has delete permissions returns an empty object. Subsequent GET for the same ID should result in nothing found


## Pull link

[Pull link](https://github.com/AhmadAmaireh/auth-api/pull/1)

## Action link

[Action link](https://github.com/AhmadAmaireh/auth-api/actions)

## Heroku link

[Heroku link](https://ahmadauth-api.herokuapp.com/)

