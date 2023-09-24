import java.io.*;
    class h19class {
    public static void main(String []agrs){
        try
        {
            DataInputStream sc = new DataInputStream(System.in);
            myFunction myfn = new myFunction();
            System.out.print("Enter the value = ");
            int num1 = Integer.parseInt(sc.readLine());
            System.out.print("Enter the value = ");
            float height = Integer.parseInt(sc.readLine());
            System.out.print("Enter the value = ");
            float width = Integer.parseInt(sc.readLine());
            System.out.print("Enter the table start = ");
            int tab1 = Integer.parseInt(sc.readLine());
            System.out.print("Enter the table end = ");
            int tab2 = Integer.parseInt(sc.readLine());
            System.out.print("Enter the kite = ");
            int da1 = Integer.parseInt(sc.readLine());
            // System.out.print("Patten name = ");
            // String da2 = sc.nextLine();
            
            myfn.sigma(num1);
            myfn.prime(num1);
            myfn.armstrong(num1);
            myfn.triangle(height,width);
            myfn.rectangle(height,width);
            myfn.reverce1(num1);
            myfn.mmb(tab1,tab2);
            myfn.kite(da1,"j");
        }
        catch(Exception e){System.out.println(e);}
    }
}
