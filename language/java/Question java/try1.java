import java.io.*;
class shop{
    public
    static int value;
    String p_name[] = new String [value];
    int id[] = new int [value],price[] = new int [value],quantity[] = new int[value],total[] = new int[value],dis[] = new int[value],net[] = new int[value];
    void list(){
        System.out.println(value);
        try{
            
            DataInputStream dc = new  DataInputStream(System.in);
            for(int i=0;i<=value-1;i++){
         
                System.out.println("Enter the value = ="+i);
                System.out.print("Enter the id = ");
                id[i] = Integer.parseInt(dc.readLine());
                System.out.print("Enter the import name = ");
                p_name[i] = dc.readLine();
                System.out.print("Enter the price = ");
                price[i] = Integer.parseInt(dc.readLine());
                System.out.print("Enter the Quantity = ");
                price[i] = Integer.parseInt(dc.readLine());
                System.out.print("Enter the total = ");
                price[i] = Integer.parseInt(dc.readLine()); 
                }
        }catch(Exception e){System.out.println(e);}
    }
    void tital(){
        System.out.println("ID\tP_name\tPrice\tQuantity\tTotal\tDis\tNet");
    }
    void show(){
        for(int i=0;i<=value-1;i++){

            System.out.println(id[i]+"\t"+p_name[i]+"\t"+price[i]+"\t"+quantity[i]+"\t"+total[i]+"\t"+dis[i]+"\t"+net[i]);
        }
    }
}

class try1{
    public static void main(String []agrs){
        try{
            DataInputStream sc = new DataInputStream(System.in);
            System.out.print("Enter the number of person = ");
            int person = Integer.parseInt(sc.readLine());
            shop sh= new shop();
            System.out.print("Enter the number of item = ");
            int value = Integer.parseInt(sc.readLine());
            sh.value = value;
            // sh.list();

            shop ss[] = new shop[value];

            for(int j=0;j<value;j++){
                ss[j] = new shop();
                ss[j].list();
            }
            ss[0].tital();
            for(int j=0;j<value;j++){
                ss[j].show();
            }           
        }catch(Exception e){System.out.println(e);}
    }
}