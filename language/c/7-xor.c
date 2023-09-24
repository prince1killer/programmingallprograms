#include<stdio.h>
int main(){
    int a =4 , b = 3;
    a = a ^ b;
    printf("%d\n",a);
    b = a ^ b;
    printf("%d\n",b);
    a = a ^ b;
    printf("%d\n",a);
    return 0;
}