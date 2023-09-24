import java.util.*;
public class Q9quepaper{
    public static void main(String []agrs){
        Scanner dc = new Scanner(System.in);
        System.out.println("Q1. 5 X 10 = ");
        System.out.print("a)23 ");
        System.out.print("b)10 ");
        System.out.print("c)50 ");
        System.out.print("d)20 ");
        System.out.println("e)skip ");
        System.out.print("ANS) ");
        int ans1 = dc.nextInt();
        int a=0,b=0,c=0,d=0,e=0,correct=0,w=0,at=0,non=0;
            if(ans1 == 1){
                w+=1;
                at +=1;
                a =-1;
                System.out.println(23);
            }
            else if(ans1 == 2){
                w +=1;
                at +=1;
                a=-1;
                System.out.println(10);
            }
            else if(ans1 == 3){
                correct+=1;
                at+=1;
                a=4;
                System.out.println(50);
            }
            else if(ans1 == 4){
                at +=1;
                w+=1;
                a=-1;
                System.out.println(20);
            }
            else if(ans1 == 5){
                non +=1;
                a=0;
                System.out.println("Skip");
            }
            else{
                System.out.println("not value ans");
            }

            System.out.println("Q2. 2 X 5 = ");
            System.out.print("a)10 ");
            System.out.print("b)15 ");
            System.out.print("c)5 ");
            System.out.print("d)2 ");
            System.out.println("e)skip ");
            System.out.print("ANS) ");
            int ans2 = dc.nextInt();

            if(ans2 == 1){
                at +=1;
                correct+=1;
                b=4;
                System.out.println(10);
            }
            else if(ans2 == 2){
                at +=1;
                w+=1;
                b=-1;
                System.out.println(15);
            }
            else if(ans2 == 3){
                at +=1;
                w+=1;
                b=-1;
                System.out.println(5);
            }
            else if(ans2 == 4){
                at +=1;
                w+=1;
                b=-1;
                System.out.println(2);
            }
            else if(ans2 == 5){
                non +=1;
                b=0;
                System.out.println("Skip");
            }
            else{
                System.out.println("not value ans");
            }

            
            System.out.println("Q3. 3 X 5 = ");
            System.out.print("a)3 ");
            System.out.print("b)15 ");
            System.out.print("c)50 ");
            System.out.print("d)20 ");
            System.out.println("e)skip ");
            System.out.print("ANS) ");
            int ans3 = dc.nextInt();

            if(ans3 == 1){
                at +=1;
                c=-1;
                System.out.println(3);
            }
            else if(ans3 == 2){
                at +=1;
                correct+=1;
                c=4;
                System.out.println(15);
            }
            else if(ans3 == 3){
                at +=1;
                c=-1;
                System.out.println(50);
            }
            else if(ans3 == 4){
                at +=1;
                c=-1;
                System.out.println(20);
            }
            else if(ans3 == 5){
                non +=1;
                c=0;
                System.out.println("Skip");
            }
            else{
                System.out.println("not value ans");
            }

            
            System.out.println("Q4. 7 X 5 = ");
            System.out.print("a)23 ");
            System.out.print("b)35 ");
            System.out.print("c)5 ");
            System.out.print("d)2 ");
            System.out.println("e)skip ");
            System.out.print("ANS) ");
            int ans4 = dc.nextInt();

            if(ans4 == 1){
                at +=1;
                w+=1;
                d=-1;
                System.out.println(23);
            }
            else if(ans4 == 2){
                at +=1;
                correct+=1;
                d=4;
                System.out.println(35);
            }
            else if(ans4 == 3){
                at +=1;
                w+=1;
                d=-1;
                System.out.println(5);
            }
            else if(ans4 == 4){
                at +=1;
                w+=1;
                d=-1;
                System.out.println(2);
            }
            else if(ans4 == 5){
                non +=1;
                
                d=0;
                System.out.println("Skip");
            }
            else{
                System.out.println("not value ans");
            }

            
            System.out.println("Q5. 8 X 10 = ");
            System.out.print("a)23 ");
            System.out.print("b)10 ");
            System.out.print("c)50 ");
            System.out.print("d)80 ");
            System.out.println("e)skip ");
            System.out.print("ANS) ");
            int ans5 = dc.nextInt();
            
            if(ans5 == 1){
                at +=1;
                w+=1;
               e=-1;
                System.out.println(23);
            }
            else if(ans5 == 2){
                at +=1;
                w+=1;
                e=-1;
                System.out.println(10);
            }
            else if(ans5 == 3){
                at +=1;
                w+=1;
                e=-1;
                System.out.println(50);
            }
            else if(ans5 == 4){
                at+=1;
                correct +=1;
                e=4;
                System.out.println(80);
            }
            else if(ans5 == 5){
                non +=1;
                e=0;
                System.out.println("Skip");
            }
            else{
                System.out.println("not value ans");
            }
            int total = a+b+c+d+e;
            int attend =at;
            System.out.println("Total marks= "+total);
            System.out.println("Attend ="+attend);
            System.out.println("Correct = "+correct);
            System.out.println("worng ="+w);
            System.out.println("non-attend = "+non);


    }
}