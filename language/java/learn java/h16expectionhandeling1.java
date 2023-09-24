// import java.io.*;
public class h16expectionhandeling1 {
    public static void main(String []agrs){
            try{
                int count = 50/0;
                System.out.println(count);
            }
            catch(Exception e){
                System.out.println("Zero can not divide any number");
            }
    }
}
