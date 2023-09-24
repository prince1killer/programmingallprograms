import java.util.*;
public class Q5posneg {
    public static void main(String []args){
        try(Scanner dc = new Scanner(System.in)){
            System.out.println("Enter the number = ");
            int number = dc.nextInt();
            if(number < 0 ){
                System.out.println("your nmumber is negative");
            }
            else if(number == 0){
                System.out.println("your number is neutral or zero");
            }
            else {
                System.out.println("Your number is positive");
            }
        }
    }
}
