i=5
for i in range(1,6):
    for j in range(i,6):
        print(" " ,end="")
    x=i;
    for k in range(i,i+i):
        if (x == i or i == 5 or x == i+i-1):
            print(k, end="")
        else:
            print(" ",end="")
        x= x+1;
    if i>1:
        for k in range(i,x-2,):
            # if(k == i or k == 5):
                print(k, end="")
            # else:
                # print(" ",end="")
    print("")
# for(i=1;i<=5;i++){
#             for(int j=i;j<=5;j++){
#                 System.out.print(" ");
#             }
#             x=i;
#             for(int k=i;k<=i+i-1;k++){
#                 if(x == i || i == 5 || x == i+i-1){
#                     System.out.print(x);
#                 }
#                 else{
#                     System.out.print(" ");
#                 }
#                 // System.out.print(x);
#                 x++;
#             }
#             if(i>=2){
#                 for(int k=x-2;k>=i;k--){
#                     if(k == i || i == 5){
#                         System.out.print(k);
#                     }
#                     else{
#                         System.out.print(" ");
#                     }
#                 }
#             }
#             System.out.println("");
#         }