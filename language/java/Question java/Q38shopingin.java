import java.io.*;
class shoping{
    int id[] = new int[1];
    int quan,total,dis,net,price;
    String person_name,item,name;
    void name(){
        try{
            DataInputStream cd = new DataInputStream(System.in);
            System.out.println("Enter the name = ");
            String name = cd.readLine();
            // title(name);
        }catch(Exception e){System.out.println(e);}
    }
    void datails(){
        try{
            DataInputStream dc = new DataInputStream(System.in);
            System.out.print("Enter the Id = ");
             id = Integer.parseInt(dc.readLine());
            System.out.print("Enter the product name = ");
            item = dc.readLine();
            System.out.print("Enter the price = ");
            price = Integer.parseInt(dc.readLine());
            System.out.print("Enter the Quantity = ");
            quan = Integer.parseInt(dc.readLine());
            total = price*quan;       
            count(total);
        }catch(Exception e){System.out.println(e);}
    }

    void count(int a){
        // int take[] = new int [a];
        // dis += a;
        // System.out.println();
    }
    void title(){
        System.out.println();
        System.out.println("Id\tItName\tprice\tQuantiry\tTotal\tDiscount\tNet");
    }
    void show(){
        System.out.println(id+"\t"+item+"\t"+price+"\t"+quan+"\t\t"+total+"\t"+dis+"\t\t"+net);
    }
}
public class Q38shopingin {
    public static void main(String []ages){
    try{
            DataInputStream sc  =new DataInputStream(System.in);
            System.out.print("Enter number of persons = ");
            int person = Integer.parseInt(sc.readLine());
            System.out.print("Enter the number of products = ");
            int product = Integer.parseInt(sc.readLine());
            shoping  sh[] = new shoping[product];
            for(int i=0;i<=person-1;i++){
                String name;
                System.out.print("Name = ");
                name = sc.readLine();
                sh[i] = new shoping();
                sh[i].name();
                for(int j=0;j<=product-1;j++){
                    sh[j] = new shoping();
                    sh[j].datails();
                }
                sh[0].title();
                for(int j=0;j<=product-1;j++){
                    sh[j].show();
                }
            }
            
        }catch(Exception e){System.out.println(e);}
    }
}   