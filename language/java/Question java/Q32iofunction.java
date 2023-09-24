import java.io.*;

public class Q32iofunction {
    public static void sigma(int a){
        int sum=0;
        for(int i=0;i<=a;i++){
            sum += a; 
        }
        System.out.println(sum);
    }

    public static void prime(int a){
        if(a%2 == 0 && a != 2){
            System.out.println("its is the even number = "+a);
        }
        else if(a%3 == 0 && a != 3){
            System.out.println("its odd number = "+a);
        }
        else{
            System.out.println("its prime = "+a);
        }
    }

    public static void armstrong(int a){
        int reminder,reverce=0,b=0;
        int number = a;
        while(a != 0){
            reminder = number%10;
            reverce = reminder;
            a = reverce*reverce*reverce;
            b +=a;
            reverce=0;
            number = number/10;  
        }
        if(a == b){
            System.out.println("your armstrong number = "+b);
        }
        else{
            System.out.println("its not armstrong number = "+b);
        }
    }

    public static void reverce1(int a){
            int number =a;
            int b=0,reminder,reverce=0;
            while(number != 0){
            reminder = number%10;
            reverce = reverce*10+reminder;
            number = number/10;
            }
                 System.out.println("reverce = "+reverce);
        }

    public static void rectangle(float a ,float b){
        double sum = a*b;
        System.out.println("Area of rectangle = "+sum);
    }

    public static void triangle(float a,float b){
        double sum = a*(b*0.5);
        System.out.println("Area of traingle = "+sum);
    }

    public static void mmb(int a,int b){
        for(int i=a;i<=b;i++){
            for(int j=1;j<=10;j++){
                System.out.println(i+" X "+j+" = "+(i*j));
            }
        }
    }

    public static void kite(int a,String b){
        for(int i=0;i<=a;i++){
            for(int j=0;j<=(a-i);j++){
                System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
                System.out.print(b+"   ");
            }
            System.out.println();
        }
        for(int i=(a-1);i>=0;i--){
            for(int j=0;j<=(a-i);j++){
                System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
                System.out.print(b+"   ");
            }
            System.out.println();
        }
        for(int i=0;i<=(a-4);i++){
            for(int j=0;j<=(a-i);j++){
                System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
                System.out.print(b+"   ");
            }
            System.out.println();
        }
    }
    public static void main(String []agers){
        try{
            DataInputStream sc = new DataInputStream(System.in);
            System.out.print("Enter the value 1 = ");
            int num1 = Integer.parseInt(sc.readLine());
            

            sigma(num1);
        }
        catch(Exception e){
            System.out.println(e);
        }
    }    
}
