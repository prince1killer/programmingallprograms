#include<iostream>
using namespace std;
// ================================== prime ================================
void prime(int a,int b){
    // cout <<a<<b<<endl;
    for(int i=a;i<b;i++){
    bool ok =0;
        for(int j=2;j<i;j++){
            if(i%j==0){
                // cout<<"its not prime";
                ok=1;
                break;
            }
        }
    if(ok==0){
        cout<<"its prime= "<<i<<endl<<endl;
    }
    }
    return;
}
// =============================== Febonachi ============================
void fibonacci(int n){
    int b=1,nextText, a=0;
    for(int i=1;i<=n;i++){
        cout<<a<<endl;
        nextText = a+b;
        a=b;
        b=nextText;
    }
    return;
}
// ============================= Fractorial ====================================
int factorial(int f){
    int a=1,b=2,newOne;
    for(int i=2;i<=f;i++){
        // cout<<a<<endl;
        // newOne= a+b;
        a *= i;
    }
        
    return a;
}
int main(){
    int a,b,n,f;
    cout<<"Enter your number 1=";
    cin>>a;
    cout<<"Enter your number 2=";
    cin>>b;
    prime(a,b);
    cout<<"Enter the value for fibonacci series=";
    cin>>n;
    fibonacci(n);
    cout<<"Enter the value factorial =";
    cin>>f;
    // factorial(f);

    // ==========================nCr!=================================
    cout<<"Enter the value of r! = ";
    int r;
    cin>>r;
    int ans = factorial(f)/(factorial(r)*factorial(f-r));
    cout<<"Here is the ans of nCr! = "<<ans<<endl<<endl;

    int x;
    cout<<"Enter the value of triangle patten of !=";
    cin>>x;
    for(int i=0;i<x;i++){
        for(int j=0;j<=i;j++){
            cout<< factorial(i)/( factorial(j)* factorial(i-j))<<" ";
        }
        cout<<endl<<endl;
    } 
    
    return 0;
}

