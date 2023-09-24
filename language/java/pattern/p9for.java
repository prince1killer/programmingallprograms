package language.java.pattern;

public class p9for {
    public static void main(String []agrs){
        int sum;
        for(int i=0;i<=5;i++){
            for(int j=0;j<=i;j++){
                sum = i+j;
                if(sum %2 == 0){
                    System.out.print("1 ");   
                }
                else{
                    System.out.print("0 ");   
                }
            }
            System.out.println();
        }
    }
    
}
