//here we have to ise constructor and 
class Student{
    int rollno;
    String name;
    static String collage= "ITS";
    Student(int r,String n){
        rollno = r;
        name = n;

    }
    void display(){System.out.println(rollno+" "+name+" "+collage );}
}

public class h25static{
    public static void main(String [] avrd){
        Student s1 = new Student(111,"karan");
        Student s2 = new Student(111,"karan");
        s1.display();
        s2.display();
    }
}