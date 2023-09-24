using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;


public partial class passwordchange : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;
    void myPass()
    {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|login.mdf;Integrated Security=True");
        con.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        myPass();
        string pass = Application["pass"].ToString();
        if (TextBox1.Text == pass && Application["email"] != null)
        {
            Response.Write("pass");
            Response.Write(Application["email"]);
            cmd = new SqlCommand("update login_table set pass = '" + TextBox1.Text + "' where email = '" + Application["email"].ToString() + "' ",con);
            Response.Write("Successfully change password");
            cmd.ExecuteNonQuery();
            con.Close();

        }
        else {
            Response.Write("Please Enter valid email id");
        }
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
            Response.Redirect("loginform.aspx");

    }
}