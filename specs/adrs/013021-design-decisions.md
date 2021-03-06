  # DISCLAIMER: We had to rename all files to fit the naming format. As a result, creation dates may not match the actual time of ADR creation.
# [Design Decisions]

* Status: [accepted]
* Deciders: [whole team] 

## Context and Problem Statement
Not any problems but just recorded the reasons for the decisions of our features in out first sprint: planning stage.


## Decision Outcome

## Essential Features MVP - MVP Sprint 1
* start button 
  
 ``` Begins the session. Button is disabled after clicked so that only the stop button may be pressed``` 

* stop button

 ``` Ends the session, does not pause, pressing stop will reset the time. Button is disabled after clicked so that only the start button may be pressed```

* Time
 
 ``` Contains the countdown of the current pomodoro stage(25min/15min/5min) in a 00:00 format. Shows the user how much time is left for each stage```

* Help Button
  
 ``` This is a static mockup page. Includes basic explaination of the pomodoro features as well as the summary of the benefits of using a pomodoro ```

 - Reason: to state the benefits and a simple how to use the pomodoro timer

* Three tabs

 ``` to change between the three stages: Pomo, Short Break, Long Break. The three stages are switched *automatically* when the current stage's timer goes to 00:00 and the tab of whatever stage you are on is highlighted. ```
 
 - Reason: Indicate what stage the user is in
  * Break
 
 ``` Every four pomos you get a longbreak(15min), after each individual pomo that is not the fourth pomo you receive a short break(5min)```
 
 ``` After a break, you have to press start again to start another pomo```
 
 ## Essential Add-ons -MVP Sprint 2
 * Browser Notification
 
 ``` Sound alert to notify when the pomo is finished.```
 
 - Reason: users probably won't be on the page of the pomodoro timer so the sound alert will notify them that we are switching stages
 
 * Settings
 
 ``` Adjusting the volume of the Browser Notification```
 
  - Reason: users will want to adjust the volume of their notification sound depending on their own preferences
 
## Add-ons - Stretch Sprint
 * Settings
 
  ```change time amount per stage (dropdown), change notification sound (dropdown similar to lab)```
 
  - Reason: customizing time amount per stage 
  
## Possible Add-ons
  * Play me button in settings
    - To let user play and test the volume and current sound of the notification sound they picked
    - Also picking a sound will automatically play it one time 
  * Adding a user log-in database
    - Reason: Track user tasks and completed pomos; this ties in with the concept of gamification and the sense of accomplishment from completing pomos and being able to plan own time when seeing task list.
    
 
 ## Decisions
 * Pitch Decisions:
  - Decided our problem would revolve around students with poor habits or inexperience with work as this is a large target audience
  - Decided our apettite would be the time remaining from the creation of our pitch until the end of the quarter (4 weeks)
  - Rabbit holes will include any problems-solutions that we may address having to do w/ target audience

* C4 Decisions:
  - Created provisional containers and components (as opposed to those set in stone) to have an idea of any features we want to follow through with given we have the time to do so 
  
* Interface Design Decisions
   - Set the colors of the different stages
   - Deleted the background color change option 2/6/2021
     - No need to complicate the background color change since users won't even be looking at this page all the time
   
