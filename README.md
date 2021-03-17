# cse110-w21-group32

## Project Page:

https://emmorris1100.github.io/cse110-w21-group32/source/index.html

Public Video: https://www.youtube.com/watch?v=cN-UfeyUNhk

Private Video: 

### File Structure:

```
.
├── .github       [repot automation addons]
├── admin
    ├── meetings
    ├── misc      [rules]
    └── videos
├── coverage      [code coverage report]
├── cypress
├── out           [automated documentation ouput]
├── source
    ├── audio
    ├── img
    ├── js        [including js unit tests]
    ├── manual_testing
    └── styles
└── specs
    ├── adrs
    ├── brainstorm
    ├── interface
    ├── pitch
    ├── sys_diagrams
    └── users
        └── personas
```


Features:
- Start Button
- End/Reset Button
- Timer
  - Remaining time of current stage
  - Switch stages: pomo->short->pomo->short->pomo->short->pomo->long->repeat
  - Tab outline switches to corresponding stage
  - Background color changes
  - Need to manually press the start button to start a new stage
  - Reset button will reset to total time on current stage
- Help Popup
- Settings Popup
  - Change duration of each stage
  - Change notification sound (sound will automatically play upon choosing)
  - Change volume
  - Play me button to preview the sound and volume
- Counter
  - Four square counters marking which pomo you are on
  - Button right cumulative pomo counter
- Windows tab shows time remaining
