import java.io.*;
class add{
    public void adding(int a,int b){
        try{
            DataInputStream sc = new DataInputStream(System.in);
            mult m = new mult();
            System.out.print("Enter the add value 2 = ");
            int c= Integer.parseInt(sc.readLine());
            int sum = a+b;
            System.out.println("Adding = "+sum);
            m.multadd(sum,c);    
            
        }
        catch(Exception e){System.out.println(e);}
    }
}
class mult extends add{
    public void multadd(int a,int b){
        int mul = a*b;
        System.out.println("Multiply = "+mul);
    }
}
public class Q35inherentancesum {
    public static void main(String []afes){
        try{
            DataInputStream dc = new DataInputStream(System.in);
            mult m1 = new mult();
            System.out.print("Enter the value 1 = ");
            int a1 = Integer.parseInt(dc.readLine());
            System.out.print("Enter the value 2 = ");
            int b1 = Integer.parseInt(dc.readLine());
            m1.adding(a1,b1);
            
        }
        catch(Exception e){
            System.out.println(e);
        }
    }
}
