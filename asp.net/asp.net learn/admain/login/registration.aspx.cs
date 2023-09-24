using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data;
using System.Data.SqlClient;
using System.Data.Common;

public partial class login_registration : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    DataAdapter da;
    SqlDataAdapter ds;


    void myReg() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|product_data.mdf;Integrated Security=True");
        con.Open();
    }


    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btn_Click(object sender, EventArgs e)
    {
        myReg();
        cmd = new SqlCommand("insert into reg values(@fn,@ln,@img,@unam,@email,@pass)",con);
        cmd.Parameters.AddWithValue("@fn",fname.Text);
        cmd.Parameters.AddWithValue("@ln", lname.Text);
        String createfolder = Server.MapPath(String.Format("../Image/{0}/",uname.Text));
        if (!Directory.Exists(createfolder))
        {
            Directory.CreateDirectory(createfolder);
            Label1.Text = "folder " + createfolder + " Created successfully";
        }
        else {
            Label1.Text = "please give correct path";
        }
            if ((FileUpload1.PostedFile != null) && (FileUpload1.PostedFile.ContentLength > 0)) { 
            string fn = Path.GetFileName(FileUpload1.PostedFile.FileName);
            string SaveLocation = Server.MapPath("../Image/"+uname.Text+"/")+fn;
            cmd.Parameters.AddWithValue("@img",fn);
            FileUpload1.PostedFile.SaveAs(SaveLocation);
            Image1.ImageUrl = "../Image/" + fn;
            Response.Write("<script>alert('successfully install');</script>");
        }
        else{
            Response.Write("<script>alert('please upload img');</script>");
        }
        cmd.Parameters.AddWithValue("@unam",uname.Text);
        cmd.Parameters.AddWithValue("@email",emailid.Text);
        if (pass1.Text == pass2.Text)
        {
            cmd.Parameters.AddWithValue("@pass",pass1.Text);
        }
        else {
            Response.Write("< script > alert('please write same password');</ script >");
            pass1.Text = "";
            pass2.Text = "";
        }

        

        cmd.ExecuteNonQuery();
        con.Close();
        Response.Redirect("");
    }

    protected void FileUpload1_Load(object sender, EventArgs e)
    {
    }
}