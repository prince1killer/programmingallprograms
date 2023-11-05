import 'dart:html';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blue,
        appBar: AppBar(
          title: Text("My App Bar"),
          backgroundColor: Colors.amber[400],
          elevation: 0,
          leading: Icon(Icons.menu),
          actions: [
            IconButton(onPressed: (){},
            icon: Icon(Icons.logout)),
          ],
        ),
        //body : Center(
        // child :Container(
        //   height: 300,
        //   width: 300,
        //   padding :const EdgeInsets.all(25),
        //   // padding : EdgeInsets.symmetric(horizontal:35,vertical: 45),
        //   // padding: EdgeInsets.only(left: 35, top:75),
        //   decoration: BoxDecoration(
        //     color: Colors.red[500],//we can do only one thing either decoration or color in widged
        //     borderRadius: BorderRadius.circular(50)
        //   ), 
        //   // child :const Text(
        //   //   "This is my First app",
        //   //   style: TextStyle(
        //   //     color: Colors.white,
        //   //     fontSize: 30,
        //   //     fontFamily: String.fromEnvironment("Arial"),
        //   //     fontWeight: FontWeight.w600,
        //   //   ),
        //   // ),  
        //   child:const Icon(
        //     Icons.adb,
        //     color: Colors.white,
        //     size: 80,
        //   ),
        // )
        // ),
      body: Column(
        //1th box

        //2th box
        //3th box
      ),
      ),
    );
  }
}