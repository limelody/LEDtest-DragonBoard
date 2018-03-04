from libsoc_zero.GPIO import Button #GPIO Libraries
from libsoc_zero.GPIO import Buzzer
from time import sleep
from time import time 

helpButton = Button('GPIO-A0')
cancelButton = Button('GPIO-AB')
buzzerPin = Buzzer('GPIO-D5')

helpButton.wait_for_press()
falseAlarm = False 

while falseAlarm == False:
    start = time() 
    while start < 3: 
        buzzerPin = HIGH
    while start < 120 and falseAlarm == False: 
        if cancelButton.is_pressed():
            falseAlarm = True
            
if falseAlarm == False: 
    findLocation() #using GPS or Wifi
    #then send to HTML