main(){
  print("Enter the value \n this is normal string ");
  //RAW STRING
  print(r"Enter the value \n this is raw string");

  //Multy Line String
  var mulname = '''  this is multy line
  string we can write in triple single coute 
  or triple double coute''';
  print(mulname);



  //now converting datatype
  var num = int.parse("12");
  var num1 = double.parse("12");
  assert(num == 12);//assert is inbuild function to compaire condition if it not true then it givr us error
  print(23+num);
  print(23+num1);


  // int -> string
  var name = 1.toString();
  assert(name == '1');
  var fname = 3.14378.toStringAsFixed(2);
  assert(fname == '3.14');
  print(fname);


}
