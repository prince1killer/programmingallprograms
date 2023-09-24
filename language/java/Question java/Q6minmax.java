import java.util.*;
public class Q6minmax {
    public static void main(String []agrs){
        try(Scanner dc = new Scanner(System.in)){
            System.out.println("Enter the value 1 =");
            int num1 = dc.nextInt();
            System.out.println("Enter the value 2 =");
            int num2 = dc.nextInt();
            if(num1 > num2){
                System.out.println("MAximum number is = "+num1);
            }
            else if(num1< num2){
                System.out.println("MAximum number is = "+num2);
            }
            else{
                System.out.println("Both are same");
            }
        }
    }
}