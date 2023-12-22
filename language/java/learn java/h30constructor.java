class Softwere{
    String name;
    String work;
    public void soft(){
        System.out.println("I am useing this "+name+" softwere "+work);
    }
    // This is not parametrise constructor
    Softwere(){
        // System.out.println("this constructore is working "+this.name); // this will give null operator here 
        System.out.println("this constructore is working ");

    }
}


class Student{
    String name;
    int age;
    int class1;
    public void stucentInto(){
        System.out.println("this student "+name+" is studing in "+class1+" and his age is "+age);
    }

    Student(String name, int age, int class2){
        // name = name;
        // age = age;
        // class1 = class2;
        this.name = name;
        this.age = age;
        this.class1 = class2;
    }

}

public class h30constructor{
    public static void main(String []agrs){
        Softwere softi = new Softwere();
        softi.name = "Blender3D";
        softi.work = "3d Animation";
        softi.soft();


        Student stu = new Student("pranav",21,12);
        stu.stucentInto();

    }
}