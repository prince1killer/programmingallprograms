import java.util.Scanner;
public class Q4oddeven{
    public static void main(String []agrs){
        try(Scanner sc = new Scanner(System.in)){
            System.out.println("Enter your value = ");
            int number = sc.nextInt();
            if(number == 3 || number == 2){
                System.out.println("Its prime number "+number);
            }
            else if(number % 2 == 0){
                System.out.println("even number "+number);
            }
            else if(number %3 == 0){
                System.out.print("odd number = "+number);
            }
            else{
                System.out.println("number is prime "+number);
            }
        }
    }
}