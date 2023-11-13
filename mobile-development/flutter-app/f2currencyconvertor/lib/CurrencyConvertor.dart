import 'package:flutter/material.dart';

class CurrencyConvertor extends StatelessWidget{
  const CurrencyConvertor({super.key});
  @override
  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor: Colors.blueGrey[700],
      body: Center(
          child:  Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Text(
                "cccc",
                style: TextStyle(
                  fontSize: 45,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 255, 255, 255),
                ),
              ),
              TextField(
                
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 35  
                ),
                decoration: InputDecoration(
                  hintText: "Please enter your name",
                  hintStyle: TextStyle(
                    color: Colors.white70
                  ),
                  prefixIcon: Icon(IconData(0x24),
                  ),
                  prefixIconColor: Colors.white70,
                  filled: true,
                  fillColor: Colors.white12, 
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.white,
                      width: 2,
                      style: BorderStyle.solid,
                    ),
                    borderRadius: BorderRadius.all(Radius.circular(50 )),
                  )
                ),
              ),
            ],
          ),
      )
    );
  }
}