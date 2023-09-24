#include<iostream>
#include<climits>
using namespace std;

// -----------------------search array--------------------------------------
    int search(int sArr[],int n,int key){
        for( int i=0;i<=n;i++){
            if(sArr[i] == key){
                return i;
             }
        }
        return -1;
    }

    // ----------------------binarry search---------------------------------

    int binarySearch(int bi[],int n, int key){
        int x=0,s=n;
        while(x<=s){
            int a = (x+s)/2;
            if(bi[a]==key){
                return a;
            }
            else if(bi[a]>key){
                s=a-1;
            }
            else{
                s=a+1;
            }
        }
        return -1;
    }

int main(){
    // ================================Array with simple=================================
    // int age1[9] = {12,32,4,5,67,678,34,23,23};
    // cout<<age1[1]<<endl;
    // ================================Array with user input==============================
    // int n;
    // cout<<"Enter size of an array= ";
    // cin>>n;
    // int age[n];
    // for(int i=0;i<=n;i++){
    //     cin>>age[i];
    // }
    // for(int i=0;i<=n;i++){
    //     cout<<age[i]<<endl;
    // }

    // =================================Max array=============================
    // int n;
    // cout<<"Enter your array =";
    // cin>>n;
    // int maxArray[n];
    // int maxNo=INT_MIN,minNo=INT_MAX;
    // for(int i=0;i<=n;i++){
    //     cin>>maxArray[i];
    //     if(maxArray[i]>maxNo){
    //         maxNo = maxArray[i];
    //     }
    //     if(maxArray[i]<minNo){
    //         minNo = maxArray[i];
    //     }
    // }
    // cout<<"\n\n maxno= "<<maxNo<<" minno= "<<minNo<<endl<<endl;
    // for(int i=0;i<=n;i++){
    //     cout<<maxArray[i]<<endl;
    // }

    // ================================Searching of an array====================

    // int n,key;
    // cout<<"Enter the size of an array=";
    // cin>>n;
    // int sArr[n];
    // for(int i=0;i<=n;i++){
    //     cin>>sArr[i];
    // }
    // cout<<"Enter the sarching key=";
    // cin>>key;
    // cout<<"This is youtr ans="<<search(sArr,n,key)<<endl<<endl;

    // ==================================binary search============================
    int n,key;
    cout<<"Enter the array size =";
    cin>>n;
    int bi[n];
    for(int i=0;i<=n;i++){
        cin>>'bi[i];
    }
    cout<<"Enter your key=";
    cin>>key;
    cout<<endl<<"Here is your ans="<<binarySearch(bi,n,key)<<endl;





    return 0;
}