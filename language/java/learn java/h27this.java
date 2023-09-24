class Pen{
    String color;
    String type;
    public void write(){
        System.out.println("Write Something...");
    }    
    public void printcolor(){
        System.out.println(color);
    }

}

class Student{
    String name;
    String roll;
    String address;
    public void printInfo(){
        System.out.println("Enter the name = "+name);
        System.out.println("Enter the roll no = "+roll);
        System.out.println("Enter the address = "+address);
    }
    
}

    
public class h27this{
    public static void main(String []ades){
        Pen pen1 = new Pen();
        Pen pen2 = new Pen();
        pen1.color = "Green";
        pen1.type = "gel";
        pen2.color = "Blue";
        pen2.type = "bolpen";
        pen1.printcolor();
        pen2.printcolor();
        // System.out.println(pen1.color);
        // System.out.println(pen1.type);
        // System.out.println(pen2.color);
        // System.out.println(pen2.type);
        // pen2.write();
        Student s1 = new Student();
        Student s2 = new Student();
        s1.name = "pranav";
        s1.roll = "34";
        s2.name = "kumar";
        s2.roll = "45";
        s2.address = "game";
        s1.printInfo();
        s2.printInfo();
    }
}