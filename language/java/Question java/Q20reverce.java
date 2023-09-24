import java.util.*;

public class Q20reverce {
    public static void main(String []agrs){
        Scanner dc =new Scanner(System.in);
        int number = dc.nextInt();
        int remender,reverce =0;
        while(number !=0){
            remender = number%10;
            reverce = reverce*10+remender;
            number =number/10; 
            System.out.println("Answer = "+reverce);
        }

    }    
}
