import java.util.*;
public class Q12oddevenforloop{
    public static void main(String []agers){
        Scanner dc = new Scanner(System.in);
        System.out.println("Enter the value one = ");
        int a=0,odd=0,even=0,b=0,prime=0;
        int number = dc.nextInt();
        System.out.print("Odd number = ");
        for(int i=0;i<=number;i++){
            if(i%3 == 0){
                a += i;
                System.out.print(i);
            }
        }
        System.out.println("");
        System.out.println("sum of odd = "+a);
        System.out.print("Even number = ");
        for(int i=0;i<=number;i++){
            if(i%2 == 0){
                b += i;
                System.out.print(i);
            }
        }
        System.out.println("");
        System.out.print("Sum of even number = "+b);
    }
}