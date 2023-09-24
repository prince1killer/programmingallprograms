from tkinter import*
from PIL import ImageTk,Image
neo = Tk()
neo.geometry("500x500")
neo.minsize(200,200)
# Define the geometry of the window
image1 = Image.open("./images/tree-736885_1280.jpg")
test = ImageTk.PhotoImage(image1)
label = Label(neo,image=test)
label.pack()
neo = mainloop()