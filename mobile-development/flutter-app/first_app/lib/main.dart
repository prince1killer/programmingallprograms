// ignore: unused_import, avoid_web_libraries_in_flutter
// import 'dart:html';

// ignore_for_file: must_be_immutable

// import 'dart:developer';

import 'package:first_app/pages/first_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp( MyApp()); 
}

class MyApp extends StatelessWidget {
   MyApp({super.key});

        List name = ["om","prince","pranav","Kumar"];
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Firstpage(),
      // Scaffold(
      //   backgroundColor: Colors.blue,
      //   appBar: AppBar(
      //     title: const Text("My App Bar"),
      //     backgroundColor: Colors.amber[400],
      //     elevation: 0,
      //     leading: const Icon(Icons.menu),
      //     actions: [
      //       IconButton(onPressed: () {}, icon: const Icon(Icons.logout)),
      //     ],
      //   ),
        // body: Center(
        //     child: Container(
        //   height: 300,
        //   width: 300,
        //   padding: const EdgeInsets.all(25),
        //   // padding : EdgeInsets.symmetric(horizontal:35,vertical: 45),
        //   // padding: EdgeInsets.only(left: 35, top:75),
        //   decoration: BoxDecoration(
        //       color: Colors.red[
        //           500], //we can do only one thing either decoration or color in widged
        //       borderRadius: BorderRadius.circular(50)),
        //   // child :const Text(
        //   //   "This is my First app",
        //   //   style: TextStyle(
        //   //     color: Colors.white,
        //   //     fontSize: 30,
        //   //     fontFamily: String.fromEnvironment("Arial"),
        //   //     fontWeight: FontWeight.w600,
        //   //   ),
        //   // ),
        //   child: const Icon(
        //     Icons.adb,
        //     color: Colors.white,
        //     size: 80,
        //   ),
        // )),

        //------------------------List view navebar-------------------------------------------
        // body: ListView
        // (
        //   // mainAxisAlignment: MainAxisAlignment.spaceBetween,
        //   // crossAxisAlignment: CrossAxisAlignment.start,
        //   children: [
        //     //1th box
        //     Expanded(
        //       child:
        //           Container(
        //             height: 460,
        //             // width: 260,
        //            color: Colors.purple[800]),
        //     ),
        //     //2th box
        //     Expanded(
        //       child:
        //           Container(
        //             height: 460,
        //             // width: 260,
        //            color: Colors.purple[400]),
        //     ), //3th box
        //     Expanded(
        //       child:
        //           Container(
        //             height: 460,
        //             // width: 260,
        //            color: Colors.purple[200]),
        //     ),
        //   ],
        // ),
        // ---------------------------------List view builder----------------------------------
        
        // body: ListView.builder(
        // itemCount: name.length, 
        // itemBuilder:(context, index) => ListTile(
        //   title: Text(name[index]),
        // ))

        // ------------------------------------Grid view ---------------------------------
        // body: GridView.builder(
        //   itemCount: 64,
        //   gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount:4),
        //   itemBuilder:(context,index)=>Container(
        //     color: Colors.red,
        //     margin: EdgeInsets.all(2)
        //     )
        //   ),
        // -------------------------------------Stack-------------------------------------
        // body: Stack(
        //   alignment: Alignment.centerRight,
        //   children: [
        //     Container(
        //       width: 300,
        //       height: 300,
        //       color: Colors.red[800],
        //     ),
        //     Container(
        //       width: 200,
        //       height: 200,
        //       color: Colors.red[600],
        //     ),
        //     Container(
        //       width: 100,
        //       height: 100,
        //       color: Colors.red[400],
        //     ),
            
        //   ],
        // ),

        // --------------------------------- Gestor dector ---------------------------------
        // body: Center(
        //   child: GestureDetector(

        //     onTap: (){
        //       //we can make it as we want to conclick on amy kinf of widget
        //       // ignore: avoid_print
        //       print("You had clicked");
        //     },
        //     child: Container(
        //       width: 300,
        //       height: 300,
        //       color: Colors.deepOrange,
        //       child: const Center(child: Text("plz Tap here"),),
        //     ),
        //   ),
        // ),
        // -----------------------------------Navigation-------------------------------
        
      // ),
    );
  }
}
