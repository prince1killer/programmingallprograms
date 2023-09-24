using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class loginform : System.Web.UI.Page
{

    SqlCommand cmd;
    SqlConnection con;
    SqlDataAdapter da;
    DataSet ds;
    void myLogindata() {
        con =new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|login.mdf;Integrated Security=True");
        con.Open();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        myLogindata();
        cmd = new SqlCommand("insert into login_table values(@na,@us,@em,@ps)",con);
        cmd.Parameters.AddWithValue("@na",TextBox1.Text);
        cmd.Parameters.AddWithValue("@us",TextBox2.Text);
        cmd.Parameters.AddWithValue("@em",TextBox3.Text);
        if (TextBox4.Text == TextBox5.Text)
        {
            cmd.Parameters.AddWithValue("@ps", TextBox4.Text);
        }
        else {
            Response.Write("this is plese enter same password");
        }
        cmd.ExecuteNonQuery();
        con.Close();
            
           
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        myLogindata();
        cmd = new SqlCommand("select * from login_table",con);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);
        GridView1.DataSource= ds;
        GridView1.DataBind();
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        Response.Redirect("signup.aspx");
    }
}