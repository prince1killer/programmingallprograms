import java.io.*;
public class Q27utilio {
    public static void main(String []agrs){
        try{
        DataInputStream sc = new DataInputStream(System.in);
        System.out.println("Enter the value 1 = ");
        int a= Integer.parseInt(sc.readLine());
        System.out.println("Enter the value 2 = ");
        int b= Integer.parseInt(sc.readLine());
        int c;
        c =a+b;
        System.out.println(c);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}
