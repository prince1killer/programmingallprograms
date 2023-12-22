import javafx.application.Application;  
import javafx.event.ActionEvent;  
import javafx.event.EventHandler;  
import javafx.scene.Scene;  
import javafx.scene.control.Button;  
import javafx.stage.Stage;  
import javafx.scene.layout.StackPane;  
public class App extends Application{  
  
    @Override  
    public void start(Stage primaryStage) throws Exception {  
      
        Button btn1=new Button("Say, Hello World");  
        btn1.setOnAction(new EventHandler<ActionEvent>() {
            public void handle(ActionEvent args0){
                System.out.println("Hello world this is my first app");
            }
        });  
        StackPane root=new StackPane();  
        root.getChildren().add(btn1);  
        Scene scene=new Scene(root,200,400);      
        primaryStage.setTitle("This is my first Application");  
        primaryStage.setScene(scene);  
        primaryStage.show();  
    }  
    public static void main (String[] args)  
    {  
        launch(args);  
    }  
  
}  