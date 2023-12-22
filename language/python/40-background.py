from tkinter import*
root=Tk()
root.geometry("1000x500")
root.configure(background="black")

fm=Frame(root,bg="red",cursor="cross")
fm.propagate(0)
fm.pack()

lbl=Label(fm,text="Enter name : ")
strvalue=StringVar
txt1=Entry(fm,textvariable=strvalue,font=('Arial',15,'bold'),fg='red')
btn=Button(fm,text="click",bg='blue',fg='white')
lbl.grid(row=0,column=0)
txt1.grid(row=0,column=1)
btn.grid(row=1,column=0)


root.mainloop()