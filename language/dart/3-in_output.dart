import 'dart:io';
main(){
  // print("Enter your name =");
  stdout.write("Enter the value =");
  String? name = stdin.readLineSync();
  print("my name is $name");
}