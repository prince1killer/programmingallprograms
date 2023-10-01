#include<stdio.h>
 int main(){
    int a[3][3],i,j,k=0;
    for(i=0; i<3;i++){
        for(j=0;j<3;j++){
            scanf("%d",&a[i][j]);
        }
    }

    for(i=0; i<3;i++){
        for(j=0;j<3;j++){
            if(a[1][0]==0 || a[2][0]==0 || a[2][1]==0){
                k++;
                break;
            }
            // printf("%d",a[i][j]);
            // if(a[1][0]==0 || a[2][0]==0 || a[2][1]==0){
            //     printf("0");
            // }
        }
            printf("\n");
    }

    if(k == 3){
        printf("triangle");
    }


    else{
        for(i=0; i<3;i++){
            for(j=0;j<3;j++){
                printf("%d ",a[i][j]);
            }
            printf("\n");
        }
        printf("\n%d\n",k);
    }


    return 0;
 }