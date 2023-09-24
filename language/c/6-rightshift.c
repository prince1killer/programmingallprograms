#include<stdio.h>
int main(){
    int a = 3;
    printf("without right shift =%d\n",a);
    int a1 = a << 1;
    printf("with right shift of 1=%d\n",a1);
    int a2 = a << 2;
    printf("with right shift of 2=%d\n",a2);
    int a3 = a << 3;
    printf("with right shift of 3=%d\n",a3);
    int a4 = a << 4;
    printf("with right shift of 4=%d\n",a4);
    return 0;
}