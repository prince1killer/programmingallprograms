#include<iostream>
using namespace std;

int main(){
    int num = 10;
    int my_num = num;

    int *poi = &num;


    cout << "this is pointer = " << num << endl;
    cout << "this is pointer  address= " << poi << endl;

    int &ch_num = num;
    ch_num = 90;

    cout << "this is pointer = " << num << endl;
    cout << "this is pointer  address= " << poi << endl;


    return 0;
}