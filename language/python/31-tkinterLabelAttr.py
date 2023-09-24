from tkinter import*
root = Tk()
root.geometry("499x399")
'''
========================Important Label option========================
text = adds the text
bd = background
fg = foreground
font = sets the font 
padx = x padding
pady = y padding
relief = border styling - sunken, raised, groove, ridge
'''
text_label = Label(text='''This article is about darknet websites. by traditional\n 
web search engines, see Deep web. The dark web is the World Wide Web content that exists on darknets:\n 
overlay networks that use the Internet but require specific software, configurations, or authorization \n
to access.[1][2][3][4] Through the dark web, private computer networks can communicate and conduct\n 
business anonymously without divulging identifying information, such as a user's location.[5][6] The\n 
dark web forms a small part of the deep web, the part of the web not indexed by web search engines,\n
 although sometimes the term deep web is mistakenly used to refer specifically to the dark web''',
                   bg="blue", fg="white", padx="30", pady="90", font=("verdana", 10, "bold"), borderwidth=31, relief="groove")
'''
===================================Important pack option===================================
anchor = nw(nothwest), ne(notheast)
side = left,right,top,bottom 
'''
# text_label.pack(anchor="nw")
# text_label.pack(side=BOTTOM,anchor="se")
# text_label.pack(anchor="nw",fill=X)
text_label.pack(side=LEFT, fill=Y)
root.mainloop()