import java.util.*;
public class Q17hormonic {
    public static void main(String []agrs){
        Scanner dc = new Scanner(System.in);
        float a,b=0;
        System.out.println("Enter the value 1= ");
        int number = dc.nextInt();
        for(int i=1;i<=number;i++){
            a =1/(float)i;
            b +=a;
        }
        System.out.println(b);
    }
}
