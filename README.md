# Happening
Put your event plans into digital action with Happening, an event creation app to help manage correspondence with ease.
Create your own digital invitations for any type of event your planning and watch the RSVPs roll in.
Users can create, rsvp to, and browse other user's events.
<b>Try it out: https://the-spectacles.github.io/event-planner</b>

# Technologies Used
MongoDB, Mongoose, Node.js, Heroku, Express.js, Handlebars.js HTML5, CSS3, Javascript, jQuery, Git

# The Approach
Our team went to slow to go fast. Throughout the planning process, and the entire project,
we utilized Trello to keep track of TODOs, future features, and steps in a process for a given feature.
We spent a decent amount of time modeling and wireframing our plans for the app and had
two discussions with the consultants to confirm that our approach to modeling would be
successful and sustainable. Once we had our models properly white-boarded, we began coding our API.

After testing all CRUD actions on the backend, we built out a simple Handlebars
templates for our auth, event, and rsvp actions. From there, we began testing
the actions from the client. Throughout the week we tweaked  our models based
evovling wireframes, such as creating a custom route for a user's 'my events'
view. After all client-side functional and AJAX calls were successfully
implemented, we began styling the app and refactoring Handlebars templates and
our index.html file for cleaner separation of code.

Our team decided to use the Feature Branch Git Workflow for complete transparency and
version control participation among each member of the team. We pair-programmed throughout
the entire project week, to ensure each team member saw each file of code and also equally
contributed code.

On a typical day, our team would have morning stand up which then segued into creating
our TODO list on a whiteboard and in Trello for the next 2-3 hours. After we reached the end of a TODO list we would recap
what had been accomplished in the day so far by moving cards to the 'Done' list of our Trello board, and then focus on
the next major TODO and breakout the steps to complete it. At the end of the day, we would recap
what had been accomplished and add any additional steps or items still needed to be worked on
into the Trello board for the next day.

Our team also utilized our slack channel to communicate ideas, helpful links for a problem,
and updates to other team members if changes were being made outside of our determined working hours.

# Major Hurdles
<li>Determining the best way to model out our collections in a non-relational way.</li>
<li>Determing what data needed to be sent to and returned from the API for different interface views
i.e. showing how many people have responded to an rsvp when an event creator is looking
at a single event</li>
<li>Determining the best way to keep our models 'flexible' for future feature to allow an
event creator to add multiple questions/answers besides our default 'Are you coming?' and
'Yes', 'No', 'Maybe'. </li>
<li>Reformatting how the start/end times were sent to the database as well as formatted
when rendered on the screen. Rebekah created multiple functions to prettify the time data that came
back from the database into a more legible format on the client side. </li>
<li>Creating proper validation in the 'All events view' to only show events where the
current user has not created the event or already rsvped to the event. </li>


# User Stories
<li>As a user I want to be able to sign in.</li>
<li>As a user I want to be able to manage my account.</li>
<li>As a user I want to be able to create an event.</li>
<li>As a user I want to be able to RSVP to an event.</li>
<li>As a user I want to be able to view event response counts.</li>
<li>As a user I want to be able to share my event with anyone on the app.</li>

# ERD
<li>https://www.lucidchart.com/documents/edit/6bf4b442-0cb4-47e3-9822-ddbdd3327b14?shared=true&</li>
<li>https://flic.kr/p/MVCKx1</li>

# Wire Frames
<li>Auth: https://flic.kr/p/Nfhfji</li>
<li>Create an event: https://flic.kr/p/MVCKzf</li>
<li>Profile view + RSVP to an event: https://flic.kr/p/MVCKB9</li>
<li>Nav: https://flic.kr/p/Nfhfkk</li>

# API
https://event-planner-api-753.herokuapp.com/

# Unfinished Business
<li>Add additional styling to the main interface in the profile view</li>
<li>Let an event creator add addtional question options to the event i.e. party supplies, costumes, potluck choices</li>
<li>Enable image upload functionality when creating an event</li>
<li>On successful sign in, add greeting with username</li>
<li>Change color palettes and backgrounds on events</li>
<li>Unique URLS for events to share directly</li>
<li>Validation for event dates and times</li>
<li>Display a day countdown until the event</li>
<li>Create a fun favicon</li>


# [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
