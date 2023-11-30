public class p16hasStar {
    public static void main(String []args){
        int x=5;
        for(int i=1 ;i<=x+2;i++){
            for(int k=1;k<=i;k++){
                if(k != x+2){
                    System.out.print("  ");
                }
                else{
                    System.out.print("\b\b");
                }
            }
            for(int j=1;j<=x*2;j++){
                if(i == 1){
                    if(j==1|| j %2 == 1){
                        System.out.print(" *");
                    }
                    else if(j%2 == 0){
                        System.out.print(" #");
                    }
                }
                else if(i == j && i>=2){
                    if(j==1|| j %2 == 1){
                        System.out.print(" *");
                    }
                    else if(j%2 == 0){
                        System.out.print(" #");
                    }
                }
            }
            System.out.println("");
        }
    }
}
