#include<iostream>
using namespace std;
int main(){
    int my_pointer;
    int count = 56;
    my_pointer = count;

    //NOW WE START POINTER
    int *myp = &count;//adtracte in pointer in c++
    int my_pointer_value = *myp;


    cout << "This is my pointer value = " << my_pointer <<endl;
    cout << "This is my address of pointer = " << myp <<endl;
    cout << "This is my address of pointer value = " << my_pointer_value <<endl;
    return 0;
}