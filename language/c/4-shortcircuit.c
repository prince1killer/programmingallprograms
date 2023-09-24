#include<stdio.h>
int main(){
    int a = 5, b = 6;
    int inc;
    inc = (a > b) && (b++);//wrong but give correct result
    inc = (a < b) && (b++);//this will give result 
    printf("%d\n",inc);
    printf("%d\n",b);
    return 0;
}