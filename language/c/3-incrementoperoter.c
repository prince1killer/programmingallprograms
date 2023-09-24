#include<stdio.h>
int main(){
    int a =8,b=3,c;
    c = a++ + ++b;
    printf("%d",c);
    return 0;
}