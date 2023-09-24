#include<iostream>
#include<cmath>
#include<math.h>
using namespace std;
int main(){

    //  ====================prime  not prime===============
    int n,i;
    cout<<"Enter your value which you want to check=";
    cin>>n;
    bool de = 0;
    for(i=2;i<n;i++){
        if(n%i==0){
            cout<<"its not prime"<<endl;
            de=1;
            break;
        }
    }
    if(de==0){
        cout<<"prime"<<n<<endl;
    }

    cout<<endl<<endl;

    // ==================== Reverce number==================
    int revere=0,num,lastNumber;
    cout<<"Enter your number which you want to reverce=";
    cin>>num;
    while(num>0){
        lastNumber= num%10;
        revere = revere*10 + lastNumber;
        num=num/10;
    }
    cout<<revere<<endl<<endl;

    // ================================Amstrong number=================
    int cube=0,num1,eq;

    cout<<"Enter your number which you want to cube=";
    cin>>num1;
    eq=num1;
    while(num1>0){
        int lastNumber1=num1%10,revere1=0;
        revere1 = revere1*10+lastNumber1;
        cube +=(revere1*revere1*revere1);
        num1=num1/10;
    }
    if(cube==eq){
        cout<<"it amstrong = "<<cube;
    }
    else{
        cout<<"it not amstrong="<<cube;
    }
    cout<<endl<<endl;

    return 0;
}