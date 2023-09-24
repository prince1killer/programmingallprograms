import java.util.*;

public class Q22Amstrong {
    public static void main(String []agrs){
        Scanner dc =new Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = dc.nextInt();
        int y=number;
        int x=0,a,reverce,reminder;    
        while(number !=0){
            reminder = number%10;
            reverce = reminder;
            a = reverce*reverce*reverce;
            x +=a;
            reverce=0;
            number = number/10;
            // System.out.println(x);
        }    
        System.out.println("Answer = "+x);
        if(y == x){
            System.out.println("Its amstrong");
        }
        else{
            System.out.println("its not amgstrong");
        }
    }    
}
