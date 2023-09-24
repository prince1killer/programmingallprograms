using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class signin_singin : System.Web.UI.Page
{

    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void myLogin() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|product_data.mdf;Integrated Security=True");
        con.Open(); 
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Label1.Text = "";
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
    }

    protected void Button1_Click1(object sender, EventArgs e)
    {
        myLogin();
        cmd =new  SqlCommand("select * from reg where username = '"+TextBox1.Text+"' or email = '"+TextBox1.Text+"' and password= '"+TextBox2.Text+"' ",con);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);
        if (ds.Tables[0].Rows.Count > 0)
        {
            Label1.Text = "Login succesfully";
        }
        else {
            Label1.Text = "Your user name and password are wrong";
        }
        cmd.ExecuteNonQuery();
        con.Close();

    }
}