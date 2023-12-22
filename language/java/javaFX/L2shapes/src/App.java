import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.input.KeyCombination;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Polygon;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class App extends Application{
    public static void main(String []agrs){
        launch(agrs);
    }
    @Override
    public void start(Stage stage) throws Exception{
        Group root = new Group();
        Scene scene = new Scene(root,Color.BLACK);
        stage.setScene(scene);
        stage.setTitle("This is Shape tutorial");
        Image icon = new Image("../bin/alarm.png");
        stage.getIcons().add(icon);
        stage.setWidth(400);
        stage.setHeight(500);
        stage.setResizable(true);
        stage.setFullScreen(true);
        stage.setFullScreenExitHint("you can exit FULL screen by q");
        stage.setFullScreenExitKeyCombination(KeyCombination.valueOf("q"));

        Text text = new Text();
        text.setText("Welcome to this my app");
        text.setX(100);        
        text.setY(100);
        text.setFont(Font.font("ARIAL",50));
        text.setFill(Color.WHITE);
        

        Rectangle rec = new Rectangle();
        rec.setWidth(300);
        rec.setHeight(300);
        rec.setFill(Color.RED);
        rec.setStrokeWidth(5);
        rec.setStroke(Color.BLACK);


        Circle cir = new Circle();
        cir.setRadius(100);
        cir.setFill(Color.AQUA);
        cir.setCenterX(400);
        cir.setCenterY(400);
        
        Polygon tri = new Polygon();
        tri.getPoints().setAll(
            500.0,150.0,
            500.0,400.0,
            700.0,400.0
        );
        tri.setFill(Color.GREEN);

        Image img = new Image("../bin/alarm.png");
        ImageView imgview = new ImageView(img);
        imgview.setX(600);
        imgview.setY(200);

        root.getChildren().add(imgview);
        root.getChildren().add(tri);
        root.getChildren().add(cir);
        root.getChildren().add(rec);
        root.getChildren().add(text);
        stage.show();
    }
}