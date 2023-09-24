#include<stdio.h>
int main(){
    char a = 1,b = 2;
    if(a&b){
        printf("x =%d and y=%d",a,b);
    }
    if(a&&b){
        printf("a =%d and b=%d",a,b);
    }
 return 0;   
}