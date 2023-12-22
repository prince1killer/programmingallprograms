class p15newfor{
    public static void main(String []arge){
        int i,x=1;
        for(i=1;i<=5;i++){
            for(int j=i;j<=5;j++){
                System.out.print(" ");
            }
            x=i;
            for(int k=i;k<=i+i-1;k++){
                if(x == i || i == 5 || x == i+i-1){
                    System.out.print(x);
                }
                else{
                    System.out.print(" ");
                }
                // System.out.print(x);
                x++;
            }
            if(i>=2){
                for(int k=x-2;k>=i;k--){
                    if(k == i || i == 5){
                        System.out.print(k);
                    }
                    else{
                        
                        System.out.print(" ");
                    }
                }
            }
            System.out.println("");
        }
    }
}