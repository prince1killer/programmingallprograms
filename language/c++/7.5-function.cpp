#include<bits/stdc++.h>
#include<math.h>
#include<cmath>
using namespace std;
// ==========================================Natural================================
void natural(int n){
    int a=0;
    for(int i=1;i<=n;i++){
        a +=i;
    }
    cout<<a<<endl;
return;
}
// =======================================================pythagores================================
void pythagores(int a,int b,int c){
    a=a*a;
    b=b*b;
    c=c*c;
    if(a>b && a>c){
        // cout<<a<<endl;
        // cout<<b<<endl;
        // cout<<c<<endl;
        if(a==(b+c)){
            cout<<"true"<<endl;
        }
        else{
            cout<<"false"<<endl;
        }
    }
    else if(b>a && b>c){
        if(b==(a+c)){
            cout<<"true"<<endl;
        }
        else{
            cout<<"false"<<endl;
        }
    }
    else{
        if(c==(a+b)){
            cout<<"true"<<endl;
        }
        else{
            cout<<"false"<<endl;
        }
    }
return;
}

// ==========================================Binary to Decimal=========================
void binarytodecimal(int bi){
    int ans=0,x=1;
    while(bi>0){
        int y = bi%10;
        ans += x*y;
        x *= 2;
        bi /= 10; 
    }
    cout<<"ans is here= "<<ans<<endl;
    return;
}
// =======================================octa to decimal====================
void octatoDec(int ot){
    int ans=0 , x=1;
    while(ot>0){
        int y= ot%10;
        ans += x*y;
        x *= 8;
        ot /= 10;
    }
    cout<<"ans of octa to decimal = "<<ans<<endl<<endl;
    return;
} 

// ===========================Hexadecimal to decimal=================
int hextoDec(string he){
    int ans=0,x=1;
    while(){
        
    }
    return ans;
}   


int main(){
    int n;
    cout<<"Enter the value for sum = ";
    cin>>n;
    natural(n);

    int a,b,c;
    cout<<"Enter the pythogenus three number=";
    cin>>a>>b>>c;
    pythagores(a,b,c);

    // binnary to decimal
    int bi,ot,he;
    cout<<"Enter the number binary =";
    cin>>bi;
    binarytodecimal(bi);
    // cout<<binarytodecimal(bi)<<endl;

    // octa to decimal
    cout<<"Enter the value for octa to decimal =";
    cin>>ot;
    octatoDec(ot);

    // Hexadecimal to decimal
    cout<<"Enter the value Hexa to decaimal";
    cin>>he;
    hextoDec(he);


    return 0;
}