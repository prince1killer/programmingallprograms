import java.util.Scanner;
public class h4switch {
    public static void main(String []args){
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter the value =");
            int number = sc.nextInt();
            switch(number){
            case 1: System.out.print("You are good");
            break;
            case 2: System.out.println("You are normal");
            break;
            case 3: System.out.println("you are bad");
            default:System.out.println("please enter valid number");
            }
        }     
    }
}
