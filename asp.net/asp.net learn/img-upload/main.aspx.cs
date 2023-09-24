using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class main : System.Web.UI.Page
{

    SqlConnection con;
    SqlCommand cmd;

    void myImage() { 
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|image-database.mdf;Integrated Security=True");
        con.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        if ((FileUpload1.PostedFile != null) && (FileUpload1.PostedFile.ContentLength > 0))
        {
            string fn = System.IO.Path.GetFileName(FileUpload1.PostedFile.FileName);
            string SaveLocation = Server.MapPath("~/image/") + fn;
            myImage();
            cmd = new SqlCommand("insert into img_table values(@pn,@pr,@img)", con);
            cmd.Parameters.AddWithValue("@pn", TextBox1.Text);
            cmd.Parameters.AddWithValue("@pr", TextBox2.Text);
            try
            {
                FileUpload1.PostedFile.SaveAs(SaveLocation);
                Label1.Text = "The file has been uploaded.";
                Image1.ImageUrl = "~/image/"+fn;
                cmd.Parameters.AddWithValue("@img", FileUpload1.PostedFile.FileName);
            }
            catch (Exception ex)
            {
                Label1.Text = "Error: " + ex.Message;
            }
        }
        else
        {
            Label1.Text = "Please select a file to upload.";
        }
        cmd.ExecuteNonQuery();
        con.Close();
    }
}