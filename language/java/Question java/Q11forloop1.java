import java.util.*;

public class Q11forloop1 {
    public static void main(String []agerd){
        Scanner dc = new  Scanner(System.in);
        System.out.println("Enter the value = ");
        int number = dc.nextInt();
        for(int i=0; i<=number; i++){
            System.out.println(i);
            if(i == 0){
                System.out.print("pranva");
            }
            if(i == 7){
                System.out.print("kumar");
            }
        }
    }
}
