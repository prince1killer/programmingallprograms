import java.util.*;
public class h14array2d1 {
    public static void main(String []agrs){
        try (Scanner dc = new Scanner(System.in)) {
            System.out.println("Enter the value 1 =");
            int row = dc.nextInt();
            System.out.println("Enter the value 2 = ");
            int coloum = dc.nextInt();
            int number[][] = new int [row][coloum];
            //input
            for(int i=0;i<row;i++){
                for(int j=0;j<coloum;j++){
                    number[i][j] = dc.nextInt();
                }
            }
            //output
            for(int i=0;i<row;i++){
                for(int j=0;j<coloum;j++){
                    System.out.print(number[i][j]+" ");
                }
                System.out.println();
            }
        }

        
        
    }
}
