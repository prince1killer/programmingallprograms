class Student{
    String name;
    int roll;
    String address;
    public void printInfo(){
        System.out.println(name);
        System.out.println(roll);
        System.out.println(address);
    }
    Student(Student s2){
        this.name = s2.name;
        roll = s2.
        roll;
        address = "addxress12";
    }
    Student(){

    }
}
public class h28copyCunstroctor {
    public static void main(String []agesd){
        Student s1 = new Student();
        s1.name = "Pranav";
        s1.roll = 34;
        s1.address = "game";
        s1.printInfo();
        Student s2 = new Student(s1);
        s2.printInfo();

    }
}
