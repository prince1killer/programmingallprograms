import java.util.*;
public class Q3daycal {
    public static void main(String []agers){
        try(Scanner dc = new Scanner(System.in)){
            System.out.print("Enter your age = ");
            int age = dc.nextInt();
            System.out.println("your month = "+(age*12));
            System.out.println("your weeks = "+(age*(12*4)));
            System.out.println("your days = "+(age*365));
            System.out.println("your hour = "+(age*(356*24)));
            System.out.println("your min = "+(age*(365*24*60)));
            System.out.println("your sec = "+(age*(365*24*3600)));

        }
    }
}
