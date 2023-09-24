import datetime;
current_time = datetime.datetime.now();
print(current_time);
print("year= ", current_time.year);
print("month= ",current_time.month);
print("date= ",current_time.date);
print("day= ",current_time.day);
print("hour= ",current_time.hour);
print("minute= ",current_time.minute);
print("second= ",current_time.second);
print("microsecond= ",current_time.microsecond);
hour =  current_time.hour
if hour < 12:
    print("good morning , it's ",hour,"00 hover to go")

elif hour <18:
    print("good afternoon , it's ",hour,"00 hours to go")
    
else:
    print("good Night, it's ",hour,"00 hover to go")
    