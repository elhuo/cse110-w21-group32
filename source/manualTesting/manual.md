# Manual Testing

## Help Popup
<table>
 <tr>
   <td>Element/Action</td>
   <td>Expected Behavior</td>
   <td>Actual Behavior</td>
  </tr>
  <tr>
   <td>Help Button</td>
   <td>Displays popup when help button is pressed</td>
   <td>
   - [x] Displays popup when button is pressed</td>
  </tr>
  <tr>
   <td>Close Button/Close Popup</td>
   <td>Closes popup when pressing the close button/clicking outside of the popup</td>
   <td>
   - [x] Hides popup on clicking "Close" button/outside of the popup</td>
  </tr>
  <tr>
   <td>Popup description</td>
   <td>Provides overview of Pomodoro technique and explanation of how to use timer</td>
   <td>
   - [x] Explanation of Pomodoro technique
   - [ ] Explanation of how to use timer (arguably unnecessary?)</td>
  </tr>
</table>

## Base Timer
### Base Timer Buttons
<table>
  <tr>
   <td>Element/Action</td>
   <td>Expected Behavior</td>
   <td>Actual Behavior</td>
  </tr>
  <tr>
   <td>Timer [not started]</td>
   <td>Display Starting Pomo Duration</td>
   <td> 
   - [x] Pomo duration changes to match selected duration
   - [x] Tab title reflects current stage
  </td>
  </tr>
  <tr>
   <td>Click Start button [not started]</td>
   <td>Starts timer of current stage: (default) 25min pomo; 5min short break; 15min long break</td>
   <td>
   - [x] Time in timer starts decreasing: (default) 25min pomo; 5min short break; 15min long break</td>
  </tr>
  <tr>
   <td>Click Stop button [not started]</td>
   <td>No effect, timer is not started</td>
   <td>
   - [x] No effect, button is disabled</td>
  </tr>
  <tr>
   <td>Click Start button [timer started]</td>
   <td>No effect, timer is already started</td>
   <td>
   - [x] No effect, button is disabled</td>
  </tr>
  <tr>
   <td>Click Stop button [timer started]</td>
   <td>Stops timer, reset to initial duration to start again</td>
   <td>
   - [x] Stop timer, </td>
  </tr>
</table>

### Change Stage Between Pomo/Short Break/Long Break
<table>
 <tr>
   <td>Element/Action</td>
   <td>Expected Behavior</td>
   <td>Actual Behavior</td>
  </tr>
  <tr>
   <td>Stage time is 00:00</td>
   <td>Changes Stage Behaviors:
   - Tab outline and text bolded for new stage
   - Correct background color
   - Timer
   - Counter
  </td>
   <td>
    - [x] Notification Sound
    - [x] Changes to next stage (pomo#1->short break#1->pomo#2->short break#2->pomo#3->short break#3->pomo#4->long break#1->cycle again)
    - [x] Tab outline is on next stage and text bolded for stage
    - [x] Background color: Blue-pomo, Dark Purple-short break, Light Purple-long break
    - [x] Timer of new stage should not automatically start
    - [x] Counter should show the current pomo number (squares filled is count)
   </td>
   
  </tr>
  <tr>
   <td>After Long Break</td>
   <td>
   Resets cycle
   </td>
   <td>
    - [x] Go back to pomo stage
    - [x] Counter resets to all squares not filled
   </td>
  </tr>
</table>


## Settings Popup
<table>
  <tr>
   <td>Element/Action</td>
   <td>Expected Behavior</td>
   <td>Actual Behavior</td>
  </tr>
  <tr>
   <td>Click Settings Icon</td>
   <td>Open Settings Popup</td>
   <td>
   - [x] Default volume is at middle of slider
   - [x] Volume image is second level image
   </td>
  </tr>
  <tr>
   <td>Close Button/Close Popup</td>
   <td>Closes popup when pressing the close button/clicking outside of the popup</td>
   <td>
   - [x] Hides popup on clicking "Close" button/outside of the popup</td>
  </tr>
  <tr>
   <td>Set duration (pomodoro)</td>
   <td>Changes pomo duration to match</td>
   <td>
   - [x] Changes pomo duration immediately after</td>
  </tr>
  <tr>
   <td>Set duration (short break)</td>
   <td>Changes short break duration to match</td>
   <td>
   - [x] Changes break duration immediately after</td>
  </tr>
  <tr>
   <td>Set duration (long break)</td>
   <td>Changes long break duration to match</td>
   <td>
   - [x] Changes break duration immediately after</td>
  </tr>
  <tr>
   <td>Set notification sound</td>
   <td>Changes notification sound to match</td>
   <td>
   - [x] All sounds play appropriately in preview and notification when stage changes
   - [ ] Plays sound immediately when new notification sound is selected</td>
  </tr>
  <tr>
   <td>Set notification volume slider</td>
   <td>Changes notification volume relative to slider</td>
   <td>
   - [x] Notification sound is changed, per test button and in stage changes
   </td>
  </tr>
  <tr>
   <td>Notification volume level img</td>
   <td>Displays img reflecting volume level</td>
   <td>
   - [x] Updates on release of the slider
   - [ ] Updates as you drag the slider
   </td>
  </tr>
  <tr>
   <td>Press Play Sound to Preview Sound</td>
   <td>Plays selected sound at selected volume level</td>
   <td>
   - [x] Plays seleted sound
   </td>
  </table>


  ## Resize Page
<table>
  <tr>
   <td>Element/Action</td>
   <td>Expected Behavior</td>
   <td>Actual Behavior</td>
  </tr>
  <tr>
   <td>Minimize browser window to half size</td>
   <td>Changes size of all elements correspondingly</td>
   <td>Changes size and avoid overlap:
   - [x] Buttons
   - [x] Text
   - [x] Timer
   - [x] Icons
   - [x] Popups
  </td>
  </tr>
  <tr>
   <td>Open App in Mobile Device or View</td>
   <td>Changes size of all elements correspondingly</td>
   <td>Changes size:
   - [x] Buttons
   - [x] Text
   - [x] Timer
   - [x] Icons
   - [x] Popups
  </td>
  </tr>
  </table>