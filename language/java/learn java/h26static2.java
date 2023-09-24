//this is the best example of static keyword
class Student{
    static int count=0;
    
    Student(){
        count += 111;
        System.out.println(count);
    }
}

public class h26static2 {
    public static void main(String []ages){
        Student s1 = new Student();
        Student s2 = new Student();
        Student s3 = new Student();
        Student s4 = new Student();
    }
}
