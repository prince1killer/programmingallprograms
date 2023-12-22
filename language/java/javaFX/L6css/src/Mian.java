import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
//import javafx.scene.control.Label;
import javafx.scene.image.Image;
//import javafx.scene.text.Font;
//import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Mian extends Application{
	public void start(Stage stage) {
		try {
			Parent root = FXMLLoader.load(getClass().getResource("index.fxml"));
//			Group root = new Group();
			Scene scene = new Scene(root,800,600);
			Image icon = new Image("././images/css3.png");
			stage.getIcons().add(icon);
			stage.setResizable(true);
			stage.setFullScreen(false);
			stage.setTitle("This is my Pure javaFx css prject");

			
//			Text txt1 = new Text();
//			txt1.setText("This is css adding");
//			txt1.setX(300);
//			txt1.setY(30);
//			txt1.setFont(Font.font("Arial",30));
////			txt1.getStyleClass().add("txt1");
//			txt1.setId("txt1");
//			
			String css = getClass().getResource("App.css").toExternalForm();
			scene.getStylesheets().add(css);
			
//			Label lbl1 = new Label("My Label");
//			lbl1.setLayoutX(300);
//			lbl1.setLayoutY(30);
//			lbl1.getStyleClass().add("lbl1");
//			lbl1.setId("lbl1");
			
			
//			root.getChildren().add(txt1);
			stage.setScene(scene);
			stage.show();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	public static void main(String []args) {
		launch(args);
	}
}
