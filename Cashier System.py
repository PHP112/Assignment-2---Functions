import random #Give a random chances for coupon
from time import sleep #A specific delay for each messages

print("Welcome to Mr.P shop!")
sleep(0.5)
print("I am your cashier for today. I hope that you're doing well!")
sleep(0.5)
UserInputOne = input("Please enter how many items do you currently have: ") #Input of how many item in total
ConvertedUserInputOne = int(UserInputOne)
sleep(0.5)
print("Thank you! We're going to move on to the next step")


def FirstFunc():
    #Variable list
    costCount = 0
    itemCount = 1
    breakCount = 0 
    gstPercent = 0.05
    Coupon = 0
    CouponText = "" #So that the final message will print out which coupon it is (10% or 20% or 30%)
    for p in range(ConvertedUserInputOne):
        UserInputTwo = input("Please enter the item name: ") #Input of NAME of the item
        UserInputThree = input("Please enter the cost of the item ($): ") #Input of COST of the item
        ConvertedUserInputThree = float(UserInputThree)
        print("*ITEM", itemCount, "SUCCESSFULLY SCANNED")
        costCount += ConvertedUserInputThree
        FinalCost = costCount * gstPercent
        FinalFinalCost = FinalCost + costCount
        itemCount += 1 #This add one so it could print the above number
        breakCount += 1 #This check if all items have been scanned
        #This will make sure that all items are scanned and then total calculation will be made
        if breakCount == ConvertedUserInputOne:
            #Make the coupon chances system to give out a random coupon amount (%)
            CouponChances = random.randrange(1, 3)
            if CouponChances == 1:
                Coupon += 0.1
                CouponText = "10%"
            if CouponChances == 2:
                Coupon += 0.2
                CouponText = "20%"
            if CouponChances == 3:
                Coupon += 0.3
                CouponText = "30%"
            #Calculate the FINAL cost with added coupon percentage(%)
            FinalFinalFinalCost = FinalFinalCost * Coupon
            FinalFinalFinalFinalCost = FinalFinalFinalCost + FinalFinalCost
            #Print the final message
            print("Thank you for your effort. The total cost is:", round(FinalFinalFinalFinalCost, 2), "with additional", CouponText, "coupon")
            print("Thank you for stopping by at Mr.P shop. Have a great day!")

FirstFunc()

sleep(1)  #A delay

import turtle #Draw graphics at the end
def SecondFunc():
    count = 0 #This is for how many time whileloop will run later

    window = turtle.Screen()
    window.bgcolor("black")
    peter = turtle.Turtle()
    peter.speed(3)
    peter.pencolor("blue")
    peter.pensize(9)

    #Main drawing system
    peter.penup()
    peter.goto(-60,-100)
    peter.pendown()
    for doubleP in range(4):
        peter.left(90)
        peter.forward(200)
        peter.right(45)
        peter.forward(100)
        peter.left(45)
        peter.pencolor("red")
    #Change size and color
    peter.pensize(15)
    peter.pencolor("white")
    peter.forward(185)
    peter.right(90)
    peter.forward(90)
    peter.right(90)
    peter.forward(185)
    peter.right(90)
    peter.forward(90)
    peter.right(180)
    peter.forward(250)
    sleep(0.25) #Delay
    #While loop to change background color (FLASHWARNING)
    while count <= 3:
        sleep(0.75)
        window.bgcolor("cyan")
        sleep(0.75)
        window.bgcolor("yellow")
        sleep(0.75)
        window.bgcolor("pink")
        sleep(0.75)
        window.bgcolor("black")
        count += 1

    window.exitonclick()

SecondFunc()