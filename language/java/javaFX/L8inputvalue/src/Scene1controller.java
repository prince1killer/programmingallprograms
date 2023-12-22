//import java.awt.TextField;
//import java.io.IOException;
//
//import javafx.event.ActionEvent;
//import javafx.fxml.FXML;
//import javafx.fxml.FXMLLoader;
//import javafx.scene.Node;
//import javafx.scene.Parent;
//import javafx.scene.Scene;
//import javafx.stage.Stage;
//
//public class Scene1controller {
//	
//	@FXML
//	TextField nameTextFild;
//	
//	private Stage stage;
//	private Parent root;
//	private Scene scene;
//	public void login(ActionEvent e)throws IOException {
//		String username = nameTextFild.getText();
//		FXMLLoader loader = new FXMLLoader(getClass().getResource("scene2.fxml"));
//		Scene2controller scene2Controller = loader.getController();
//		scene2Controller.displayName(username);
//		stage = (Stage)((Node)e.getSource()).getScene().getWindow();
//		scene = new Scene(root);
//		stage.setScene(scene);
//		stage.show();
//	}
//}
