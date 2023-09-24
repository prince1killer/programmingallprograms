package language.java.pattern;

public class p5for {
    public static void main(String []agrs){
        for(int i=0;i<=5;i++){
            for(int j=0;j<=5-i;j++){
                System.out.print("  ");
            }
            for(int j=0;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
