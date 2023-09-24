import java.util.*;

public class Q21paildrome {
    public static void main(String []ages){
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int x=number;
        int reverce=0,reminder=0,a;
        while(number != 0){
            reminder = number%10;
            reverce = reverce*10+reminder;
            number = number/10;

        }
        System.out.println("Answer = "+reverce);
        a=reverce;
        if(x == a){
            System.out.println("Its palindromic");
        }
        else{
            System.out.println("Its not palindromic");

        }
    }    
}
