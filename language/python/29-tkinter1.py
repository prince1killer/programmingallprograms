from tkinter import*
top = Tk()#here we are inisialise the main loop

naming = Label(top, text="Please stop working")
naming.pack()
#it inisilize the command
top.geometry("500x500")
#widthxheight
top.minsize(200,200)
#width,height
top.mainloop()
#it make contuning looping