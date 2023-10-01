import java.util.*;
public class Q45_matrixif
{  
    public static void main(String[] args) {  
        Scanner sc=new Scanner(System.in);

        int rows, cols;  
        int i,j;  
         
        int a[][] = new int[3][3]; 
        for(i=0; i<3;i++){
            for(j=0;j<3;j++){
                a[i][j]=sc.nextInt();
            }
        }
     
           
        //   rows = a.length;  
        // cols = a[0].length;  
          
        // if(rows != cols){  
        //     System.out.println("Matrix should be a square matrix");  
        // }  
        // else {  
        //     //Performs required operation to convert given matrix into upper triangular matrix  
        //     System.out.println("Upper triangular matrix: ");  
        //     for(i = 0; i < rows; i++){  
        //         for(j = 0; j < cols; j++){  
        //           if(i > j)  
        //             System.out.print("0 ");  
        //           else  
        //             System.out.print(a[i][j] + " ");  
        //         }  
        //         System.out.println();  
        //     }  
        // }
        
            int k =0 ;

            for(i=0; i<3;i++){
            for(j=0;j<3;j++){
                if(a[1][0] == 0 || a[2][0] == 0 || a[2][1] == 0){
                    k++;
                }
            }

            if(k == 3){
                System.out.println("done");
            }


        }
     

    }  
}

// import java.util.*;

// public class Q45_matrixif {
// public static void main(String[] args) {
// Scanner sc = new Scanner(System.in);

// int rows, cols;
// int i, j;

// int a[][] = new int[3][3];
// for (i = 0; i < 3; i++) {
// for (j = 0; j < 3; j++) {
// a[i][j] = sc.nextInt();
// }
// }

// rows = a.length;
// cols = a[0].length;

// System.out.println("Upper triangular matrix: ");
// for (i = 0; i < rows; i++) {
// for (j = 0; j < cols; j++) {
// if (i > j)
// System.out.print("0 ");
// else
// System.out.print(a[i][j] + " ");
// }
// System.out.println();
// }
// }
// }