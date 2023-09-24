#include<iostream>
#include<math.h>
using namespace std;
//=================================== Prime =================================
bool isprime(int num){
    for(int i=2;i<=sqrt(num);i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}
//================================ Febonachi series ==========================

void febo(int n){
    int c;
    int a = 1;
    int b = 2;
    for(int i=1;i<=n;i++){
        cout<<a<<endl;
        c = a;
        a = b + a;
        b =c;
    }
    return;
}
//=========================================Factoral ========================
int fact(int n){
    int sum=1;
    for(int i=1;i<=n;i++){
        sum = sum *i;
    }
    return sum;
}
//==================================== main ================================
int main(){
    int ch;
    cout<<"(1) prime"<<endl;
    cout<<"(2)fibonachi"<<endl;
    cout<<"(3)factorial"<<endl;
    cout<<"(4)nCr"<<endl;
    cout<<"(5)nCr"<<endl;
    cout<<"Enter your choice="<<endl;
    cin>>ch;
    if(ch == 1){
        int a,b;
        cout<<"Enter the value a and b=";
        cin>>a>>b;
        for(int i=a;i<=b;i++){
            if(isprime(i) == true){
                cout<<i<<endl;
            }
        }
    }
    else if(ch == 2){
        int a;
        cout<<"Enter the value =";
        cin>>a;
        febo(a);
    }
    else if(ch == 3){
        int a;
        cout<<"Enter the value for factorial =";
        cin>>a;
        int ans = fact(a);
        cout<<"sum = "<<ans;
    }
    else if(ch == 4){
        int a,cr,b;
        cout<<"Enter the value for nCr a=";
        cin>>a;
        cout<<"Enter the value for nCr b=";
        cin>>b;
        
        cr= fact(a)/(fact(b)*fact(a-b));
        cout<<"nCr = "<<cr;
    }
    else if(ch == 5){
        cout<<"Enter the patten nCr =";
        int a;
        cin>>a;
        for(int i=0;i<=a;i++){
            for(int j=0;j<=i;j++){
                int ans = fact(i)/(fact(j)*fact(i-j));
                cout<<ans;
            }
            cout<<endl;
        }
    }
    return 0;
}