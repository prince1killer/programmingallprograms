import java.util.Scanner;
public class h8functions {

    public static int calcuateSum (int a,int b){
        int sum = a+b;
        return sum;
    }

    public static void main(String []agrs){
        try(Scanner sc = new Scanner(System.in)){
            System.out.print("Enter the value = ");
            int a = sc.nextInt();
            System.out.print("Enter the value 2 = ");
            int b = sc.nextInt();

            int sum = calcuateSum(a, b);
            System.out.println("Sum of 2 number is :"+sum);
        }
    }        
}
