import java.util.*;
public class Q23multipleamgstrong {
    public static void main(String []agrs){
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter the starting value = ");
        // int start = sc.nextInt();
        // System.out.println("Enter the end value = ");
        // int end = sc.nextInt();
        int reverce,reminder;
        for(int i=0;i<=1000;i++){
            int a = i;

            reverce=0;
            // System.out.println(a);
            while(i != 0){
                reminder = i%10;
                reverce = reverce*10+( reminder*reminder*reminder);
                
            
                i = i/10;
                // System.out.println(y);
             }
            // int b =y;
            // // System.out.println(y);
            if(a == reverce){
                System.out.println("Amgstrong = "+a);
            }
        }
    }
}
