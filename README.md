Elcare

Problem and Related Work

Problem and Motivation:

	One of the problems that our group noted was the fact that there is a growing number of people who are forced to be taken care of by their families due to economic pressures. According to the 2017 census, the median age in the United States has risen to an all-time high of 38, as the majority of counties in the country have reported getting older (U.S. Census Bureau). Coupled with this fact is the fact that the number of older people is projected to surpass the number of young people by 2035. As more of the population is getting older, families are finding it more economically beneficial to live in multigenerational units. In 2016, 20% of the US population reported living with multiple generations in the same household, which is the highest reported proportion since 1950 (Cohn). 
	With the baby boomer generation retiring with a lack of pension plans and weakening social security services, people in our generation may find that taking care of their own family may become the only solution. When this becomes the case and people are trying to juggle their career and social lives, while also taking care of parents or even grandparents, we hope that our quick message-response check-in system can help ease some of these stresses.

Analysis:

	Prior to prototyping this problem had not yet been solved by current technologies because current demand has not yet made such technology a necessity. But as discussed in both Haass’ and Friedberg’s articles regarding baby boomer retirement, this is becoming an increasing concern, because many baby boomers have not saved enough or have underestimated the cost of healthcare and other expenses (Haass; Friedberg). There is some progress in the field, with one such example being GrandCare Systems. However, systems like this do not take into account some of the biggest obstacles facing this field. This includes things like cost, portability, the barrier of entry to immigrant groups, ease of use, and universality.
	We acknowledge that there are some aspects of this problem that are not solvable with technology. Our technology cannot be used in place of urgent care or more specific forms of medical check-ups. It is unable to provide help, say, if an elderly person has fallen and requires assistance to get up. But if immediate help is needed, our tech could be used to notify a local healthcare service provider of their location with additional information about the problem. However, we would like to focus our attention to address those problems that can be reduced or mitigated using technology. With features like instant messaging and video call, an emergency help dialer, a check-up calendar, medication scheduler, and various wellness checks, we hope that this technology can make ensuring the health and well-being of loved ones easier than ever and potentially even save lives.

Design Hypothesis:
	
	We hope to build an application that allows family members to quickly check in with loved ones. Because older people generally tend to struggle with newer technologies, our goal with our design is to produce an application that is both convenient and easy to use, even for those who are not as technologically minded. We hope that our technology will be able to reach those groups for whom learning a complicated app may not be feasible, such as immigrants whose native language is not English, or people with physical or mental disabilities. The end goal of our application is to allow caregivers to check-in from anywhere with a friendly and easy to use platform that can empower our users to fully utilize its features in a portable manner. 

User Research

	For our user research, in addition to interviewing people who are being taken care of by their family members, we wanted to interview current caregivers and people who often communicate with their grandparents, as, through our app, we want to solve the problems that the current caregivers regularly encounter. 
	For our research, we decided to talk to our peers and family members to determine common ways that the elderly interact with technology. Our goal was to use our interviews as a way to either confirm or deny our assumptions of the ways technology could be used as a tool in our project. We asked our subjects about their experiences with elderly family members, more specifically about the technologies that they use to communicate with their family members over 65. Additionally, we asked our research subjects about which technologies were most commonly used by their family members so that we can incorporate some of those features into our final product.
	We conducted our interviews over the phone with friends and family members. During our interviews, we asked them the following questions:
	1. How do you communicate with elderly family members?
	2. Are your elderly family members comfortable with the way you communicate?
	3. Do your family members struggle to use the technologies they own/use? 
	4. What are some of the challenges you face in interacting with your elderly family members?
	5. Do you prefer to text or call with your elderly family members?
	6. Do your elderly family members have or use smartphones?
	7. What types of platforms do elderly family members use or are familiar with?

	From the interviews, we found that users seem to need a far more simple application than currently exists. It was a theme that many elderly users expressed difficulty when trying to learn new technologies, and require constant reminders or assistance to get them to work. It was surprising to hear that . Some pain points for our design would be that elderly users feel no desire to learn new technology, which would render any application or program useless if people feel like there is too large of a learning curve. One of the obstacles that prevent our users from changing their behavior is the fact that some are content with their current means of communication. They feel like phone calls or emails are more than enough to communicate with their loved ones. One opportunity for innovation would be that every service our app provides should be accessible from the home screen in 1-2 clicks. The more clicks or instructions for an elderly user would only cause more confusion, so the simpler the better. We would also want our app to combine the three methods of communication (voice call, video call, instant message) into one simple UI which is easy for the elderly to interact with.

	In addition, we also created persona profiles for some of the users of our app. Here are some examples:

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/person1.png)
![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/person2.png)
![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/picture3.png)


Paper Prototyping:

	An example of our paper prototype can be seen below:
![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/paper.png)

	You can also use the following link to navigate through the paper prototype: https://marvelapp.com/85iha13.
	After presenting the prototype to the users, we found that they enjoyed the simplistic design of the application. It was easy to use and navigate. Every user was able to pass the tasks we assigned to them. However, some of the users provided us with similar feedback regarding improvement to our application. Their feedback can be found in the list below:
	Make the settings button more visible and bigger on the screen.
	The todo list was overwhelming and cluttered on one screen.
	After changing their emergency contact number, people weren’t sure if hitting the ‘done’ button would save their information as they were looking for a save button to click.
	When you want to check up on someone, the checkup screen was also very compact and hard to follow.
	Based on their feedback, we designed our app to be more spacious and minimalistic. We wanted the application to look clean and not have any unnecessary information on the app. We also changed our done button to a save button and increased the size of every component by a small amount so it would be easier to see for someone with poor eyesight. We essentially wanted to make the user experience of the application to be as easy as possible for someone without any background in technology to use.

High-Fidelity Prototyping

	To view tasks use chrome on Mac/Windows
	Make sure to use npm run start to get the proper program to work.
	Type npm install if you do not have it installed to start.

Login Credentials:

	To sign in as elderly:
	Email: stevesmith@elcare.com
	Password: elderly

	To sign in as caregiver:
	Email: paul@elcare.com
	Password: caregiver

Task 1: 
	You are an elderly person and you want to add an emergency contact.

Component: 

	The component we implemented is the data collection form. This is done with our large button titled ‘Settings’ in the top right corner of the screen. Once the user clicks on it, a modal is opened for them where there is an input titled ‘Add Emergency Contact’ where they can type in the new emergency contact’s name, relationship to them, email and phone number and then hit a green button ‘save’ to save their changes. Once the save button is clicked, a green message is shown to the user to verify with the user that they have added an emergency contact successfully. Both the phone number and email fields include validation to make sure the inputted value is a valid lengthed phone number.

	If the user wants to revert the recent changes he just made, he can click the ‘cancel’ button on the bottom left corner of the modal. An alert will be shown to the user when the button is clicked to double check with the user that he wants to cancel all his newly saved changes.

	There is a ‘done’ button on the bottom right corner of the modal where the user can safely exit the settings page with all his newly saved settings successfully changed.

Design Summary:

	In completing the data collection form component, we utilized Norman’s User Interface Design Principles. Because of the way that people have mapped filling out forms, we placed the first and last name fields right next to each other, with additional room for a location in a similar fashion to how people write out their addresses. This is the natural mapping concept that Norman described. We also enforced Norman’s principle of constraints by limiting inputs in the phone number field to numbers and ensuring that the input is a valid phone number with 10 digits. This is so that people do not type incorrect values into these fields which would defeat the purpose of the form, especially since emergency contacts are such an important feature of our application. 

	Our prototype also applies the graphic design principles covered in class. We made sure that each of the fields are close to each other when the form is being filled out. This creates a natural association for the user as they are not required to move their eyes too far to see all of the fields that must be filled out. We also put the settings at the top right corner of our screen. This is to uphold external consistency, as setting features on sites and programs tend to be near the top/top right of programs. This consistency is also upheld by using a gear as the icon for our settings as this icon has become synonymous with changing the settings or system preferences as the user wants. 

Task 2:

	We chose to implement two tasks, one for each user group of our system. For caregivers the task was to check up on your loved one and for the elderly the task was to log in and do your daily check in as an elderly person.

Component: 

	To implement these two tasks we used the data visualization component as well as the user profile component. We accomplished data visualization using plotly, where we were able to display a line graph showing the frequency in which each loved one checks in. This is to hopefully give a visualization to our user about the habits of the person they are taking care of on a daily basis. It also allows this information to be stored over multiple months, giving the caregiver information about the person they are taking care of over the course of their time using the application. 

	We were also able to implement user profiles with a login screen on the initial home screen. This was to optimize the user’s experience as the application can now remember whether the user is a caregiver or a loved one, changing the experience of the user accordingly. Because one of our goals as a team is to make our app as accessible and easy to use as possible, we hope that with this login feature, we streamline the process of getting onto our application and using the various features we have implemented.

Design Summary: 

	In completing the data visualization, we utilized Norman’s design principle of affordances to demonstrate the fact that additional information can be found by hovering the mouse over the plot each day. Doing so gives pop up information telling the user the exact date, as well as the number of times the loved one has checked up on that day. We also utilized the Norman principle of constraints with our login feature, forcing the user to input a valid email and password combination. This is to ensure that the user has their information safe and secured with our system. We also try to uphold a sense of consistency with our coloring of our buttons, using a bright red for settings as well as logging out. 

	We decided to continue with our minimalist design when adding our new components, due to the positive feedback we received last discussion. We tried to capture the values of usefulness and simplicity through our user experience. This was captured through the lack of distractions on our screen, opting to only include visible features if it adds to the user experience. We made sure to keep the graphic design principles in mind when designing our login screen and our statistics page to make sure that only the necessary information is displayed at a time. The experience for an elderly user is also vastly streamlined as the check in feature is literally one click away from their home screen after logging in. We ensure that their experience is as simple as can be by using the white space on our screen and the alignment of features to draw the user’s eyes into the center of the screen, where the check in button is to make it as simple as possible. We decided to use a san-serif font for our various text options as we are trying to promote on screen readability to our users who are potentially visually impaired. 

Observations: 

	A usability problem we discovered was the distinction between the different buttons on the initial home page. It was expressed that the “caregiver” and “loved one” buttons were hard to see. Another suggestion for the front page was to add a description of what Elcare is on the front page. 

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/oldsignin.png)

	Another usability problem we discovered from testing was the possible confusion on the emergency contacts window, with both the cancel and the close button. Some people preferred to see the example phone number formatted as (+1 123-456-7890) instead of (1234567890). It was also noted that settings is either not the proper label or the proper place for adding emergency contacts when on the elderly page. Another person preferred that the text and buttons be enlarged for more visibility. In terms of visual appeal, people felt that it was odd that the height of the “relationship” dropdown menu was a different height than the other boxes.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/emergency.png)

	Some people expressed that the placement of buttons in the upper left and right corners to be odd.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/checkin.png)

	An overall observation was that this application in general can make a personal relationship feel cold and impersonal because we are using technology as a facilitator. In terms of the set-up, people expressed that it might be more helpful if the pages differentiated between a new user and a return user. For a new user, people expected to be prompted rather than manually going through the pages to update information.

Resolutions: 

	Some solutions for the issues pointed out from user testing may include changing the home page to a sign-in page that automatically directs returning users to their respective accounts (caregivers sign in to caregiver accounts, elderly sign into elderly accounts). We would also include a new user button to allow new users to set up new accounts. In addition to the log-in feature, it might be helpful to either include in information blurb either as a separate “info” button or just at the bottom of the login page to inform users of the purpose of this application. 

	For the settings window, to remove some of the confusion, we could rename “settings” to “profile” with an option that links to a list of emergency contacts, which we can then edit as needed. Although this may become confusing, we could also consider adding pop-up bubbles that tell users where certain features are and what they do so that those who are less tech-savvy or don’t remember how the application works are able to navigate more easily. During the emergency contact editing process, we can remove the cancel button and simply notify the user that they have unsaved changes and ask if they still want to close. Additionally, since this application would ideally target users from everywhere, it would be helpful to allow for area code autocompletion when entering the phone number so that we can display proper number formatting. Visually, we can enlarge the buttons and fix the “relationship” dropdown menu to match the heights of the other boxes. We could also add different colors for each option, creating an association from each color to different tasks.

	Lastly, since this technology is aimed to make it easier for a caregiver and the elderly communicate, to minimize the impersonal effects, we could consider having the option for users to personalize their accounts. However, this solution may not be that desirable since we want to keep the application as simple and easy to use as possible.

Task 3: 

	Comparing an elderly’s check ins over time. This is achieved by making our graphs interactive and easy for a user to manipulate.

Component:

	The component we completed for this task is the interactive data selection part. We achieved this by adding on features to our data visualization fields. If you are logged in as a caregiver, you are now able to interact with the graphs of your loved ones, being able to hover over graphs to see exact check in data, as well as see their check in trends. Users are able to see an elderly person’s check in information for their selected months, allowing the user to visualize changes over time to their loved one’s check in behavior. Because we added on to our data visualization field, we also added an additional data visualization feature to the check in button, logging the location of the elderly member who checks in on a map. This is to increase transparency between the elderly member’s whereabouts, and give the caregiver an accurate tracking of their elderly family member’s commute.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/checkedin.png)

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/caregiver.png)

Design Summary: 

	In completing the interactive data selection component, we utilized Norman’s design principle of feedback to help users with their interactions with Elcare’s features. Whenever a user hovers over a clickable button, all of the buttons slightly darken, allowing the user to know if a button has the ability to be clicked. This is to improve visual feedback and allow the user to understand what they are able to do with our features. By creating these feedback type features, we make sure our users know that what they have done has resulted in their desired change, preventing the user from repeating a desired action more times than they may desire. We also impart several constraints on the users in that we do not allow an elderly person to see their location on a map until they have checked in. This is to reduce clutter on the screen and make sure that the most important task, checking in, is completed every time our app is used.

	We also keep in mind some of the visual design principles with our new implementations. For one, we utilize the principle of proximity when implementing our map feature for our check in. This is to draw the attention of the elderly user to the map as soon as the check in button is clicked. Because of the proximity of the map to the button, the user is able to surmise that the map is updated in response to the user’s check in, with the location of the user saved and sent to their loved one via the app. Another graphic design principle with utilize is the alignment principle. By placing an image of the elderly person next to their respective interactive graphs of their check ins, the user is able to surmise that the graph shown corresponds to the elderly person to the left of the graph. Without proper alignment, the user may be left unsure about who’s check in data they are analyzing.

Observations: 

	A usability problem we discovered was that there was no clear method or path of setup for users. On our login page, users mentioned that there was no indication of how users can create new accounts or how this process leads to the actual usage of the application. Additionally, users expressed concern over how elderly accounts are linked to caregiver accounts. The main question being whether an email would be sent to caregivers informing them of a new patient request.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/oldsignin.png)


	Although users had previously commented on the appropriateness of labeling the “Add Emergency Contact” feature as a setting, users further noted that it might be more appropriate for emergency contacts to be added through the caregiver.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/emergency.png)

	Even though users felt that the check-in tracking graph was a nice feature, there were some excessive features such as the zoom-in option on the graph. Additionally, if the graph feature is meant to display the number of check-ins in a month, users questioned whether another part of the graph would allow users to view previous months’ check-in histories as well. Another problem we found during user testing was that there were options to click on or options to perform on the caregiver page. As caregivers may also be responsible for checking in, managing their patients wellbeing, or contacting emergency contacts, users noticed that there were no such options.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/original1.png)

	For the majority of users, the simplistic design was pleasing to the eye and understandably easy to use for its targeted audience. The most important concerns were mainly to understand how the application works rather than just viewing some of the features.

Resolution: 

	Some solutions for the issues pointed out from user testing may include a “create an account” button on the login page which would direct new users to the setup process. Ideally, this process would include indicating who the user is, elderly or caregiver. After indicating the type of user, users are then directed to another page that corresponds to their previous answer, where they continue to fill out essential information. For elderly, important information may include name, external contact information, birth date, the name of their caregiver, and their caregiver’s contact information. For the caregiver, similar information is given, but the caregiver’s information is of course substituted for the elderly’s information. Caregivers and elderly are both notified if there are outstanding requests for connecting caregiver and elderly. However, if it is established that there is already a request pending, then either party can choose to accept the request once an account has been created.

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/login.png)

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/signup.png)

![Paper Prototype](https://github.com/Elcare-Team/Elcare-/blob/improvements/images/signup2.png)

	In terms of emergency contact information, depending on patient’s experience with technology, it may be a more viable option to allow both caregiver and elderly to add, change, or remove emergency contacts as deemed necessary. However, this approach may be conditional on the mental health and state of the  elderly, in which case it would be more suitable for the caregiver to manage emergency contacts but both caregiver and elderly have access to the contact information.

	As mentioned previously, for ease of use and to understand how to use the application, it may be helpful to add pop-up bubbles that tell users where certain features are and what they can do so that those who are less tech-savvy or don’t remember how the application works are able to navigate more easily. Additionally, the login page may also include a brief description of the purpose of the application to clarify who the targeted audience is and what the application does.

	Although there were some concerns about the excessive features of the check-in tracker, it may be helpful if the elderly are able to submit comments when checking in. When comments are submitted, this can be linked to each check-in that is recorded. This in turn can be an alternative feature that provides additional, potentially important information.

	Finally, to enhance the usability of a caregiver account, it might be useful to add a check-in feature for the caregiver as well. This feature would notify the elderly that a caregiver is just checking in to make sure they are ok and requests that they check-in in response. Another feature to add may be a location tracker that logs if the elderly has left a specific location (a location that is saved as “home”). This feature would help to ensure the safety of the elderly. One of the last two features we might include would be an emergency contacts button that, when clicked, displays the emergency contacts for that elderly. The other feature would allow caregivers to keep track of daily activities as recorded by the elderly. These activities could be making sure that an elderly is taking their medicine or that they are eating properly. There could also be a graph component for this feature as well.

Reflection: 

	Our group did a pretty good job of accomplishing a lot in the time we had. Looking back, it was a good idea to choose a project that required minimal backend and could be easily executed. Our main task was to create a way for elderly loved ones to check in with their family members or caregivers, something we did well. Once we implemented this main task, it was easy to implement more supportive tasks, such as adding in a “Sign Up” page and making our data visualization of elderly check-ins interactive. Not only was this helpful for implementing supporting tasks, but it also allowed us to work to specifically on the UI and our user journeys and make them clear and specific, one of our biggest accomplishments. This was something we accomplished by making sure our design was clear and that our buttons and text were easily readable, as well as by sticking to a sleek and simple set of colors for all of our pages. 

	Looking forward, our team would try and determine some other main tasks to add to our system. For example we played around with having multiple elderly users linked to a specific caregiver, but ultimately decided against adding the feature as it complicated our user journey and made signing up for the service more confusing. Additionally another feature we would implement would be allowing the caregiver to assign their loved one tasks to check off of a list when they check-in each day. For example a caregiver could put “Go for a walk” on the list as a way to make sure their loved one was getting daily exercise or “Take your medicine” to make sure they took all their pills.

Links:

	A link to your team’s repository 
	https://github.com/Elcare-Team/Elcare-

	A link to a working version of your prototype (or a video of it): 
	The final project_8 branch of our githu
	b houses the working version of our app: https://github.com/Elcare-Team/Elcare-/tree/project_8

	Instructions for running your app (including how your prototype is best viewed): 
	To view the app, first clone the repository to your home computer. Then in the command line, to run the React app, do npm run start. You might need to update your npm packages, but other than that it should work! 


Login Credentials: 

	To sign in as elderly:
	Email: stevesmith@elcare.com
	Password: elderly

	To sign in as caregiver:
	Email: paul@elcare.com
	Password: caregiver

