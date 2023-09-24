using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
public partial class signup : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void myData() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|login.mdf;Integrated Security=True");    
        con.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        myData();
        cmd = new SqlCommand("select * from login_table where email ='"+TextBox1.Text+"' or nuser='"+TextBox1.Text+"' and pass='"+TextBox2.Text+"'",con);
       da = new SqlDataAdapter(cmd);
       ds = new DataSet();
        da.Fill(ds);
        if (ds.Tables[0].Rows.Count>0)
        {
            Session["email"] = TextBox1.Text;
            Label1.Text = "Successfully login";
            Response.Redirect("welcome.aspx");
        }
        else
        {
            Label1.Text = "Your usename or password is wrong";
        }
       // GridView1.DataSource = ds;
        //GridView1.DataBind();
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        Response.Redirect("forgotpassword.aspx");
    }
}