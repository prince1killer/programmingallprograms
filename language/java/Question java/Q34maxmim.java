import java.io.*;
public class Q34maxmim {
    public static void main(String []agrs) throws Exception{
        BufferedReader  sc = new BufferedReader(new InputStreamReader(System.in));
        int count, max=0,min=0,temp;
            System.out.print("Enter the value 1 = ");
            count = Integer.parseInt(sc.readLine());
            int info[] = new int[count];
            for(int i=0;i<=count-1;i++){
                info[i] = Integer.parseInt(sc.readLine());
            }

            for(int i=0;i<=info.length-1;i++){
                for(int j=i+1;j<=
                -1;j++){
                    if(info[i] < info[j]){
                        temp = info[i];
                        info[i] = info[j];
                        info[j] = temp;
                    }
                }
                max = info[0];
                min = info[count-1];
                System.out.println(info[i]);
            }
            System.out.println("MAX = "+max);
            System.out.println("MIN = "+min);
    }
}