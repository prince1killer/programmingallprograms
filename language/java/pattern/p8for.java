package language.java.pattern;

public class p8for {
    public static void main(String []agrs){
        int a=1;
        for(int i=0;i<=5;i++){
            for(int j=0;j<=i;j++){
                System.out.print(a+" ");
                a++;
            }
            System.out.println();
        }
    }
}
