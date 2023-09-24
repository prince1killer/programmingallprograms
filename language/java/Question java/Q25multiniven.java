import java.util.*;
public class Q25multiniven {
    public static void main(String []agres){
        Scanner dc =new Scanner(System.in);
        // System.out.println("Enter the value");
        // int number = dc.nextInt();
        for(int i=11;i<=1000;i++){
            int reverce,reminder,b=0;
            int number = i;
            while(number != 0){
                reminder = number%10;
                reverce = reminder;
                b += reverce;
                reverce =0;
                number = number/10;
            }
            // System.out.println(b);
            if(i%b == 0){
                System.out.println("its niven number = "+b+ " number = "+i);
            }
            // else{
            //     System.out.println("its not niven number");
            // }
        }
    }
}
