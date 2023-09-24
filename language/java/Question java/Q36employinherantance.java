import java.io.*;
class list{
    int id,salary,hra,da,total,pf,net;
    String name;
    void employee(){
        try{
            DataInputStream dc = new DataInputStream(System.in);
            System.out.println("Enter the id = ");
            id = Integer.parseInt(dc.readLine());
            System.out.println("Enter the name = ");
            name = dc.readLine(); 
            System.out.println("Enter the Salary = ");
            salary = Integer.parseInt(dc.readLine());

            hra = (salary/100)*10;
            da = (salary/100)*5;
            total = salary+hra+da;
            pf = (total/100)*7;
            net = total - pf;

        }catch(Exception e){System.out.println(e);}
    }
    void title(){
        System.out.println("Empl_no\tName\tSalary\tHra\tDa\tTotal\tpf\tNetSalary");
    }

    void show(){
        System.out.println(id+"\t"+name+"\t"+salary+"\t"+hra+"\t"+da+"\t"+total+"\t"+pf+"\t"+net);
    }
}
public class Q36employinherantance {
    public static void main(String []agrd){
        try{
            DataInputStream sc = new DataInputStream(System.in);
            System.out.println("How many employee = ");
            int num = Integer.parseInt(sc.readLine());
            list em[] = new list[num];

            for(int i=0;i<=em.length-1;i++){
                em[i] = new list();
                em[i].employee();
            }
            em[0].title();
            for(int i=0;i<=em.length-1;i++){
                em[i].show();
            }
            

        }catch(Exception e){System.out.println(e);}
    }
}
