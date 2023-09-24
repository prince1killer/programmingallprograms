import java.io.*;

class studentdata {
    int rollno;
    String name;

    void read() {
        try {
            DataInputStream dc = new DataInputStream(System.in);
            System.out.print("Enter the Roll number = ");
            rollno = Integer.parseInt(dc.readLine());
            System.out.print("Enter the Name = ");
            name = dc.readLine();
            // m1.adding(a1,b1);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    void title() {
        System.out.println("RollNo\tName");
    }

    void show() {
        System.out.println(rollno + "\t" + name);
    }

}

public class student {
    public static void main(String[] afes) {
        try {
            DataInputStream sc = new DataInputStream(System.in);

            System.out.print("How many student do you want to enter = ");
            int num = Integer.parseInt(sc.readLine());

            studentdata st[] = new studentdata[num];

            int i;
            for (i = 0; i < st.length; i++) {
                st[i]=new studentdata();
                st[i].read();
            }

            st[0].title();

            for (i = 0; i < st.length; i++) {

                st[i].show();
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}