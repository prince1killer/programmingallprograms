
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Main extends Application{
	
	
	
	int x=380,y=290;
	
	@Override
	public void start(Stage stage){
		try {
			Group root = new Group();
			Scene scene = new Scene(root,800,600,Color.AQUA);
			Image icon = new Image("././image/pressButton.png");
			stage.getIcons().add(icon);
			stage.setTitle("This is my second best application");
			stage.setWidth(800);
			stage.setHeight(600);
			stage.setResizable(true);
			stage.setFullScreen(false);
			
			Text txt1 = new Text();
			txt1.setText("This is my first Event");
			txt1.setY(25);
			txt1.setX(230);
			txt1.setFont(Font.font("Verdana",30));
			
			Circle cir1 = new Circle();
			cir1.setCenterX(x);
			cir1.setCenterY(y);
			cir1.setRadius(100);
			cir1.setFill(Color.RED);
			
			Button btn1 = new Button("Up");
			btn1.setTranslateX(380);
			btn1.setTranslateY(30);
			btn1.setOnAction(new EventHandler<ActionEvent>() {
				
				@Override
				public void handle(ActionEvent arg0) {
					cir1.setCenterY(y-=10);
					System.out.println("up");
				}
			});
			
			Button btn2 = new Button("Left");
			btn2.setTranslateX(0);
			btn2.setTranslateY(250);
			btn2.setOnAction(new EventHandler<ActionEvent>() {
				
				@Override
				public void handle(ActionEvent arg0) {
					System.out.println("Left");
					cir1.setCenterX(x-=10);
				}
			});
			
			Button btn3 = new Button("Down");
			btn3.setTranslateX(350);
			btn3.setTranslateY(540);
			btn3.setOnAction(new EventHandler<ActionEvent>() {
				
				@Override
				public void handle(ActionEvent arg0) {
					System.out.println("Down");
					cir1.setCenterY(y+=10);
				}
			});
			
			Button btn4 = new Button("Right");
			btn4.setTranslateX(730);
			btn4.setTranslateY(250);
			btn4.setOnAction(new EventHandler<ActionEvent>() {
				
				@Override
				public void handle(ActionEvent arg0) {
					System.out.println("Right");
					cir1.setCenterX(x+=10);
				}
			});
			
			
			
			

			
			root.getChildren().add(cir1);
			root.getChildren().add(btn1);
			root.getChildren().add(btn2);
			root.getChildren().add(btn3);
			root.getChildren().add(btn4);
			root.getChildren().add(txt1);
			stage.setScene(scene);
			stage.show();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public static void main(String []args){
		launch(args);
	}
}
