package language.java.pattern;

public class p14forbutterfly {
    public static void main(String []agrs){
        for(int i=0;i<=5;i++){
            for(int j=0;j<=i;j++){
                System.out.print("* ");
            }
            for(int j=0;j<=2*(5-i);j++){
                System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i=5;i>=0;i--){
            for(int j=0;j<=i;j++){
                System.out.print("* ");
            }
             for(int j=0;j<=2*(5-i);j++){
                 System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
               System.out.print("* ");
            } 
            System.out.println();
        }
    }
}   
