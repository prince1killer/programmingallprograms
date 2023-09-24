import java.io.*;
class details{
    int id,age,run,match;
    String name,country,type;
    void input(){
        try{
            DataInputStream sc = new DataInputStream(System.in);
            System.out.print("Enter the id = ");
            id = Integer.parseInt(sc.readLine());
            System.out.print("Enter the name = ");
            name = sc.readLine();
            System.out.print("Enter you age = ");
            age = Integer.parseInt(sc.readLine());
            System.out.print("Enter the Country = ");
            country = sc.readLine();
            System.out.print("Enter the type = ");
            type = sc.readLine();
            System.out.print("Enter the Run = ");
            run = Integer.parseInt(sc.readLine());
            System.out.print("Enter the Matchs = ");
            match = Integer.parseInt(sc.readLine()); 
        }catch(Exception e){System.out.println(e);}
    }

    void title(){
        System.out.println("Id\tName\tAge\tCountry\tType\tRun\tMatch");
        System.out.println("--------------------------------------------------------");
    }

    void show(){
        System.out.println(id+"\t"+name+"\t"+age+"\t"+country+"\t"+type+"\t"+run+"\t"+match);
    }
}

class Q37cricket{
    public static void main(String []agrs){
        try{
            DataInputStream dc = new DataInputStream(System.in);
            System.out.print("Enter the number of cricketer = ");
            int num = Integer.parseInt(dc.readLine());
    
            details de[] = new details[num];

            for(int i=0;i<=de.length-1;i++){
                de[i] = new details();
                de[i].input();
            }
            de[0].title();

            for(int i=0;i<=de.length-1;i++){
                de[i].show();
            }

        }catch(Exception e){System.out.println(e);}
    }
}