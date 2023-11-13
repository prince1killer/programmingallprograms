import 'package:first_app/pages/second_page.dart';
import 'package:flutter/material.dart';

class Firstpage extends StatelessWidget {
  const Firstpage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("1st page")),
      body: Center(
        child: ElevatedButton(child:const Text("Go to second page"),
        onPressed: (){
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context)=>const Secondpage()
            ),
          );
        },
      ),
      ),
    );
  }
}