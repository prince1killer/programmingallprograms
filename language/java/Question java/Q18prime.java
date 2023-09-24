import java.util.*;
public class Q18prime {
    public static void main(String []agers){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = sc.nextInt();
           if(number%2 == 0 || number == 2){
            System.out.println("its not prime = "+number);
           }
           else if(number%3 == 0 || number == 3){
            System.out.println("its not prime = "+number);
           }
           else{
            System.out.println("its prime = "+number);
           }
    }
}
