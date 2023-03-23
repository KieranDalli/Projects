# Importing necessary libraries
import smtplib, ssl
import RPi.GPIO as GPIO
import dht11
import time
import datetime
import drivers
from time import sleep
import os

# Load the driver and set it to "display"
# If you use something from the driver library use the "display." prefix first
display = drivers.Lcd()

#removing the unecessary warnings that still allow the code to work.
GPIO.setwarnings(False)
#setting the GPIO as BCM
GPIO.setmode(GPIO.BCM)

#adding variables
instance = dht11.DHT11(pin=17)
resistorPin = 4

yellowLCD = 26
switch1 = 19
redLCD = 13 
switch2 = 6

# setting up the led's so on startup they are turned off and setting the switches in a pull up down state.
GPIO.setup(redLCD, GPIO.OUT, initial = False) #makes the pin into an output
GPIO.setup(switch1, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(yellowLCD, GPIO.OUT, initial = False) #makes the pin into an output
GPIO.setup(switch2, GPIO.IN, pull_up_down = GPIO.PUD_UP)

# setting up the emails and port
smtp_server = "smtp.gmail.com"
port = 587  # For starttls
sender_email = "weathersystemrecieve@gmail.com"
receiver_email = "kierandalli@gmail.com"


#reading the dht11
result = instance.read()
if result.is_valid():
        TempHumid = ("Temperature: %d Celsius" % result.temperature +' '+"Humidity: %d %%"  % result.humidity)
        Temp = ("Temperature: %d Celsius" % result.temperature)
        Humid = ("Humidity: %d %%"  % result.humidity)

#adding the message and subject
message = """\
Subject: Weather report

""" + TempHumid

#password for sender email
password = "DHT11TEST" # enter password here of sender

# Send email here

# Create a secure SSL context
context = ssl.create_default_context()
# This will load the system’s trusted CA certificates,
# enable host name checking and certificate validation,
# and try to choose reasonably secure protocol and cipher settings.

# Try to log in to server and send email

#this function is for sending the email
def sendEmail():
        GPIO.output(redLCD,False) #turns off red led
        GPIO.output(yellowLCD,True) #turns on yellow led
        time.sleep(3)
        GPIO.output(yellowLCD,False) #turns off yellow led

        

        print(message) # prints the message
        server = smtplib.SMTP(smtp_server,port) # connects to the port
        server.ehlo() # Can be omitted
        server.starttls(context=context) # Secure the connection
        server.ehlo() # Can be omitted
        server.login(sender_email, password) # logs into the email
        server.sendmail(sender_email, receiver_email, message)# sends the email
        os.system("espeak ' " + "Email sent" + "'")

    
        

    
#this function is for reading the temp
def readTempHumid():
    #read the dht11
    result = instance.read()
    if result.is_valid():
        GPIO.output(redLCD,True)#turns on red led
        display.lcd_display_string("Temp:%-3.1fC       " % result.temperature, 1) # Write line of text to first line of display
        display.lcd_display_string("Humidity:%-3.1f%%  " % result.humidity, 2)  # Write line of text to second line of display
        os.system("espeak ' " + Temp + "'")
        time.sleep(0.3)
        os.system("espeak ' " + Humid + "'")
#this function is here to clean up the gpio
def destroy():
    """this function will reset all the GPIO used for this project """    
    print("Cleaning up...") #will print "Cleaning up..."
    GPIO.cleanup()

#will execute the functions
try:
    #checks for button input and calls functions when pressed
    while True:
        if GPIO.input(switch1) == False:
            print("switch 1 - pressed")
            # call light sensor function
            sendEmail()
        if GPIO.input(switch2) == False:
            print("switch 2 - pressed")
            # call DHT function
            readTempHumid()
            sleep(0.2)

except KeyboardInterrupt: #checks if "ctrl + c" is entered
    print("program stopped") #prints "program stopped"
    display.lcd_clear()
    destroy() #calls destroy function
