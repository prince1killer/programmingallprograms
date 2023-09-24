#include<iostream>
using namespace std;

//=========================================Sum of all  Natural number ===============================
int sum(int a){
    int sum=0,sum2;
    for(int i=0;i<=a;i++){
        sum = sum + i;
    }
    return sum;
}
//================================= pythagones theoram ======================================
bool pytho(int x,int y,int z){
    int a =max(x, max(y,z));
    int b ,c;
    if(a == x){
        b=y;
        c=z;
    }
    else if(a == y){
        b = x;
        c = z;
    }
    else{
        b = x;
        c = y;
    }
    if(a*a == b*b + c*c){
        return true;
    }
    else{
        return false;
    }
}


int main(){
    cout<<"(1)sum of all natural number = "<<endl;
    cout<<"(2)pythogans theoram"<<endl;
    cout<<"(3)"<<endl;
    int ch;
    cout<<"Enter your choice =";
    cin>>ch;
    if(ch == 1){
        int sum2,a;
        cout<<"Enter the value 1=";
        cin>>a;
        cout<<"with for loop= "<<sum(a)<<endl;
        sum2 =(a*(a+1))/2;
        cout<<"without for loop="<<sum2<<endl;
    }
    else if(ch == 2){
        int x,y,z;
        cout<<"Enter the x, y, and z value = ";
        cin>>x>>y>>z;
        if(pytho(x,y,z)){
            cout<<"pythagoream triplate";
        }
        else{
            cout<<"not-pathagoream triplate";
        }
    }
    else if(ch == 3){
        
    }

    return 0;
}