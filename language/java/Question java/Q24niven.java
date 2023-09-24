import java.util.*;
public class Q24niven {
    public static void main(String []agrs){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = sc.nextInt();
        int a,b=0,reverce=0,reminder;
        a =number;
        while(number != 0){
            reminder = number%10;
            reverce = reminder;
            b +=reverce;
            reverce=0;
            number = number/10;
        }
        System.out.println(b);
        if(a%b == 0){
            System.out.println("Its niven number");
        }
        else{
            System.out.println("Its not niven number");
        }
    } 
}
