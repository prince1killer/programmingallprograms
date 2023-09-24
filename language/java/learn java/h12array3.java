import java.util.*;
public class h12array3 {
    public static void main(String []ages){
        try (Scanner dc = new Scanner(System.in)) {
            System.out.println("Enter the value 1 = ");
            int value = dc.nextInt();
            int number[] = new int[value];
            for(int i=0;i<value;i++){
                number[i] = dc.nextInt();
            }
            for(int i=0;i<value;i++){
                System.out.println(number[i]);
            }
        }

    }
}
