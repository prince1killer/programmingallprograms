#include<iostream>
using namespace std;
int main(){
    int poketMoney=3000;
    for(int i=0;i<=30;i++){
        if(i%2==0){
            continue;
        }
        if(poketMoney == 0)
        {break;}
        cout<<"Go out taday!="<<i<<"Amount remaning="<<poketMoney<<endl;
        poketMoney = poketMoney-300;
    }
          // table of 2
    cout<<endl<<endl;
    int n;
    cout<<"Enter the value=";
    cin>>n;
    for(int i=0;i<=n;i++){
        if(i%3==0){
            continue;
        }
        
        cout<<i;
    }

    cout<<endl<<endl;
// ======================prime number
int x,i;
cout<<"Enter yout number=";
cin>>x;
// int i;
for(int i=2;i<x;i++){
    if(x%i==0){
    cout<<"its not prime="<<x<<endl;
    break;
    }
    // cout<<i<<endl;
}
    if(i==n){
        cout<<"it prime="<<i<<" ="<<x<<endl;
    }

    int a,b,j;
    cout<<"enter your value a=";
    cin>>a;
    cout<<"Enter the value b=";
    cin>>b;
    for(j=a;j<=b;j++){
        int num;
        for(num=2;num<j;num++){
            if(j%num==0){
                cout<<"its not prime"<<endl;
                break;
            }
        }
        if(j==num){
            cout<<"its prime number"<<num<<endl;
        }
    }


return 0;
}
    // if(x==2|| x==3){
    //     cout<<"its prime"<<endl;
    // }
    // else{

    // if(x%2==0 && x%3==0){
    //     cout<<"its not prime"<<endl;
    // }
    // else{
    //     cout<<"its prime"<<endl;
    // }
    // }